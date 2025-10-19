export default function Features() {
  const items = [
    { title: "Websites that convert", desc: "Fast and on brand sites that turn visitors into leads and sales." },
    { title: "Funnels and landing pages", desc: "Clear messaging and frictionless steps for higher intent traffic." },
    { title: "Analytics and growth", desc: "Tracking and experiments to scale what works." },
  ];

  return (
    <section className="bg-[#F7F8FB] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#003E9A] mb-10">
          What we do
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
              <div className="h-1.5 w-20 rounded-full brand-gradient mb-5" />
              <h3 className="text-xl font-semibold text-[#003E9A] mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
