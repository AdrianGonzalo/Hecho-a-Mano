"use client";
import Link from "next/link";

export default function Header() {
  return (
    <Link href="/">
      <header className="fixed top-0 w-full flex flex-col items-center justify-center py-4 z-10 mt-16 font-titulo cursor-pointer">
        <h1 className="text-6xl">Hecho a Mano</h1>
        <h1 className="text-6xl">
          Con <span className="text-5xl">❤️</span>
        </h1>
      </header>
    </Link>
  );
}
