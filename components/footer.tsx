import Link from "next/link"
import { Wrench, Facebook, Instagram, Twitter, Phone, Mail, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container px-4 py-16 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Wrench className="h-8 w-8 text-yellow-500" />
              <span className="font-bold text-2xl">PRKD SONS</span>
            </div>
            <p className="mb-6 text-gray-400 max-w-md">
              Professional welding, puncture repair, and spare parts services. Serving our community with quality
              workmanship since 2005. We pride ourselves on our attention to detail and commitment to customer
              satisfaction.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="bg-gray-800 hover:bg-yellow-600 transition-colors p-2 rounded-full text-gray-300 hover:text-white"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="bg-gray-800 hover:bg-yellow-600 transition-colors p-2 rounded-full text-gray-300 hover:text-white"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="bg-gray-800 hover:bg-yellow-600 transition-colors p-2 rounded-full text-gray-300 hover:text-white"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-400 hover:text-yellow-500 flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-yellow-500 flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-yellow-500 flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-yellow-500 flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/services#welding" className="text-gray-400 hover:text-yellow-500 flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Welding Services
                </Link>
              </li>
              <li>
                <Link href="/services#puncture" className="text-gray-400 hover:text-yellow-500 flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Puncture Repair
                </Link>
              </li>
              <li>
                <Link href="/services#spare-parts" className="text-gray-400 hover:text-yellow-500 flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Spare Parts
                </Link>
              </li>
              <li>
                <Link href="/services#tires" className="text-gray-400 hover:text-yellow-500 flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Bike Tires & Tubes
                </Link>
              </li>
              <li>
                <Link href="/services#wholesale-tyre" className="text-gray-400 hover:text-yellow-500 flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Wholesale Tyre
                </Link>
              </li>
              <li>
                <Link href="/services#tube-supplier" className="text-gray-400 hover:text-yellow-500 flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Tube Supplier
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                <span className="text-gray-400">PRKD SONS WELDIND AND PUNCHER 14RD, MADASAR, Rajasthan 345028</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-yellow-500 mr-3" />
                <span className="text-gray-400">+91 6350291615</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-yellow-500 mr-3" />
                <span className="text-gray-400">sandeepbishnoi9950@gmail.com</span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-semibold text-white mb-3">Subscribe to Newsletter</h4>
              <div className="flex gap-2">
                <Input type="email" placeholder="Your email" className="bg-gray-800 border-gray-700 text-white" />
                <Button className="bg-yellow-600 hover:bg-yellow-700">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} PRKD SONS WELDING AND PUNCTURE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
