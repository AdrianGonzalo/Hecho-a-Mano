"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const menuRef = useRef(null);

    const goToSection = (id) => {
        setOpen(false);

        if (window.location.pathname !== "/") {
            router.push(`/#${id}`);
        } else {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }
    };

    // 🔥 Cerrar al hacer click fuera
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav className="sticky top-0 z-50 border-b border-[#DAD1C8] bg-[#F6F2EE]">

            <div className="flex justify-between items-center p-2 max-w-6xl mx-auto">

                {/* Logo */}
                <div
                    onClick={() => {
                        if (window.location.pathname !== "/") {
                            router.push("/");
                        } else {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                    }}
                    className="w-10 h-10 rounded-full border border-[#DAD1C8] flex items-center justify-center cursor-pointer"
                >
                    <img src="/Logo.png" alt="Logo" className="w-6 h-6" />
                </div>


                {/* Burger animado */}
                <button
                    onClick={() => setOpen(!open)}
                    className="relative w-8 h-8 flex flex-col justify-center items-center"
                    aria-label="Abrir menú"
                >
                    <span
                        className={`absolute w-6 h-0.5 bg-[#264037] transition-all duration-300 
            ${open ? "rotate-45" : "-translate-y-2"}`}
                    />
                    <span
                        className={`absolute w-6 h-0.5 bg-[#264037] transition-all duration-300 
            ${open ? "opacity-0" : ""}`}
                    />
                    <span
                        className={`absolute w-6 h-0.5 bg-[#264037] transition-all duration-300 
            ${open ? "-rotate-45" : "translate-y-2"}`}
                    />
                </button>
            </div>

            {/* Overlay suave */}
            <div
                className={`fixed inset-0 bg-black/20 transition-opacity duration-300 
        ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            />

            {/* Panel animado */}
            <div
                ref={menuRef}
                className={`absolute top-full left-0 w-full bg-[#F6F2EE] 
        border-t border-[#DAD1C8] shadow-md font-serif
        transform transition-all duration-300 origin-top
        ${open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}`}
            >
                <ul className="flex flex-col px-6 py-6 space-y-4 text-sm text-[#7A8F87] max-w-6xl mx-auto">

                    <li>
                        <button
                            onClick={() => goToSection("galeria")}
                            className="hover:text-[#C37B55] transition"
                        >
                            Galería
                        </button>
                    </li>

                    <li>
                        <button
                            onClick={() => goToSection("precios")}
                            className="hover:text-[#C37B55] transition"
                        >
                            Precios
                        </button>
                    </li>

                    <li>
                        <a
                            href="/aboutme"
                            onClick={() => setOpen(false)}
                            className="hover:text-[#C37B55] transition"
                        >
                            Sobre mí
                        </a>
                    </li>

                    <li>
                        <button
                            onClick={() => goToSection("contacto")}
                            className="hover:text-[#C37B55] transition"
                        >
                            Contacto
                        </button>
                    </li>

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
