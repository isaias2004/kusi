// app/page.js
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
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20 gap-8 sm:p-20">
      <div className='container flex flex-col items-center justify-center'>
        <NavBar />
        <div className='flex flex-2 items-center justify-around w-full gap-10 md:flex-row flex-col'>
        </div>
        <Footer />
      </div>
    </div>
  );
}
