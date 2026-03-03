import "./globals.css";
import { Montserrat } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: {
    default: "Artesanía de Corazón | Hecho a mano por Alba",
    template: "%s | Artesanía de Corazón",
  },
  description:
    "Piezas artesanales únicas hechas a mano por Alba. Descubre creaciones originales llenas de detalle, paciencia y cariño.",
  metadataBase: new URL("https://www.artesaniadecorazon.com"),
  openGraph: {
    title: "Artesanía de Corazón | Hecho a mano por Alba",
    description:
      "Creaciones artesanales hechas a mano con dedicación y cariño.",
    url: "https://www.artesaniadecorazon.com",
    siteName: "Artesanía de Corazón",
    locale: "es_ES",
    type: "website",
  },
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
