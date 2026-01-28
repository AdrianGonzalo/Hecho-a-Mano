"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function ImageModal({ post, onClose }) {
    useEffect(() => {
        if (post) document.body.style.overflow = "hidden";
        return () => (document.body.style.overflow = "");
    }, [post]);

    if (!post || typeof post.image !== "string") return null;

    return (
        <div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div
                className="bg-white w-full max-w-[90vw] md:max-w-[70vw] lg:max-w-[60vw] p-4 border-black border-double"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative w-full aspect-square max-h-[80vh]">
                    <Image
                        src={post.image}
                        alt={post.title || "Imagen ampliada"}
                        fill
                        className="object-contain"
                    />
                </div>

                <h3 className="mt-4 text-center text-lg font-medium">
                    {post.title}
                </h3>

                <button
                    onClick={onClose}
                    className="mt-4 mx-auto block text-sm underline"
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
}