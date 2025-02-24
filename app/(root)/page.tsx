import Image from "next/image";
import SearchForm from "@/components/SearchForm";
import BlogCard from "@/components/BlogCard";

interface BlogType {
  title: string;
  id: number;
  view: number;
  createdAt: string;
  author: { id: number; name: string };
  profile_image: string;
  blog_image: string;
  category: string;
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const blogs = [
    {
      id: 1,
      createdAt: new Date().toISOString(),
      author: { id: 1, name: "Sanan" },
      title:
        "The Impact of Technology on the Workplace: method returns selected elements in an array, as a new array.",
      view: 77,
      profile_image:
        "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
      blog_image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
      category: "Technology",
    },
    {
      id: 2,
      createdAt: new Date().toISOString(),
      author: { id: 2, name: "Sanan" },
      title: "React js",
      view: 77,
      profile_image:
        "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      blog_image:
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5mb3JtYXRpb24lMjB0ZWNobm9sb2d5fGVufDB8fDB8fHww",
      category: "Technology",
    },
    {
      id: 3,
      createdAt: new Date().toISOString(),
      author: { id: 2, name: "Sanan" },
      title: "React js",
      view: 77,
      profile_image:
        "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      blog_image:
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5mb3JtYXRpb24lMjB0ZWNobm9sb2d5fGVufDB8fDB8fHww",
      category: "Technology",
    },
    {
      id: 4,
      createdAt: new Date().toISOString(),
      author: { id: 2, name: "Sanan" },
      title: "React js",
      view: 77,
      profile_image:
        "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      blog_image:
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5mb3JtYXRpb24lMjB0ZWNobm9sb2d5fGVufDB8fDB8fHww",
      category: "Technology",
    },
  ];

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
        <ul className="grid grid-cols-3 gap-[20px] mt-4">
          {blogs?.length > 0
            ? blogs.map((blog: BlogType, index: number) => {
                return <BlogCard blog={blog} key={blog?.id} />;
              })
            : "No article found"}
        </ul>
      </section>
    </div>
  );
}
