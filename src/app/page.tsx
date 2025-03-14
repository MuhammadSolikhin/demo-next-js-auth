"use client";


import NavMenu from "./components/NavMenu";


export default function Home() {
  return (
    <>
      <NavMenu />
      <div className="pt-16 min-h-screen text-gray-100">
        <main className="flex flex-col items-center justify-center px-4 py-8">
          <h1 className="text-4xl font-extrabold mb-4">Welcome to Home page</h1>
        </main>
      </div>
    </>
  );
}