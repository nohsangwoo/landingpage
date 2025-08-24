"use client"

import { ArrowRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA Content */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary-foreground mb-6">
            Ready to Transform Your
            <br />
            Data into Insights?
          </h2>
          
          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8 sm:mb-12 max-w-2xl mx-auto">
            지금 바로 StatsAI를 시작하고 14일 무료 체험으로 AI 분석의 힘을 경험해보세요. 
            신용카드는 필요하지 않습니다.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-base px-8 py-4 h-auto min-w-[200px] group"
            >
              Start Free Trial
              <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="text-base px-8 py-4 h-auto min-w-[200px] bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            >
              Schedule Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/60 text-sm mb-6">
              Trusted by companies worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-60">
              {/* Placeholder for company logos */}
              <div className="h-8 w-24 bg-primary-foreground/20 rounded" />
              <div className="h-8 w-20 bg-primary-foreground/20 rounded" />
              <div className="h-8 w-28 bg-primary-foreground/20 rounded" />
              <div className="h-8 w-22 bg-primary-foreground/20 rounded" />
              <div className="h-8 w-26 bg-primary-foreground/20 rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
