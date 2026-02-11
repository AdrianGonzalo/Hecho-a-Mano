"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function ImageModal({ post, onClose }) {
    useEffect(() => {
        if (post) document.body.style.overflow = "hidden";
        return () => (document.body.style.overflow = "");
    }, [post]);

    if (!post || typeof post.image !== "string") return null;

    return (
        <div
            className="fixed inset-0 z-50 bg-[#2F4B41]/80 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-3xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Botón cerrar */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10
             w-11 h-11 rounded-full
             bg-white/90 text-[#264037]
             flex items-center justify-center
             shadow-md
             hover:bg-white hover:scale-105
             transition-all duration-200"
                >
                    <X size={18} strokeWidth={2.5} />
                </button>


                {/* Imagen */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                    <Image
                        src={post.image}
                        alt={post.title || "Imagen ampliada"}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Info */}
                <div className="mt-6 text-center text-white">
                    <h3 className="font-serif text-2xl mb-3">
                        {post.title}
                    </h3>

                    {post.description && (
                        <p className="text-white/80 max-w-xl mx-auto">
                            {post.description}
                        </p>
                    )}

                    {post.category && (
                        <span className="inline-block mt-4 px-4 py-1 text-xs rounded-full bg-white/20">
                            {post.category}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
