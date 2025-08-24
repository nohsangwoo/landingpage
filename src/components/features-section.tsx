"use client"

import { SearchIcon, CodeIcon, CloudIcon, BarChart3Icon, RocketIcon, UsersIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: SearchIcon,
    title: "SEO & 마케팅 자동화",
    description: "AI 기반 백링크 생성, 콘텐츠 최적화, 검색 노출 극대화로 온라인 마케팅 성과를 향상시킵니다."
  },
  {
    icon: CodeIcon,
    title: "풀스택 개발",
    description: "React/Next.js, Node.js부터 모바일 앱까지 End-to-End 개발 솔루션을 제공합니다."
  },
  {
    icon: CloudIcon,
    title: "클라우드 & DevOps",
    description: "AWS, GCP 기반 확장 가능한 인프라 구축 및 CI/CD 파이프라인 자동화를 지원합니다."
  },
  {
    icon: BarChart3Icon,
    title: "SaaS 플랫폼 구축",
    description: "멀티테넌시 구조부터 결제 시스템까지 구독 기반 비즈니스 모델을 완벽 구현합니다."
  },
  {
    icon: RocketIcon,
    title: "스타트업 컨설팅",
    description: "MVP 개발부터 스케일업까지 기술 전략 수립과 투자 유치를 지원합니다."
  },
  {
    icon: UsersIcon,
    title: "기업 아웃소싱",
    description: "검증된 개발팀과 애자일 방법론으로 체계적인 프로젝트 관리를 제공합니다."
  }
]

export function FeaturesSection() {
  return (
    <section id="services" className="py-20 sm:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Our Services
            <br />
            <span className="text-primary">비즈니스 성장을 위한 토탈 솔루션</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            스타트업부터 대기업까지, 각 비즈니스 단계에 맞는 최적의 기술 솔루션을 제공합니다
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
