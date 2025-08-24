"use client"

import { CheckIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const solutions = [
  {
    name: "스타트업 패키지",
    price: "상담 후 결정",
    period: "",
    description: "MVP 개발부터 스케일업까지 원스톱 솔루션",
    badge: "Most Popular",
    features: [
      "기술 스택 선정 컨설팅",
      "MVP 빠른 구축 (4-8주)",
      "개발팀 구성 지원",
      "투자 유치 자료 준비",
      "3개월 무료 유지보수"
    ]
  },
  {
    name: "기업 솔루션",
    price: "프로젝트별",
    period: "견적",
    description: "대기업을 위한 맞춤형 기술 솔루션",
    badge: "Enterprise",
    features: [
      "전담팀 구성 (3-10명)",
      "애자일 방법론 적용",
      "품질 보증 (QA)",
      "장기 유지보수 지원",
      "24/7 기술 지원",
      "온사이트 컨설팅",
      "레거시 시스템 마이그레이션"
    ]
  },
  {
    name: "SaaS 플랫폼",
    price: "월 구독",
    period: "서비스",
    description: "BKNIL 등 자체 개발 SaaS 플랫폼 이용",
    badge: "Best Value",
    features: [
      "AI 기반 백링크 자동 생성",
      "SEO 최적화 도구",
      "성과 분석 대시보드",
      "무제한 사이트 생성",
      "API 연동 지원",
      "커스텀 도메인 지원"
    ]
  }
]

export function PricingSection() {
  return (
    <section id="solutions" className="py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            맞춤형 솔루션으로
            <br />
            <span className="text-primary">비즈니스 성장을 가속화하세요</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            스타트업부터 대기업까지, 각 단계에 맞는 최적의 기술 솔루션을 제공합니다.
          </p>
        </div>

        {/* Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {solutions.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative group hover:shadow-xl transition-all duration-300 ${
                plan.badge === "Most Popular" ? "ring-2 ring-primary scale-105" : "hover:-translate-y-1"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge variant={plan.badge === "Most Popular" ? "default" : "secondary"}>
                    {plan.badge}
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-2xl sm:text-3xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground"> {plan.period}</span>}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckIcon className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={plan.badge === "Most Popular" ? "default" : "outline"}
                  size="lg"
                  asChild
                >
                  <a href="#contact">
                    {plan.name === "기업 솔루션" ? "견적 문의" : "상담 신청"}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-muted-foreground mb-4">
            모든 상담은 무료로 진행됩니다. 프로젝트 규모와 요구사항에 따라 맞춤 견적을 제공합니다.
          </p>
          <Button variant="link" className="text-primary" asChild>
            <a href="tel:010-3006-9310">지금 바로 상담받기 010-3006-9310 →</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
