export default function Footer() {
  return (
    <footer className="relative bg-[#003E9A] text-white overflow-hidden">
      {/* bottom gradient strip */}
      <div className="absolute left-0 right-0 bottom-0 h-3 brand-gradient opacity-90" />

      {/* centered content */}
      <div className="relative mx-auto max-w-6xl px-6 md:px-8 py-8 flex flex-col items-center justify-center gap-4">
        <div className="dots h-10 w-28 rounded opacity-70" />
        <p className="text-sm opacity-90 text-center">
          © {new Date().getFullYear()} Fivra
        </p>
      </div>
    </footer>
  )
}
