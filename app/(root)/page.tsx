import Image from "next/image";
import SearchForm from "@/components/SearchForm";
import BlogCard from "@/components/BlogCard";
import { BLOGS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

interface BlogType {
  title: string;
  _id: number;
  views: number;
  _createdAt: string;
  author: { _id: number; name: string; image: string; info: string };
  image: string;
  category: string;
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null };

  const blogs = await sanityFetch({ query: BLOGS_QUERY, params });

  return (
    <div className="center flex-col py-14 gap-10">
      <section className="w-full center relative">
        <Image
          src={"/home.svg"}
          width={900}
          height={500}
          alt="home-background"
        />
        <Image
          src={"/rocket.svg"}
          width={300}
          height={50}
          alt="home-background"
          className="absolute top-10 right-20"
        />
      </section>
      <section>
        <p className="font-merriweather font-semibold text-4xl text-center">
          Show the World What You're Building.
        </p>
        <p className="font-hyperlegible font-medium text-center text-4xl pt-3">
          Your Startup. Your Story. Your Success.
        </p>
        <div className="border border-gray-500 font-hyperlegible text-center center flex-col p-7 mt-3 w-[800px]">
          <span>
            🚀 A platform where startup creators showcase their innovations,
            connect with investors, and gain the visibility they deserve.
          </span>
          <SearchForm query={query} />
        </div>
      </section>
      <section className="center flex-col">
        <p className="text-4xl font-bold font-mono">
          {query ? `Search results for ${query}` : "All Articles"}
        </p>
        <Image
          src={"/curly-divider.webp"}
          alt="curly-divider"
          width={200}
          height={10}
        />

        {blogs?.data?.length > 0 ? (
          <ul className="grid grid-cols-3 gap-[20px] mt-4">
            {blogs?.data.map((blog: BlogType) => {
              return <BlogCard blog={blog} index={blog._id} />;
            })}
          </ul>
        ) : (
          <div className="center flex-col w-full">
            <Image
              src={"/not-found.jpg"}
              alt="not-found"
              width={400}
              height={400}
            />
          </div>
        )}
      </section>
    </div>
  );
}
