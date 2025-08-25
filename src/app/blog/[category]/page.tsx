import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostsByCategory } from '@/lib/posts-loader';
import { categories, getCategoryInfo } from '@/data/categories';
import { generateCategorySEO, generateBreadcrumbJsonLd } from '@/lib/seo';
import { BlogPost, CategoryType } from '@/types/blog';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.id,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const categoryInfo = getCategoryInfo(resolvedParams.category);
  if (!categoryInfo) return { title: 'Category Not Found' };
  
  const posts = await getPostsByCategory(resolvedParams.category as CategoryType);
  return generateCategorySEO(categoryInfo, posts.length);
}

function PostCard({ post }: { post: BlogPost }) {
  
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      <Link href={`/blog/${post.category}/${post.slug}`} className="block group">
        {/* 이미지 표시 (첫 번째 이미지가 있는 경우) */}
        {post.images?.[0] && (
          <div className="relative overflow-hidden rounded-t-lg h-48">
            <img 
              src={post.images[0].url} 
              alt={post.images[0].alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              loading="lazy"
            />
            {post.images[0].caption && (
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                {post.images[0].caption}
              </div>
            )}
          </div>
        )}
        
        <div className="p-6">
          {/* 메타 정보 */}
          <div className="flex items-center gap-2 mb-3">
            <time className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(post.publishDate).toLocaleDateString('ko-KR')}
            </time>
            <span className="text-gray-400">•</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {post.readingTime}분 읽기
            </span>
            {post.featured && (
              <>
                <span className="text-gray-400">•</span>
                <span className="text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded-full">
                  추천
                </span>
              </>
            )}
          </div>
          
          {/* 제목 */}
          <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-3">
            {post.title}
          </h2>
          
          {/* 요약 */}
          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4">
            {post.excerpt}
          </p>
          
          {/* 태그 */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 4).map(tag => (
                <span 
                  key={tag}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </article>
  );
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const categoryInfo = getCategoryInfo(resolvedParams.category);
  
  if (!categoryInfo) {
    notFound();
  }

  const posts = await getPostsByCategory(resolvedParams.category as CategoryType);

  // 브레드크럼 데이터
  const breadcrumbItems = [
    { name: '홈', url: 'https://www.heudy.shop' },
    { name: '블로그', url: 'https://www.heudy.shop/blog' },
    { name: categoryInfo.name, url: `https://www.heudy.shop/blog/${categoryInfo.id}` }
  ];
  const breadcrumbJsonLd = generateBreadcrumbJsonLd(breadcrumbItems);

  return (
    <>
      {/* JSON-LD 구조화 데이터 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8">
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
            <span className="text-gray-900 dark:text-white">{categoryInfo.name}</span>
          </nav>

          {/* 카테고리 헤더 */}
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-3 mb-4">
              <span className="text-4xl">{categoryInfo.icon}</span>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                {categoryInfo.name}
              </h1>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-4">
              {categoryInfo.description}
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {posts.length}개의 포스트
            </div>
          </div>

          {/* 포스트 목록 */}
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📝</div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                아직 포스트가 없습니다
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {categoryInfo.name} 카테고리에 첫 번째 포스트를 기대해주세요!
              </p>
              <Link 
                href="/blog" 
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                다른 포스트 보기
              </Link>
            </div>
          )}

          {/* 다른 카테고리 */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              다른 카테고리도 둘러보세요
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {categories
                .filter(cat => cat.id !== categoryInfo.id)
                .map(category => (
                  <Link
                    key={category.id}
                    href={`/blog/${category.id}`}
                    className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow duration-200 group"
                  >
                    <span className="text-2xl mb-2">{category.icon}</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-center">
                      {category.name}
                    </span>
                  </Link>
                ))
              }
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
