"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

export function Navbar() {
  const pathname = usePathname()
  
  // 현재 페이지가 company 페이지인지 확인
  const isCompanyPage = pathname === '/company'
  
  // 앵커 링크를 생성하는 함수 (company 페이지에서는 루트로 이동)
  const getAnchorHref = (anchor: string) => {
    return isCompanyPage ? `/${anchor}` : anchor
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">L</span>
            </div>
            <span className="font-bold text-xl">LUDGI</span>
          </Link>
        </div>

        {/* Primary Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href={getAnchorHref("#services")}
                className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
              >
                Services
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href={getAnchorHref("#solutions")}
                className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
              >
                Solutions
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href={getAnchorHref("#brands")}
                className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
              >
                Brands
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href={getAnchorHref("#contact")}
                className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Separate Company Page Link */}
        <div className="hidden md:flex">
          <Link 
            href="/company"
            className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border-l border-border ml-4 pl-4"
          >
            Company
          </Link>
        </div>

        {/* Right Side - Desktop */}
        <div className="hidden sm:flex items-center space-x-3">
          <ThemeToggle />
          <Button variant="secondary" size="sm" asChild>
            <Link href="tel:010-3006-9310">상담 문의</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href={getAnchorHref("#contact")}>무료 컨설팅</Link>
          </Button>
        </div>

        {/* Mobile Right Side */}
        <div className="flex sm:hidden items-center space-x-2">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col space-y-4 mt-6">
              {/* Main Navigation Links */}
              <div className="space-y-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3">
                  페이지 섹션
                </p>
                <Link 
                  href={getAnchorHref("#services")} 
                  className="block px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground rounded-md"
                >
                  Services
                </Link>
                <Link 
                  href={getAnchorHref("#solutions")} 
                  className="block px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground rounded-md"
                >
                  Solutions
                </Link>
                <Link 
                  href={getAnchorHref("#brands")} 
                  className="block px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground rounded-md"
                >
                  Brands
                </Link>
                <Link 
                  href={getAnchorHref("#contact")} 
                  className="block px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground rounded-md"
                >
                  Contact
                </Link>
              </div>

              {/* Separate Company Page */}
              <div className="pt-4 border-t space-y-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3">
                  페이지
                </p>
                <Link 
                  href="/company" 
                  className="block px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground rounded-md bg-muted/50"
                >
                  Company
                </Link>
              </div>

              <div className="pt-4 space-y-3 border-t">
                <Button variant="secondary" className="w-full" asChild>
                  <Link href="tel:010-3006-9310">상담 문의</Link>
                </Button>
                <Button className="w-full" asChild>
                  <Link href={getAnchorHref("#contact")}>무료 컨설팅</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        </div>
      </div>
    </header>
  )
}
