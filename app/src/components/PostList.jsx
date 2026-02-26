"use client";

import { useState, useEffect } from "react";
import PostCard from "./PostCard";
import ImageModal from "./ImageModal";

export default function PostList({ posts = [] }) {
    const [activeCategory, setActiveCategory] = useState("all");
    const [showAll, setShowAll] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);
    const [initialLimit, setInitialLimit] = useState(4);

    // Detectar tamaño de pantalla y actualizar límite
    useEffect(() => {
        const updateLimit = () => {
            const width = window.innerWidth;

            if (width >= 1536) {
                setInitialLimit(10); // 2xl
            } else if (width >= 1280) {
                setInitialLimit(8); // xl
            } else if (width >= 1024) {
                setInitialLimit(6); // lg
            } else {
                setInitialLimit(4); // móvil
            }
        };

        updateLimit();
        window.addEventListener("resize", updateLimit);

        return () => window.removeEventListener("resize", updateLimit);
    }, []);

    // Seguridad: solo posts con imagen válida
    const safePosts = posts.filter(
        (post) => typeof post.image === "string"
    );

    // Contador por categoría
    const categoryCounts = safePosts.reduce((acc, post) => {
        if (!post.category) return acc;
        acc[post.category] = (acc[post.category] || 0) + 1;
        return acc;
    }, {});

    // Lista de categorías dinámicas
    const categories = [
        "all",
        ...new Set(safePosts.map((p) => p.category)),
    ];

    // Posts filtrados
    const filteredPosts =
        activeCategory === "all"
            ? safePosts
            : safePosts.filter(
                (post) => post.category === activeCategory
            );

    // Límite dinámico
    const visiblePosts = showAll
        ? filteredPosts
        : filteredPosts.slice(0, initialLimit);

    return (
        <section
            id="galeria"
            className="w-full flex flex-col gap-8"
        >

            {/* Header Sticky */}
            <div
                className="sticky top-0 z-30 w-full py-4"
                style={{ backgroundColor: "var(--bg-main)" }}
            >
                <div className="max-w-6xl mx-auto px-6 mt-12">

                    <div className="text-center mb-4">
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#264037] tracking-tight">
                            Galería
                        </h2>
                        <p className="text-[#264037]/70 text-sm py-2">
                            Explora y filtra mis trabajos.
                        </p>
                    </div>

                    {/* Filtros con contador */}
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((cat) => {
                            const count =
                                cat === "all"
                                    ? safePosts.length
                                    : categoryCounts[cat] || 0;

                            return (
                                <FilterButton
                                    key={cat}
                                    label={
                                        cat === "all"
                                            ? `Todo (${count})`
                                            : `${cat} (${count})`
                                    }
                                    value={cat}
                                    active={activeCategory}
                                    onClick={(value) => {
                                        setActiveCategory(value);
                                        setShowAll(false);
                                    }}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 max-w-7xl mx-auto w-full">
                    {visiblePosts.map((post) => (
                        <PostCard
                            key={post._id}
                            post={post}
                            onClick={setSelectedPost}
                        />
                    ))}
                </div>
            </div>

            {/* Botón VER MÁS */}
            {filteredPosts.length > initialLimit && !showAll && (
                <div className="px-6">
                    <button
                        onClick={() => setShowAll(true)}
                        className="mx-auto block px-6 py-2 rounded-full border border-[#DAD1C8] bg-white/60 hover:bg-white transition text-sm"
                    >
                        Ver más
                    </button>
                </div>
            )}

            {/* Botón VER MENOS */}
            {filteredPosts.length > initialLimit && showAll && (
                <div className="sticky bottom-6 flex justify-center z-10">
                    <button
                        onClick={() => {
                            setShowAll(false);

                            const section = document.getElementById("galeria");
                            section?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="px-6 py-3 rounded-full bg-[#2F4B41] text-white shadow-lg"
                    >
                        Ver menos
                    </button>
                </div>
            )}

            {/* Modal */}
            <ImageModal
                post={selectedPost}
                onClose={() => setSelectedPost(null)}
            />
        </section>
    );
}

function FilterButton({ label, value, active, onClick }) {
    const isActive = active === value;

    return (
        <button
            onClick={() => onClick(value)}
            className={`px-5 py-2 rounded-full text-sm transition whitespace-nowrap
            ${isActive
                    ? "bg-[#2F4B41] text-white shadow"
                    : "bg-[#F1EBE4] text-[#264037]/70 hover:bg-[#E5DED6]"
                }
            `}
        >
            {label}
        </button>
    );
}