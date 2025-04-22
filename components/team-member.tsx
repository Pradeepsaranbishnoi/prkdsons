import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Twitter, Linkedin, Phone } from "lucide-react"

interface TeamMemberProps {
  name: string
  position: string
  image: string
  bio: string
}

export default function TeamMember({ name, position, image, bio }: TeamMemberProps) {
  // Extract phone number from bio if present
  const phoneRegex = /\+\d{1,4}\s?\d{5,14}/g
  const phoneMatch = bio.match(phoneRegex)
  const phoneNumber = phoneMatch ? phoneMatch[0] : null

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="aspect-square relative">
        <Image
          src={image || "/placeholder.svg?height=400&width=400&query=team member"}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-yellow-600 mb-3">{position}</p>
        <p className="text-muted-foreground mb-4">{bio.replace(phoneRegex, "")}</p>
        {phoneNumber && (
          <div className="flex items-center gap-2 mb-4">
            <Phone className="h-4 w-4 text-yellow-600" />
            <a
              href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
              className="text-sm hover:text-yellow-600 transition-colors"
            >
              {phoneNumber}
            </a>
          </div>
        )}
        <div className="flex space-x-3 mt-4">
          <a href="#" className="text-gray-400 hover:text-yellow-600">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-yellow-600">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-yellow-600">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </CardContent>
    </Card>
  )
}
