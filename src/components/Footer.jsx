import React from 'react';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { FaFacebook, FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer id="contact" className="bg-white border-t border-black/5 pt-32 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          <div data-aos="fade-up">
            <h2 className="text-6xl md:text-8xl mb-12 italic">ORDER <br /> SEKARANG</h2>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/keysha.sports/" className="w-14 h-14 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                <FaInstagram className="w-6 h-6" />
              </a>

            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10" data-aos="fade-up" data-aos-delay="200">
            <div>
              <p className="uppercase font-black text-xs tracking-widest text-gray-400 mb-6">Lokasi</p>
              <div className="flex gap-4 mb-6">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm font-bold uppercase leading-relaxed">
                  Jl. Amal No.9, Delima, Kec. Tampan, Kota Pekanbaru, Riau 28292 <br />
                  Pekanbaru, Riau <br />
                  Indonesia
                </p>
              </div>
              <div className="w-full h-48 bg-gray-100 overflow-hidden relative border border-black/10 rounded-sm">
                <iframe
                  title="Google Maps Location"
                  src="https://maps.google.com/maps?q=Jl.%20Amal%20No.9,%20Delima,%20Kec.%20Tampan,%20Kota%20Pekanbaru,%20Riau+28292&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(1) contrast(1.1) brightness(1)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="hover:grayscale-0 transition-all duration-700 ease-in-out"
                ></iframe>
              </div>
            </div>
            <div>
              <p className="uppercase font-black text-xs tracking-widest text-gray-400 mb-6">Hubungi Kami</p>
              <div className="space-y-4">
                <div className="flex gap-4 items-center group cursor-pointer">
                  <Phone className="w-5 h-5" />
                  <p className="text-sm font-bold group-hover:underline underline-offset-4">+62 83171426232</p>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex gap-4 items-center group cursor-pointer">
                  <Mail className="w-5 h-5" />
                  <p className="text-sm font-bold group-hover:underline underline-offset-4">keysha.sports@gmail.com</p>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex gap-4 items-center group cursor-pointer">
                  <FaInstagram className="w-5 h-5" />
                  <p className="text-sm font-bold group-hover:underline underline-offset-4">keysha.sports</p>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-black/5 gap-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
            © 2024 KEYSHA SPORTS APPAREL. ALL RIGHTS RESERVED.
          </p>

        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/6283171426232"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 w-16 h-16 bg-black text-white rounded-full flex items-center justify-center z-[100] shadow-2xl hover:scale-110 transition-transform cursor-hover"
        data-cursor-text="Chat"
      >
        <Phone className="w-6 h-6" />
      </a>
    </footer>
  );
};

export default Footer;
