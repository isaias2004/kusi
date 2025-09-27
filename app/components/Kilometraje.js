// components/Kilometraje.js
'use client';

import { useEffect, useRef } from 'react';
import { CountUp } from 'countup.js';

export default function Kilometraje() {
  const counterRef = useRef(null);

  useEffect(() => {
    const countUp = new CountUp(counterRef.current, 50000, {
      duration: 10,
      separator: ',',
      suffix: ' km',
    });

    if (!countUp.error) {
      countUp.start();
    } else {
      console.error(countUp.error);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-40">
      <h2 className="text-2xl font-semibold mb-2 text-gray-700">Kilometros recorridos</h2>
      <div
        ref={counterRef}
        className="text-5xl font-semibold text-gray-800 dark:text-gray-200"
      />
    </div>
    
  );
}
