import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPublishedPosts, getFeaturedPosts, getRecentPosts } from '@/lib/posts-loader';
import { categories, getCategoryInfo } from '@/data/categories';
import { generateBlogMainSEO, generateWebsiteJsonLd, generateOrganizationJsonLd } from '@/lib/seo';
import { BlogPost } from '@/types/blog';

export async function generateMetadata(): Promise<Metadata> {
  const allPosts = await getAllPublishedPosts();
  return generateBlogMainSEO(allPosts.length);
}

function PostCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  const categoryInfo = getCategoryInfo(post.category);
  
  return (
    <article className={`group ${featured ? 'col-span-2 row-span-2' : ''}`}>
      <Link href={`/blog/${post.category}/${post.slug}`} className="block">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          {/* 이미지 표시 (Featured 포스트 또는 최근 3개 포스트에만) */}
          {(featured || post.images?.[0]) && post.images?.[0] && (
            <div className={`relative overflow-hidden rounded-t-lg ${featured ? 'h-64' : 'h-48'}`}>
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
            {/* 카테고리 및 메타 정보 */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm">
                {categoryInfo?.icon} {categoryInfo?.name}
              </span>
              <span className="text-gray-400">•</span>
              <time className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(post.publishDate).toLocaleDateString('ko-KR')}
              </time>
              <span className="text-gray-400">•</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {post.readingTime}분 읽기
              </span>
            </div>
            
            {/* 제목 */}
            <h2 className={`font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors ${featured ? 'text-2xl mb-4' : 'text-xl mb-3'}`}>
              {post.title}
            </h2>
            
            {/* 요약 */}
            <p className={`text-gray-600 dark:text-gray-300 line-clamp-3 ${featured ? 'text-base' : 'text-sm'}`}>
              {post.excerpt}
            </p>
            
            {/* 태그 */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.slice(0, 3).map(tag => (
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
        </div>
      </Link>
    </article>
  );
}

function CategoryCard({ category, postCount }: { category: { id: string; name: string; description: string; icon: string }; postCount: number }) {
  return (
    <Link href={`/blog/${category.id}`} className="block group">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl">{category.icon}</span>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {category.name}
          </h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
          {category.description}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {postCount}개의 포스트
        </p>
      </div>
    </Link>
  );
}

export default async function BlogPage() {
  const [allPosts, featuredPosts, recentPosts] = await Promise.all([
    getAllPublishedPosts(),
    getFeaturedPosts(),
    getRecentPosts(6)
  ]);

  // 카테고리별 포스트 수 계산
  const postsByCategory = allPosts.reduce((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // 구조화 데이터
  const websiteJsonLd = generateWebsiteJsonLd();
  const organizationJsonLd = generateOrganizationJsonLd();

  return (
    <>
      {/* JSON-LD 구조화 데이터 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          {/* 헤더 */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              럿지 AI 블로그
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              BKNIL 백링크 자동화 플랫폼과 AI 솔루션에 대한 인사이트, 기술 동향, 그리고 비즈니스 전략을 공유합니다.
            </p>
            <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              총 {allPosts.length}개의 포스트
            </div>
          </div>

          {/* Featured 포스트 섹션 */}
          {featuredPosts.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                ⭐ 추천 포스트
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {featuredPosts.slice(0, 3).map((post, index) => (
                  <PostCard key={post.id} post={post} featured={index === 0} />
                ))}
              </div>
            </section>
          )}

          {/* 카테고리 섹션 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              📚 카테고리
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {categories.map(category => (
                <CategoryCard 
                  key={category.id} 
                  category={category} 
                  postCount={postsByCategory[category.id] || 0}
                />
              ))}
            </div>
          </section>

          {/* 최근 포스트 섹션 */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                📝 최근 포스트
              </h2>
              <Link 
                href="/blog/all" 
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
              >
                전체 보기 →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
