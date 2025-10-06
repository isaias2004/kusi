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
                          <Link href="/" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#C77A4E] md:p-0 md:dark:hover:text-[#C77A4E] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent uppercase tracking-tight font-extralight">Home</Link>
                        </li>
                        <li>
                          <Link href="/quienesSomos" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#C77A4E] md:p-0 md:dark:hover:text-[#C77A4E] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent uppercase tracking-tight font-extralight">Quienes somos</Link>
                        </li>
                        <li>
                          <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#C77A4E] md:p-0 md:dark:hover:text-[#C77A4E] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent uppercase tracking-tight font-extralight">Testimonios</a>
                        </li>
                        <li>
                          <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#C77A4E] md:p-0 md:dark:hover:text-[#C77A4E] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent uppercase tracking-tight font-extralight">Contacto</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
            </div>
  );
}