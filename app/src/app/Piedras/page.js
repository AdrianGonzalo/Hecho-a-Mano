"use client";
import Link from "next/link";
import Footer from "@/components/footer";

export default function Piedras() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col items-center justify-center gap-6 p-8 font-normal">
        <h1 className="text-8xl fleur-de-leah-regular mb-6 font-titulo">
          Piedras
        </h1>

        <p className="text-gray-800 text-sm text-center max-w-3xl">
          Descubre nuestra colección de piedras hechas a mano.
        </p>
      </main>
    </div>
  );
}
