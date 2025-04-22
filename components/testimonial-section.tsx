import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      content: "PRKD SONS fixed my bike's puncture in just 20 minutes. Great service and very reasonable pricing!",
      author: "Rahul Sharma",
      role: "Regular Customer",
      avatar: "/testimonial-1.jpg",
      rating: 5,
    },
    {
      id: 2,
      content:
        "I've been getting all my welding work done here for the past 5 years. Their quality and reliability is unmatched.",
      author: "Priya Patel",
      role: "Business Owner",
      avatar: "/testimonial-2.jpg",
      rating: 5,
    },
    {
      id: 3,
      content:
        "The spare parts they provided for my motorcycle were genuine and priced well below market rates. Highly recommended!",
      author: "Amit Kumar",
      role: "Motorcycle Enthusiast",
      avatar: "/testimonial-3.jpg",
      rating: 4,
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-3 bg-yellow-100 text-yellow-800 hover:bg-yellow-200 px-3 py-1">Testimonials</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardContent className="p-8 relative">
                <QuoteIcon className="absolute top-6 right-6 h-10 w-10 text-yellow-100" />
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-500" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 15.934l-6.18 3.254 1.18-6.875L.11 7.516l6.9-1.003L10 .45l3.09 6.063 6.9 1.003-4.89 4.797 1.18 6.875L10 15.934z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <p className="italic text-muted-foreground mb-6">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 mr-4 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">{testimonial.author}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
