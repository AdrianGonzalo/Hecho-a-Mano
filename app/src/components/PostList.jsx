"use client";

import { useState } from "react";
import PostCard from "./PostCard";
import ImageModal from "./ImageModal";

const INITIAL_LIMIT = 4;

export default function PostList({ posts = [] }) {
    const [activeCategory, setActiveCategory] = useState("all");
    const [showAll, setShowAll] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);

    const safePosts = posts.filter(
        (post) => typeof post.image === "string"
    );

    const categories = [
        "all",
        ...new Set(safePosts.map((p) => p.category)),
    ];

    const filteredPosts =
        activeCategory === "all"
            ? safePosts
            : safePosts.filter((post) => post.category === activeCategory);

    const visiblePosts = showAll
        ? filteredPosts
        : filteredPosts.slice(0, INITIAL_LIMIT);

    return (
        <section id="galeria" className="w-full py-5 flex flex-col gap-8">

            <div
                className="sticky top-0 z-30 w-full py-4"
                style={{ backgroundColor: "var(--bg-main)" }}
            >
                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center mb-4">
                        <h2 className="text-4xl font-serif text-[#264037]">
                            Galería
                        </h2>
                        <p className="text-[#264037]/70 text-sm">
                            Explora y filtra mis trabajos.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((cat) => (
                            <FilterButton
                                key={cat}
                                label={cat === "all" ? "Todo" : cat}
                                value={cat}
                                active={activeCategory}
                                onClick={(value) => {
                                    setActiveCategory(value);
                                    setShowAll(false);
                                }}
                            />
                        ))}
                    </div>

                </div>
            </div>

            {/* Grid */}
            <div className="px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto w-full">
                    {visiblePosts.map((post) => (
                        <PostCard
                            key={post._id}
                            post={post}
                            onClick={setSelectedPost}
                        />
                    ))}
                </div>
            </div>

            {/* Botón VER MÁS normal */}
            {filteredPosts.length > INITIAL_LIMIT && !showAll && (
                <div className="px-6">
                    <button
                        onClick={() => setShowAll(true)}
                        className="mx-auto block px-6 py-2 rounded-full border border-[#DAD1C8] bg-white/60 hover:bg-white transition text-sm"
                    >
                        Ver más
                    </button>
                </div>
            )}

            {/* Botón VER MENOS sticky abajo */}
            {filteredPosts.length > INITIAL_LIMIT && showAll && (
                <div className="sticky bottom-6 flex justify-center z-10">
                    <button
                        onClick={() => {
                            setShowAll(false);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="px-6 py-3 rounded-full 
                                   bg-[#2F4B41] text-white 
                                   shadow-lg hover:scale-105 
                                   transition"
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
