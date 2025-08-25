import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.heudy.shop'),
  title: {
    default: "주식회사 럿지 - 혁신적인 기술 솔루션 전문기업",
    template: "%s | 주식회사 럿지"
  },
  description: "SEO & 마케팅 자동화, 풀스택 개발, 클라우드 & DevOps, SaaS 플랫폼 구축 등 검증된 기술 솔루션을 제공합니다.",
  keywords: ["아웃소싱", "인프런", "외주 개발사", "럿지", "주식회사 럿지", "SEO", "마케팅 자동화", "풀스택 개발", "클라우드", "DevOps", "SaaS", "AI", "백링크", "LUDGI", "스타트업", "컨설팅", "웹 개발", "앱 개발", "기술 솔루션"],
  authors: [{ name: "주식회사 럿지", url: "https://www.heudy.shop" }],
  creator: "주식회사 럿지",
  publisher: "주식회사 럿지",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://www.heudy.shop/",
    siteName: "주식회사 럿지",
    title: "주식회사 럿지 - 혁신적인 기술 솔루션 전문기업",
    description: "SEO & 마케팅 자동화, 풀스택 개발, 클라우드 & DevOps, SaaS 플랫폼 구축 등 검증된 기술 솔루션을 제공합니다.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "주식회사 럿지 - 혁신적인 기술 솔루션 전문기업",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://x.com/bknil_offitial",
    creator: "https://x.com/bknil_offitial",
    title: "주식회사 럿지 - 혁신적인 기술 솔루션 전문기업",
    description: "SEO & 마케팅 자동화, 풀스택 개발, 클라우드 & DevOps, SaaS 플랫폼 구축 등 검증된 기술 솔루션을 제공합니다.",
    images: ["/logo.png"],
  },
  verification: {
    other: {
      "naver-site-verification": process.env.NAVER_SITE_VERIFICATION || "",
    },
  },
  alternates: {
    canonical: "https://www.heudy.shop/",
    languages: {
      'ko-KR': 'https://www.heudy.shop/',
    },
  },
  category: "Technology",
  classification: "Business Technology Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        {/* 지역 정보 */}
        <meta name="geo.region" content="KR-11" />
        <meta name="geo.placename" content="인천" />
        <meta name="geo.position" content="37.399561;126.629763" />
        
        {/* 추가 메타 태그 */}
        <meta name="theme-color" content="#0F172A" />
        <meta name="msapplication-TileColor" content="#0F172A" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="주식회사 럿지" />
        
        {/* 아이콘 */}
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* 구조화된 데이터 - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "주식회사 럿지",
              "alternateName": "LUDGI Inc.",
              "url": "https://www.heudy.shop/",
              "description": "SEO & 마케팅 자동화, 풀스택 개발, 클라우드 & DevOps, SaaS 플랫폼 구축 등 검증된 기술 솔루션을 제공합니다.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://www.heudy.shop/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        
        {/* 구조화된 데이터 - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "주식회사 럿지",
              "alternateName": "LUDGI Inc.",
              "url": "https://www.heudy.shop/",
              "logo": "https://www.heudy.shop/logo.png",
              "image": "https://www.heudy.shop/logo.png",
              "description": "SEO & 마케팅 자동화, 풀스택 개발, 클라우드 & DevOps, SaaS 플랫폼 구축, 스타트업 컨설팅, 기업 아웃소싱 등 검증된 기술 솔루션을 제공합니다.",
              "foundingDate": "2024",
              "founder": {
                "@type": "Person",
                "name": "노상우"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "인천광역시 연수구 인천타워대로 323, 에이동 20층 2001,2002,2003,2004,2005,2006호 A - 317(송도동, 송도 센트로드)",
                "addressLocality": "인천",
                "addressRegion": "인천광역시",
                "postalCode": "22606",
                "addressCountry": "KR"
              },
              "telephone": "+82-2-931-9310",
              "email": "milli@molluhub.com",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+82-2-931-9310",
                "contactType": "customer service",
                "email": "milli@molluhub.com",
                "availableLanguage": ["Korean", "English"]
              },
              "sameAs": [
                "https://www.youtube.com/@bknil",
                "https://x.com/bknil_offitial"
              ],
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:00",
                "closes": "21:00"
              },
              "areaServed": {
                "@type": "Country",
                "name": "South Korea"
              },
              "knowsAbout": ["SEO", "마케팅 자동화", "풀스택 개발", "클라우드", "DevOps", "SaaS", "AI", "백링크", "스타트업 컨설팅"],
              "slogan": "혁신적인 기술 솔루션으로 비즈니스의 미래를 만들어갑니다"
            })
          }}
        />
        
        {/* 구조화된 데이터 - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "주식회사 럿지",
              "image": "https://www.heudy.shop/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "인천광역시 연수구 인천타워대로 323, 에이동 20층 2001,2002,2003,2004,2005,2006호 A - 317(송도동, 송도 센트로드)",
                "addressLocality": "인천",
                "addressRegion": "인천광역시",
                "postalCode": "22606",
                "addressCountry": "KR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 37.399561,
                "longitude": 126.629763
              },
              "url": "https://www.heudy.shop/",
              "telephone": "+82-2-931-9310",
              "email": "milli@molluhub.com",
              "priceRange": "₩₩",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "09:00",
                  "closes": "21:00"
                }
              ],
              "sameAs": [
                "https://www.youtube.com/@bknil",
                "https://x.com/bknil_offitial"
              ]
            })
          }}
        />
        
        {/* 구조화된 데이터 - BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "홈",
                  "item": "https://www.heudy.shop/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "서비스",
                  "item": "https://www.heudy.shop/#services"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "백링크 SEO 최적화 플랫폼",
                  "item": "https://www.heudy.shop/#main-service"
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${notoSansKR.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        </ThemeProvider>
      </body>
    </html>
  );
}
