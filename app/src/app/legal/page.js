import Link from "next/link";

export const metadata = {
    title: "Aviso Legal y Política de Privacidad",
};

export default function LegalPage() {
    return (
        <section className="max-w-4xl mx-auto px-6 py-16 ">
            <div>

                <h1 className="text-4xl font-serif mb-10">
                    Aviso Legal y Política de Privacidad
                </h1>

                {/* ===================== */}
                {/* AVISO LEGAL */}
                {/* ===================== */}
                <h2 className="text-2xl font-semibold mt-10 mb-4">
                    1. Aviso Legal
                </h2>

                <p className="mb-6">
                    En cumplimiento con el deber de información recogido en la Ley
                    34/2002, de Servicios de la Sociedad de la Información y de Comercio
                    Electrónico (LSSI-CE), se informa que el presente sitio web tiene
                    carácter meramente informativo y muestra creaciones artesanales
                    realizadas por su titular.
                </p>

                <ul className="list-disc ml-6 space-y-2 mb-6">
                    <li>
                        Titular del sitio web: <strong>Alba Gonzalo Julibert</strong>
                    </li>
                    <li>
                        Ubicación: <strong>España</strong>
                    </li>
                    <li>
                        Correo electrónico de contacto: <strong>albyy_74@hotmail.com</strong>
                    </li>
                </ul>

                <p className="mb-6">
                    El objetivo de esta página es exclusivamente expositivo. Las personas
                    interesadas en alguna de las creaciones pueden contactar de forma
                    voluntaria a través de WhatsApp para realizar consultas.
                </p>

                {/* ===================== */}
                {/* PRIVACIDAD */}
                {/* ===================== */}
                <h2 className="text-2xl font-semibold mt-10 mb-4">
                    2. Política de Privacidad
                </h2>

                <p className="mb-4">
                    De acuerdo con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica
                    3/2018 (LOPDGDD), se informa que los datos personales facilitados por
                    los usuarios al iniciar contacto a través de WhatsApp serán tratados
                    conforme a los siguientes principios:
                </p>

                <h3 className="font-semibold mt-6 mb-2">
                    Finalidad del tratamiento
                </h3>
                <p className="mb-4">
                    Atender consultas relacionadas con las creaciones artesanales mostradas
                    en la web.
                </p>

                <h3 className="font-semibold mt-6 mb-2">
                    Base legal
                </h3>
                <p className="mb-4">
                    El tratamiento de los datos se basa en el consentimiento del usuario,
                    que se produce al iniciar voluntariamente la comunicación.
                </p>

                <h3 className="font-semibold mt-6 mb-2">
                    Conservación de datos
                </h3>
                <p className="mb-4">
                    Los datos se conservarán únicamente durante el tiempo necesario para
                    responder a la consulta.
                </p>

                <h3 className="font-semibold mt-6 mb-2">
                    Cesión de datos
                </h3>
                <p className="mb-4">
                    No se cederán datos a terceros, salvo obligación legal. El uso de
                    WhatsApp puede implicar el tratamiento de datos por parte de dicha
                    plataforma conforme a sus propias condiciones.
                </p>

                <h3 className="font-semibold mt-6 mb-2">
                    Derechos del usuario
                </h3>
                <p className="mb-6">
                    El usuario puede ejercer sus derechos de acceso, rectificación,
                    supresión o limitación del tratamiento enviando una solicitud al correo
                    electrónico indicado anteriormente.
                </p>

                {/* ===================== */}
                {/* COOKIES */}
                {/* ===================== */}
                <h2 className="text-2xl font-semibold mt-10 mb-4">
                    3. Política de Cookies
                </h2>

                <p className="mb-6">
                    Este sitio web no utiliza cookies de análisis, publicidad ni
                    seguimiento. Únicamente pueden emplearse cookies técnicas necesarias
                    para el correcto funcionamiento del sitio.
                </p>


            </div>

            <div className="flex mt-10 text-sm  gap-5">
                <Link
                    href="/"
                    className="block font-bold underline"
                >
                    ← Volver a inicio
                </Link>

                <p className="opacity-70">
                    Última actualización: {new Date().getFullYear()}
                </p>
            </div>

        </section>
    );
}