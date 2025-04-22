import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToTop from "@/components/scroll-to-top"
import PremiumWhatsAppButton from "@/components/premium-whatsapp-button"
import { Toaster } from "@/components/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "PRKD SONS WELDING AND PUNCTURE",
  description: "Professional welding, puncture repair, and spare parts services",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ScrollToTop />
          <Header />
          {children}
          <Footer />
          <PremiumWhatsAppButton />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
