import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  link: string
  imageSrc: string
}

export default function ServiceCard({ icon, title, description, link, imageSrc }: ServiceCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative h-48 w-full">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <CardContent className="pt-6 flex-grow relative">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-3 shadow-lg">
          <div className="bg-yellow-50 rounded-full p-2">{icon}</div>
        </div>
        <div className="flex flex-col items-center text-center mt-6">
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
      <CardFooter className="pt-0 pb-6 flex justify-center">
        <Button asChild variant="outline" className="border-yellow-600 text-yellow-600 hover:bg-yellow-50 group">
          <Link href={link} className="flex items-center">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
