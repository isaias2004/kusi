import React from 'react';
import './globals.css';
import Image from 'next/image';

export const metadata = {
  title: 'Kusi Turismo',
  description: 'Agencia de turismo',
};

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20 gap-8 sm:p-20">
      <div className='container flex flex-col items-center justify-center'>
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 flex justify-center">
          <div className="max-w-screen-xl w-full flex flex-wrap items-center justify-evenly mx-auto p-4" >
            {/* Logo */}
            <div className="flex items-center">
              <a  href="https://www.instagram.com/kusi.turismo/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/instagram.png"
                alt="logo kusi"
                width={20}
                height={30}
          />
          </a>
                  <a href='https://www.tiktok.com/@viajandoconkusi' target='_blank'>
                    <Image className='ml-2'
                        src="/tik-tok.png"
                        alt="logo kusi"
                        width={20}
                        height={30}
                  />
                  </a>
                  <a href='https://wa.link/9yh9be' target='_blank'><Image className='ml-2'
                        src="/whatsapp.png"
                        alt="logo kusi"
                        width={20}
                        height={30}
                  /> </a>
            </div>
            {/* Hamburger menu button (hidden, no JS) */}
            <label htmlFor="menu-toggle" className="md:hidden inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 cursor-pointer">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <input type="checkbox" id="menu-toggle" className="hidden peer" />
            {/* Navbar links */}
            <div className="peer-checked:block hidden w-full md:flex md:w-auto" id="navbar-sticky">
              <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 font-medium rounded-lg bg-gray-50 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900">
                <li>
                  <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#C77A4E] md:p-0 md:dark:hover:text-[#C77A4E] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#C77A4E] md:p-0 md:dark:hover:text-[#C77A4E] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Quienes somos</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#C77A4E] md:p-0 md:dark:hover:text-[#C77A4E] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Testimonios</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#C77A4E] md:p-0 md:dark:hover:text-[#C77A4E] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contacto</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <main className="flex flex-col md:flex-row items-center justify-center gap-8 mt-230 w-full mb-20 md:mb-30">
          <Image
            className="rounded-full hidden md:block"
            src="/monte.jpeg"
            alt="monte"
            width={400}
            height={300}
          />
          <div className="flex flex-col items-end gap-8 max-w-2xl md:mt-0 mt-60">
            <h1 className="text-4xl font-bold text-right text-gray-800 dark:text-gray-200">Kusi: Turismo Comunitario y Sustentable en Jujuy</h1>
            <h2 className="text-right text-gray-700 dark:text-gray-300 max-w-xl">
                Conectando con la herencia natural y cultural a traves de experiencias que transforman.
            </h2>
            <a href="https://wa.link/9yh9be" target="_blank" rel="noopener noreferrer" className="bg-[#C77A4E] text-white px-6 py-3 rounded-md hover:bg-[#A65E2E] transition uppercase font-semibold w-max">
              Ver experiencias KUSI en Jujuy
            </a>
          </div>
        </main>
        <div className="w-full cards">
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-left text-gray-800 dark:text-gray-200">Viajar y transformar realidades es posible</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Turismo sustentable</h3>
                <p className="text-gray-600 dark:text-gray-300">Diseñamos experiencias a tu medida para que disfrutes al máximo.</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Experiencias únicas</h3>
                <p className="text-gray-600 dark:text-gray-300">Nuestros guías conocen la región y te llevarán a los mejores lugares.</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Impacto local</h3>
                <p className="text-gray-600 dark:text-gray-300">Estamos disponibles para ayudarte en cualquier momento.</p>
              </div>
            </div>
          </section>
          <footer className="text-center text-gray-500 dark:text-gray-400 mt-8">
            <b>&copy; 2024 | Kusi Turismo.</b> Todos los derechos reservados.
          </footer>
        </div>
      </div>
    </div>
  );
}
