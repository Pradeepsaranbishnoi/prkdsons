import type React from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

interface ServiceDetailCardProps {
  title: string
  icon: React.ReactNode
  imageUrl: string
  imageAlt: string
  reverse?: boolean
  badge?: string
  children: React.ReactNode
}

// Define fallback image path
const FALLBACK_IMAGE = "/customer-support-team.png"

export default function ServiceDetailCard({
  title,
  icon,
  imageUrl,
  imageAlt,
  reverse = false,
  badge,
  children,
}: ServiceDetailCardProps) {
  return (
    <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12`}>
      <div className="md:w-1/2 relative">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-500 rounded-full opacity-20"></div>
        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-600 rounded-full opacity-20"></div>
        <div className="relative rounded-lg overflow-hidden shadow-2xl">
          <Image src={imageUrl || FALLBACK_IMAGE} alt={imageAlt} width={600} height={400} className="rounded-lg" />
        </div>
      </div>
      <div className="md:w-1/2">
        {badge && <Badge className="mb-3 bg-yellow-100 text-yellow-800 hover:bg-yellow-200 px-3 py-1">{badge}</Badge>}
        <div className="flex items-center mb-6">
          {icon}
          <h2 className="text-3xl font-bold ml-3">{title}</h2>
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}
