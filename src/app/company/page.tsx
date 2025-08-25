import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "회사소개 - 주식회사 럿지 | 신뢰할 수 있는 기술 파트너",
  description: "주식회사 럿지는 혁신적인 기술 솔루션으로 고객의 비즈니스 성장을 돕는 기술 전문 기업입니다. 법인명: 주식회사 럿지(LUDGI Inc.), 대표자: 노상우, 설립연도: 2024년, 사업자번호: 307-88-03283",
  keywords: ["주식회사 럿지", "LUDGI Inc", "회사소개", "기업정보", "기술 전문 기업", "SEO", "AI", "클라우드", "개발", "노상우", "사업자번호 307-88-03283"],
  openGraph: {
    title: "회사소개 - 주식회사 럿지 | 신뢰할 수 있는 기술 파트너",
    description: "주식회사 럿지는 혁신적인 기술 솔루션으로 고객의 비즈니스 성장을 돕는 기술 전문 기업입니다.",
    url: "https://www.heudy.shop/company",
    type: "website",
  },
  twitter: {
    title: "회사소개 - 주식회사 럿지 | 신뢰할 수 있는 기술 파트너",
    description: "주식회사 럿지는 혁신적인 기술 솔루션으로 고객의 비즈니스 성장을 돕는 기술 전문 기업입니다.",
  },
  alternates: {
    canonical: "https://www.heudy.shop/company",
  },
}

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 sm:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                신뢰할 수 있는
                <br />
                <span className="text-primary">기술 파트너</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                주식회사 럿지는 혁신적인 기술 솔루션으로 고객의 비즈니스 성장을 돕는 기술 전문 기업입니다.
              </p>
            </div>
          </div>
        </section>

        {/* Company Info Section */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16">
                Company Information
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                {/* Basic Info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">기본 정보</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">법인명</span>
                      <span className="font-medium">주식회사 럿지</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">영문명</span>
                      <span className="font-medium">LUDGI Inc.</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">대표자</span>
                      <span className="font-medium">노상우</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">설립연도</span>
                      <span className="font-medium">2024년</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Business Info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">사업자 정보</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">사업자번호</span>
                      <span className="font-medium">307-88-03283</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">DUNS Number</span>
                      <span className="font-medium">963415644</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">주요 서비스</span>
                      <span className="font-medium">기술 컨설팅 & SaaS 플랫폼</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">사업 분야</span>
                      <span className="font-medium">SEO, AI, 클라우드, 개발</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16">
                연락처 정보
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">이메일</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg">
                      <a href="mailto:milli@molluhub.com" className="text-primary hover:underline">
                        milli@molluhub.com
                      </a>
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">전화번호</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-lg">
                      대표번호: 
                      <a href="tel:02-931-9310" className="text-primary hover:underline ml-2">
                        02-931-9310
                      </a>
                    </p>
                    <p className="text-lg">
                      휴대폰: 
                      <a href="tel:010-3006-9310" className="text-primary hover:underline ml-2">
                        010-3006-9310
                      </a>
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="text-xl">주소</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">인천 송도 센트로드</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">완료 프로젝트</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">고객 만족도</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">30+</div>
                  <div className="text-sm text-muted-foreground">기술 스택</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">팀 멤버</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                함께 성장할 준비가 되셨나요?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                럿지의 전문가들이 귀하의 비즈니스에 최적화된 기술 솔루션을 제안해드립니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="tel:010-3006-9310">무료 상담 신청</a>
                </Button>
                                 <Button size="lg" variant="outline" asChild>
                   <Link href="/">홈페이지로 돌아가기</Link>
                 </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
