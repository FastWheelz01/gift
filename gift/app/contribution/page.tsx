import Link from "next/link";
import Alin from "@/public/alin.png";

export default function Page() {
  return (
    <div className="relative min-h-screen bg-purple-500 flex flex-col items-center py-2">
      <h1 className="font-bold text-white drop-shadow-lg text-2xl text-center">
        This page is dedicated in honor of the site developer
      </h1>

      <div className="flex flex-col gap-2 font-bold text-white drop-shadow-lg text-xl absolute left-4 top-20">
        <span>Owner: Elliot</span>
        <span>Coding: Elliot</span>
        <span>Design: Elliot</span>
        <span>Debugging: Claude AI</span>
        <span>The gifted: Alin
          <img
          src={Alin.src}
          alt="Alin"
          className="w-16 h-16 rounded-full border-4 border-white drop-shadow-lg"
        />
        </span>
      </div>
      <div>
        
      </div>
      <p className="w-full px-30 font-bold text-white drop-shadow-lg text-2xl text-center absolute bottom-6 left-1/2 -translate-x-1/2">
        Thanks for visiting this page, and I hope you enjoy the site and we meet in real life one day.
      </p>
      <Link href="/">
        <button type="button" className="bg-white text-purple-700 font-semibold py-2 px-4 rounded-lg m-2 absolute right-0 bottom-0">
          Home page
        </button>
      </Link>
    </div>
  );
}