import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Wrench, PenToolIcon as Tool, ShoppingBag, ArrowRight, Package, Truck } from "lucide-react"
import PageHeader from "@/components/page-header"
import ServiceDetailCard from "@/components/service-detail-card"

// Define fallback image path
const FALLBACK_IMAGE = "/customer-support-team.png"

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <PageHeader
        title="Our Services"
        description="Explore the range of services offered by PRKD SONS WELDING AND PUNCTURE"
        backgroundImage="/services-hero.png"
      />

      <section className="py-16 bg-white" id="welding">
        <div className="container px-4 mx-auto">
          <ServiceDetailCard
            title="Welding Services"
            icon={<Wrench className="h-12 w-12 text-yellow-600" />}
            imageUrl="/welding-service-detail.png"
            imageAlt="Welding Services"
            reverse={false}
            badge="Expert Welding"
          >
            <p className="mb-6 text-lg">
              Our professional welding services cater to a wide range of needs, from small repairs to large fabrication
              projects. We specialize in:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <span className="bg-yellow-600 rounded-full p-1 mr-3 mt-1">
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <span className="font-semibold">MIG, TIG, and Arc welding</span>
                  <p className="text-muted-foreground text-sm mt-1">
                    Precision welding techniques for different materials and applications
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
                  <span className="font-semibold">Steel, aluminum, and stainless steel welding</span>
                  <p className="text-muted-foreground text-sm mt-1">
                    Experience with various metals and their specific welding requirements
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
                  <span className="font-semibold">Custom fabrication and repairs</span>
                  <p className="text-muted-foreground text-sm mt-1">
                    Tailored solutions for unique projects and specialized repairs
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
                  <span className="font-semibold">Structural welding and reinforcement</span>
                  <p className="text-muted-foreground text-sm mt-1">
                    Strong, reliable welds for structural integrity and safety
                  </p>
                </div>
              </li>
            </ul>
            <p className="text-muted-foreground">
              Our skilled welders have years of experience and are committed to delivering high-quality workmanship on
              every project. We use state-of-the-art equipment and follow industry best practices to ensure durability
              and safety.
            </p>
            <div className="mt-6">
              <Button asChild className="bg-yellow-600 hover:bg-yellow-700 group">
                <Link href="/contact" className="flex items-center">
                  Request Welding Service
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </ServiceDetailCard>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100" id="puncture">
        <div className="container px-4 mx-auto">
          <ServiceDetailCard
            title="Puncture Repair"
            icon={<Tool className="h-12 w-12 text-yellow-600" />}
            imageUrl="/puncture-repair-detail.png"
            imageAlt="Puncture Repair Services"
            reverse={true}
            badge="Fast Repairs"
          >
            <p className="mb-6 text-lg">
              Our puncture repair services are quick, reliable, and affordable. We understand that a flat tire can
              disrupt your day, which is why we strive to provide efficient service to get you back on the road as soon
              as possible.
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <span className="bg-yellow-600 rounded-full p-1 mr-3 mt-1">
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <span className="font-semibold">Motorcycle and bicycle tire puncture repair</span>
                  <p className="text-muted-foreground text-sm mt-1">
                    Specialized repair for two-wheeler tires of all sizes
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
                  <span className="font-semibold">Tubeless tire repair</span>
                  <p className="text-muted-foreground text-sm mt-1">
                    Modern repair techniques for tubeless tire technology
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
                  <span className="font-semibold">Valve replacement</span>
                  <p className="text-muted-foreground text-sm mt-1">Quick replacement of damaged or leaking valves</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-yellow-600 rounded-full p-1 mr-3 mt-1">
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <span className="font-semibold">Tire balancing and alignment</span>
                  <p className="text-muted-foreground text-sm mt-1">
                    Ensure smooth riding and extended tire life with proper balancing
                  </p>
                </div>
              </li>
            </ul>
            <p className="text-muted-foreground">
              We use quality materials and proven techniques to ensure that our repairs are durable and long-lasting.
              Our experienced technicians can handle all types of punctures and tire-related issues.
            </p>
            <div className="mt-6">
              <Button asChild className="bg-yellow-600 hover:bg-yellow-700 group">
                <Link href="/contact" className="flex items-center">
                  Get Puncture Repair
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </ServiceDetailCard>
        </div>
      </section>

      <section className="py-16 bg-white" id="spare-parts">
        <div className="container px-4 mx-auto">
          <ServiceDetailCard
            title="Spare Parts"
            icon={<ShoppingBag className="h-12 w-12 text-yellow-600" />}
            imageUrl="/spare-parts-detail.png"
            imageAlt="Spare Parts Services"
            reverse={false}
            badge="Quality Parts"
          >
            <p className="mb-6 text-lg">
              We stock a wide range of quality spare parts for motorcycles, bicycles, and other vehicles. Our inventory
              includes:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <span className="bg-yellow-600 rounded-full p-1 mr-3 mt-1">
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <span className="font-semibold">Engine parts and components</span>
                  <p className="text-muted-foreground text-sm mt-1">
                    Reliable parts to keep your engine running smoothly
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
                  <span className="font-semibold">Brake systems and components</span>
                  <p className="text-muted-foreground text-sm mt-1">
                    Safety-critical parts for reliable stopping power
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
                  <span className="font-semibold">Electrical components</span>
                  <p className="text-muted-foreground text-sm mt-1">
                    Lights, wiring, and electrical system parts for all vehicles
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
                  <span className="font-semibold">Chains, sprockets, and drive components</span>
                  <p className="text-muted-foreground text-sm mt-1">
                    Essential drive train components for optimal performance
                  </p>
                </div>
              </li>
            </ul>
            <p className="text-muted-foreground">
              We source our parts from trusted suppliers to ensure quality and reliability. Our knowledgeable staff can
              help you find the right parts for your specific needs and provide guidance on installation and
              maintenance.
            </p>
            <div className="mt-6">
              <Button asChild className="bg-yellow-600 hover:bg-yellow-700 group">
                <Link href="/contact" className="flex items-center">
                  Inquire About Parts
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </ServiceDetailCard>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100" id="tires">
        <div className="container px-4 mx-auto">
          <ServiceDetailCard
            title="Bike Tires & Tubes"
            icon={<Tool className="h-12 w-12 text-yellow-600" />}
            imageUrl="/bike-tires-detail.png"
            imageAlt="Bike Tires and Tubes"
            reverse={true}
            badge="Premium Tires"
          >
            <p className="mb-6 text-lg">
              We offer a comprehensive range of bike tires and tubes for all types of bicycles and motorcycles. Our
              selection includes:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <span className="bg-yellow-600 rounded-full p-1 mr-3 mt-1">
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <span className="font-semibold">Road bike tires and tubes</span>
                  <p className="text-muted-foreground text-sm mt-1">
                    Smooth, fast-rolling tires for road cycling and commuting
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
                  <span className="font-semibold">Mountain bike tires and tubes</span>
                  <p className="text-muted-foreground text-sm mt-1">
                    Durable, high-traction tires for off-road adventures
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
                  <span className="font-semibold">Motorcycle tires for various models</span>
                  <p className="text-muted-foreground text-sm mt-1">
                    Performance and commuter tires for all motorcycle types
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
                  <span className="font-semibold">High-performance and specialty tires</span>
                  <p className="text-muted-foreground text-sm mt-1">
                    Premium options for enthusiasts and competitive riders
                  </p>
                </div>
              </li>
            </ul>
            <p className="text-muted-foreground">
              We carry products from leading brands known for their quality, durability, and performance. Our team can
              help you select the right tires and tubes for your specific needs, whether you're looking for everyday
              commuting tires or high-performance options.
            </p>
            <div className="mt-6">
              <Button asChild className="bg-yellow-600 hover:bg-yellow-700 group">
                <Link href="/contact" className="flex items-center">
                  Shop Tires & Tubes
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </ServiceDetailCard>
        </div>
      </section>

      {/* New Section: Wholesale Tyre */}
      <section className="py-16 bg-white" id="wholesale-tyre">
        <div className="container px-4 mx-auto">
          <ServiceDetailCard
            title="Wholesale Tyre"
            icon={<Package className="h-12 w-12 text-yellow-600" />}
            imageUrl="/wholesale-tyre-detail.png"
            imageAlt="Wholesale Tyre Services"
            reverse={false}
            badge="Bulk Pricing"
          >
            <p className="mb-6 text-lg">
              We offer competitive wholesale pricing on a wide range of tyres for retailers, fleet operators, and
              businesses. Our wholesale tyre services include:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <span className="bg-yellow-600 rounded-full p-1 mr-3 mt-1">
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <span className="font-semibold">Bulk tyre orders at competitive prices</span>
                  <p className="text-muted-foreground text-sm mt-1">Volume discounts for businesses and resellers</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-yellow-600 rounded-full p-1 mr-3 mt-1">
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <span className="font-semibold">Multiple brands and specifications</span>
                  <p className="text-muted-foreground text-sm mt-1">Access to a wide range of tyre brands and models</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-yellow-600 rounded-full p-1 mr-3 mt-1">
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <span className="font-semibold">Regular supply contracts</span>
                  <p className="text-muted-foreground text-sm mt-1">
                    Reliable supply arrangements for business customers
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
                  <span className="font-semibold">Delivery options available</span>
                  <p className="text-muted-foreground text-sm mt-1">
                    Convenient delivery for large orders to your location
                  </p>
                </div>
              </li>
            </ul>
            <p className="text-muted-foreground">
              Our wholesale tyre service is perfect for automotive businesses, repair shops, and fleet operators looking
              for quality tyres at competitive prices. We maintain strong relationships with manufacturers to ensure
              consistent supply and the best possible pricing for our wholesale customers.
            </p>
            <div className="mt-6">
              <Button asChild className="bg-yellow-600 hover:bg-yellow-700 group">
                <Link href="/contact" className="flex items-center">
                  Request Wholesale Quote
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </ServiceDetailCard>
        </div>
      </section>

      {/* New Section: Tube Supplier */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100" id="tube-supplier">
        <div className="container px-4 mx-auto">
          <ServiceDetailCard
            title="Tube Supplier"
            icon={<Truck className="h-12 w-12 text-yellow-600" />}
            imageUrl="/tube-supplier-detail.png"
            imageAlt="Tube Supplier Services"
            reverse={true}
            badge="Reliable Supply"
          >
            <p className="mb-6 text-lg">
              As a trusted tube supplier, we provide high-quality inner tubes for all types of vehicles. Our tube supply
              services feature:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <span className="bg-yellow-600 rounded-full p-1 mr-3 mt-1">
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <span className="font-semibold">Comprehensive range of tube sizes</span>
                  <p className="text-muted-foreground text-sm mt-1">
                    Tubes for bicycles, motorcycles, cars, and commercial vehicles
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
                  <span className="font-semibold">Quality-tested products</span>
                  <p className="text-muted-foreground text-sm mt-1">
                    Durable tubes from reputable manufacturers with proper quality control
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
                  <span className="font-semibold">Wholesale and retail options</span>
                  <p className="text-muted-foreground text-sm mt-1">
                    Flexible purchasing options for businesses and individual customers
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
                  <span className="font-semibold">Specialty and heavy-duty tubes</span>
                  <p className="text-muted-foreground text-sm mt-1">
                    Specialized tubes for unique applications and demanding conditions
                  </p>
                </div>
              </li>
            </ul>
            <p className="text-muted-foreground">
              We maintain a large inventory of tubes to ensure immediate availability for our customers. Whether you
              need a single tube for your bicycle or a bulk order for your business, we can provide reliable,
              high-quality tubes at competitive prices with expert advice on selecting the right product for your needs.
            </p>
            <div className="mt-6">
              <Button asChild className="bg-yellow-600 hover:bg-yellow-700 group">
                <Link href="/contact" className="flex items-center">
                  Order Tubes
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </ServiceDetailCard>
        </div>
      </section>

      <section className="py-16 bg-yellow-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-yellow-500 rounded-full opacity-20"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-yellow-700 rounded-full opacity-20"></div>
        </div>
        <div className="container px-4 mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Need Our Services?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-yellow-100">
            Contact us today to discuss your requirements or visit our workshop. We're ready to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-yellow-600 hover:bg-gray-100">
              <Link href="/contact">Contact Us Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-yellow-700">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
