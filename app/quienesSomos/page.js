import React from 'react';
import Image from 'next/image';
import NavBar from '../components/NavBar';
import WhatsAppFloatingButton from '../components/WhatsappButton';
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
          <h1 className='text-4xl font-semibold text-gray-700 text-center max-w-xl text-shadow-md uppercase'>
            Conocé a Kusi
          </h1>
        </div>
        <section className="w-full flex flex-col md:flex-row items-center justify-center gap-8 py-16 mt-10 bg-gray-50 dark:bg-gray-900">
          {/* Imagen lado izquierdo en desktop, arriba en mobile */}
          <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
            <Image
              src="/sobremi4.jpg"
              alt="Equipo Kusi"
              width={400}
              height={400}
              className="rounded-xl shadow-lg object-cover w-72 h-72 md:w-96 md:h-96"
            />
          </div>
          {/* Texto lado derecho en desktop, abajo en mobile */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#C77A4E] mb-4">Un poco sobre mí</h2>
            <h3 className="text-2xl md:text-2xl font-bold text-[#C77A4E] mb-4">Como viajar trasnformó mi vida, y hoy vivo viajando.</h3>
            <p className="text-gray-700 dark:text-gray-200 text-lg md:text-xl mb-6">
              Hola! Soy Eve, dejáme contarte cómo viajar transformó mi vida y hoy elijo vivir viajando y compartir mis experiencias con otros y otras a través de KUSI. 
            </p>
            <p className="text-gray-700 dark:text-gray-200 text-base md:text-lg mb-6">
              En el 2021, luego de haber egresado en la carrera de Turismo y Hotelería en Buenos Aires, decidí emprender un viaje al norte de Jujuy con amigas. Fué una semana de compartires,
              risas, ruta y paisajes únicos en la que me enamoré como nunca antes de un sitio y al regresar a mi casa armé una mochila con algunas prendas, mi cámara, un libro  y así sin más encaré mi primer viaje sola… Esta vez  sin fecha de regreso. 
            </p>
          </div>
        </section>
         <section className="w-full max-w-5xl px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/sobremi3.png"
                alt="Viñedos"
                width={800}
                height={600}
                className="w-full h-48 md:h-56 object-cover"
                priority={false}
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/sobremi1.png"
                alt="Hospedaje ecológico"
                width={800}
                height={600}
                className="w-full h-48 md:h-56 object-cover"
                priority={false}
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/sobremi7.jpg"
                alt="Gastronomía regional"
                width={800}
                height={600}
                className="w-full h-48 md:h-56 object-cover"
                priority={false}
              />
            </div>
          </div>

          <div className="mt-6 max-w-3xl mx-auto text-center">
            <p className="text-gray-700 dark:text-gray-200 text-base md:text-lg">
              Desde hace años llevo en el corazón el deseo de seguir viajando por Latinoamérica, promoviendo en forma de agradecimiento un turismo que beneficie a las comunidades que tanto me han transformado. 
              <span className='text-[#a76741]'> Así nació Kusi, una forma de viajar, agradecer  y acompañar desde el corazón.</span></p>
          </div>
        </section>

        <section className="w-full max-w-5xl px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bloque 1: introducción con barra decorativa */}
            <div className="flex flex-col gap-4 p-6 rounded-2xl bg-gradient-to-b from-white to-[#fff7f0] dark:from-gray-900 dark:to-gray-800 shadow">
              <span className="inline-block w-12 h-1 bg-[#C77A4E] rounded mb-2" />
              <h3 className="text-xl font-semibold text-[#C77A4E]">Kusi: Alegría & Encuentro</h3>
              <p className="text-gray-700 dark:text-gray-200 text-sm md:text-base">
                Kusi significa alegría en quechua, y para mí representa esa alegría profunda que aparece cuando nos conectamos con la naturaleza, con las personas y con lo que somos en esencia.
              </p>
            </div>

            {/* Bloque 2: cita destacada */}
            <div className="p-6 rounded-2xl bg-[#F6ECE2] dark:bg-gray-800 shadow-lg flex flex-col justify-center">
              <blockquote className="text-gray-800 dark:text-gray-100 italic text-lg md:text-xl leading-relaxed">
                "Desde acá diseño y acompaño experiencias que invitan a vivir el viaje como un encuentro: con el territorio, con la cultura y con uno mismo."
              </blockquote>
              <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                Creo en un turismo que respete los ritmos de la tierra, que valore las raíces y que deje huellas que transforman para bien.
              </div>
            </div>

            {/* Bloque 3: lista de ideas + cierre */}
            <div className="flex flex-col gap-4 p-6 rounded-2xl bg-white dark:bg-gray-900 shadow">
              <h4 className="text-lg font-semibold text-[#C77A4E]">Un proyecto vivo!</h4>
              <ul className="space-y-3 text-gray-700 dark:text-gray-200 text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-3 h-3 mt-2 rounded-full bg-[#C77A4E]" />
                  <span>Cada asesoría, experiencia y viaje nace desde la escucha y el deseo de acompañar procesos reales, no solo itinerarios.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-3 h-3 mt-2 rounded-full bg-[#C77A4E]" />
                  <span>Kusi no es una agencia tradicional: es un proyecto que crece con cada persona que se suma.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-3 h-3 mt-2 rounded-full bg-[#C77A4E]" />
                  <span>Si estás acá, quizás sentís lo mismo: viajar puede ser mucho más que moverse de lugar.</span>
                </li>
              </ul>
              <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm">
                Ojalá podamos encontrarnos en el camino y compartir la magia a través de experiencias que transforman.
              </p>
            </div>
          </div>
        </section>    

      </main>
      {/* Footer siempre abajo */}
      <WhatsAppFloatingButton />
      <Footer />
    </div>
  );
}