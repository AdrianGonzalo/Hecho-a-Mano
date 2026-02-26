export default function ContactCard() {
    return (
        <section
            id="contacto"
            className="mx-auto max-w-2xl rounded-xl p-6 mt-16 text-center text-[#F6F2EE] mb-16 mt-30"
            style={{ backgroundColor: "var(--bg-modal)" }}
        >
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
                ¿Te gusta algo?
            </h2>

            <p className="opacity-80 mb-10">
                Escríbeme directamente por WhatsApp y hablamos sin compromiso.
            </p>

            <a
                href="https://wa.me/34633756440?text=Hola,%20me%20gustaría%20hacer%20un%20encargo%20personalizado.%20¿Podemos%20hablar?"
                target="_blank"
                className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-green-500 hover:bg-green-600 transition text-white text-lg font-medium shadow-lg hover:scale-105"
            >
                📱 +34 633 75 64 40
            </a>
        </section>
    );
}