"use client";

import Link from "next/link";
import { useState } from "react";
import Alin from "@/public/alin.png";

export default function Page() {
  const [revealed, setRevealed] = useState(false);

  return (
    <main>
      <div className="relative bg-[url('/alin.png')] bg-cover bg-no-repeat bg-[position:center_1%] min-h-screen flex flex-col items-center py-2">
        <h1 className="w-full px-10 font-bold text-white drop-shadow-lg text-2xl text-center">
          I wanted to do a souvenir vault first for us but..we didnt had any pictures of us together in the same place sadly but i have found something else to offer wich is my ethernal love for you as of it explain why i first did this website and for a gift i chose to offer you a total sum of 500 robux wich i know isnt much but for you itmay mean a lot i hope youl spend it wisely.
        </h1>

        <button
          type="button"
          onClick={() => setRevealed(true)}
          className="bg-white text-pink-700 font-semibold py-2 px-4 rounded-lg m-2"
        >
          Reveal the code
        </button>

        {revealed && (
          <h1 className="font-bold drop-shadow-lg text-2xl flash-text">
            The roblox 500 robux gift card code is: TO BE BOUGHT 
          </h1>
        )}

        <Link href="/">
          <button type="button" className="bg-white text-purple-700 font-semibold py-2 px-4 rounded-lg m-2 absolute right-0 bottom-0">
            Home page
          </button>
        </Link>
      </div>
    </main>
  );
}