"use client"

import { StarIcon } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    content: "StatsAI 덕분에 우리 팀은 데이터 분석에 소요되는 시간을 90% 단축할 수 있었습니다. AI가 제공하는 인사이트는 정말 놀라워요!",
    author: {
      name: "김민수",
      role: "데이터 분석 팀장",
      company: "테크스타트업",
      avatar: "/api/placeholder/40/40",
      initials: "김"
    },
    rating: 5
  },
  {
    content: "복잡한 비즈니스 데이터를 이해하기 쉬운 시각화로 변환해주는 기능이 매우 인상적입니다. 경영진 보고가 훨씬 수월해졌어요.",
    author: {
      name: "이서영",
      role: "마케팅 디렉터",
      company: "글로벌 이커머스",
      avatar: "/api/placeholder/40/40",
      initials: "이"
    },
    rating: 5
  },
  {
    content: "예측 분석 기능으로 매출을 15% 향상시킬 수 있었습니다. StatsAI는 우리 비즈니스에 없어서는 안 될 도구가 되었어요.",
    author: {
      name: "박준호",
      role: "CEO",
      company: "핀테크 스타트업",
      avatar: "/api/placeholder/40/40",
      initials: "박"
    },
    rating: 5
  },
  {
    content: "실시간 대시보드가 정말 유용해요. 언제 어디서든 비즈니스 상황을 한눈에 파악할 수 있어서 의사결정이 빨라졌습니다.",
    author: {
      name: "최유진",
      role: "운영 매니저",
      company: "제조업체",
      avatar: "/api/placeholder/40/40",
      initials: "최"
    },
    rating: 5
  },
  {
    content: "고객 지원팀의 응답이 빠르고 정확해요. 기술적인 문제도 신속하게 해결해주셔서 항상 만족하며 사용하고 있습니다.",
    author: {
      name: "정태현",
      role: "IT 매니저",
      company: "대기업",
      avatar: "/api/placeholder/40/40",
      initials: "정"
    },
    rating: 5
  },
  {
    content: "다양한 데이터 소스를 쉽게 연결할 수 있어서 통합 분석이 가능해졌어요. 이전에는 불가능했던 인사이트를 얻을 수 있습니다.",
    author: {
      name: "한지민",
      role: "비즈니스 애널리스트",
      company: "컨설팅 회사",
      avatar: "/api/placeholder/40/40",
      initials: "한"
    },
    rating: 5
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Trusted by
            <br />
            <span className="text-primary">Industry Leaders</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            전 세계 수천 개의 기업이 StatsAI를 신뢰하고 있습니다.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                {/* Testimonial Content */}
                <blockquote className="text-base leading-relaxed text-foreground">
                  "{testimonial.content}"
                </blockquote>
              </CardHeader>

              <CardContent>
                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.author.avatar} alt={testimonial.author.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.author.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.author.role}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.author.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 sm:mt-20 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">10,000+</div>
            <div className="text-sm text-muted-foreground">활성 사용자</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">업타임</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">기업 고객</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">고객 지원</div>
          </div>
        </div>
      </div>
    </section>
  )
}
