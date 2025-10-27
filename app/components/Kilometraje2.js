// components/Kilometraje.js
'use client';

import { useEffect, useRef } from 'react';
import { CountUp } from 'countup.js';

export default function Kilometraje() {
  const counterRef = useRef(null);

  useEffect(() => {
    let countUp;

    const startCounter = () => {
      countUp = new CountUp(counterRef.current, 50000, {
        duration: 10,
        separator: ',',
        suffix: ' km',
      });

      if (!countUp.error) {
        countUp.start();
      } else {
        console.error(countUp.error);
      }
    };

    // primera ejecución
    startCounter();

    // repetir cada 15 segundos
    const interval = setInterval(() => {
      startCounter();
    }, 15000);

    // limpiar al desmontar
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-40 mb-20 mt-15">
      <h2 className="text-2xl font-semibold mb-2 text-gray-700">
        Kilometros recorridos
      </h2>
      <div
        ref={counterRef}
        className="text-3xl   font-semibold text-gray-800 dark:text-gray-200"
      />
    </div>
  );
}
