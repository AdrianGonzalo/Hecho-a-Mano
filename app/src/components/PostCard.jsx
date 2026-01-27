import Image from "next/image";

export default function PostCard({ post, onClick }) {
    if (!post.image) return null;

    return (
        <article
            onClick={() => onClick(post)}
            className="border-4 border-double bg-white cursor-pointer hover:opacity-90 transition"
        >
            <div className="relative aspect-square w-full">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                />
            </div>
        </article>
    );
}