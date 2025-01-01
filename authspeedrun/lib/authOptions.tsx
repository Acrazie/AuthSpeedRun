import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.SECRET as string,
      clientSecret: process.env.SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.SECRET as string,
      clientSecret: process.env.SECRET as string,
    }),
  ],
  debug: true,
};
