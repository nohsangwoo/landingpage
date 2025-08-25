export type CategoryType = 'tech' | 'business' | 'news' | 'tutorial' | 'review' | 'lifestyle' | 'daily';

export type PostStatus = 'draft' | 'published' | 'archived';

export interface BlogPost {
  id: string;
  title: string;
  content: string;           // Markdown 형식
  excerpt: string;           // 요약 (120-160자)
  author: string;
  publishDate: string;
  tags: string[];
  category: CategoryType;
  slug: string;              // URL 친화적 ID
  featured: boolean;         // 주요 포스트 여부
  seo: {
    title?: string;          // SEO 제목 (기본: title 사용)
    description?: string;    // SEO 설명 (기본: excerpt 사용)
    keywords?: string[];     // SEO 키워드
    ogImage?: string;        // OG 이미지 URL
  };
  referenceLinks?: {         // 참고 링크 (백링크)
    title: string;
    url: string;
    description?: string;
  }[];
  readingTime: number;       // 예상 읽기 시간 (분)
  status: PostStatus;        // draft | published | archived
  relatedPosts?: string[];   // 관련 포스트 ID
  images?: {                 // 포스트 이미지
    url: string;            // 이미지 URL
    alt: string;            // 대체 텍스트 (접근성)
    caption?: string;       // 이미지 캡션
    prompt?: string;        // AI 이미지 생성 프롬프트
  }[];
}

export interface CategoryInfo {
  id: CategoryType;
  name: string;
  description: string;
  icon: string;
  color: string;
  priority: number;         // 사이트맵에서의 우선순위
  updateFrequency: 'daily' | 'weekly' | 'monthly';
}

export interface BlogMetadata {
  totalPosts: number;
  categories: CategoryInfo[];
  featuredPosts: BlogPost[];
  recentPosts: BlogPost[];
}
