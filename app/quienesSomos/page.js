import React from 'react';
import Image from 'next/image';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Kusi Turismo',
  description: 'Agencia de turismo',
};

export default function quienesSomos() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* NavBar siempre arriba */}
      <NavBar />
      {/* Contenido principal */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 pb-20 gap-8 sm:p-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full mt-20 md:mt-32 md:mb-8">
          <h1 className='text-4xl font-semibold text-gray-700 text-center max-w-xl text-shadow-md'>
            Cómo viajar transformó mi vida y hoy vivo viajando!
          </h1>
        </div>
        <section className="w-full flex flex-col md:flex-row items-center justify-center gap-8 py-16 mt-10 bg-gray-50 dark:bg-gray-900">
          {/* Imagen lado izquierdo en desktop, arriba en mobile */}
          <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
            <Image
              src="/eve-pose.jpeg"
              alt="Equipo Kusi"
              width={400}
              height={400}
              className="rounded-xl shadow-lg object-cover w-72 h-72 md:w-96 md:h-96"
            />
          </div>
          {/* Texto lado derecho en desktop, abajo en mobile */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#C77A4E] mb-4">Un poco sobre mí</h2>
            <p className="text-gray-700 dark:text-gray-200 text-lg md:text-xl mb-6">
              Hola! Soy Eve, dejáme contarte cómo viajar transformó mi vida y hoy elijo vivir viajando y compartir mis experiencias con otros y otras a través de KUSI. 
            </p>
            <p className="text-gray-700 dark:text-gray-200 text-base md:text-lg mb-6">
              En el 2021, luego de haber egresado en la carrera de Turismo y Hotelería en Buenos Aires, decidí emprender un viaje al norte de Jujuy con amigas. Fué una semana de compartires,
              risas, ruta y paisajes únicos en la que me enamoré como nunca antes de un sitio y al regresar a mi casa armé una mochila con algunas prendas, mi cámara, un libro  y así sin más encaré mi primer viaje sola… Esta vez  sin fecha de regreso. 
            </p>
          </div>
        </section>
        <section className="w-full flex flex-col md:flex-row items-center justify-center py-16 bg-white">
          {/* Texto lado izquierdo */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-6 py-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#C77A4E] mb-4">Jujuy</h1>
            <p className="text-gray-700 dark:text-gray-800 text-lg md:text-xl mb-6">
              <span className='font-bold'>La Quebrada de Humahuaca</span> me atrapó no sólo con sus paisajes, sino también con su cultura, sus valores, su gente, las celebraciones, la forma de vivir y ver la vida. 
              Continué viajando y conociendo el altiplano andino.
              Las comunidades locales de diferentes pueblos han sembrado en mí aprendizajes únicos:  sumergiéndome en sus paisajes, probando su gastronomía y bailando sus ritmos.
            </p>
          </div>
          {/* Imagen lado derecho */}
          <div className="w-full md:w-1/2 flex justify-center items-center px-6 py-8">
            <Image
              src="/humahuaca.jpg"
              alt="Explora Jujuy"
              width={500}
              height={350}
              className="rounded-xl shadow-lg object-cover w-full max-w-lg"
            />
          </div>
        </section>
        <section className="relative w-full flex flex-col items-center justify-center py-16 bg-transparent overflow-hidden">
          {/* Imagen decorativa de fondo abajo a la derecha */}
          <div className="absolute bottom-0 right-0 z-0 pointer-events-none w-[220px] h-[160px]">
            <Image
              src="/moments.svg"
              alt="Decoración Jujuy"
              fill
              style={{ objectFit: 'contain' }}
              className="opacity-30"
            />
          </div>
          <div className="relative z-10 flex flex-col items-center w-full">
            <h2 className="text-2xl font-bold text-center text-gray-700 mb-8">
              KUSI significa “Alegría” en lengua quechua y es lo que quiero transmitir en cada experiencia que comparto y con la energía que deseo llegar a cada sitio mientras continúo el camino por Latinoamérica: trabajando codo a codo con las comunidades, sus emprendimientos y desde su perspectiva.
            </h2>
            <a href="https://wa.link/9yh9be" target="_blank" rel="noopener noreferrer" className="bg-[#C77A4E] text-white px-6 py-3 rounded-md hover:bg-[#A65E2E] transition font-semibold">
              ¿Te sumas a la aventura?
            </a>
          </div>
        </section>
      </main>
      {/* Footer siempre abajo */}
      <Footer />
    </div>
  );
}