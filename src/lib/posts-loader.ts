import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { BlogPost, CategoryType, PostStatus } from '@/types/blog';

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

// 읽기 시간 계산 (분)
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200; // 한국어 기준 분당 읽기 속도
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

// 마크다운을 HTML로 변환
async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(html, { sanitize: false })
    .process(markdown);
  return result.toString();
}

// 개별 포스트 파일 파싱
async function parsePostFile(
  filePath: string, 
  category: CategoryType, 
  slug: string
): Promise<BlogPost | null> {
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    // 필수 필드 검증
    if (!data.id || !data.title || !data.publishDate || !data.status) {
      console.warn(`Missing required fields in ${filePath}`);
      return null;
    }

    // HTML 변환
    const htmlContent = await markdownToHtml(content);

    const post: BlogPost = {
      id: data.id,
      title: data.title,
      content: htmlContent,
      excerpt: data.excerpt || content.substring(0, 160) + '...',
      author: data.author || '럿지 AI 팀',
      publishDate: data.publishDate,
      tags: data.tags || [],
      category,
      slug: data.slug || slug,
      featured: data.featured || false,
      seo: {
        title: data.seo?.title,
        description: data.seo?.description,
        keywords: data.seo?.keywords || [],
        ogImage: data.seo?.ogImage
      },
      referenceLinks: data.referenceLinks || [],
      readingTime: data.readingTime || calculateReadingTime(content),
      status: data.status as PostStatus,
      relatedPosts: data.relatedPosts || [],
      images: data.images || []
    };

    return post;
  } catch (error) {
    console.error(`Error parsing post file ${filePath}:`, error);
    return null;
  }
}

// 모든 포스트 로드
export async function getAllPosts(): Promise<BlogPost[]> {
  const allPosts: BlogPost[] = [];
  
  // 카테고리 폴더들 확인
  const categoryDirs = fs.readdirSync(postsDirectory, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name) as CategoryType[];

  for (const category of categoryDirs) {
    const categoryPath = path.join(postsDirectory, category);
    
    if (!fs.existsSync(categoryPath)) continue;

    const files = fs.readdirSync(categoryPath)
      .filter(file => file.endsWith('.md'));

    for (const file of files) {
      const filePath = path.join(categoryPath, file);
      const slug = file.replace(/\.md$/, '');
      
      const post = await parsePostFile(filePath, category, slug);
      if (post) {
        allPosts.push(post);
      }
    }
  }

  // 발행일 기준 최신순 정렬
  return allPosts.sort((a, b) => 
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
}

// 발행된 포스트만 가져오기
export async function getAllPublishedPosts(): Promise<BlogPost[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter(post => post.status === 'published');
}

// 카테고리별 포스트 가져오기
export async function getPostsByCategory(category: CategoryType): Promise<BlogPost[]> {
  const allPosts = await getAllPublishedPosts();
  return allPosts.filter(post => post.category === category);
}

// 개별 포스트 가져오기
export async function getPostBySlug(category: CategoryType, slug: string): Promise<BlogPost | null> {
  const filePath = path.join(postsDirectory, category, `${slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  return await parsePostFile(filePath, category, slug);
}

// 추천 포스트 가져오기
export async function getFeaturedPosts(): Promise<BlogPost[]> {
  const allPosts = await getAllPublishedPosts();
  return allPosts.filter(post => post.featured);
}

// 최근 포스트 가져오기
export async function getRecentPosts(limit: number = 5): Promise<BlogPost[]> {
  const allPosts = await getAllPublishedPosts();
  return allPosts.slice(0, limit);
}

// 관련 포스트 가져오기
export async function getRelatedPosts(currentPost: BlogPost, limit: number = 3): Promise<BlogPost[]> {
  const allPosts = await getAllPublishedPosts();
  
  // 현재 포스트 제외
  const otherPosts = allPosts.filter(post => post.id !== currentPost.id);
  
  // 같은 카테고리 또는 같은 태그를 가진 포스트 우선
  const relatedPosts = otherPosts.filter(post => 
    post.category === currentPost.category ||
    post.tags.some(tag => currentPost.tags.includes(tag))
  );
  
  return relatedPosts.slice(0, limit);
}

// 정적 경로 생성용 (Next.js generateStaticParams)
export async function getAllPostPaths(): Promise<{ category: string; slug: string }[]> {
  const allPosts = await getAllPublishedPosts();
  return allPosts.map(post => ({
    category: post.category,
    slug: post.slug
  }));
}
