"use client"

import { useState, useEffect, useRef } from "react"
import { Users, Clock, Award, PenToolIcon as Tool } from "lucide-react"

export default function CounterSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const counters = [
    {
      id: 1,
      icon: <Users className="h-10 w-10 text-yellow-600" />,
      count: 1500,
      label: "Happy Customers",
      suffix: "+",
    },
    {
      id: 2,
      icon: <Clock className="h-10 w-10 text-yellow-600" />,
      count: 15,
      label: "Years of Experience",
      suffix: "+",
    },
    {
      id: 3,
      icon: <Award className="h-10 w-10 text-yellow-600" />,
      count: 100,
      label: "Quality Certifications",
      suffix: "%",
    },
    {
      id: 4,
      icon: <Tool className="h-10 w-10 text-yellow-600" />,
      count: 5000,
      label: "Projects Completed",
      suffix: "+",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-16 bg-yellow-600 text-white">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {counters.map((counter) => (
            <div key={counter.id} className="flex flex-col items-center text-center">
              <div className="bg-white/20 p-4 rounded-full mb-4">{counter.icon}</div>
              <div className="text-4xl font-bold mb-2">
                {isVisible ? (
                  <Counter end={counter.count} duration={2} suffix={counter.suffix} />
                ) : (
                  <>0{counter.suffix}</>
                )}
              </div>
              <p className="text-yellow-100">{counter.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

interface CounterProps {
  end: number
  duration: number
  suffix?: string
}

function Counter({ end, duration, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number | null = null
    let animationFrameId: number

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const percentage = Math.min(progress / (duration * 1000), 1)

      setCount(Math.floor(percentage * end))

      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(updateCount)
      }
    }

    animationFrameId = requestAnimationFrame(updateCount)

    return () => cancelAnimationFrame(animationFrameId)
  }, [end, duration])

  return (
    <>
      {count}
      {suffix}
    </>
  )
}
