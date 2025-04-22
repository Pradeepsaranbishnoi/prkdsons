import type React from "react"
interface ContactInfoCardProps {
  icon: React.ReactNode
  title: string
  content: string
}

export default function ContactInfoCard({ icon, title, content }: ContactInfoCardProps) {
  return (
    <div className="flex items-start p-6 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-md hover:bg-gray-100">
      <div className="mr-4 mt-1">{icon}</div>
      <div>
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-muted-foreground">{content}</p>
      </div>
    </div>
  )
}
