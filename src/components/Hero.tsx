import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center py-24 bg-gradient-to-b from-white to-gray-100">
      <h1 className="text-5xl font-bold mb-4">Fivra</h1>
      <p className="text-xl text-gray-600 mb-6">
        Your 24/7 Operations Assistant. Stop drowning in admin — we draft, you approve.
      </p>
      <Link href="#contact" className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800">
        Request a Demo
      </Link>
    </section>
  )
}
