import Image from 'next/image';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import CarouselContact from '../components/CarouselContact';
import Kilometraje2 from '../components/Kilometraje2';
import RouteAnimation from '../components/RouteAnimation';


export const metadata = {
  title: 'Contacto | Kusi Turismo',
  description: 'Contactanos para vivir tu experiencia en Jujuy',
};

export default function Contacto() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <NavBar />
      <main className="flex-1 flex flex-col items-center justify-center p-4 pt-28 pb-20 gap-8 sm:p-20">

        {/* --- NUEVA SECCIÓN: PROYECTO DE EXPANSIÓN --- */}
        <section className="w-full max-w-5xl px-4 py-12">
          <div className="bg-gradient-to-b from-white to-[#fff7f0] dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Texto principal (ocupa columnas en desktop) */}
              <div className="flex-1 md:col-span-2">
                <h2 className="text-2xl md:text-3xl font-bold text-[#C77A4E] mb-4">
                  PROYECTO DE EXPANSIÓN – KUSI POR LATINOAMÉRICA
                </h2>

                <p className="text-gray-700 dark:text-gray-200 text-base md:text-lg mb-4 leading-relaxed">
                  <strong className="text-[#C77A4E]">🌿 Un viaje que trasciende fronteras</strong><br />
                  Kusi Turismo nació en la Quebrada de Humahuaca con el deseo de mostrar una forma diferente de viajar: más humana, más consciente, más conectada con la tierra y con las personas. Hoy ese sueño creció: Kusi se prepara para recorrer Latinoamérica — empezando por los caminos sagrados del norte argentino, cruzando Bolivia y llegando al Valle Sagrado del Perú — para seguir tejiendo redes de turismo sustentable y femenino en todo el continente.
                </p>

                <p className="text-gray-700 dark:text-gray-200 mb-6">
                  Este no es un viaje turístico. Es una travesía de conexión y propósito, donde cada paso busca abrir camino a nuevas experiencias, alianzas y comunidades que creen en un turismo con alma. Cada paso será compartido: desde los caminos de altura hasta los talleres, encuentros y vivencias con guardianes del territorio.
                </p>

                <h3 className="text-lg font-semibold text-[#C77A4E] mb-3">🌸 Un viaje con propósito</h3>
                <ul className="grid gap-3 md:grid-cols-2 mb-6">
                  <li className="flex items-start gap-3 text-gray-700 dark:text-gray-200">
                    <span className="mt-1 text-[#C77A4E]">🌿</span>
                    <span>Visibilizar y fortalecer proyectos de turismo comunitario en la región.</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 dark:text-gray-200">
                    <span className="mt-1 text-[#C77A4E]">💫</span>
                    <span>Crear lazos entre mujeres viajeras, emprendedoras y comunidades locales.</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 dark:text-gray-200">
                    <span className="mt-1 text-[#C77A4E]">🔆</span>
                    <span>Llevar la filosofía Kusi —viaje consciente, sustentable y transformador— a nuevos territorios.</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 dark:text-gray-200">
                    <span className="mt-1 text-[#C77A4E]">🪶</span>
                    <span>Documentar el recorrido para inspirar a más personas a viajar con respeto y sentido.</span>
                  </li>
                </ul>

                <p className="text-gray-700 dark:text-gray-200 mb-6">
                  Este viaje no solo expande una marca: expande una forma de mirar y habitar el mundo. Si te interesa apoyarnos, enterate cómo hacerlo en las opciones abajo.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://cafecito.app/viajandoconkusi0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#C77A4E] text-white px-6 py-2 rounded-md font-semibold shadow hover:bg-[#A65E2E] transition text-center"
                  >
                    Colaborar / Invitar un cafecito
                  </a>
                  <a
                    href="mailto:kusiturismocomunitario@gmail.com?subject=Colaboración Proyecto Kusi por Latinoamérica"
                    className="inline-block border border-[#C77A4E] text-[#C77A4E] px-6 py-2 rounded-md font-semibold hover:bg-[#fff7f0] transition text-center"
                  >
                    Escribir para colaborar
                  </a>
                </div>
              </div>

              {/* Tarjeta lateral: contador de kms + imagen pequeña */}
              <aside className="w-full md:w-56 flex-shrink-0 bg-white dark:bg-gray-900 rounded-xl shadow p-4 flex flex-col items-center justify-between">
                <div className="text-center">
                  <Kilometraje2/>
                </div>
                <RouteAnimation />
              </aside>
            </div>
            {/* Sección de colaboración + sponsors */}
            <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
              <h4 className="text-lg font-semibold text-[#C77A4E] mb-3">💚 Cómo colaborar</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700 dark:text-gray-200">
                <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                  <h5 className="font-semibold mb-2">Aportes personales</h5>
                  <p className="text-sm">Adquiriendo una experiencia KUSI, sumándote al próximo viaje grupal o invitando un cafecito virtual. Cada aporte es una semilla que nos permite seguir caminando.</p>
                </div>
                <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                  <h5 className="font-semibold mb-2">Proyectos y comunidades</h5>
                  <p className="text-sm">Si sos parte de un proyecto comunitario y querés sumarte a la red Kusi, escribinos para conectar y crear intercambios justos y auténticos.</p>
                </div>
                <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                  <h5 className="font-semibold mb-2">Sponsor / colaboración</h5>
                  <p className="text-sm">Si representás un alojamiento, marca o medio interesado en turismo sustentable, contactanos para opciones de sponsor y visibilidad compartida.</p>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="mailto:kusiturismocomunitario@gmail.com" className="inline-block px-5 py-2 rounded-md border border-[#C77A4E] text-[#C77A4E] font-semibold hover:bg-[#fff7f0]">
                  Escribir a kusiturismocomunitario@gmail.com
                </a>
                <a href="https://cafecito.app/viajandoconkusi0" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#C77A4E] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#A65E2E]">
                  Invitar un cafecito
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ...existing contact form / resto de la página sigue ... */}
      </main>
      <Footer />
    </div>
  );
}