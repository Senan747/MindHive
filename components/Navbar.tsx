import React from "react";
import Link from "next/link";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="bg-white px-5 py-1 border-b-2 font-hyperlegible">
      <nav className="flex items-center justify-between h-[50px]">
        <Link href="/" className="center">
          <Image src="/logo.svg" alt="logo" width={25} height={25} />
          <span className="font-hyperlegible text-xl font-extrabold bg-gradient-to-r from-blue-800 to-purple-600 text-transparent bg-clip-text tracking-wide ml-3">
            M i n d H i v e
          </span>
        </Link>

        <div className="text-black">
          {session && session?.user ? (
            <div className="center gap-5">
              <Link href={"/startup/create"} className="hover-effect">
                <span>Create</span>
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
                className="hover-effect"
              >
                <button type="submit">Logout</button>
              </form>
              <Link href={`/user/`} className="hover-effect flex gap-2">
                <img
                  className="rounded-full"
                  src={`${session?.user?.image}`}
                  alt="user-image"
                  width={25}
                  height={25}
                />
                <span>{session?.user?.name}</span>
              </Link>
            </div>
          ) : (
            <form
              className="hover-effect"
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
