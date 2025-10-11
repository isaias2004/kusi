import React from 'react';
import Image from 'next/image';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Kusi Turismo',
  description: 'Agencia de turismo',
};

export default function experiencias() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* NavBar siempre arriba */}
      <NavBar />
      {/* Contenido principal */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 pb-20 gap-8 sm:p-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full mt-20 md:mt-32 md:mb-8">
          <h1 className='text-4xl font-semibold text-gray-700 text-center max-w-xl text-shadow-md'>
            Sumate a las aventuras y vivilo vos mismo
          </h1>
        </div>
        <section className="w-full flex flex-col md:flex-row items-center justify-center gap-8 py-16 mt-10 bg-gray-50 dark:bg-gray-900">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#C77A4E] mb-4">Vinito y montaña</h2>
            <p className="text-gray-700 dark:text-gray-200 text-lg md:text-xl mb-6">
              Vinito y montaña es la experiencia ideal para amistades y parejas que buscan un buen descanso y gastronomía regional, rodeados de viñedos e historias que atrapan, un fin de semana. 
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
            <Image
              src="/experiencia6.jpg"
              alt="Equipo Kusi"
              width={400}
              height={400}
              className="rounded-xl shadow-lg object-cover w-72 h-72 md:w-96 md:h-96"
            />
          </div>
        </section>
        <section className="w-full flex flex-col md:flex-row items-center justify-center py-16 bg-white">
          <div className="w-full md:w-1/2 flex justify-center items-center px-6 py-8">
            <Image
              src="/experiencia5.jpg"
              alt="Explora Jujuy"
              width={400}
              height={400}
              className="rounded-xl shadow-lg object-cover w-72 h-72 md:w-96 md:h-96"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-6 py-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#C77A4E] mb-4">Hospedaje</h1>
            <p className="text-gray-700 dark:text-gray-800 text-lg md:text-xl mb-6">
              Nos hospedamos en <span className='font-bold'>dormis sustentables</span> construidos de manera ecológica por una familia jujeña, ubicados al inicio de la Quebrada de Humahuaca, en la localidad de Bárcena. Allí, entre cerros verdes,  el silencio y buen aroma de la naturaleza, pasaremos la noche estrellada y disfrutaremos un buen desayuno regional a la mañana siguiente. 
            </p>
          </div>
        </section>
        <section className="w-full flex flex-col md:flex-row items-center justify-center gap-8 py-16 mt-10 bg-gray-50 dark:bg-gray-900">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#C77A4E] mb-4">Gastronomía</h2>
            <p className="text-gray-700 dark:text-gray-200 text-lg md:text-xl mb-6">
              Al día siguiente nos sumergimos en una experiencia gastronómica en el corazón de la quebrada, entre los pueblos de Maimará y Tilcara nos recibirá Raquel, una de las nueve hermanas que gestiona la Bodega familiar La Selestina. Nos esperan en su campo para compartir un día con degustación de vinos de altura, quesos, empanadas, plato principal y postre. Además, nos llevarán a conocer las diferentes plantaciones  de la Bodega, contándonos su proceso de producción, la historia de su familia y como año a año se esforzaron para ser parte de la ruta del vino de altura. 
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
            <Image
              src="/experiencia2.jpeg"
              alt="Equipo Kusi"
              width={400}
              height={400}
              className="rounded-xl shadow-lg object-cover w-72 h-72 md:w-96 md:h-96"
            />
          </div>
        </section>

        <div
          className="
            grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl
            [&>section]:rounded-2xl [&>section]:shadow-xl
            [&>section]:flex [&>section]:flex-col [&>section]:items-center [&>section]:justify-center
            [&>section]:p-8 [&>section]:md:p-12
            md:auto-rows-min
          "
        >
          {/* EXPERIENCIA DESTACADA */}
          <section className="bg-gradient-to-b from-[#fff7f0] to-white dark:from-gray-900 dark:to-gray-800 row-span-1">
            <div className="max-w-xl w-full flex flex-col items-center bg-white dark:bg-gray-900 rounded-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-[#C77A4E] mb-6 text-center">¿Qué incluye la experiencia?</h2>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 text-lg space-y-4 mb-8 text-left">
                <li><span className="font-semibold">Alojamiento</span> en una eco cabaña en medio de la naturaleza en Bárcena</li>
                <li><span className="font-semibold">Desayunos caseros</span> con productos regionales</li>
                <li>Una <span className="font-semibold">visita guiada exclusiva</span> a una bodega familiar, con degustación, recorrido, entrada, plato principal y postre</li>
              </ul>
              <a
                href="mailto:kusiturismocomunitario@gmail.com?subject=Quiero saber más sobre la experiencia"
                className="bg-[#C77A4E] text-white px-8 py-3 rounded-md font-semibold text-lg shadow hover:bg-[#A65E2E] transition"
              >
                QUIERO SABER MÁS
              </a>
            </div>
          </section>
          {/* VIAJE GRUPAL DE MUJERES */}
          <section className="bg-white dark:bg-gray-900 row-span-2 md:row-span-2">
            <div className="max-w-2xl w-full flex flex-col items-center rounded-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-[#C77A4E] mb-4 text-center">VIAJE GRUPAL DE MUJERES, AÑO NUEVO Y CHAYA DE MOJONES</h2>
              <p className="text-gray-700 dark:text-gray-200 text-lg mb-6 text-center">
                Una experiencia grupal femenina de fin de año y nuevos comienzos.<br />
                Este viaje está pensado para que disfrutes de un viaje sola, sin sentirte sola nunca. Una semana para que conectes con tu lado femenino y valiente, para que puedas conocer personas nuevas y confiar en la magia de los encuentros compartiendo otras culturas en equipo.<br />
                Si es tu primer viaje sola, si es tu primer viaje al norte, si estás en un momento especial de tu vida, acá estamos para iniciar una aventura que nos llene de recuerdos, sabores, música, tradición, cultura y sobre todo: alegría.
              </p>
              <h3 className="text-lg font-semibold text-[#C77A4E] mb-2">Un itinerario repleto de actividades grupales:</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 text-base space-y-2 mb-6 text-left">
                <li>Círculo de mujeres con oráculo, lecturas y escrituras al inicio y fin del viaje</li>
                <li>Caminatas y meditaciones guiadas</li>
                <li>
                  Celebración de año nuevo al estilo jujeño en Maimará: música en vivo, comida, colores y festejos en las calles. Ofrendas a la madre tierra, agradecimiento y buenos deseos para el año entrante.
                </li>
                <li>
                  Experiencia comunitaria con las mujeres de Juella: caminatas, comida regional, relatos y actividades en su mágico pueblo.
                </li>
              </ul>
              <p className="text-gray-700 dark:text-gray-200 text-base mb-6 text-center">
                <span className="font-semibold">Desde el 29 de diciembre al 6 de enero</span>
              </p>
              <a
                href="mailto:kusiturismo@gmail.com?subject=Quiero saber más sobre el viaje grupal de mujeres"
                className="bg-[#C77A4E] text-white px-8 py-3 rounded-md font-semibold text-lg shadow hover:bg-[#A65E2E] transition"
              >
                QUIERO SABER MÁS
              </a>
            </div>
          </section>
          {/* ASESORÍA PERSONALIZADA */}
          <section className="bg-gradient-to-b from-white to-[#fff7f0] dark:from-gray-900 dark:to-gray-800 row-span-1">
            <div className="max-w-xl w-full flex flex-col items-center rounded-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-[#C77A4E] mb-4 text-center">
                ASESORÍA E ITINERARIOS PERSONALIZADOS
              </h2>
              <p className="text-gray-700 dark:text-gray-200 text-lg mb-6 text-center">
                Armemos tu viaje a medida, 100% personalizado.<br />
                Reservamos alojamiento y diseñamos tu viaje desde cero, con actividades guiadas, excursiones y traslados en las fechas que desees, de acuerdo al presupuesto que manejes y tipo de viaje que anhelas.<br />
                No hay más excusas, tu viaje es y arranca HOY.
              </p>
              <div className="w-full flex justify-center">
                <a
                  href="mailto:kusiturismo@gmail.com?subject=Quiero mi asesoría personalizada"
                  className="bg-[#C77A4E] text-white px-8 py-3 rounded-md font-semibold text-lg shadow hover:bg-[#A65E2E] transition text-center"
                >
                  ¡QUIERO MI ASESORÍA PERSONALIZADA!
                </a>
              </div>
            </div>
          </section>
          {/* COLABORACIÓN */}
          <section className="bg-white dark:bg-gray-900 md:col-span-2">
            <div className="max-w-2xl w-full flex flex-col items-center rounded-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#C77A4E] mb-4 text-center">¿Te gustó este proyecto?</h2>
              <p className="text-gray-700 dark:text-gray-200 text-lg mb-6 text-center">
                AYUDAME A SEGUIR VIAJANDO ACÁ<br />
                Desde hace años llevo en el corazón el deseo de seguir viajando, compartiendo culturas, conectando con la tierra y promoviendo un turismo que beneficie a las comunidades, un turismo más justo, consciente y humano. Donde el respeto por la naturaleza, la diversidad, la comunidad y las raíces sea lo más importante.
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 text-base space-y-2 mb-6 text-left">
                <li>
                  <span className="font-semibold">Económicamente para llegar a más sitios:</span>
                  <div className="flex gap-4 mt-2">
                    <a href="https://cafecito.app/viajandoconkusi0" target="_blank" rel="noopener noreferrer" className="underline text-[#C77A4E] hover:text-[#A65E2E]">Cafecito</a>
                    <a href="https://www.mercadopago.com.ar/" target="_blank" rel="noopener noreferrer" className="underline text-[#C77A4E] hover:text-[#A65E2E]">Mercado Pago</a>
                  </div>
                </li>
                <li>
                  <span className="font-semibold">Como sponsor:</span> enviando un correo a <a href="mailto:kusiturismocomunitario@gmail.com" className="underline text-[#C77A4E] hover:text-[#A65E2E]">kusiturismocomunitario@gmail.com</a>
                </li>
                <li>
                  <span className="font-semibold">Interactuando con <a href="https://www.instagram.com/kusi.turismo/" target="_blank" rel="noopener noreferrer" className="underline text-[#C77A4E] hover:text-[#A65E2E]">@kusi.turismo</a> en las diferentes plataformas</span>
                </li>
                <li>
                  <span className="font-semibold">Likeando y compartiendo mi contenido</span>
                </li>
              </ul>
            </div>
          </section>
        </div>


      </main>
      {/* Footer siempre abajo */}
      <Footer />
    </div>
  );
}