"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end">
      {/* Interactive Background Placeholder for unicorn.studio */}
      <div 
        id="unicorn-background"
        className="absolute inset-0 -z-10"
        data-label="unicorn-studio-interactive-background"
      >
        {/* Temporary gradient background until unicorn.studio is integrated */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      </div>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24 lg:pb-32">
        <div className="max-w-4xl">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-foreground leading-none mb-6 sm:mb-8">
            혁신적인 기술 솔루션으로
            <br />
            <span className="text-primary">비즈니스의 미래를</span>
            <br />
            만들어갑니다
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl">
            스타트업부터 대기업까지, 각 비즈니스 단계에 맞는 최적의 기술 솔루션을 제공합니다.
            SEO 마케팅 자동화, 풀스택 개발, 클라우드 DevOps까지 토탈 솔루션으로 함께합니다.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Button size="lg" className="text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 h-auto">
              무료 컨설팅 신청
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 h-auto"
              asChild
            >
              <Link href="tel:010-3006-9310">010-3006-9310</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
