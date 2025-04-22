"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Wrench, Phone } from "lucide-react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ]

  const isActive = (path: string) => {
    return pathname === path
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Wrench className="h-7 w-7 text-yellow-600" />
            <span className="font-bold text-xl hidden sm:inline-block">PRKD SONS</span>
          </Link>
        </div>

        <nav className="hidden md:flex gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-yellow-600 relative group ${
                isActive(item.href) ? "text-yellow-600" : "text-foreground"
              }`}
            >
              {item.name}
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-600 transition-all duration-300 group-hover:w-full ${
                  isActive(item.href) ? "w-full" : "w-0"
                }`}
              ></span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 border-r pr-4 mr-4">
            <Phone className="h-4 w-4 text-yellow-600" />
            <span className="text-sm font-medium">+91 6350291615</span>
          </div>
          <Button asChild className="bg-yellow-600 hover:bg-yellow-700">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-8 mt-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-colors hover:text-yellow-600 ${
                    isActive(item.href) ? "text-yellow-600" : "text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center gap-2 py-4 border-t border-b">
                <Phone className="h-5 w-5 text-yellow-600" />
                <span className="font-medium">+91 6350291615</span>
              </div>
              <Button asChild className="mt-4 bg-yellow-600 hover:bg-yellow-700">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
