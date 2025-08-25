import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getRelatedPosts, getAllPostPaths } from '@/lib/posts-loader';
import { getCategoryInfo } from '@/data/categories';
import { generatePostSEO, generateBlogPostJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo';
import { CategoryType } from '@/types/blog';

interface PostPageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return await getAllPostPaths();
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.category as CategoryType, resolvedParams.slug);
  if (!post) return { title: 'Post Not Found' };
  
  return generatePostSEO(post);
}

function TableOfContents({ content }: { content: string }) {
  // HTML에서 헤딩 태그 추출하여 목차 생성
  const headingRegex = /<h([2-3])[^>]*>(.*?)<\/h[2-3]>/gi;
  const headings: { level: number; text: string; id: string }[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = parseInt(match[1]);
    const text = match[2].replace(/<[^>]*>/g, ''); // HTML 태그 제거
    const id = text.toLowerCase().replace(/[^a-z0-9가-힣]/g, '-').replace(/-+/g, '-');
    headings.push({ level, text, id });
  }

  if (headings.length === 0) return null;

  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
        📋 목차
      </h3>
      <nav>
        <ul className="space-y-2">
          {headings.map((heading, index) => (
            <li key={index} className={heading.level === 3 ? 'ml-4' : ''}>
              <a
                href={`#${heading.id}`}
                className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

function PostContent({ content }: { content: string }) {
  // 헤딩에 ID 추가 및 이미지 최적화
  const processedContent = content
    // 헤딩에 ID 추가
    .replace(/<h([2-3])([^>]*)>(.*?)<\/h[2-3]>/gi, (match, level, attrs, text) => {
      const cleanText = text.replace(/<[^>]*>/g, '');
      const id = cleanText.toLowerCase().replace(/[^a-z0-9가-힣]/g, '-').replace(/-+/g, '-');
      return `<h${level}${attrs} id="${id}">${text}</h${level}>`;
    })
    // 마크다운 이미지를 HTML img 태그로 변환
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="w-full rounded-lg shadow-lg my-8" loading="lazy" />');

  return (
    <div 
      className="prose"
      dangerouslySetInnerHTML={{ __html: processedContent }}
    />
  );
}

function PostImages({ images }: { images: { url: string; alt: string; caption?: string }[] }) {
  if (!images || images.length === 0) return null;

  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
        🖼️ 관련 이미지
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            {image.caption && (
              <div className="p-3">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {image.caption}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ReferenceLinks({ links }: { links: { title: string; url: string; description?: string }[] }) {
  if (!links || links.length === 0) return null;

  return (
    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-8">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
        🔗 참고 링크
      </h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3 bg-white dark:bg-gray-800 rounded border hover:shadow-md transition-shadow"
            >
              <div className="font-medium text-blue-600 dark:text-blue-400 hover:underline">
                {link.title} ↗
              </div>
              {link.description && (
                <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {link.description}
                </div>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RelatedPosts({ posts }: { posts: { id: string; title: string; excerpt: string; category: string; slug: string }[] }) {
  if (!posts || posts.length === 0) return null;

  return (
    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        📚 관련 포스트
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map(post => {
          const categoryInfo = getCategoryInfo(post.category);
          return (
            <Link
              key={post.id}
              href={`/blog/${post.category}/${post.slug}`}
              className="block bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow group"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm">
                  {categoryInfo?.icon} {categoryInfo?.name}
                </span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                {post.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-2">
                {post.excerpt}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default async function PostPage({ params }: PostPageProps) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.category as CategoryType, resolvedParams.slug);
  
  if (!post) {
    notFound();
  }

  const [relatedPosts] = await Promise.all([
    getRelatedPosts(post, 3)
  ]);

  const categoryInfo = getCategoryInfo(post.category);

  // 브레드크럼 데이터
  const breadcrumbItems = [
    { name: '홈', url: 'https://www.heudy.shop' },
    { name: '블로그', url: 'https://www.heudy.shop/blog' },
    { name: categoryInfo?.name || post.category, url: `https://www.heudy.shop/blog/${post.category}` },
    { name: post.title, url: `https://www.heudy.shop/blog/${post.category}/${post.slug}` }
  ];

  // 구조화 데이터
  const postJsonLd = generateBlogPostJsonLd(post);
  const breadcrumbJsonLd = generateBreadcrumbJsonLd(breadcrumbItems);

  return (
    <>
      {/* JSON-LD 구조화 데이터 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <article className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* 브레드크럼 */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
              홈
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400">
              블로그
            </Link>
            <span>/</span>
            <Link href={`/blog/${post.category}`} className="hover:text-blue-600 dark:hover:text-blue-400">
              {categoryInfo?.name}
            </Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white truncate">{post.title}</span>
          </nav>

          {/* 포스트 헤더 */}
          <header className="mb-8">
            {/* 카테고리 */}
            <div className="flex items-center gap-2 mb-4">
              <Link
                href={`/blog/${post.category}`}
                className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
              >
                {categoryInfo?.icon} {categoryInfo?.name}
              </Link>
              {post.featured && (
                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">
                  ⭐ 추천
                </span>
              )}
            </div>

            {/* 제목 */}
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {post.title}
            </h1>

            {/* 요약 */}
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              {post.excerpt}
            </p>

            {/* 메타 정보 */}
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
              <div className="flex items-center gap-1">
                <span>✍️</span>
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <span>📅</span>
                <time dateTime={post.publishDate}>
                  {new Date(post.publishDate).toLocaleDateString('ko-KR')}
                </time>
              </div>
              <div className="flex items-center gap-1">
                <span>⏱️</span>
                <span>{post.readingTime}분 읽기</span>
              </div>
            </div>

            {/* 태그 */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* 목차 */}
          <TableOfContents content={post.content} />

          {/* 포스트 이미지들 */}
          <PostImages images={post.images || []} />

          {/* 포스트 내용 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm mb-8">
            <PostContent content={post.content} />
          </div>

          {/* 참고 링크 */}
          <ReferenceLinks links={post.referenceLinks || []} />

          {/* 관련 포스트 */}
          <RelatedPosts posts={relatedPosts} />
        </div>
      </article>
    </>
  );
}
