import Image from "next/image";

export default function PostCard({ post, onClick }) {
    if (typeof post.image !== "string") return null;

    return (
        <article
            onClick={() => onClick(post)}
            className="cursor-pointer group"
        >
            <div className="overflow-hidden rounded-xl bg-white border border-[#E5DED6] shadow-xl">

                <div className="relative aspect-square w-full">
                    <Image
                        src={post.image}
                        alt={post.title || "Imagen del post"}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-500"
                    />
                </div>

            </div>

            <h3 className="mt-4 font-serif font-semibold text-lg text-[#264037]">
                {post.title}
            </h3>

            {post.description && (
                <p className="text-sm text-[#264037]/70 line-clamp-2">
                    {post.description}
                </p>
            )}

            {post.category && (
                <span className="inline-block mt-3 text-xs px-3 py-1 rounded-full bg-[#F1EBE4] text-[#264037]/70">
                    {post.category}
                </span>
            )}
        </article>
    );
}
