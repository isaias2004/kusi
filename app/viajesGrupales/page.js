import Image from 'next/image';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

export const metadata = {
  title: 'Contacto | Kusi Turismo',
  description: 'Contactanos para vivir tu experiencia en Jujuy',
};

export default function viajesGrupales() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <NavBar />
      <main className="flex-1 flex flex-col items-center justify-center p-4 pt-28 pb-20 gap-8 sm:p-20">
        <h1>Viajes Grupales</h1>
      </main>
      <Footer />
    </div>
  );
}