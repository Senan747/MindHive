import React from "react";
import Image from "next/image";
import { formatDate } from "@/lib/utils";

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

const BlogCard = ({ blog }: { blog: BlogType }) => {
  return (
    <li className="flex items-start p-[16px] flex-col  border border-[rgb(232,232,234)] rounded-2xl w-[392px] h-[500px]">
      <div className="w-[360px] h-[240px]">
        <img
          src={blog?.blog_image}
          alt=""
          className="w-full h-full rounded-md"
        />
      </div>
      <div className="rounded-lg text-[#4B6BFB] bg-[#F6F7FF] text-[14px] font-sans py-[4px] px-[10px] mt-[12px] mb-[8px]">
        <span>{blog?.category}</span>
      </div>
      <div className="h-[80px]">
        <span className="text-[24px] font-semibold font-sans h-[80px]">
          {blog?.title?.length > 60
            ? `${blog?.title.slice(0, 60)}...`
            : `${blog?.title}`}
        </span>
      </div>
      <div className="mt-3 flex gap-2">
        <img
          src={blog?.profile_image}
          alt="profile-image"
          className="w-7 h-7 rounded-full object-cover"
        />
        <span className="text-[#97989F] text-[16px] font-sans">
          {blog?.author?.name}
        </span>
      </div>
      <div className="pt-3 flex flex-row items-center justify-between w-full">
        <span className="text-[#97989F] text-[16px] font-sans">
          {formatDate(blog?.createdAt)}
        </span>
        <div className="flex flex-row gap-1">
          <Image src="/eye-icon.png" alt="eye-icon" width={20} height={20} />
          <span className="text-[#97989F] text-[16px] font-sans">
            {blog?.view}
          </span>
        </div>
      </div>
    </li>
  );
};

export default BlogCard;
