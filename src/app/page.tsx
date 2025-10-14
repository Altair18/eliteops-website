import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <Hero />
      <Features />
      <HowItWorks />
      <ContactForm />
      <Footer />
    </main>
  )
}
