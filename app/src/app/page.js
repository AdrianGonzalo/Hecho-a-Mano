import { sanityClient } from "./lib/sanity";
import { postsQuery } from "./lib/queries";

import Hero from "@/components/Hero";
import PostList from "@/components/PostList";
// import PricingSection from "@/components/Pricing";
import ContactCard from "@/components/ContactCard";

export default async function Home() {
  const posts = await sanityClient.fetch(postsQuery);

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      <main className="flex flex-col items-center flex-grow font-titulo px-4">
        <PostList posts={posts} />
        {/* <PricingSection /> */}
        <ContactCard />
      </main>

    </div>
  );
}
