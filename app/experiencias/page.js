import React from 'react';
import Image from 'next/image';
import NavBar from '../components/NavBar';
import WhatsAppFloatingButton from '../components/WhatsappButton';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Experiencias | Kusi Turismo',
  description: 'Contactanos para vivir tu experiencia en Jujuy',
};

export default function experiencias() {
  return (
      <div className="font-sans min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <NavBar />

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-20 sm:py-24">
        {/* Hero */}
        <header className="mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#C77A4E] uppercase mb-4">
            EXPERIENCIAS KUSI EN ARGENTINA
          </h1>
          <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-200 text-base sm:text-lg leading-relaxed">
            Desde la Quebrada de Humahuaca diseñamos y acompañamos experiencias auténticas y conscientes,
            creadas para quienes buscan vivir el viaje desde el alma, lejos del turismo masivo y un poco más cerca
            de la gente del lugar. Cada propuesta nace desde el respeto por la tierra, las comunidades y las tradiciones.
          </p>
        </header>

        {/* 3 imágenes horizontal + texto abajo (igual ancho que el sitio) */}
        <section className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image src="/images/experiencia6.jpg" alt="Viñedos" width={1200} height={800} className="w-full h-64 object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image src="/images/bailando.jpg" alt="Hospedaje" width={1200} height={800} className="w-full h-64 object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image src="/images/mochila-verde.jpg" alt="Gastronomía" width={1200} height={800} className="w-full h-64 object-cover" />
            </div>
          </div>

          <div className="mt-6 max-w-3xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-semibold text-[#C77A4E] mb-2">Experiencias comunitarias y culturales</h2>
            <p className="text-gray-700 dark:text-gray-200 text-base leading-relaxed">
              Visitas guiadas a comunidades andinas, bodegas familiares, talleres de cocina regional, tejido, agricultura ancestral y caminatas guiadas por guardianes del territorio.
            </p>
          </div>
        </section>        
        {/* Lista de experiencias en cards */}
        <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-min">
          {/* Manos de mujeres */}
          <article className="p-6 rounded-2xl bg-gradient-to-b from-white to-[#fff7f0] dark:from-gray-900 dark:to-gray-800 shadow-lg">
            <div className="overflow-hidden rounded-md mb-4">
              <Image
                src="/images/manosdemujeres.jpg"
                alt="Manos de mujeres - cocina regional"
                width={600}
                height={900}
                className="w-full h-[420px] md:h-[560px] object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-[#C77A4E] mb-3">MANOS DE MUJERES</h3>
            <p className="text-gray-700 dark:text-gray-200 mb-3">
              Un día de cocina regional como acto de conexión: aprender y compartir junto a otras mujeres y las familias anfitrionas.
            </p>
            <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1 mb-4 list-disc list-inside">
              <li>Traslados In-Out por la Quebrada</li>
              <li>Recorrido cultural guiado</li>
              <li>Desayuno y almuerzo participativo</li>
            </ul>
            <a href="mailto:kusiturismo@gmail.com?subject=Manos de Mujeres" className="inline-block bg-[#C77A4E] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#A65E2E] transition">
              QUIERO SABER MÁS
            </a>
          </article>

          {/* Vinito y Montaña */}
          <article className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-lg">
            <div className="overflow-hidden rounded-md mb-4">
              <Image
                src="/images/vinitoymontaña.jpg"
                alt="Vinito y Montaña"
                width={600}
                height={900}
                className="w-full h-[420px] md:h-[560px] object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-[#C77A4E] mb-3">VINITO Y MONTAÑA</h3>
            <p className="text-gray-700 dark:text-gray-200 mb-3">
              Combina lo mejor del norte jujeño en un fin de semana: eco cabaña, desayunos caseros y bodega familiar con degustación.
            </p>
            <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1 mb-4 list-disc list-inside">
              <li>Alojamiento en eco cabaña en Bárcena</li>
              <li>Desayunos regionales</li>
              <li>Visita guiada con degustación y comida</li>
            </ul>
            <a href="mailto:kusiturismo@gmail.com?subject=Vinito y Montaña" className="inline-block bg-[#C77A4E] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#A65E2E] transition">
              QUIERO SABER MÁS
            </a>
          </article>

          {/* Caminar hacia dentro */}
          <article className="p-6 rounded-2xl bg-gradient-to-b from-white to-[#fff7f0] dark:from-gray-900 dark:to-gray-800 shadow-lg">
            <div className="overflow-hidden rounded-md mb-4">
              <Image
                src="/images/caminata.jpg"
                alt="Caminar hacia dentro"
                width={600}
                height={900}
                className="w-full h-[420px] md:h-[560px] object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-[#C77A4E] mb-3">CAMINAR HACIA DENTRO</h3>
            <p className="text-gray-700 dark:text-gray-200 mb-3">
              Trekking de dificultad alta en territorios comunitarios, con meditación ancestral y trabajo de sanación del linaje. Medio día.
            </p>
            <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1 mb-4 list-disc list-inside">
              <li>Guía local en comunidades</li>
              <li>Acceso respetuoso a cuevas ancestrales</li>
              <li>Meditación y rituales de conexión</li>
            </ul>
            <a href="mailto:kusiturismo@gmail.com?subject=Caminar Hacia Dentro" className="inline-block bg-[#C77A4E] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#A65E2E] transition">
              QUIERO SABER MÁS
            </a>
          </article>

          {/* Salinas grandes - ruedas / atardecer */}
          <article className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-lg">
            <div className="overflow-hidden rounded-md mb-4">
              <Image
                src="/images/salidasgrandes.jpg"
                alt="Salinas Grandes"
                width={600}
                height={900}
                className="w-full h-[420px] md:h-[560px] object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-[#C77A4E] mb-3">SALINAS GRANDES</h3>
            <p className="text-gray-700 dark:text-gray-200 mb-3">
              Dos opciones: pedalear sobre el salar + extracción de sal y almuerzo; o vivir el atardecer con astroturismo.
            </p>
            <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1 mb-4 list-disc list-inside">
              <li>Bicicletas y guía, traslados in-out</li>
              <li>Demostración y participación en extracción de sal</li>
              <li>Opción atardecer: merienda y observación de estrellas (≈6 hs)</li>
            </ul>
            <a href="mailto:kusiturismo@gmail.com?subject=Salinas Grandes" className="inline-block bg-[#C77A4E] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#A65E2E] transition">
              QUIERO SABER MÁS
            </a>
          </article>
        </section>

        {/* Final CTA / contacto breve */}
        <section className="mb-16 text-center">
          <h3 className="text-xl font-semibold text-[#C77A4E] mb-3">Queres más información?</h3>
          <p className="text-gray-700 dark:text-gray-200 mb-4 max-w-2xl mx-auto">
            Escribinos y te contamos con gusto. Reservas, itinerarios y consultas personalizadas por mail.
          </p>
          <a href="mailto:kusiturismo@gmail.com" className="inline-block bg-[#C77A4E] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#A65E2E] transition">
            ESCRIBIR A KUSITURISMO
          </a>
        </section>
      </main>

      <WhatsAppFloatingButton />
      <Footer />
    </div>
  );
}