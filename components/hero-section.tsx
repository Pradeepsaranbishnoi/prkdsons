import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface HeroSectionProps {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
}

// Define fallback image path
const FALLBACK_IMAGE = "/placeholder.svg?height=800&width=1600&query=welding workshop"

export default function HeroSection({ title, subtitle, ctaText, ctaLink }: HeroSectionProps) {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-gray-900 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('/welding-hero.png')` || FALLBACK_IMAGE,
          opacity: 0.4,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-0"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-yellow-600 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-yellow-500 rounded-full opacity-20 blur-3xl"></div>

      <div className="container relative z-10 px-4 mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">{title}</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-10">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-yellow-600 hover:bg-yellow-700 group">
            <Link href={ctaLink} className="flex items-center">
              {ctaText}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
