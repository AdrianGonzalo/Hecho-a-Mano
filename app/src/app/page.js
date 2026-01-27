import { sanityClient } from "./lib/sanity";
import { postsQuery } from "./lib/queries";

import PostList from "@/components/PostList";
import ContactCard from "@/components/ContactCard";

export default async function Home() {
  const posts = await sanityClient.fetch(postsQuery);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col items-center flex-grow gap-12 font-titulo mt-10 p-4">
        <PostList posts={posts} />
        <ContactCard />
      </main>
    </div>
  );
}