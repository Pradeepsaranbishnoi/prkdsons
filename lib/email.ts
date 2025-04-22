import nodemailer from "nodemailer"
import { generateEmailTemplate, generateAutoReplyTemplate } from "./email-template"

// Create a transporter object
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || "sandeepbishnoi9950@gmail.com",
    pass: process.env.EMAIL_PASSWORD, // This should be set in your environment variables
  },
})

interface SendEmailProps {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export async function sendEmail({ name, email, phone, subject, message }: SendEmailProps) {
  try {
    // Email to the business owner
    const mailOptions = {
      from: `"PRKD SONS Website" <${process.env.EMAIL_USER || "sandeepbishnoi9950@gmail.com"}>`,
      to: "sandeepbishnoi9950@gmail.com",
      subject: `New Contact Form: ${subject}`,
      html: generateEmailTemplate({ name, email, phone, subject, message }),
    }

    // Send the email to the business owner
    await transporter.sendMail(mailOptions)

    // Auto-reply to the customer
    const autoReplyOptions = {
      from: `"PRKD SONS WELDING AND PUNCTURE" <${process.env.EMAIL_USER || "sandeepbishnoi9950@gmail.com"}>`,
      to: email,
      subject: "Thank You for Contacting PRKD SONS WELDING AND PUNCTURE",
      html: generateAutoReplyTemplate(name),
    }

    // Send the auto-reply
    await transporter.sendMail(autoReplyOptions)

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error: "Failed to send email" }
  }
}
