"use client";
import Link from "next/link";


export default function Home() {
  return (
<main className="gradient-pattern min-h-screen flex flex-col items-center justify-center text-center">
  <div className="text-red-500 text-center">
    <h1 className="font-bold text-white drop-shadow-lg">
Hello alin....it has been a lot of time since we've met each other.
      <br />
I know this might be a small suprise to you but it has came from all my heart to make you happy and steal your heart :3
      <br />
I shall let you acces our souvenir vault of all our fun moments and lovely text of our relation may love be with us 😘💕 ^^      
    
    </h1>
        <div className="text-center">
        <Link href="/gift">
        <button type="button" className="bg-white text-purple-700 font-semibold py-2 px-4 rounded-lg m-2">
          Gift
        </button>
      </Link>
      <Link href="/contribution">
        <button type="button" className="bg-white text-pink-700 font-semibold py-2 px-4 rounded-lg m-2">
          Contributions
        </button>
      </Link>
      </div>
      </div>
    </main>
  );
}
