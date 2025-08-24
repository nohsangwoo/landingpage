"use client"

import { BarChart3Icon, BrainCircuitIcon, ShieldCheckIcon, ZapIcon, TrendingUpIcon, DatabaseIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: BrainCircuitIcon,
    title: "AI-Powered Analytics",
    description: "첨단 머신러닝 알고리즘으로 데이터 패턴을 자동으로 분석하고 인사이트를 제공합니다."
  },
  {
    icon: BarChart3Icon,
    title: "Real-time Dashboards",
    description: "실시간으로 업데이트되는 대시보드로 비즈니스 상황을 즉시 파악할 수 있습니다."
  },
  {
    icon: ZapIcon,
    title: "Lightning Fast",
    description: "최적화된 성능으로 대용량 데이터도 빠르게 처리하고 분석 결과를 제공합니다."
  },
  {
    icon: ShieldCheckIcon,
    title: "Enterprise Security",
    description: "엔터프라이즈급 보안으로 고객의 중요한 데이터를 안전하게 보호합니다."
  },
  {
    icon: TrendingUpIcon,
    title: "Predictive Insights",
    description: "과거 데이터를 기반으로 미래 트렌드를 예측하고 비즈니스 전략을 수립합니다."
  },
  {
    icon: DatabaseIcon,
    title: "Multi-source Integration",
    description: "다양한 데이터 소스를 통합하여 종합적인 분석 결과를 제공합니다."
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Powerful Features for
            <br />
            <span className="text-primary">Smart Analytics</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            StatsAI는 최첨단 AI 기술을 활용하여 복잡한 데이터를 쉽게 이해할 수 있는 인사이트로 변환합니다.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
