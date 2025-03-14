import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });
import SessionProvider from "./components/SessionProvider";
import { getServerSession } from "next-auth";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <main className="mx-auto max-w-5xl text-2xl flex gap-2">
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}