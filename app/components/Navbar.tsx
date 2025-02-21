import React from "react";
import Link from "next/link";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";

const Navbar = async () => {
  const session = await auth();
  console.log(session);
  return (
    <header className="bg-[#f5f5dc] px-5 py-1 ">
      <nav className="flex items-center justify-between h-[50px]">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="logo" width={25} height={25} />
          <span className="text-s font-extrabold bg-gradient-to-r from-blue-800 to-purple-600 text-transparent bg-clip-text tracking-wide ml-1">
            MindHive
          </span>
        </Link>

        <div className="text-black">
          {session && session?.user ? (
            <div className="flex items-center gap-5">
              <Link href={"/startup/create"}>
                <span>Create</span>
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button>Logout</button>
              </form>
              <Link href={`/user/`}>
                <span>{session?.user?.name}</span>
              </Link>
            </div>
          ) : (
            <form
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
