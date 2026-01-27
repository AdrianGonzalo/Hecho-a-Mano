import Image from "next/image"

export default function PostCard({ post }) {
    return (
        <article className="border-4 border-double bg-white ">
            <div className="relative w-auto h-[100px]">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover border-double"
                />
            </div>
        </article>
    )
}