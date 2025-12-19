'use client';

import Image from 'next/image';

export default function Experiencia() {
  return (
    <section className="w-full py-10 mt-20 md:mt-1">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* Texto principal: ocupa más espacio */}
          <div className="md:col-span-7 flex flex-col justify-start gap-4">
            <h2 className="text-3xl md:text-3xl font-extrabold text-[#C77A4E] mb-4 text-left opacity-30 uppercase">
              Quienes somos
            </h2>

            <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-sm md:text-base">
              En el 2021, luego de haber egresado en la carrera de Turismo y Hotelería en Buenos Aires, decidí emprender un viaje al norte de Jujuy con amigas. Fué una semana de compartires, risas, ruta y paisajes únicos en la que me enamoré como nunca antes de un sitio y al regresar a mi casa armé una mochila con algunas prendas, mi cámara, un libro y así sin más encaré mi primer viaje sola… Esta vez sin fecha de regreso.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="/viajesGrupales"
                className="inline-block bg-[#C77A4E] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#A65E2E] transition"
              >
                Ver viajes grupales
              </a>

              <a
                href="mailto:kusiturismo@gmail.com?subject=Contacto%20Kusi"
                className="inline-block border border-[#C77A4E] text-[#C77A4E] px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#fff7f0] transition"
              >
                Escribir a Kusi
              </a>
            </div>
          </div>

          {/* Aside compacto con info del próximo viaje */}
          <aside className="md:col-span-5 flex flex-col gap-4">
            <div className="rounded-xl overflow-hidden bg-gradient-to-b from-white to-[#fff7f0] dark:from-gray-800 dark:to-gray-900 shadow-md p-4 flex flex-col md:sticky md:top-24">
              {/* layout: stacked on mobile, row on md+ */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="flex-shrink-0 w-full md:w-28">
                  <Image
                    src="/images/imagensobremi.jpg"
                    alt="Fin de Año 2025 - Quebrada de Humahuaca"
                    width={600}
                    height={900}
                    className="rounded-lg object-cover w-full h-44 md:h-40"
                    priority={false}
                  />
                </div>

                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-[#C77A4E] leading-snug">Fin de Año 2025</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">29/12/2025 — 06/01/2026 · Entre mujeres</p>

                  <ul className="text-sm text-gray-700 dark:text-gray-200 mt-3 space-y-1 list-inside list-disc">
                    <li>Círculo de mujeres y rituales</li>
                    <li>Caminatas guiadas por guardianes locales</li>
                    <li>Encuentros con comunidades</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 flex flex-col sm:flex-row gap-2">
                <a
                  href="/viajesGrupales"
                  className="w-full sm:flex-1 text-center inline-block bg-[#C77A4E] text-white px-3 py-2 rounded-md text-sm font-semibold hover:bg-[#A65E2E] transition"
                >
                  Ver detalles
                </a>
                <a
                  href="mailto:kusiturismo@gmail.com?subject=Viaje%20Fin%20de%20A%C3%B1o%202025"
                  className="w-full sm:w-auto inline-block border border-[#C77A4E] text-[#C77A4E] px-3 py-2 rounded-md text-sm font-semibold hover:bg-[#fff7f0] transition text-center"
                >
                  Quiero saber más
                </a>
              </div>
            </div>

            {/* pequeño bloque de valores / ritmo debajo para aprovechar espacio en mobile */}
            <div className="rounded-lg p-3 bg-gray-50 dark:bg-gray-800 shadow-sm">
              <h5 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Ritmo & compromiso</h5>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                Itinerarios pensados para conectar con respeto: plazas limitadas, trabajo conjunto con comunidades y acompañamiento local.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}