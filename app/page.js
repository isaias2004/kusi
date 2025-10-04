// app/page.js
import React from 'react';
import './globals.css';
import Image from 'next/image';
import NavBar from './components/NavBar';
import Kilometraje from './components/Kilometraje';
import Experiencia from './components/Experiencia';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import SumarKm from './components/SumarKm';
import CarouselKm from './components/CarouselKm';


export const metadata = {
  title: 'Kusi Turismo',
  description: 'Agencia de turismo',
};

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20 gap-8 sm:p-20">
      <div className='container flex flex-col items-center justify-center'>
        <NavBar />
        <main className="flex flex-col md:flex-row items-center justify-center gap-8 w-full mt-500 md:mt-480 md:mb-30">
          <Carousel />
          <div className="flex flex-col w-full items-end gap-3 relative z-10">
            <div className='flex flex-row w-full justify-between'>
              <Image 
                className='opacity-50 ml-15 hidden md:block'
                src="/12.png"
                alt="logo kusi"
                width={250}
                height={5}
              />
              <div className='justify-items-end'>
                <h1 className="text-2xl md:text-4xl font-bold text-right text-gray-200 dark:text-gray-800 uppercase text-shadow-md ">Bienvenidos a <span className='text-[#C77A4E]'>KUSI   </span><br></br> turismo comunitario</h1>
                <h2 className="text-1 md:text-2xl text-right text-gray-200 dark:text-gray-300 max-w-xl text-shadow-md tracking-tight font-extralight">
                    Acompáñame a conectar con la herencia natural y cultural de Latinoamérica a través de experiencias que transforman.
                </h2>
                </div>
              </div>
                <a href="https://wa.link/9yh9be" target="_blank" rel="noopener noreferrer" className="bg-[#C77A4E] text-white px-6 py-3 rounded-md hover:bg-[#A65E2E] transition uppercase font-semibold w-max">
                  Ver experiencias KUSI en Jujuy
                </a>
        </div>
        </main>
        <Experiencia /> 
        <Kilometraje />
        <div className='flex flex-2 items-center justify-around w-full gap-10 md:flex-row flex-col'>
          <SumarKm />
          <CarouselKm />
        </div>
        <Footer />
      </div>
    </div>
  );
}
