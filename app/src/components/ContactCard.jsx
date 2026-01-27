export default function ContactCard() {
    return (
        <section className=" mx-auto max-w-md border bg-white/70 p-6 rounded-xl text-center">
            <h3 className="text-lg font-medium mb-2">
                Soy Alba ❤️
            </h3>

            <p className="text-sm mb-4">
                Si te gusta alguna de mis manualidades o quieres algo parecido,
                puedes ponerte en contacto conmigo y lo vemos con calma.
            </p>

            <div className="flex flex-col gap-3">
                <a
                    href="https://instagram.com/"
                    target="_blank"
                    className="border rounded-full py-2 text-sm hover:bg-white transition"
                >
                    Mi perfil de Instagram
                </a>
            </div>
        </section>
    );
}