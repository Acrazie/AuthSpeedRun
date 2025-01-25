"use client";

import { useSession, signOut } from "next-auth/react";
import NavBar from "@/components/Navbar";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    console.log("Homepage", session);
  } else console.log("rien dans la homepage");

  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center h-screen flex-col gap-2">
        <h1 className="text-8xl">Hello Homepage</h1>
        {session && <p className="mb-4">Bienvenue {session?.user?.name}</p>}
        {session && (
          <button
            onClick={() => signOut()}
            className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            SignOut
          </button>
        )}
      </div>
    </>
  );
}
