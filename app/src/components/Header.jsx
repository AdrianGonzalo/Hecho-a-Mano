"use client";
import Link from "next/link";

export default function Header() {
  return (
    <Link href="/">
      <header className="w-full flex flex-col items-center justify-center py-4 z-10 mt-16 font-titulo cursor-pointer">
        <h1 className="text-5xl">Hecho a Mano</h1>
        <h1 className="text-5xl">
          Con <span className="text-5xl">❤️</span>
        </h1>
      </header>
    </Link>
  );
}
