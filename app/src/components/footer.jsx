import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="text-center py-6 px-6 border-t-2"
      style={{
        borderColor: "var(--border-soft)",
        backgroundColor: "var(--bg-pricing)"
      }}
    >
      <div className="max-w-4xl mx-auto">

        {/* Brand */}
        <h3 className="font-serif text-2xl text-[#264037] mb-3">
          Hecho a mano
        </h3>

        {/* Tagline */}
        <p className="text-xs text-[#264037]/70 mb-3">
          Hecho a Mano con mucho cariño © {currentYear} .
        </p>

        <Link href="/legal" className="text-xs text-[#264037]/70 underline">
          Aviso Legal y Privacidad
        </Link>

      </div>
    </footer>
  );
}
