import Image from "next/image";
import SearchForm from "@/components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  return (
    <div className="center flex-col py-14">
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
      <section className="pt-10">
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
    </div>
  );
}
