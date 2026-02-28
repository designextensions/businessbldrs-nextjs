import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const ADMIN_EMAILS = (process.env.ADMIN_EMAILS || "jay@businessbldrs.com").split(",").map(e => e.trim());
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email as string;
        const password = credentials?.password as string;

        if (!email || !password) return null;

        if (!ADMIN_EMAILS.includes(email)) return null;
        if (!ADMIN_PASSWORD || password !== ADMIN_PASSWORD) return null;

        return {
          id: email,
          email,
          name: email.split("@")[0],
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/admin/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.isAdmin = true;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.email = token.email as string;
        (session as any).isAdmin = token.isAdmin;
      }
      return session;
    },
  },
});
