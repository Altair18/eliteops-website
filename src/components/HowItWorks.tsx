export default function HowItWorks() {
  const steps = [
    "Share your goal and assets",
    "We design and build",
    "Measure and refine",
    "Scale what performs",
  ];

  return (
    <section className="py-16 md:py-20 px-6 md:px-8 bg-white">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-semibold text-center text-[#003E9A] mb-8">
          How it works
        </h2>
        <ol className="space-y-4 text-slate-700 list-decimal list-inside">
          {steps.map((s, i) => <li key={i}>{s}</li>)}
        </ol>
      </div>
    </section>
  );
}
