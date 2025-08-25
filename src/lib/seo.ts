import { Metadata } from 'next';
import { BlogPost, CategoryInfo } from '@/types/blog';

const SITE_CONFIG = {
  name: '주식회사 럿지',
  description: 'BKNIL 백링크 자동화 플랫폼과 AI 솔루션을 제공하는 주식회사 럿지의 공식 블로그',
  url: 'https://www.heudy.shop',
  ogImage: 'https://www.heudy.shop/og-image.png',
  twitter: '@ludgi_ai'
};

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonicalUrl?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
}

export function generateSEO(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    ogImage = SITE_CONFIG.ogImage,
    canonicalUrl,
    type = 'website',
    publishedTime,
    modifiedTime,
    author,
    tags = []
  } = config;

  const fullTitle = title.includes(SITE_CONFIG.name) ? title : `${title} | ${SITE_CONFIG.name}`;

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: author ? [{ name: author }] : [{ name: SITE_CONFIG.name }],
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl || SITE_CONFIG.url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      locale: 'ko_KR',
      type: type === 'article' ? 'article' : 'website',
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime })
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: SITE_CONFIG.twitter
    },
    alternates: {
      canonical: canonicalUrl
    },
    other: {
      ...(tags.length > 0 && { 'article:tag': tags.join(', ') })
    }
  };

  return metadata;
}

// 블로그 포스트용 SEO 메타데이터 생성
export function generatePostSEO(post: BlogPost): Metadata {
  const canonicalUrl = `${SITE_CONFIG.url}/blog/${post.category}/${post.slug}`;
  
  return generateSEO({
    title: post.seo.title || post.title,
    description: post.seo.description || post.excerpt,
    keywords: [...(post.seo.keywords || []), ...post.tags],
    ogImage: post.seo.ogImage,
    canonicalUrl,
    type: 'article',
    publishedTime: post.publishDate,
    author: post.author,
    tags: post.tags
  });
}

// 카테고리 페이지용 SEO 메타데이터 생성
export function generateCategorySEO(category: CategoryInfo, postCount: number): Metadata {
  const canonicalUrl = `${SITE_CONFIG.url}/blog/${category.id}`;
  
  return generateSEO({
    title: `${category.name} - ${SITE_CONFIG.name} 블로그`,
    description: `${category.description}. ${postCount}개의 포스트가 있습니다.`,
    keywords: [category.name, '블로그', SITE_CONFIG.name],
    canonicalUrl
  });
}

// 블로그 메인 페이지용 SEO 메타데이터 생성
export function generateBlogMainSEO(totalPosts: number): Metadata {
  const canonicalUrl = `${SITE_CONFIG.url}/blog`;
  
  return generateSEO({
    title: `블로그 - ${SITE_CONFIG.name}`,
    description: `${SITE_CONFIG.description}. ${totalPosts}개의 포스트를 확인하세요.`,
    keywords: ['블로그', 'BKNIL', '백링크', 'AI', 'SEO', SITE_CONFIG.name],
    canonicalUrl
  });
}

// JSON-LD 구조화 데이터 생성
export function generateBlogPostJsonLd(post: BlogPost) {
  const canonicalUrl = `${SITE_CONFIG.url}/blog/${post.category}/${post.slug}`;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.seo.ogImage || SITE_CONFIG.ogImage,
    author: {
      '@type': 'Person',
      name: post.author
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/logo.png`
      }
    },
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl
    },
    url: canonicalUrl,
    keywords: post.tags.join(', '),
    wordCount: post.content.length,
    timeRequired: `PT${post.readingTime}M`
  };
}

// 조직 정보 JSON-LD
export function generateOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    description: SITE_CONFIG.description,
    sameAs: [
      // 소셜 미디어 링크들 추가 가능
    ]
  };
}

// 웹사이트 정보 JSON-LD
export function generateWebsiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
}

// 브레드크럼 JSON-LD
export function generateBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}
