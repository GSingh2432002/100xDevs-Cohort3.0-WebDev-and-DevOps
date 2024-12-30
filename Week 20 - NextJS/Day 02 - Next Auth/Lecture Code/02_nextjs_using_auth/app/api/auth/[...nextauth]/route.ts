import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import CredentialsProvider from "next-auth/providers/credentials";

console.log(process.env.NEXTAUTH_SECRET);

const handler = NextAuth({
    providers: [
        CredentialsProvider({
          name: "Email",
          credentials: {
            username: { label: "Username", type: "text", placeholder: "gsingh332211@gmail.com" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            const username = credentials?.username;
            const password = credentials?.password;

            console.log(username, password);
            
            const user = { id: "1", name: "Gaurav Singh", email: "gsingh332211@gmail.com" }
      
            if (user) {
              return user
            } else {
              return null;
            }
          }
        })
      ],
      // For server side rendering
      secret: process.env.NEXTAUTH_SECRET,
})

export const GET = handler;
export const POST = handler;