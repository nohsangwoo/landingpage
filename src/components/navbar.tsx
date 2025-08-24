"use client"

import Link from "next/link"
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
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-xl">StatsAI</span>
          </Link>
        </div>

        {/* Primary Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#features"
                className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
              >
                Features
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#pricing"
                className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
              >
                Pricing
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#analytics"
                className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
              >
                Analytics
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#solutions"
                className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
              >
                Solutions
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#support"
                className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
              >
                Support
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Side - Desktop */}
        <div className="hidden sm:flex items-center space-x-3">
          <ThemeToggle />
          <Button variant="secondary" size="sm" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/signup">Join up</Link>
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
              <Link 
                href="#features" 
                className="block px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground rounded-md"
              >
                Features
              </Link>
              <Link 
                href="#pricing" 
                className="block px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground rounded-md"
              >
                Pricing
              </Link>
              <Link 
                href="#analytics" 
                className="block px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground rounded-md"
              >
                Analytics
              </Link>
              <Link 
                href="#solutions" 
                className="block px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground rounded-md"
              >
                Solutions
              </Link>
              <Link 
                href="#support" 
                className="block px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground rounded-md"
              >
                Support
              </Link>
              <div className="pt-4 space-y-3 border-t">
                <Button variant="secondary" className="w-full" asChild>
                  <Link href="/login">Login</Link>
                </Button>
                <Button className="w-full" asChild>
                  <Link href="/signup">Join up</Link>
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
