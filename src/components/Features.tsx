export default function Features() {
  const items = [
    { title: "Save 10+ hours a week", desc: "Delegate repetitive tasks to your AI + human assistant." },
    { title: "Human-in-the-loop accuracy", desc: "We double-check everything before it reaches you." },
    { title: "Realtime dashboard", desc: "Track, approve, or reject AI outputs live." },
  ]

  return (
    <section className="py-16 px-8 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-10">Why EliteOps?</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {items.map((item, i) => (
          <div key={i} className="p-6 rounded-2xl shadow-md border">
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
