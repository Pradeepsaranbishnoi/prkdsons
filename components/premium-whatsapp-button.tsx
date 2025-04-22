"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { MessageCircle, X, Send, Phone, Clock, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function PremiumWhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [message, setMessage] = useState("")
  const [showNotification, setShowNotification] = useState(false)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  const phoneNumber = "916350291615" // Format: country code + number without +
  const businessName = "PRKD SONS"
  const businessTagline = "Welding & Puncture Repair"

  // Get current time in 12-hour format
  const getCurrentTime = () => {
    const now = new Date()
    return now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })
  }

  const [currentTime, setCurrentTime] = useState(getCurrentTime())

  useEffect(() => {
    // Update time every minute
    const timeInterval = setInterval(() => {
      setCurrentTime(getCurrentTime())
    }, 60000)

    // Show button after a short delay for a nice entrance effect
    const timer = setTimeout(() => {
      setIsVisible(true)

      // Show notification after 5 seconds
      setTimeout(() => {
        setShowNotification(true)
        // Hide notification after 5 seconds
        setTimeout(() => {
          setShowNotification(false)
        }, 5000)
      }, 5000)
    }, 1500)

    // Set up pulse animation interval
    const animationInterval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 1000)
    }, 5000)

    return () => {
      clearTimeout(timer)
      clearInterval(animationInterval)
      clearInterval(timeInterval)
    }
  }, [])

  // Simulate typing effect when chat is opened
  useEffect(() => {
    if (isExpanded) {
      setTimeout(() => {
        setIsTyping(true)
        setTimeout(() => {
          setIsTyping(false)
          // Add new message to chat
          if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
          }
        }, 2000)
      }, 1000)
    }
  }, [isExpanded])

  // Handle message input
  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }

  // Handle sending message
  const handleSendMessage = () => {
    if (message.trim()) {
      window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank")
    } else {
      window.open(`https://wa.me/${phoneNumber}`, "_blank")
    }
  }

  // Handle service button click
  const handleServiceClick = (service: string) => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(`Hello, I'm interested in your ${service} services.`)}`,
      "_blank",
    )
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
    >
      {/* Notification bubble */}
      {showNotification && !isExpanded && (
        <div className="absolute -top-20 right-0 bg-white rounded-lg shadow-xl p-3 w-64 animate-bounce-slow">
          <div className="flex items-start gap-2">
            <div className="bg-green-500 rounded-full p-1 mt-0.5">
              <MessageCircle className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="font-medium text-sm">Need help with welding or repairs?</p>
              <p className="text-xs text-gray-500">Chat with us now!</p>
            </div>
            <button onClick={() => setShowNotification(false)} className="text-gray-400 hover:text-gray-600">
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Expanded chat window */}
      {isExpanded && (
        <div className="absolute bottom-20 right-0 w-80 md:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 origin-bottom-right border border-gray-200">
          {/* Chat header */}
          <div className="bg-gradient-to-r from-green-600 to-green-500 p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-inner">
                <Image src="/whatsapp-profile.png" alt={businessName} fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">{businessName}</h3>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                  <p className="text-green-100 text-xs">{businessTagline}</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-white hover:bg-white/20 p-1.5 rounded-full transition-colors"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Chat background */}
          <div
            ref={chatContainerRef}
            className="p-4 bg-[#e5ded8] bg-opacity-30 h-72 flex flex-col overflow-y-auto"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23bdbdbd' fillOpacity='0.1' fillRule='evenodd'/%3E%3C/svg%3E\")",
            }}
          >
            {/* Welcome message */}
            <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm self-start max-w-[80%] mb-4 relative">
              <div className="absolute -top-1 -left-1 w-3 h-3 bg-white transform rotate-45"></div>
              <p className="text-sm">Hello! Welcome to {businessName}. How can we help you today?</p>
              <div className="flex items-center justify-between mt-1">
                <span className="text-xs text-gray-500">{currentTime}</span>
                <Check className="h-3 w-3 text-green-500" />
              </div>
            </div>

            {/* Service options - First row */}
            <div className="flex flex-wrap gap-2 mb-2">
              <button
                onClick={() => handleServiceClick("Welding")}
                className="bg-white text-green-600 text-xs py-1 px-3 rounded-full shadow-sm hover:bg-green-50 transition-colors"
              >
                Welding Services
              </button>
              <button
                onClick={() => handleServiceClick("Puncture Repair")}
                className="bg-white text-green-600 text-xs py-1 px-3 rounded-full shadow-sm hover:bg-green-50 transition-colors"
              >
                Puncture Repair
              </button>
              <button
                onClick={() => handleServiceClick("Spare Parts")}
                className="bg-white text-green-600 text-xs py-1 px-3 rounded-full shadow-sm hover:bg-green-50 transition-colors"
              >
                Spare Parts
              </button>
            </div>

            {/* Service options - Second row with new services */}
            <div className="flex flex-wrap gap-2 mb-4">
              <button
                onClick={() => handleServiceClick("Wholesale Tyre")}
                className="bg-white text-green-600 text-xs py-1 px-3 rounded-full shadow-sm hover:bg-green-50 transition-colors border border-green-200"
              >
                Wholesale Tyre
              </button>
              <button
                onClick={() => handleServiceClick("Tube Supply")}
                className="bg-white text-green-600 text-xs py-1 px-3 rounded-full shadow-sm hover:bg-green-50 transition-colors border border-green-200"
              >
                Tube Supplier
              </button>
            </div>

            {/* Business hours message */}
            <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm self-start max-w-[80%] mb-4">
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-green-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Business Hours</p>
                  <p className="text-xs text-gray-600">Mon-Sat: 9:00 AM - 7:00 PM</p>
                  <p className="text-xs text-gray-600">Sunday: Closed</p>
                </div>
              </div>
              <div className="flex items-center justify-end mt-1">
                <span className="text-xs text-gray-500">{currentTime}</span>
                <Check className="h-3 w-3 text-green-500 ml-1" />
              </div>
            </div>

            {/* Typing indicator */}
            {isTyping && (
              <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm self-start max-w-[80%] mb-4">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            )}

            {/* Call to action */}
            <div className="mt-auto">
              <div className="bg-green-50 p-3 rounded-lg mb-4 border-l-4 border-green-500">
                <p className="text-sm font-medium text-green-800">Need immediate assistance?</p>
                <div className="flex items-center gap-2 mt-2">
                  <Link
                    href={`tel:+916350291615`}
                    className="flex items-center gap-1 bg-green-100 text-green-700 text-xs py-1 px-2 rounded hover:bg-green-200 transition-colors"
                  >
                    <Phone className="h-3 w-3" />
                    <span>Call Now</span>
                  </Link>
                  <span className="text-xs text-gray-500">or send a message below</span>
                </div>
              </div>
            </div>
          </div>

          {/* Message input */}
          <div className="p-3 bg-white border-t border-gray-200">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={message}
                onChange={handleMessageChange}
                placeholder="Type a message..."
                className="flex-1 border border-gray-300 rounded-full py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <Button
                onClick={handleSendMessage}
                className="bg-green-500 hover:bg-green-600 text-white rounded-full p-2 shadow-sm"
                aria-label="Send message"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
            <div className="text-center mt-2">
              <p className="text-xs text-gray-400">Powered by WhatsApp Business</p>
            </div>
          </div>
        </div>
      )}

      {/* Main button with enhanced design */}
      <button onClick={() => setIsExpanded(!isExpanded)} className="relative block group" aria-label="Chat on WhatsApp">
        {/* Outer ripple effect */}
        <span
          className={`absolute inset-0 rounded-full bg-green-500 opacity-30 ${isAnimating ? "animate-ping-slow" : ""}`}
          style={{ padding: "10px" }}
        ></span>

        {/* Inner ripple effect */}
        <span
          className="absolute inset-0 rounded-full bg-green-500 opacity-40 animate-pulse"
          style={{ padding: "5px" }}
        ></span>

        {/* Button with gradient */}
        <div className="relative flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <MessageCircle className="h-7 w-7 drop-shadow-md" />
        </div>

        {/* Badge counter */}
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-white animate-bounce-gentle">
          1
        </span>
      </button>
    </div>
  )
}
