"use client";

import { useEffect, useState } from "react";

const words = ["piedras", "madera", "ideas", "sueños"];

export default function Hero() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="inicio"
            className="relative mt-10 min-h-[85vh] flex flex-col justify-between bg-[#FAF8F6] px-4 pb-8">
            {/* Contenido centrado */}
            <div className="flex flex-col items-center justify-center flex-grow text-center max-w-4xl lg:max-w-5xl mx-auto w-full">

                {/* Logo */}
                <div className="flex justify-center mb-8 md:mb-10">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-double border-[#DAD1C8] flex items-center justify-center">
                        <img
                            src="/Logo.png"
                            alt="Hecho a mano"
                            className="w-20 h-20 md:w-24 md:h-24"
                        />
                    </div>
                </div>

                {/* Eyebrow */}
                <div className="flex flex-col items-center mb-8 md:mb-10">
                    <p className="text-xs tracking-[0.3em] text-[#C37B55] mb-2">
                        MANOS CREATIVAS
                    </p>
                    <span className="block w-16 h-px bg-[#DAD1C8]" />
                </div>

                {/* Title */}
                <h1
                    className="
                        text-[clamp(3rem,7vw,6rem)]
                        leading-[0.95]
                        md:leading-[0.9]
                        font-semibold
                        font-serif
                        text-[#264037]
                        tracking-tight
                    "
                >
                    Hecho <br />
                    <span style={{ color: "var(--text-accent)" }}>
                        a mano
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="mt-6 text-base md:text-lg lg:text-xl opacity-80">
                    Dando vida a{" "}
                    <span className="text-accent transition-opacity duration-500 font-bold">
                        {words[index]}
                    </span>
                </p>

                {/* Quote */}
                <div className="mt-10 md:mt-14 flex justify-center">
                    <blockquote className="max-w-xl bg-[#F6F2EE] border border-[#DAD1C8] rounded-xl px-6 py-5 text-sm md:text-base text-[#264037]/80">
                        <p className="italic font-semibold">
                            “Cada pieza cuenta una historia, cada detalle guarda un pedacito
                            de paciencia y cariño.”
                        </p>

                        <div className="flex items-center mt-3 gap-3 justify-center">
                            <span className="block w-8 h-px bg-[#DAD1C8]" />
                            <p className="text-sm text-[#264037]/70">
                                Hecho a mano
                            </p>
                        </div>
                    </blockquote>
                </div>

                {/* Stats */}
                <div className="mt-12 md:mt-16 grid grid-cols-3 gap-6 md:gap-10 text-center text-sm md:text-base">
                    <div>
                        <p className="text-lg md:text-2xl font-semibold text-[#264037] font-serif">
                            3
                        </p>
                        <p className="uppercase tracking-wide text-[#264037]/60">
                            Técnicas
                        </p>
                    </div>

                    <div>
                        <p className="text-lg md:text-2xl font-semibold text-[#C37B55] font-serif">
                            100%
                        </p>
                        <p className="uppercase tracking-wide text-[#264037]/60">
                            Artesanal
                        </p>
                    </div>

                    <div>
                        <p className="text-lg md:text-2xl font-semibold text-[#264037] font-serif">
                            Único
                        </p>
                        <p className="uppercase tracking-wide text-[#264037]/60">
                            Cada pieza
                        </p>
                    </div>
                </div>

            </div>

            {/* Links inferiores */}
            <div className="flex justify-around text-[10px] tracking-[0.3em] uppercase text-[#264037] mt-20">

                <a
                    href="#galeria"
                    className="group flex flex-col items-center gap-2 hover:text-[#C37B55] transition-colors"
                >
                    <span>Explorar galería</span>
                    <span className="animate-bounce group-hover:animate-none">
                        ↓
                    </span>
                </a>

                <a
                    href="#precios"
                    className="group flex flex-col items-center gap-2 hover:text-[#C37B55] transition-colors"
                >
                    <span>Ver precios</span>
                    <span className="animate-bounce group-hover:animate-none">
                        ↓
                    </span>
                </a>

            </div>
        </section>
    );
}
