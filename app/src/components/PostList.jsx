"use client";


import { useState } from "react";
import PostCard from "./PostCard";
import ImageModal from "./ImageModal";


const INITIAL_LIMIT = 4;


export default function PostList({ posts }) {
    const [activeCategory, setActiveCategory] = useState("all");
    const [showAll, setShowAll] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);


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
                            setShowAll(false);
                        }}
                    />
                ))}
            </div>


            {/* Grid */}
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto w-full">
                {visiblePosts.map((post) => (
                    <PostCard
                        key={post._id}
                        post={post}
                        onClick={setSelectedPost}
                    />
                ))}
            </div>


            {/* Botón ver más / ver menos */}
            {filteredPosts.length > INITIAL_LIMIT && (
                <button
                    onClick={() => {
                        setShowAll(!showAll);


                        if (showAll) {
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            });
                        }
                    }}
                    className="mx-auto px-6 py-2 border rounded-xl text-lg bg-white/70 hover:bg-white transition"
                >
                    {showAll ? "Ver menos" : "Ver más"}
                </button>
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
            className={`px-4 py-2 rounded-xl border transition
${isActive
                    ? "bg-[#5b4a3f] text-white"
                    : "bg-white/60 text-[#5b4a3f]"
                }`}
        >
            {label}
        </button>
    );
}