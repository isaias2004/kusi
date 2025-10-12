import Image from 'next/image';

export default function WhatsAppFloatingButton() {
  return (
    <a
      href="https://wa.link/9yh9be"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bottom-6 right-6 md:bottom-8 md:right-8 bg-[#25D366] rounded-full shadow-lg p-3 flex items-center justify-center hover:scale-110 transition"
      aria-label="WhatsApp"
    >
      <Image
        src="/whatsapp.png"
        alt="WhatsApp"
        width={40}
        height={40}
        className="w-8 h-8 md:w-10 md:h-10"
        priority
      />
    </a>
  );
}