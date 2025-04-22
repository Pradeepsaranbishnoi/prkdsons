import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Wrench, PenToolIcon as Tool, ShoppingBag, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import CounterSection from "@/components/counter-section"

// Define fallback image paths to ensure we never have empty strings
const FALLBACK_IMAGE = "/colorful-abstract-flow.png"

export default function Home() {
  // Define image paths with fallbacks
  const images = {
    hero: "/welding-hero.png",
    weldingService: "/welding-service-card.png",
    punctureRepair: "/puncture-repair-card.png",
    spareParts: "/spare-parts-card.png",
    bikeTires: "/bike-tires-card.png",
    workshop: "/workshop-display.png",
  }

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-gray-900 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url('${images.hero || FALLBACK_IMAGE}')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-0"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-yellow-600 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-yellow-500 rounded-full opacity-20 blur-3xl"></div>

        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
            PRKD SONS WELDING AND PUNCTURE
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-10">
            Professional Welding, Puncture Repair & Spare Parts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-yellow-600 hover:bg-yellow-700 group">
              <Link href="/services" className="flex items-center">
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white text-yellow-600 hover:bg-gray-100">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <Badge className="mb-3 bg-yellow-100 text-yellow-800 hover:bg-yellow-200 px-3 py-1">Our Expertise</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Services We Offer</h2>
            <p className="text-muted-foreground max-w-2xl">
              We provide high-quality welding, puncture repair, and spare parts services with a commitment to excellence
              and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Card 1 */}
            <div className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border rounded-lg">
              <div className="relative h-48 w-full">
                <Image
                  src={images.weldingService || FALLBACK_IMAGE}
                  alt="Welding Services"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="pt-6 px-6 flex-grow relative">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-3 shadow-lg">
                  <div className="bg-yellow-50 rounded-full p-2">
                    <Wrench className="h-10 w-10 text-yellow-600" />
                  </div>
                </div>
                <div className="flex flex-col items-center text-center mt-6">
                  <h3 className="text-xl font-bold mb-3">Welding Services</h3>
                  <p className="text-muted-foreground">
                    Professional welding for all types of metals with precision and expertise.
                  </p>
                </div>
              </div>
              <div className="pt-0 pb-6 px-6 flex justify-center">
                <Button
                  asChild
                  variant="outline"
                  className="border-yellow-600 text-yellow-600 hover:bg-yellow-50 group"
                >
                  <Link href="/services#welding" className="flex items-center">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border rounded-lg">
              <div className="relative h-48 w-full">
                <Image
                  src={images.punctureRepair || FALLBACK_IMAGE}
                  alt="Puncture Repair"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="pt-6 px-6 flex-grow relative">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-3 shadow-lg">
                  <div className="bg-yellow-50 rounded-full p-2">
                    <Tool className="h-10 w-10 text-yellow-600" />
                  </div>
                </div>
                <div className="flex flex-col items-center text-center mt-6">
                  <h3 className="text-xl font-bold mb-3">Puncture Repair</h3>
                  <p className="text-muted-foreground">
                    Quick and reliable puncture repair for all vehicle types and sizes.
                  </p>
                </div>
              </div>
              <div className="pt-0 pb-6 px-6 flex justify-center">
                <Button
                  asChild
                  variant="outline"
                  className="border-yellow-600 text-yellow-600 hover:bg-yellow-50 group"
                >
                  <Link href="/services#puncture" className="flex items-center">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border rounded-lg">
              <div className="relative h-48 w-full">
                <Image src={images.spareParts || FALLBACK_IMAGE} alt="Spare Parts" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="pt-6 px-6 flex-grow relative">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-3 shadow-lg">
                  <div className="bg-yellow-50 rounded-full p-2">
                    <ShoppingBag className="h-10 w-10 text-yellow-600" />
                  </div>
                </div>
                <div className="flex flex-col items-center text-center mt-6">
                  <h3 className="text-xl font-bold mb-3">Spare Parts</h3>
                  <p className="text-muted-foreground">
                    Quality spare parts for bikes, motorcycles and more at competitive prices.
                  </p>
                </div>
              </div>
              <div className="pt-0 pb-6 px-6 flex justify-center">
                <Button
                  asChild
                  variant="outline"
                  className="border-yellow-600 text-yellow-600 hover:bg-yellow-50 group"
                >
                  <Link href="/services#spare-parts" className="flex items-center">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border rounded-lg">
              <div className="relative h-48 w-full">
                <Image
                  src={images.bikeTires || FALLBACK_IMAGE}
                  alt="Bike Tires & Tubes"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="pt-6 px-6 flex-grow relative">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-3 shadow-lg">
                  <div className="bg-yellow-50 rounded-full p-2">
                    <Tool className="h-10 w-10 text-yellow-600" />
                  </div>
                </div>
                <div className="flex flex-col items-center text-center mt-6">
                  <h3 className="text-xl font-bold mb-3">Bike Tires & Tubes</h3>
                  <p className="text-muted-foreground">
                    Wide range of bike tires and tubes for all models and terrains.
                  </p>
                </div>
              </div>
              <div className="pt-0 pb-6 px-6 flex justify-center">
                <Button
                  asChild
                  variant="outline"
                  className="border-yellow-600 text-yellow-600 hover:bg-yellow-50 group"
                >
                  <Link href="/services#tires" className="flex items-center">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-yellow-600 hover:bg-yellow-700 group">
              <Link href="/services" className="flex items-center">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-600 rounded-full opacity-20"></div>
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/workshop-display.png"
                  alt="PRKD SONS Workshop"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <Badge className="mb-3 bg-yellow-100 text-yellow-800 hover:bg-yellow-200 px-3 py-1">Why Choose Us</Badge>
              <h2 className="text-3xl font-bold mb-6">Trusted Experts in Welding & Repair</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-yellow-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-semibold">Experienced Professionals</span>
                    <p className="text-muted-foreground text-sm mt-1">
                      Our team brings over 15 years of industry experience and expertise
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-yellow-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-semibold">Quality Workmanship</span>
                    <p className="text-muted-foreground text-sm mt-1">
                      We take pride in our attention to detail and precision in every job
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-yellow-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-semibold">Competitive Pricing</span>
                    <p className="text-muted-foreground text-sm mt-1">
                      Fair and transparent pricing with no hidden costs or surprises
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-yellow-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-semibold">Quick Turnaround</span>
                    <p className="text-muted-foreground text-sm mt-1">
                      Fast service without compromising on quality or safety
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <Button
                  asChild
                  variant="outline"
                  className="border-yellow-600 text-yellow-600 hover:bg-yellow-50 group"
                >
                  <Link href="/about" className="flex items-center">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CounterSection />

      {/* Testimonial Section */}
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
            {/* Testimonial 1 */}
            <div className="bg-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 rounded-lg border">
              <div className="p-8 relative">
                <div className="absolute top-6 right-6 h-10 w-10 text-yellow-100">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 11H6C6 11 6 9 6 7C6 5 8 3 10 3V5C9 5 8 6 8 7H10V11Z" fill="#FEF3C7" />
                    <path d="M18 11H14C14 11 14 9 14 7C14 5 16 3 18 3V5C17 5 16 6 16 7H18V11Z" fill="#FEF3C7" />
                    <path d="M10 19V13H6V19H10Z" fill="#FEF3C7" />
                    <path d="M18 19V13H14V19H18Z" fill="#FEF3C7" />
                  </svg>
                </div>
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 15.934l-6.18 3.254 1.18-6.875L.11 7.516l6.9-1.003L10 .45l3.09 6.063 6.9 1.003-4.89 4.797 1.18 6.875L10 15.934z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <p className="italic text-muted-foreground mb-6">
                  "PRKD SONS fixed my bike's puncture in just 20 minutes. Great service and very reasonable pricing!"
                </p>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 mr-4 rounded-full overflow-hidden bg-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold">RS</div>
                  </div>
                  <div>
                    <h3 className="font-bold">Rahul Sharma</h3>
                    <p className="text-sm text-muted-foreground">Regular Customer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 rounded-lg border">
              <div className="p-8 relative">
                <div className="absolute top-6 right-6 h-10 w-10 text-yellow-100">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 11H6C6 11 6 9 6 7C6 5 8 3 10 3V5C9 5 8 6 8 7H10V11Z" fill="#FEF3C7" />
                    <path d="M18 11H14C14 11 14 9 14 7C14 5 16 3 18 3V5C17 5 16 6 16 7H18V11Z" fill="#FEF3C7" />
                    <path d="M10 19V13H6V19H10Z" fill="#FEF3C7" />
                    <path d="M18 19V13H14V19H18Z" fill="#FEF3C7" />
                  </svg>
                </div>
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 15.934l-6.18 3.254 1.18-6.875L.11 7.516l6.9-1.003L10 .45l3.09 6.063 6.9 1.003-4.89 4.797 1.18 6.875L10 15.934z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <p className="italic text-muted-foreground mb-6">
                  "I've been getting all my welding work done here for the past 5 years. Their quality and reliability
                  is unmatched."
                </p>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 mr-4 rounded-full overflow-hidden bg-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold">PP</div>
                  </div>
                  <div>
                    <h3 className="font-bold">Priya Patel</h3>
                    <p className="text-sm text-muted-foreground">Business Owner</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 rounded-lg border">
              <div className="p-8 relative">
                <div className="absolute top-6 right-6 h-10 w-10 text-yellow-100">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 11H6C6 11 6 9 6 7C6 5 8 3 10 3V5C9 5 8 6 8 7H10V11Z" fill="#FEF3C7" />
                    <path d="M18 11H14C14 11 14 9 14 7C14 5 16 3 18 3V5C17 5 16 6 16 7H18V11Z" fill="#FEF3C7" />
                    <path d="M10 19V13H6V19H10Z" fill="#FEF3C7" />
                    <path d="M18 19V13H14V19H18Z" fill="#FEF3C7" />
                  </svg>
                </div>
                <div className="flex items-center mb-6">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 15.934l-6.18 3.254 1.18-6.875L.11 7.516l6.9-1.003L10 .45l3.09 6.063 6.9 1.003-4.89 4.797 1.18 6.875L10 15.934z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                  <svg className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 15.934l-6.18 3.254 1.18-6.875L.11 7.516l6.9-1.003L10 .45l3.09 6.063 6.9 1.003-4.89 4.797 1.18 6.875L10 15.934z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="italic text-muted-foreground mb-6">
                  "The spare parts they provided for my motorcycle were genuine and priced well below market rates.
                  Highly recommended!"
                </p>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 mr-4 rounded-full overflow-hidden bg-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold">AK</div>
                  </div>
                  <div>
                    <h3 className="font-bold">Amit Kumar</h3>
                    <p className="text-sm text-muted-foreground">Motorcycle Enthusiast</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-yellow-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-yellow-500 rounded-full opacity-20"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-yellow-700 rounded-full opacity-20"></div>
        </div>
        <div className="container px-4 mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Get Started?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-yellow-100">
            Contact us today for all your welding, puncture repair, and spare parts needs. Our team is ready to assist
            you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-yellow-600 hover:bg-gray-100">
              <Link href="/contact">Contact Us Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white text-yellow-600 hover:bg-gray-100">
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
