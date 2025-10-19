// src/app/page.tsx
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import ContactForm from "@/components/ContactForm";
// ⬇️ import ContactForm without SSR
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Features />
      <HowItWorks />
      <ContactForm />   {/* now purely client-side mount */}
      <Footer />
    </main>
  );
}
