"use client"

import { useEffect, useRef } from "react"

export default function GoogleMap() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Create a div for the map iframe
    const iframe = document.createElement("iframe")
    iframe.src =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83245.27586968488!2d71.99820184132707!3d27.692428009108745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393f4d1c71a86673%3A0x584332c039772912!2sPRKD%20SONS%20WELDIND%20AND%20PUNCHER%2014RD%20%2CMADASAR!5e0!3m2!1sen!2sin!4v1745335839735!5m2!1sen!2sin"
    iframe.width = "100%"
    iframe.height = "100%"
    iframe.style.border = "0"
    iframe.allowFullscreen = true
    iframe.loading = "lazy"
    iframe.referrerPolicy = "no-referrer-when-downgrade"

    // Clear any existing content and append the iframe
    if (mapRef.current) {
      mapRef.current.innerHTML = ""
      mapRef.current.appendChild(iframe)
    }

    return () => {
      // Clean up on unmount
      if (mapRef.current) {
        mapRef.current.innerHTML = ""
      }
    }
  }, [])

  return (
    <div ref={mapRef} className="w-full h-full">
      {/* Fallback content in case JavaScript is disabled */}
      <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-500">Loading map...</div>
    </div>
  )
}
