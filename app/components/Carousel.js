"use client";

import { useEffect, useState } from "react";
import Image from "next/image";


const images = [
  "/images/HOME-1.jpg",
  "/images/HOME-2.jpg",
  "/images/HOME-3.jpg",
  "/images/HOME-4.jpg",
  "/images/HOME-5.jpg",
  "/images/HOME-6.jpg",
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute w-full h-[400px] md:h-[500px] overflow-hidden shadow-lg">
      {images.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Slide ${i}`}
            fill
            className="object-cover"
            priority={i === 0} // carga más rápido la primera
          />
        </div>
      ))}
    </div>
  );
}

