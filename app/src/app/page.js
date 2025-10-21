"use client";
import Link from "next/link";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Contenedor principal centrado */}
      <main className="flex flex-col items-center justify-center flex-grow gap-12 font-titulo mt-30">
        <div className="flex flex-col items-center gap-12 font-normal">
          <Link href="/Piedras">
            <button className="w-56 px-6 py-3 bg-[#FAF5E4] text-gray-800 font-medium text-md rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition-transform duration-200 border-4 border-double border-gray-400">
              Piedras
            </button>
          </Link>

          <Link href="/Pirograbado">
            <button className="w-56 px-6 py-3 bg-[#FAF5E4] text-gray-800 font-medium text-md rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition-transform duration-200 border-4 border-double border-gray-400">
              Pirograbado
            </button>
          </Link>

          <Link href="/Otros">
            <button className="w-56 px-6 py-3 bg-[#FAF5E4] text-gray-800 font-medium text-md rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition-transform duration-200 border-4 border-double border-gray-400">
              Otros
            </button>
          </Link>

          <Link href="/Shop">
            <button className="w-56 px-6 py-3 bg-[#F0EAD6] text-gray-900 font-medium text-md rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 border-2 border-double border-gray-500">
              ¿Interesado en algún producto?
            </button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
