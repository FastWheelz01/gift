"use client";
import Link from "next/link";


export default function Home() {
  return (
<main className="gradient-pattern min-h-screen flex flex-col items-center justify-center text-center">
  <div className="text-center">
    <h1 className="font-bold text-white drop-shadow-lg text-2xl">
u managed to crack it
    </h1>
        <div className="text-center">
        <Link href="/gift">
        <button type="button" className="bg-white text-purple-700 font-semibold py-8 px-10 rounded-lg m-2">
          🎁
        </button>
      </Link>
      <Link href="/contribution">
        <button type="button" className="bg-white text-pink-700 font-semibold py-8 px-10 rounded-lg m-2">
          ✍️
        </button>
      </Link>
      </div>
      </div>
    </main>
  );
}
