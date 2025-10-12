import Image from 'next/image';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import CarouselContact from '../components/CarouselContact';

export const metadata = {
  title: 'Contacto | Kusi Turismo',
  description: 'Contactanos para vivir tu experiencia en Jujuy',
};

export default function Contacto() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <NavBar />
      <main className="flex-1 flex flex-col items-center justify-center p-4 pt-28 pb-20 gap-8 sm:p-20">
        <section className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-center gap-12 bg-gradient-to-b from-[#fff7f0] to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h1 className="text-3xl md:text-4xl font-bold text-[#C77A4E] mb-4 text-center md:text-left">¡Contactanos!</h1>
            <p className="text-gray-700 dark:text-gray-200 text-lg mb-4 text-center md:text-left">
              ¿Querés reservar una experiencia, tenés dudas o simplemente querés saludarnos? <br />
              Escribinos y te responderemos lo antes posible.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="https://www.instagram.com/kusi.turismo/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/instagram.png"
                  alt="Instagram"
                  width={32}
                  height={32}
                  className="w-8 h-8 md:w-10 md:h-10"
                />
              </a>
              <a href="https://www.tiktok.com/@viajandoconkusi" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/tik-tok.png"
                  alt="TikTok"
                  width={32}
                  height={32}
                  className="w-8 h-8 md:w-10 md:h-10"
                />
              </a>
              <a href="https://wa.link/9yh9be" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/whatsapp.png"
                  alt="WhatsApp"
                  width={32}
                  height={32}
                  className="w-8 h-8 md:w-10 md:h-10"
                />
              </a>
            </div>
          </div>
          <div className="flex-1 justify-center hidden md:flex">
            <CarouselContact />
          </div>
        </section>
        <section className="w-full max-w-2xl bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-2xl font-bold text-[#C77A4E] mb-6 text-center">Envíanos tu consulta</h2>
          <form
            action="https://formsubmit.co/kusiturismo@gmail.com"
            method="POST"
            className="flex flex-col gap-6"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://kusiturismo.com.ar/gracias" />
            <div>
              <label htmlFor="nombre" className="block text-gray-700 dark:text-gray-200 mb-2">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#C77A4E]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required    
                pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
                title="Por favor, ingresa un email válido."
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#C77A4E]"
                />
            </div>
            <div>
              <label htmlFor="mensaje" className="block text-gray-700 dark:text-gray-200 mb-2">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={5}
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#C77A4E]"
              />
            </div>
            <button
              type="submit"
              className="bg-[#C77A4E] text-white px-8 py-3 rounded-md font-semibold text-lg shadow hover:bg-[#A65E2E] transition self-center"
            >
              Enviar mensaje
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}