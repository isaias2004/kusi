// components/NavBar.js
'use client';
import Image from 'next/image';
import Link from 'next/link';


export default function NavBar() {
    return (
        <div className='container flex flex-col items-center justify-center'>
                <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 flex justify-center">
                  <div className="max-w-screen-xl w-full flex flex-wrap items-center justify-evenly mx-auto p-4" >
                    {/* Logo */}
                    <div className="flex items-center">
                      <a href="https://www.instagram.com/kusi.turismo/" target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/instagram.png"
                          alt="logo kusi"
                          width={35}
                          height={30}
                          className="w-6 h-6 md:w-[35px] md:h-[35px]"
                        />
                      </a>
                      <a href='https://www.tiktok.com/@viajandoconkusi' target='_blank' rel="noopener noreferrer">
                        <Image
                          className='ml-2 w-5 h-6 md:w-[25px] md:h-[30px]'
                          src="/tik-tok.png"
                          alt="logo kusi"
                          width={25}
                          height={30}
                        />
                      </a>
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
                          <Link href="/" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#C77A4E] md:p-0 md:dark:hover:text-[#C77A4E] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent uppercase tracking-tight font-extralight">Home</Link>
                        </li>
                        <li>
                          <Link href="/quienesSomos" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#C77A4E] md:p-0 md:dark:hover:text-[#C77A4E] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent uppercase tracking-tight font-extralight">Quienes somos</Link>
                        </li>

                        {/* EXPERIENCIAS con dropdown (toggle por click sin JS) */}
                        <li className="relative">
                          {/* checkbox toggle (peer) */}
                          <input id="experiencias-toggle" type="checkbox" className="hidden peer" />

                          {/* label actúa como botón (misma tipografía/tamaño que el menú) */}
                          <label
                            htmlFor="experiencias-toggle"
                            className="flex items-center py-2 px-3 text-gray-900 rounded-sm md:p-0 md:hover:text-[#C77A4E] dark:text-white uppercase tracking-tight font-extralight cursor-pointer"
                          >
                            Experiencias
                            <svg className="ml-2 w-3 h-3 text-gray-600 dark:text-gray-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                            </svg>
                          </label>

                          {/* Dropdown para desktop: solo visible cuando el checkbox está checked */}
                          <div className="hidden peer-checked:block absolute left-0 top-full mt-2 w-56 bg-white dark:bg-gray-800 rounded-md shadow-lg z-30">
                            <ul className="flex flex-col">
                              <li>
                                <Link href="/experiencias" className="block px-4 py-2 text-gray-600 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#C77A4E]  md:dark:hover:text-[#C77A4E] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent uppercase tracking-tight font-extralight">
                                  Experiencias
                                </Link>
                              </li>
                              <li>
                                <Link href="/viajesGrupales" className="block px-4 py-2 text-gray-600 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#C77A4E]  md:dark:hover:text-[#C77A4E] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent uppercase tracking-tight font-extralight">
                                  Viajes grupales
                                </Link>
                              </li>
                              <li>
                                <Link href="/atencion100" className="block px-4 py-2 text-gray-600 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#C77A4E]  md:dark:hover:text-[#C77A4E] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent uppercase tracking-tight font-extralight">
                                  Atención 100% personalizada
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <Link href="/proyectoExpansion" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#C77A4E] md:p-0 md:dark:hover:text-[#C77A4E] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent uppercase tracking-tight font-extralight">Proyecto de Expansión</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
            </div>
  );
}