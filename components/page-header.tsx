interface PageHeaderProps {
  title: string
  description: string
  backgroundImage?: string
}

// Define fallback image path
const FALLBACK_IMAGE = "/modern-service-header.png"

export default function PageHeader({ title, description, backgroundImage }: PageHeaderProps) {
  return (
    <section className="relative bg-gray-900 text-white py-16 md:py-20">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: backgroundImage ? `url('${backgroundImage}')` : `url('${FALLBACK_IMAGE}')`,
          opacity: 0.4,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-0"></div>
      <div className="container px-4 mx-auto text-center relative z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
        <p className="max-w-2xl mx-auto text-gray-300 text-lg">{description}</p>
      </div>
    </section>
  )
}
