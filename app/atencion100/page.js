import Image from 'next/image';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import WhatsAppFloatingButton from '../components/WhatsappButton';

export const metadata = {
  title: 'Atención 100% personalizada | Kusi Turismo',
  description: 'Asesoría e itinerarios personalizados — Kusi Turismo',
};

export default function Contacto() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <NavBar />

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-20 sm:py-24">
        {/* HERO */}
        <header className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#C77A4E] uppercase mb-4">
            Atención 100% personalizada
          </h1>
          <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-200 text-sm sm:text-base leading-relaxed">
            Diseñamos itinerarios a tu medida: viajes en pareja, en familia, solos o con grupo. Cada propuesta nace desde la escucha, el respeto por la tierra y la conexión con las comunidades.
          </p>
        </header>
          <div className="absolute left-20 top-50 -translate-y-1/2 z-0 pointer-events-none">
          <Image
            src="/selfie-eve.jpg"
            alt="Asesoría personalizada Kusi"
            width={200}
            height={300}
            className="rounded-full w-28 h-28 md:w-40 md:h-40 object-cover "
            />
          </div>
        {/* MAIN CARD - mobile first (stack), desktop two-column */}
        <section className="bg-gradient-to-b from-white to-[#fff7f0] dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* LEFT / TEXT (cols 1-2 on md) */}
            <div className="md:col-span-2 flex flex-col gap-4">
              <h2 className="text-lg md:text-2xl font-semibold text-[#C77A4E]">Dejame acompañarte en tu viaje</h2>

              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                Construimos experiencias reales, sensibles a tus deseos y al contexto local. Planificamos desde hospedajes sustentables hasta actividades comunitarias y recomendaciones culturales según la época.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <div className="p-4 rounded-lg bg-white dark:bg-gray-900 shadow-sm">
                  <h3 className="text-sm font-semibold text-[#C77A4E] mb-2">Incluye</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-2 list-inside list-disc">
                    <li>Reservas y coordinación de hospedaje</li>
                    <li>Itinerario personalizado</li>
                    <li>Actividades con comunidades locales</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-white dark:bg-gray-900 shadow-sm">
                  <h3 className="text-sm font-semibold text-[#C77A4E] mb-2">Ideal para</h3>
                  <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-2 list-inside list-disc">
                    <li>Viajes en pareja o familia</li>
                    <li>Primera vez viajando sola</li>
                    <li>Viajes con foco cultural y personal</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-semibold text-[#C77A4E] mb-2">Ejemplo de día</h4>
                <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
                  Traslado desde la Quebrada, caminata interpretativa con guía local, almuerzo familiar y taller de cocina regional con mujeres de la comunidad. Actividad pensada para conectar, aprender y compartir.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:kusiturismo@gmail.com?subject=Quiero mi asesoría personalizada"
                  className="inline-block bg-[#C77A4E] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#A65E2E] transition"
                >
                  ¡QUIERO MI ASESORÍA PERSONALIZADA!
                </a>
                <a
                  href="/contacto"
                  className="inline-block border border-[#C77A4E] text-[#C77A4E] px-5 py-2 rounded-md font-semibold hover:bg-[#fff7f0] transition"
                >
                  Más información
                </a>
              </div>
            </div>

            {/* RIGHT / IMAGE */}
            <figure className="w-full md:w-auto rounded-xl overflow-hidden shadow-md md:self-start">
              <Image
                src="/experiencia5.jpg"
                alt="Asesoría personalizada Kusi"
                width={800}
                height={800}
                className="w-full h-56 md:h-80 object-cover"
                priority
              />
            </figure>
          </div>
        </section>

        {/* DETAILS / FAQ style */}
        <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-sm">
              <h5 className="text-sm font-semibold text-[#C77A4E] mb-2">Reservas y logística</h5>
              <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
                Te asesoramos sobre fechas, mejores épocas para cada actividad y alternativas de transporte. Armamos opciones según presupuesto y ritmo de viaje.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-sm">
              <h5 className="text-sm font-semibold text-[#C77A4E] mb-2">Respeto por las comunidades</h5>
              <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
                Trabajamos con autorización y reglas locales: las experiencias comunitarias son co-responsables y respetuosas con las prácticas y tiempos del lugar.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-sm">
              <h5 className="text-sm font-semibold text-[#C77A4E] mb-2">Seguridad y acompañamiento</h5>
              <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
                Contamos con guías locales, protocolos claros y asistencia para que tu experiencia sea segura y respetuosa con el territorio.
              </p>
            </div>
          </div>

          <aside className="p-6 rounded-2xl bg-gradient-to-b from-white to-[#fff7f0] dark:from-gray-900 dark:to-gray-800 shadow-sm flex flex-col items-center justify-center">
            <div className="text-center">
              <div className="text-xs text-gray-500 uppercase tracking-wide">Contacto directo</div>
              <div className="mt-2 text-sm font-semibold text-[#C77A4E]">kusiturismo@gmail.com</div>
              <a href="mailto:kusiturismo@gmail.com?subject=Asesoría personalizada" className="mt-4 inline-block bg-[#C77A4E] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#A65E2E] transition">
                Escribime
              </a>
            </div>

            <div className="mt-6 text-xs text-gray-600 dark:text-gray-400 text-center">
              También podés seguirnos en Instagram y WhatsApp para consultas rápidas.
            </div>
          </aside>
        </section>

        {/* SMALL CTA */}
        <section className="mt-10 text-center">
          <p className="text-sm text-gray-700 dark:text-gray-200 mb-4">¿Querés que armemos tu viaje ahora?</p>
          <a href="mailto:kusiturismo@gmail.com?subject=Reservar asesoría" className="inline-block bg-[#C77A4E] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#A65E2E] transition">
            Reserva tu asesoría
          </a>
        </section>
      </main>
      <WhatsAppFloatingButton />
      <Footer />
    </div>
  );
}