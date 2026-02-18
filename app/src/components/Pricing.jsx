"use client";

import { useState } from "react";

const pricingData = {
    Piedras: [
        { label: "Pequeña (5-8 cm)", price: "8 - 15 €" },
        { label: "Mediana (8-12 cm)", price: "15 - 25 €" },
        { label: "Grande (12+ cm)", price: "25 - 45 €" },
    ],
    Madera: [
        { label: "Llaveros", price: "6 - 10 €" },
        { label: "Cuadros pequeños", price: "20 - 35 €" },
        { label: "Carteles personalizados", price: "25 - 50 €" },
    ],
    Macetas: [
        { label: "Mini decoradas", price: "10 - 18 €" },
        { label: "Medianas pintadas", price: "18 - 30 €" },
        { label: "Personalizadas grandes", price: "30 - 60 €" },
    ],
};

export default function PricingSection() {
    const categories = Object.keys(pricingData);
    const [active, setActive] = useState(categories[0]);

    return (
        <section
            id="precios"
            className="w-full max-w-3xl py-10 px-6 rounded-xl mt-20"
            style={{ backgroundColor: "var(--bg-pricing)" }}
        >
            <div className="max-w-4xl mx-auto">

                {/* Eyebrow */}
                <p className="text-xs tracking-[0.35em] uppercase text-[#C37B55] mb-4">
                    Orientativo
                </p>

                {/* Title */}
                <h2 className="text-4xl font-serif font-bold text-[#264037] mb-6">
                    Precios
                </h2>

                {/* Description */}
                <p className="text-[#264037]/70 mb-10 max-w-2xl ">
                    Cada pieza es única, los precios varían según tamaño y complejidad.
                </p>

                {/* Tabs */}
                <div className="flex gap-4 overflow-x-auto pb-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={`px-6 py-2 rounded-full text-sm transition whitespace-nowrap
                ${active === cat
                                    ? "bg-[#2F4B41] text-white shadow"
                                    : "bg-white/60 text-[#264037]/70 border border-[#DAD1C8]"
                                }
              `}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Price Card */}
                <div className="bg-white/40 border border-[#DAD1C8] rounded-2xl overflow-hidden transition-all duration-300">

                    {pricingData[active].map((item, index) => (
                        <PriceRow
                            key={index}
                            label={item.label}
                            price={item.price}
                            isLast={index === pricingData[active].length - 1}
                        />
                    ))}

                </div>

                {/* Bottom note */}
                <p className="text-center text-[#264037]/70 mt-10 text-xs">
                    Encargos personalizados bajo consulta —{" "}
                    <a
                        href="#contacto"
                        className="text-[#C37B55] hover:underline"
                    >
                        Escríbeme
                    </a>
                </p>

            </div>
        </section>
    );
}

function PriceRow({ label, price, isLast }) {
    return (
        <div
            className={`flex justify-between items-center px-8 py-6 text-[#264037]
        ${!isLast && "border-b border-[#DAD1C8]"}
      `}
        >
            <span>{label}</span>
            <span className="text-[#C37B55] font-medium">
                {price}
            </span>
        </div>
    );
}
