"use client"

import { ArrowRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-32 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA Content */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary-foreground mb-6">
            프로젝트를 시작할
            <br />
            준비가 되셨나요?
          </h2>
          
          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8 sm:mb-12 max-w-2xl mx-auto">
            럿지의 전문가들이 귀사의 비즈니스 성장을 위한 최적의 기술 솔루션을 제안해드립니다. 
            지금 바로 문의하시고 무료 컨설팅을 받아보세요.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-base px-8 py-4 h-auto min-w-[200px] group"
              asChild
            >
              <a href="tel:010-3006-9310">
                무료 컨설팅 신청
                <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="text-base px-8 py-4 h-auto min-w-[200px] bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <a href="mailto:milli@molluhub.com">이메일 문의</a>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-primary-foreground/20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-primary-foreground/80">
              <div>
                <h3 className="font-semibold text-primary-foreground mb-2">전화 문의</h3>
                <p>010-3006-9310</p>
                <p>02-931-9310</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary-foreground mb-2">이메일 문의</h3>
                <p>milli@molluhub.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
