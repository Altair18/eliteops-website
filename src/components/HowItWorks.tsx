export default function HowItWorks() {
  const steps = [
    "Send a task via email or dashboard",
    "AI drafts the response instantly",
    "Our human operator reviews for quality",
    "You approve and it’s done"
  ]
  return (
    <section className="py-16 px-8 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center mb-10">How It Works</h2>
      <ol className="max-w-3xl mx-auto space-y-4 list-decimal list-inside text-gray-700">
        {steps.map((s, i) => <li key={i}>{s}</li>)}
      </ol>
    </section>
  )
}
