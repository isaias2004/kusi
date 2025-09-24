// components/Experiencia.js
'use client';


export default function Experiencia() {
    return (
        <div className="w-full cards">
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-20 mt-40">
            <h2 className="text-2xl font-bold mb-4 md:text-left text-center text-gray-800 dark:text-gray-200">Viajar y transformar realidades es posible</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Un poco sobre mí</h3>
                <p className="text-gray-600 dark:text-gray-300"> Cómo viajar transformo mi vida y hoy vivo viajando.</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Que es turismo comunitario y sustentable</h3>
                <p className="text-gray-600 dark:text-gray-300">Viajar y transformar realidades es posible.</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Experiencias KUSI en Argentina</h3>
                <p className="text-gray-600 dark:text-gray-300">Sumate a las aventuras y vivilo vos mismo.</p>
              </div>
            </div>
          </section>
        </div>
  );
}
