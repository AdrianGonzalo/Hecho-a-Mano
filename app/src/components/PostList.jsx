"use client";

import { useState } from "react";
import PostCard from "./PostCard";

const INITIAL_LIMIT = 4;

export default function PostList({ posts }) {
    const [activeCategory, setActiveCategory] = useState("all");
    const [showAll, setShowAll] = useState(false);

    const filteredPosts =
        activeCategory === "all"
            ? posts
            : posts.filter((post) => post.category === activeCategory);

    const visiblePosts = showAll
        ? filteredPosts
        : filteredPosts.slice(0, INITIAL_LIMIT);

    return (
        <section className="w-full flex flex-col gap-10">
            {/* Filtros */}
            <div className="flex gap-3 justify-center">
                {["all", "pirograbado", "piedra", "otros"].map((cat) => (
                    <FilterButton
                        key={cat}
                        label={
                            cat === "all"
                                ? "Todo"
                                : cat.charAt(0).toUpperCase() + cat.slice(1)
                        }
                        value={cat}
                        active={activeCategory}
                        onClick={(value) => {
                            setActiveCategory(value);
                            setShowAll(false); // reset al cambiar filtro
                        }}
                    />
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 gap-4">
                {visiblePosts.map((post) => (
                    <PostCard key={post._id} post={post} />
                ))}
            </div>

            {/* Botón ver más / ver menos */}
            {filteredPosts.length > INITIAL_LIMIT && (
                <button
                    onClick={() => {
                        setShowAll(!showAll);

                        // Al volver a "ver menos", subimos suavemente
                        if (showAll) {
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            });
                        }
                    }}
                    className="mx-auto px-6 py-2 border rounded-full text-sm bg-white/70 hover:bg-white transition"
                >
                    {showAll ? "Ver menos" : "Ver más manualidades"}
                </button>
            )}
        </section>
    );
}

function FilterButton({ label, value, active, onClick }) {
    const isActive = active === value;

    return (
        <button
            onClick={() => onClick(value)}
            className={`px-4 py-2 rounded-full border text-sm transition
        ${isActive
                    ? "bg-[#5b4a3f] text-white"
                    : "bg-white/60 text-[#5b4a3f]"
                }`}
        >
            {label}
        </button>
    );
}