import Link from "next/link";

export default function Page() {
  return (
<div className="relative min-h-screen">
  <div className="flex flex-col items-center py-2 bg-purple-500 min-h-screen">
    <h1 className="font-bold text-white drop-shadow-lg text-2xl text-center">
      This page is dedicated in honor of the site developer
    </h1>

    <div className="flex flex-col gap-2 font-bold text-white drop-shadow-lg text-xl flex flex-col absolute left-4 top-20">
  <span>Owner: Elliot</span>
  <span>Coding: Elliot</span>
  <span>Design: Elliot</span>
  <span>Debugging: Claude AI</span>
  <span>The gifted: Alin</span>
    </div>
    <div className="relative min-h-screen w-full max-w-xl px-4">
      <h1 className="flex flex-col items-center justify-center font-bold text-white drop-shadow-lg text-2xl absolute bottom-0 left-1/2 -translate-x-1/2 absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-md px-4">
        Thanks for visiting this page, and I hope you enjoy the site and we meet in real life one day.
      </h1>
    </div>
  </div>
</div>
  );
}