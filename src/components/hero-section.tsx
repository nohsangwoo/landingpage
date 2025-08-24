"use client"

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
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-foreground leading-none mb-8 sm:mb-12">
            INTELLIGENT
            <br />
            ANALYTICS,
            <br />
            <span className="text-primary">FINALLY.</span>
          </h1>
          
          {/* CTA Button */}
          <Button size="lg" className="text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 h-auto">
            Try it out
          </Button>
        </div>
      </div>
    </section>
  )
}
