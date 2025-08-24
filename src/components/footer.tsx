"use client"

import Link from "next/link"
import { TwitterIcon, LinkedinIcon, GithubIcon, MailIcon } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const footerLinks = {
  services: [
    { label: "SEO & 마케팅 자동화", href: "#services" },
    { label: "풀스택 개발", href: "#services" },
    { label: "클라우드 & DevOps", href: "#services" },
    { label: "SaaS 플랫폼 구축", href: "#services" },
    { label: "스타트업 컨설팅", href: "#services" }
  ],
  solutions: [
    { label: "스타트업 패키지", href: "#solutions" },
    { label: "기업 솔루션", href: "#solutions" },
    { label: "SaaS 플랫폼", href: "#solutions" },
    { label: "맞춤 개발", href: "#contact" }
  ],
  brands: [
    { label: "BKNIL", href: "#brands" },
    { label: "LUDGI Labs", href: "#brands" },
    { label: "기술 블로그", href: "#" },
    { label: "오픈소스", href: "#" }
  ],
  company: [
    { label: "회사소개", href: "/company" },
    { label: "팀", href: "/company" },
    { label: "연혁", href: "/company" },
    { label: "채용", href: "#contact" }
  ]
}

const socialLinks = [
  { icon: TwitterIcon, href: "#", label: "Twitter" },
  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
  { icon: GithubIcon, href: "#", label: "GitHub" },
  { icon: MailIcon, href: "mailto:milli@molluhub.com", label: "Email" }
]

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">L</span>
                </div>
                <span className="font-bold text-xl">LUDGI</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
                혁신적인 기술 솔루션으로 비즈니스의 미래를 만들어가는 주식회사 럿지입니다.
              </p>
              
              {/* Company Info */}
              <div className="text-sm text-muted-foreground space-y-1 mb-6">
                <p>사업자번호: 307-88-03283</p>
                <p>대표자: 노상우</p>
                <p>주소: 인천 송도 센트로드</p>
                <p>전화: 02-931-9310</p>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <Link
                      key={index}
                      href={social.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={social.label}
                    >
                      <IconComponent className="w-5 h-5" />
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Solutions</h3>
              <ul className="space-y-3">
                {footerLinks.solutions.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Brands Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Brands</h3>
              <ul className="space-y-3">
                {footerLinks.brands.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 주식회사 럿지 (LUDGI Inc.). All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link 
                href="/company" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                회사소개
              </Link>
              <Link 
                href="#contact" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                문의하기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
