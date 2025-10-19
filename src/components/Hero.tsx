import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background gradient (very light, brand-tinted) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#eef3ff] via-[#f5f1ff] to-white" />

      {/* Faint logo watermark */}
      <div className="pointer-events-none absolute -right-24 -top-16 opacity-10">
        <Image src="/logo.png" alt="" width={420} height={420} priority />
      </div>

      {/* Soft gradient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 h-[28rem] w-[28rem] rounded-full blur-3xl"
           style={{ background: "linear-gradient(135deg,#0062E3, #7A3BFF)", opacity: 0.18 }} />

      {/* Dotted accents */}
      <div className="pointer-events-none absolute left-10 top-10 h-16 w-32 rounded-md dots opacity-50" />
      <div className="pointer-events-none absolute right-10 bottom-10 h-16 w-32 rounded-md dots opacity-40" />

      {/* Content */}
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        {/* Small logo above title */}
        <Image
          src="/logo.png"
          alt="Fivra Logo"
          width={88}
          height={88}
          className="mx-auto mb-6 drop-shadow"
          priority
        />

        <h1 className="text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#0062E3] to-[#7A3BFF]">
          Fivra
        </h1>

        <p className="text-xl text-[#2C3A57] mb-8">
          Your 24/7 Operations Assistant. Stop drowning in admin — we draft, you approve.
        </p>

        <Link
          href="#contact"
          className="inline-block px-8 py-3 rounded-full text-white font-medium shadow-md transition hover:opacity-90 bg-gradient-to-r from-[#0062E3] to-[#7A3BFF]"
        >
          Request a Demo
        </Link>
      </div>
    </section>
  );
}
