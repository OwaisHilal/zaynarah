import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-linear-to-b from-gray-50 via-white to-gray-50 transition-colors duration-500">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-6 py-8 animate-fadeIn">
        {/* Optional decorative top accent */}
        <div className="h-2 w-20 bg-rose-600 rounded-full mb-6 mx-auto shadow-lg" />

        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
