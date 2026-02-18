import "./globals.css";
import { Montserrat } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "Hecho a Mano",
  description: "Productos hechos a mano",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`relative flex flex-col min-h-screen overflow-x-hidden ${montserrat.className}`}
      >

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
