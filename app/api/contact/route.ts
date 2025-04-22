import { NextResponse } from "next/server"
import { sendEmail } from "@/lib/email"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ success: false, message: "Invalid email address" }, { status: 400 })
    }

    // Send the email
    const result = await sendEmail({ name, email, phone, subject, message })

    if (result.success) {
      return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 })
    } else {
      return NextResponse.json({ success: false, message: result.error || "Failed to send email" }, { status: 500 })
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}
