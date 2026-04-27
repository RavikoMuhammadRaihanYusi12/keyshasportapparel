import React from 'react';
import { Menu } from 'lucide-react';
import logo from '../assets/k3logo.png';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Keysha Sports Logo" className="w-10 h-10 object-contain rounded-sm" />
          <h1 className="text-lg mb-0 leading-none uppercase font-black tracking-tight">Keysha Sports <span className="font-light">Apparel</span></h1>
        </div>

        <div className="hidden md:flex items-center gap-8 uppercase font-bold text-sm tracking-widest">
          <a href="#" className="hover:text-gray-500 transition-colors">Home</a>
          <a href="#katalog" className="hover:text-gray-500 transition-colors">Katalog</a>
          <a href="#features" className="hover:text-gray-500 transition-colors">Layanan</a>
          <a href="#contact" className="hover:text-gray-500 transition-colors">Kontak</a>
        </div>

        <div className="flex items-center gap-6">
          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
