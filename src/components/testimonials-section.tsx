"use client"

import { StarIcon } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const brands = [
  {
    name: "BKNIL",
    description: "AI 기반 백링크 사이트 자동 생성 플랫폼으로, 간편한 콘텐츠 작성과 자동 배포를 통해 SEO 성과를 극대화합니다.",
    logo: "B",
    features: ["AI 자동화", "SEO 최적화", "백링크 구축", "성과 분석"],
    link: "#"
  },
  {
    name: "LUDGI Labs",
    description: "최신 AI 기술과 클라우드 솔루션을 연구하고, 실무에 적용 가능한 혁신적인 제품을 개발합니다.",
    logo: "L",
    features: ["AI 연구", "오픈소스 기여", "기술 블로그", "개발자 도구"],
    link: "#"
  }
]

const stats = [
  { number: "50+", label: "완료 프로젝트" },
  { number: "98%", label: "고객 만족도" },
  { number: "30+", label: "기술 스택" },
  { number: "15+", label: "팀 멤버" }
]

export function TestimonialsSection() {
  return (
    <section id="brands" className="py-20 sm:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Our Brands
            <br />
            <span className="text-primary">주요 서비스 브랜드</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            럿지가 운영하는 혁신적인 서비스 플랫폼을 소개합니다
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto mb-16 sm:mb-20">
          {brands.map((brand, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-2">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-2xl">{brand.logo}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{brand.name}</h3>
                  </div>
                </div>
                
                <p className="text-base leading-relaxed text-muted-foreground">
                  {brand.description}
                </p>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {brand.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <a 
                  href={brand.link}
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                >
                  방문하기 →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
