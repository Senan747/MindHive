import React from "react";
import Form from "next/form";
import Image from "next/image";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form
      action="/"
      scroll={false}
      className="flex border justify-between border-black h-[54px] w-[280px] mt-5"
    >
      <input
        type="text"
        name="query"
        defaultValue={query}
        className="pl-8 min-w-[80%] outline-none"
        placeholder="Search Startups"
      />
      <button type="submit">
        <Image
          src={"/eye.svg"}
          alt="search-icon"
          width={50}
          height={50}
          className="bg-black p-1 h-full"
        />
      </button>
    </Form>
  );
};

export default SearchForm;
