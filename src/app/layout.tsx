import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "주식회사 럿지 | 혁신적인 기술 솔루션으로 비즈니스의 미래를 만들어갑니다",
  description: "스타트업부터 대기업까지, SEO 마케팅 자동화, 풀스택 개발, 클라우드 DevOps, SaaS 플랫폼 구축 등 각 비즈니스 단계에 맞는 최적의 기술 솔루션을 제공합니다.",
  keywords: "SEO, 마케팅 자동화, 풀스택 개발, 클라우드, DevOps, SaaS, AI, 백링크, 럿지, LUDGI",
  authors: [{ name: "주식회사 럿지", url: "https://ludgi.com" }],
  creator: "주식회사 럿지",
  publisher: "주식회사 럿지",
  openGraph: {
    title: "주식회사 럿지 | 혁신적인 기술 솔루션",
    description: "비즈니스 성장을 위한 토탈 기술 솔루션을 제공합니다",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
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
        </ThemeProvider>
      </body>
    </html>
  );
}
