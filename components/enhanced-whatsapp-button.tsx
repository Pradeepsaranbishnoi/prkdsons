"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function EnhancedWhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const phoneNumber = "916350291615" // Format: country code + number without +

  useEffect(() => {
    // Show button after a short delay for a nice entrance effect
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1500)

    // Set up pulse animation interval
    const animationInterval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 1000)
    }, 5000)

    return () => {
      clearTimeout(timer)
      clearInterval(animationInterval)
    }
  }, [])

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
    >
      {/* Expanded chat window */}
      {isExpanded && (
        <div className="absolute bottom-20 right-0 w-80 bg-white rounded-lg shadow-2xl overflow-hidden transform transition-all duration-300 origin-bottom-right">
          <div className="bg-green-500 p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                <Image
                  src="/whatsapp-profile.png"
                  alt="PRKD SONS"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    // Fallback if image fails to load
                    const target = e.target as HTMLImageElement
                    target.src = "/playstation-controller-closeup.png"
                  }}
                />
              </div>
              <div>
                <h3 className="text-white font-bold">PRKD SONS</h3>
                <p className="text-green-100 text-xs">Typically replies within 1 hour</p>
              </div>
            </div>
            <button onClick={() => setIsExpanded(false)} className="text-white hover:bg-green-600 p-1 rounded-full">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-4 bg-gray-100 h-48 flex flex-col">
            <div className="bg-white p-3 rounded-lg rounded-bl-none shadow-sm self-start max-w-[80%] mb-2">
              <p className="text-sm">Hello! How can we help you today?</p>
              <span className="text-xs text-gray-500 mt-1 block">10:30 AM</span>
            </div>

            <div className="mt-auto">
              <div className="bg-green-50 p-3 rounded-lg mb-4">
                <p className="text-sm font-medium">Need help with welding or puncture repair?</p>
                <p className="text-xs text-gray-500 mt-1">Chat with us on WhatsApp for quick assistance!</p>
              </div>
            </div>
          </div>

          <Link
            href={`https://wa.me/${phoneNumber}?text=Hello, I'm interested in your services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-green-500 text-white p-4 text-center font-medium hover:bg-green-600 transition-colors"
          >
            Start Chat
          </Link>
        </div>
      )}

      {/* Main button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="relative block float-animation"
        aria-label="Chat on WhatsApp"
      >
        {/* Ripple effect */}
        <span
          className={`absolute inset-0 rounded-full bg-green-500 opacity-70 ${isAnimating ? "animate-ping" : ""}`}
        ></span>

        {/* Permanent pulse effect */}
        <span className="absolute inset-0 rounded-full bg-green-500 opacity-50 animate-pulse"></span>

        {/* Button */}
        <div className="relative flex items-center justify-center bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300">
          <MessageCircle className="h-6 w-6" />
        </div>
      </button>
    </div>
  )
}
