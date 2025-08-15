import React from 'react';
import './globals.css'; // Ensure you have a global CSS file for styles
import Image from 'next/image';
import { Nata } from 'next/font/google';

const nata = Nata({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
}); 

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ${nata .className}">
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 flex justify-center">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
          {/* Navbar links */}
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#C77A4E] md:p-0 md:dark:hover:text-[#C77A4E] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#C77A4E] md:p-0 md:dark:hover:text-[#C77A4E] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Quienes somos</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#C77A4E] md:p-0 md:dark:hover:text-[#C77A4E] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Testimonios</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#C77A4E] md:p-0 md:dark:hover:text-[#C77A4E] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <Image
        src="/logo-kusi.png" // Path relative to the public directory
        alt="logo kusi"
        width={200} // Specify the width of the image
        height={300} // Specify the height of the image
      />
      </main>
    </div>
  );
}
