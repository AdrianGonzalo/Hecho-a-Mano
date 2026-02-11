export default function ContactCard() {
    return (
        <section id="contacto" className="mx-auto max-w-3xl rounded-xl p-10 mt-10 text-[#F6F2EE] "
            style={{ backgroundColor: "var(--bg-modal)" }}
        >

            {/* Eyebrow */}
            <p className="text-xs tracking-[0.35em] uppercase opacity-70 mb-6">
                Contacto
            </p>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6 leading-tight">
                ¿Te gusta algo? Hablamos
            </h2>

            {/* Description */}
            <p className="text-base opacity-80 leading-relaxed max-w-xl mb-10">
                Si quieres una pieza de las que ves o un encargo personalizado, escríbeme sin compromiso.
            </p>

            {/* Contact Items */}
            <div className="flex flex-col gap-8">

                {/* Email */}
                <a
                    href="mailto:hola@manoscreativas.es"
                    className="flex items-center gap-5 group"
                >
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center transition group-hover:bg-white/20">
                        ✉️
                    </div>
                    <div>
                        <p className="font-medium text-lg">
                            hola@ejemplo.es
                        </p>
                        <p className="text-sm opacity-60">
                            Email
                        </p>
                    </div>
                </a>

                {/* Instagram */}
                <a
                    href="https://instagram.com/"
                    target="_blank"
                    className="flex items-center gap-5 group"
                >
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center transition group-hover:bg-white/20">
                        📸
                    </div>
                    <div>
                        <p className="font-medium text-lg">
                            @ejemplo
                        </p>
                        <p className="text-sm opacity-60">
                            Instagram
                        </p>
                    </div>
                </a>

                {/* WhatsApp */}
                <a
                    href="https://wa.me/34600000000"
                    target="_blank"
                    className="flex items-center gap-5 group"
                >
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center transition group-hover:bg-white/20">
                        📞
                    </div>
                    <div>
                        <p className="font-medium text-lg">
                            +34 600 000 000
                        </p>
                        <p className="text-sm opacity-60">
                            WhatsApp
                        </p>
                    </div>
                </a>

            </div>
        </section>
    );
}
