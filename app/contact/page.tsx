import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import PageHeader from "@/components/page-header"
import ContactInfoCard from "@/components/contact-info-card"
import Image from "next/image"
import GoogleMap from "@/components/google-map"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <PageHeader
        title="Contact Us"
        description="Get in touch with PRKD SONS WELDING AND PUNCTURE"
        backgroundImage="/contact-hero.png"
      />

      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <Badge className="mb-3 bg-yellow-100 text-yellow-800 hover:bg-yellow-200 px-3 py-1">Get In Touch</Badge>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Have questions or need a quote? Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <ContactForm />
            </div>
            <div>
              <Badge className="mb-3 bg-yellow-100 text-yellow-800 hover:bg-yellow-200 px-3 py-1">Contact Info</Badge>
              <h2 className="text-3xl font-bold mb-6">How to Reach Us</h2>
              <p className="text-muted-foreground mb-8">
                Feel free to contact us through any of the methods below. We're here to help with all your welding,
                puncture repair, and spare parts needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <ContactInfoCard
                  icon={<Phone className="h-8 w-8 text-yellow-600" />}
                  title="Phone"
                  content="+91 6350291615"
                />
                <ContactInfoCard
                  icon={<Mail className="h-8 w-8 text-yellow-600" />}
                  title="Email"
                  content="sandeepbishnoi9950@gmail.com"
                />
                <ContactInfoCard
                  icon={<MapPin className="h-8 w-8 text-yellow-600" />}
                  title="Address"
                  content="PRKD SONS WELDIND AND PUNCHER 14RD, MADASAR, Rajasthan 345028"
                />
                <ContactInfoCard
                  icon={<Clock className="h-8 w-8 text-yellow-600" />}
                  title="Business Hours"
                  content="Mon - Sat: 9:00 AM - 7:00 PM Sunday: Closed"
                />
              </div>
              <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg">
                <GoogleMap />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-3 bg-yellow-100 text-yellow-800 hover:bg-yellow-200 px-3 py-1">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">What types of welding services do you offer?</h3>
              <p className="text-muted-foreground">
                We offer a comprehensive range of welding services including MIG, TIG, and Arc welding for various
                materials such as steel, aluminum, and stainless steel. We handle both small repairs and large
                fabrication projects.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">How long does a typical puncture repair take?</h3>
              <p className="text-muted-foreground">
                Most standard puncture repairs can be completed within 20-30 minutes. However, more complex repairs or
                busy periods might require additional time. We always strive to get you back on the road as quickly as
                possible.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Do you provide warranty on your services?</h3>
              <p className="text-muted-foreground">
                Yes, we stand behind our work. We offer a 30-day warranty on puncture repairs and a 3-month warranty on
                welding services. Our spare parts come with manufacturer warranties that vary by product.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Do I need an appointment for services?</h3>
              <p className="text-muted-foreground">
                While walk-ins are welcome for puncture repairs and small services, we recommend scheduling an
                appointment for larger welding projects to ensure we can accommodate you promptly and allocate the
                necessary resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-3 bg-yellow-100 text-yellow-800 hover:bg-yellow-200 px-3 py-1">Our Workshop</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Our Facility</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Our modern workshop is equipped with state-of-the-art tools and technology to handle all your welding and
              repair needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image src="/workshop-image-1.png" alt="Workshop Interior" fill className="object-cover" />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image src="/workshop-image-2.png" alt="Welding Equipment" fill className="object-cover" />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image src="/workshop-image-3.png" alt="Spare Parts Section" fill className="object-cover" />
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
          <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100">
            Call Us: +91 6350291615
          </Button>
        </div>
      </section>
    </main>
  )
}
