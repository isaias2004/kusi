'use client';
import React from 'react';

export default function RouteAnimation() {
  return (
    <div className="w-full flex justify-center py-6">
      <svg
        viewBox="0 0 220 420"
        xmlns="http://www.w3.org/2000/svg"
        className="max-w-xs w-full md:max-w-sm"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0" stopColor="#C77A4E" stopOpacity="1"/>
            <stop offset="1" stopColor="#C77A4E" stopOpacity="0.4"/>
          </linearGradient>
        </defs>

        {/* ruta principal (zig-zag / varias líneas) */}
        <path
          id="route"
          d="M110 12
             C110 40, 70 60, 70 96
             L70 140
             C70 170, 130 170, 130 200
             L130 240
             C130 270, 90 290, 90 320
             L90 360
             C90 390, 140 405, 170 420"
          fill="none"
          stroke="url(#g)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="600"
          strokeDashoffset="600"
        >
          {/* dibuja la línea (SMIL) */}
          <animate attributeName="stroke-dashoffset" from="600" to="0" dur="3.6s" repeatCount="indefinite" />
        </path>

        {/* líneas secundarias (simulan ramificaciones) */}
        <path
          d="M70 96 L40 120"
          fill="none"
          stroke="#E6D6C8"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M130 200 L160 220"
          fill="none"
          stroke="#E6D6C8"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M90 320 L60 340"
          fill="none"
          stroke="#E6D6C8"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* punto que se mueve por la ruta */}
        <g>
          <circle r="6" fill="#C77A4E" />
          <animateMotion dur="3.6s" repeatCount="indefinite" rotate="auto">
            <mpath xlinkHref="#route" />
          </animateMotion>
        </g>

        {/* indicadores estáticos (puntos) */}
        <circle cx="110" cy="12" r="3.5" fill="#C77A4E" opacity="0.9" />
        <circle cx="70" cy="96" r="3.5" fill="#C77A4E" opacity="0.9" />
        <circle cx="130" cy="200" r="3.5" fill="#C77A4E" opacity="0.9" />
        <circle cx="90" cy="320" r="3.5" fill="#C77A4E" opacity="0.9" />
      </svg>
    </div>
  );
}