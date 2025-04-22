"use client"

import { useState, useEffect } from "react"
import { MessageCircle } from "lucide-react"
import Link from "next/link"

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
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
    }, 3000)

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
      <Link
        href={`https://wa.me/${phoneNumber}?text=Hello, I'm interested in your services.`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block"
        aria-label="Chat on WhatsApp"
      >
        {/* Ripple effect */}
        <span
          className={`absolute inset-0 rounded-full bg-green-500 opacity-70 ${isAnimating ? "animate-ping" : ""}`}
        ></span>

        {/* Permanent pulse effect */}
        <span className="absolute inset-0 rounded-full bg-green-500 opacity-50 animate-pulse"></span>

        {/* Button */}
        <div className="relative flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 group">
          <MessageCircle className="h-6 w-6 transition-transform group-hover:rotate-12" />
          <span className="font-medium transition-all duration-300 group-hover:font-bold">Chat with us</span>
        </div>
      </Link>

      {/* Tooltip that appears on hover */}
      <div className="absolute -top-12 right-0 bg-white text-gray-800 px-3 py-1 rounded-lg shadow-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Need help? Chat with us!
      </div>
    </div>
  )
}
