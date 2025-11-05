import Image from 'next/image';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import WhatsAppFloatingButton from '../components/WhatsappButton';
import CarouselViajes from '../components/CarouselViajes';

export const metadata = {
  title: 'Viajes Grupales | Kusi Turismo',
  description: 'Encuentros transformadores en la Quebrada de Humahuaca — Viajes grupales Kusi',
};

export default function ViajesGrupales() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <NavBar />

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-20 sm:py-24">
        {/* HERO */}
        <header className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#C77A4E] uppercase mb-4">
            VIAJES GRUPALES
          </h1>
          <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-200 text-base sm:text-lg leading-relaxed">
            Encuentros transformadores para reconectar con la esencia propia, compartir caminos, rituales y aprendizajes entre montañas, música y fuego.
          </p>
        </header>

        {/* FEATURE / HERO IMAGE */}
        <section className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2 rounded-2xl overflow-hidden shadow-lg">
            <CarouselViajes/>
          </div>

          <aside className="bg-gradient-to-b from-white to-[#fff7f0] dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-[#C77A4E] mb-2">Próximo viaje destacado</h3>
              <p className="text-sm text-gray-700 dark:text-gray-200 mb-3">Fin de año 2025 — Quebrada de Humahuaca (entre mujeres)</p>
              <p className="text-xs text-gray-500 mb-4">29/12/2025 - 06/01/2026 · Chaya de Mojones</p>

              <ul className="text-sm text-gray-700 dark:text-gray-200 list-inside list-disc space-y-2 mb-4">
                <li>Círculo de mujeres, oráculo y escrituras</li>
                <li>Caminatas y meditaciones guiadas</li>
                <li>Celebración de año nuevo y encuentro con mujeres locales</li>
              </ul>
            </div>

            <a
              href="mailto:kusiturismo@gmail.com?subject=Viaje grupal Fin de Año 2025"
              className="inline-block bg-[#C77A4E] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#A65E2E] transition text-center"
            >
              QUIERO SABER MÁS
            </a>
          </aside>
        </section>

        {/* ITINERARIES / EXPERIENCES CARDS */}
        <section className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="p-5 rounded-2xl bg-white dark:bg-gray-900 shadow-lg">
            <h4 className="text-md font-semibold text-[#C77A4E] mb-2">MANOS DE MUJERES</h4>
            <p className="text-sm text-gray-700 dark:text-gray-200 mb-3">
              Un día de cocina regional: conexión, aprendizaje y encuentro con familias anfitrionas.
            </p>
            <ul className="text-sm text-gray-700 dark:text-gray-200 list-disc list-inside mb-4 space-y-1">
              <li>Traslados In-Out por la Quebrada</li>
              <li>Recorrido cultural guiado</li>
              <li>Desayuno y almuerzo participativo</li>
            </ul>
            <a href="mailto:kusiturismo@gmail.com?subject=Manos de Mujeres" className="text-[#C77A4E] font-semibold text-sm underline">QUIERO SABER MÁS</a>
          </article>

          <article className="p-5 rounded-2xl bg-white dark:bg-gray-900 shadow-lg">
            <h4 className="text-md font-semibold text-[#C77A4E] mb-2">VINITO Y MONTAÑA</h4>
            <p className="text-sm text-gray-700 dark:text-gray-200 mb-3">
              Fin de semana con eco-cabaña, desayunos regionales y bodega familiar con degustación.
            </p>
            <ul className="text-sm text-gray-700 dark:text-gray-200 list-disc list-inside mb-4 space-y-1">
              <li>Alojamiento en eco cabaña</li>
              <li>Desayunos caseros</li>
              <li>Visita guiada con degustación</li>
            </ul>
            <a href="mailto:kusiturismo@gmail.com?subject=Vinito y Montaña" className="text-[#C77A4E] font-semibold text-sm underline">QUIERO SABER MÁS</a>
          </article>

          <article className="p-5 rounded-2xl bg-white dark:bg-gray-900 shadow-lg">
            <h4 className="text-md font-semibold text-[#C77A4E] mb-2">CAMINAR HACIA DENTRO</h4>
            <p className="text-sm text-gray-700 dark:text-gray-200 mb-3">
              Trekking ancestral y meditación en territorios comunitarios. Medio día — alta intensidad espiritual.
            </p>
            <ul className="text-sm text-gray-700 dark:text-gray-200 list-disc list-inside mb-4 space-y-1">
              <li>Guía local</li>
              <li>Acceso respetuoso a cuevas ancestrales</li>
              <li>Meditación y rituales de sanación</li>
            </ul>
            <a href="mailto:kusiturismo@gmail.com?subject=Caminar Hacia Dentro" className="text-[#C77A4E] font-semibold text-sm underline">QUIERO SABER MÁS</a>
          </article>
        </section>

        {/* SALINAS options */}
        <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-gradient-to-b from-white to-[#fff7f0] dark:from-gray-900 dark:to-gray-800 shadow-lg">
            <h4 className="text-lg font-semibold text-[#C77A4E] mb-2">SALINAS GRANDES SOBRE RUEDAS</h4>
            <p className="text-sm text-gray-700 dark:text-gray-200 mb-3">Pedaleamos sobre el salar más grande de Argentina + extracción de sal y almuerzo regional.</p>
            <ul className="text-sm list-disc list-inside text-gray-700 dark:text-gray-200 space-y-1 mb-4">
              <li>Traslados in-out</li>
              <li>Bicicletas y protección durante la excursión</li>
              <li>Demostración y participación en extracción de sal</li>
            </ul>
            <a href="mailto:kusiturismo@gmail.com?subject=Salinas Grandes - Sobre ruedas" className="inline-block bg-[#C77A4E] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#A65E2E] transition">QUIERO SABER MÁS</a>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-lg">
            <h4 className="text-lg font-semibold text-[#C77A4E] mb-2">SALINAS GRANDES AL ATARDECER</h4>
            <p className="text-sm text-gray-700 dark:text-gray-200 mb-3">Astroturismo y atardecer en el salar. Merienda y observación de estrellas (≈6 hs).</p>
            <ul className="text-sm list-disc list-inside text-gray-700 dark:text-gray-200 space-y-1 mb-4">
              <li>Traslados in-out</li>
              <li>Merienda regional</li>
              <li>Excursión guiada al atardecer</li>
            </ul>
            <a href="mailto:kusiturismo@gmail.com?subject=Salinas Grandes - Atardecer" className="inline-block bg-[#C77A4E] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#A65E2E] transition">QUIERO SABER MÁS</a>
          </div>
        </section>

        {/* WHY JOIN / VALUES */}
        <section className="mb-12 bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-[#C77A4E] mb-3">¿Por qué un viaje grupal con Kusi?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-sm text-gray-700 dark:text-gray-200">
              <strong className="text-[#C77A4E]">Conexión</strong>
              <p className="mt-2">Rituales, círculos y actividades pensadas para generar encuentros auténticos.</p>
            </div>
            <div className="text-sm text-gray-700 dark:text-gray-200">
              <strong className="text-[#C77A4E]">Responsabilidad</strong>
              <p className="mt-2">Trabajamos con comunidades locales y respetamos tiempos y normativas</p>
            </div>
            <div className="text-sm text-gray-700 dark:text-gray-200">
              <strong className="text-[#C77A4E]">Seguridad</strong>
              <p className="mt-2">Guías locales y acompañamiento para que vivas la experiencia con confianza.</p>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL + CTA */}
        <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2 p-6 rounded-2xl bg-gradient-to-b from-white to-[#fff7f0] dark:from-gray-900 dark:to-gray-800 shadow-lg">
            <blockquote className="italic text-gray-700 dark:text-gray-200">
              "Participar de un viaje grupal con Kusi fue transformador: paisajes, mujeres, rituales y un cuidado que sentí en cada paso." — María
            </blockquote>
            <p className="mt-4 text-sm text-gray-700 dark:text-gray-200">
              Si querés ser parte del próximo encuentro, escribinos y te contamos todo el itinerario completo y las plazas disponibles.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-lg flex flex-col items-center">
            <h4 className="text-lg font-semibold text-[#C77A4E] mb-2">Queres más info?</h4>
            <a href="mailto:kusiturismo@gmail.com?subject=Quiero info viajes grupales" className="inline-block bg-[#C77A4E] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#A65E2E] transition">
              QUIERO SABER MÁS
            </a>
          </div>
        </section>
      </main>

      <WhatsAppFloatingButton />
      <Footer />
    </div>
  );
}