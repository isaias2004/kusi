"use client";

import { useEffect, useState } from "react";
import Image from "next/image";


const images = [
  "/images/img1.jpg",
  "/images/img2.jpeg",
  "/images/img3.jpg",
  "/images/img4.jpeg",
  "/images/img5.jpg",
  "/images/img6.jpg",
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
    <div className="relative w-full h-[200px] md:h-[600px] overflow-hidden shadow-xl/20 mb-20 rounded-md md:rounded-l-full">
      {images.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
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

