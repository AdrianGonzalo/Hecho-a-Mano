"use client";

import Image from "next/image";

export default function Aboutme() {
    return (
        <section
            id="sobre-mi"
            className="w-full py-20"
            style={{ backgroundColor: "var(--bg-main)" }}
        >
            <div className="max-w-6xl mx-auto px-6">

                {/* Layout responsive */}
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Imagen */}
                    <div className="relative">
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-md">
                            <Image
                                src="/foto.png"
                                alt="Trabajando en manualidades"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Badge */}
                        <span className="absolute bottom-4 right-4 bg-[#465A52] text-white text-xs px-4 py-2 rounded-lg shadow">
                            Desde 2022
                        </span>
                    </div>

                    {/* Texto */}
                    <div>

                        {/* Eyebrow */}
                        <p className="text-xs tracking-[0.35em] uppercase text-[#C37B55] mb-4">
                            Sobre mí
                        </p>

                        {/* Título */}
                        <h2 className="text-4xl font-serif text-[#264037] leading-tight mb-6">
                            Cada pieza lleva su tiempo y su mimo
                        </h2>

                        {/* Párrafos */}
                        <div className="space-y-5 text-[#264037]/80">
                            <p>
                                Desde pequeña siempre me ha fascinado crear cosas con las manos.
                                Empecé pintando piedras que encontraba en el río y hoy trabajo
                                con tejas, madera, hilo y papel. Cada material me enseña algo nuevo.
                            </p>

                            <p>
                                No son cosas perfectas de fábrica: son objetos con personalidad
                                propia, hechos sin prisa y con mucho cariño. Eso es lo que más me
                                gusta de lo artesanal.
                            </p>
                        </div>

                        {/* Lista valores */}
                        <div className="flex flex-wrap gap-6 mt-8 text-sm text-[#264037]/70">

                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#C37B55] rounded-full"></span>
                                <span>La naturaleza me inspira</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#C37B55] rounded-full"></span>
                                <span>Arte popular y folk</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#C37B55] rounded-full"></span>
                                <span>Tradición artesana</span>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
