"use client";

import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SignIn() {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session, router]);

  return (
    <>
      <div className="max-w-[1000px] h-screen mx-auto  flex justify-center items-center flex-col gap-2">
        <h1 className="text-8xl uppercase font-black text-center mb-4">
          NEXT AUTH
        </h1>
        {session && <p className="mb-4">Bienvenue {session?.user?.name}</p>}
        <div className="flex items-center gap-2">
          <button
            onClick={() => signIn("google")}
            className="bg-gray-200 hover:bg-gray-300 rounded-md p-3 text-slate-600 font-medium"
          >
            Se connecter via Google
          </button>
          <button
            onClick={() => signIn("github")}
            className="bg-gray-200 hover:bg-gray-300 rounded-md p-3 text-slate-600 font-medium"
          >
            Se connecter via GitHub
          </button>
        </div>
      </div>
    </>
  );
}
