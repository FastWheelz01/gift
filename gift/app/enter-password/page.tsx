"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EnterPassword() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = () => {
    if (password !== "alinmylove") {
      setError(true);
      return;
    }
    document.cookie = `site-auth=${password}; path=/; max-age=${60 * 60 * 24 * 7}`;
    router.push("/");
    router.refresh();
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-xl font-bold">This site is private /ce site est privee</h1>
      <input
        type="password/mot de passe"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setError(false);
        }}
        placeholder="Enter password / entree le mot de passe"
        className={`border px-4 py-2 rounded ${error ? "border-red-500" : ""}`}
      />
      <button
        type="button"
        onClick={handleSubmit}
        className="bg-purple-600 text-white px-4 py-2 rounded"
      >
        Enter
      </button>
      {error && <p className="text-red-500">Wrong password / mauvais mot de passe</p>}
    </main>
  );
}