import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import PageHeader from "@/components/page-header"
import TeamMember from "@/components/team-member"

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <PageHeader
        title="About Us"
        description="Learn more about PRKD SONS WELDING AND PUNCTURE"
        backgroundImage="/about-hero.png"
      />

      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Badge className="mb-3 bg-yellow-100 text-yellow-800 hover:bg-yellow-200 px-3 py-1">Our Story</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">A Legacy of Quality & Excellence</h2>
              <p className="mb-4 text-muted-foreground">
                PRKD SONS WELDING AND PUNCTURE was established with a vision to provide high-quality welding, puncture
                repair, and spare parts services to our community. With years of experience in the industry, we have
                built a reputation for excellence and reliability.
              </p>
              <p className="mb-4 text-muted-foreground">
                What started as a small family business has grown into a trusted name in the industry. Our commitment to
                quality workmanship, customer satisfaction, and fair pricing has been the cornerstone of our success.
              </p>
              <p className="text-muted-foreground">
                Today, we continue to serve our customers with the same dedication and passion that has defined our
                business from the beginning. We take pride in our work and strive to exceed customer expectations with
                every service we provide.
              </p>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-600 rounded-full opacity-20"></div>
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/workshop-history.png"
                  alt="Our Workshop History"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container px-4 mx-auto text-center">
          <Badge className="mb-3 bg-yellow-100 text-yellow-800 hover:bg-yellow-200 px-3 py-1">
            Our Mission & Values
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Drives Us Forward</h2>
          <p className="max-w-3xl mx-auto mb-12 text-muted-foreground">
            At PRKD SONS WELDING AND PUNCTURE, our mission is to provide exceptional service and quality workmanship at
            fair prices. We are guided by our core values of integrity, excellence, and customer satisfaction.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg transform transition-transform hover:-translate-y-2">
              <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Integrity</h3>
              <p className="text-muted-foreground">
                We conduct our business with honesty, transparency, and ethical practices. We stand behind our work and
                take responsibility for our actions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg transform transition-transform hover:-translate-y-2">
              <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in everything we do. From the quality of our workmanship to the customer
                service we provide, we aim to exceed expectations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg transform transition-transform hover:-translate-y-2">
              <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Customer Satisfaction</h3>
              <p className="text-muted-foreground">
                Our customers are at the heart of everything we do. We are committed to providing exceptional service
                and ensuring complete customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-3 bg-yellow-100 text-yellow-800 hover:bg-yellow-200 px-3 py-1">Meet Our Founder</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Expert Behind Our Success</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Our skilled founder brings years of experience and dedication to every project
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <TeamMember
              name="Sandeep Bishnoi"
              position="Founder, Head of Puncture Repair & Spare Parts Specialist"
              image="/founder-sandeep.jpg"
              bio="With extensive experience in welding, puncture repair and spare parts, Sandeep leads our team with expertise and dedication. Contact: +91 6350291615"
            />
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Work With Us?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-yellow-100">
            Contact us today to discuss your welding, puncture repair, or spare parts needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-yellow-600 hover:bg-gray-100">
              <Link href="/contact">Contact Us Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-yellow-700">
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
