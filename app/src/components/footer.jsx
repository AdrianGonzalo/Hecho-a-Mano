export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="text-center py-12 px-6 border-t-2"
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
        <p className="text-xs text-[#264037]/70 mb-6">
          Hecho a Mano con mucho cariño © {currentYear} .
        </p>

        {/* Links */}
        <div className="flex justify-center gap-8 text-sm text-[#264037]/80">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C37B55] transition-colors"
          >
            Instagram
          </a>

          <a
            href="mailto:hola@manoscreativas.es"
            className="hover:text-[#C37B55] transition-colors"
          >
            Email
          </a>
        </div>

      </div>
    </footer>
  );
}
