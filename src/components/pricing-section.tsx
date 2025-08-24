"use client"

import { CheckIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const pricingPlans = [
  {
    name: "Starter",
    price: "29",
    period: "월",
    description: "개인 사용자와 소규모 팀을 위한 기본 플랜",
    badge: null,
    features: [
      "최대 3개 프로젝트",
      "기본 분석 도구",
      "월 10,000 데이터 포인트",
      "이메일 지원",
      "기본 대시보드"
    ]
  },
  {
    name: "Professional",
    price: "99",
    period: "월",
    description: "성장하는 비즈니스를 위한 고급 분석 솔루션",
    badge: "Most Popular",
    features: [
      "무제한 프로젝트",
      "고급 AI 분석",
      "월 100,000 데이터 포인트",
      "우선 지원",
      "커스텀 대시보드",
      "API 액세스",
      "팀 협업 도구"
    ]
  },
  {
    name: "Enterprise",
    price: "299",
    period: "월",
    description: "대기업을 위한 완전한 엔터프라이즈 솔루션",
    badge: "Best Value",
    features: [
      "무제한 프로젝트",
      "엔터프라이즈 AI 분석",
      "무제한 데이터 포인트",
      "24/7 전담 지원",
      "화이트라벨 솔루션",
      "고급 보안 기능",
      "온프레미스 배포",
      "커스텀 통합"
    ]
  }
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Simple, Transparent
            <br />
            <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            비즈니스 규모에 맞는 플랜을 선택하고 즉시 스마트 분석을 시작하세요.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
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
                  <span className="text-4xl font-bold">₩{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
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
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-muted-foreground mb-4">
            모든 플랜에 14일 무료 체험이 포함되어 있습니다. 신용카드는 필요하지 않습니다.
          </p>
          <Button variant="link" className="text-primary">
            자세한 기능 비교 보기 →
          </Button>
        </div>
      </div>
    </section>
  )
}
