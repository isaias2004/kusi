"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/images/lago.jpg",
  "/images/humahuaca.jpg",
  "/images/nuevo3.jpg",
  "/images/nuevo4.jpg",
  "/images/nuevo5.jpg",
  "/images/nuevo6.jpg",
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-56 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
      {images.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          <Image
            src={src}
            alt={`Slide ${i}`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"
            priority={i === 0}
          />
        </div>
      ))}
    </div>
  );
}
