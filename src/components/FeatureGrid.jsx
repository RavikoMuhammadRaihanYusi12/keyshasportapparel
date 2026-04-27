import React from 'react';
import { Palette, Zap, Globe, PackagePlus } from 'lucide-react';

const features = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Free Design",
    desc: "Konsultasi desain gratis dengan desainer profesional kami untuk jersey impianmu."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Produksi Cepat",
    desc: "Proses produksi kilat hanya 1-3 hari kerja untuk pesanan mendesak."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Seluruh Indonesia",
    desc: "Layanan pengiriman aman dan terpercaya ke seluruh Indonesia."
  },
  {
    icon: <PackagePlus className="w-8 h-8" />,
    title: "Bonus 1/15 Pcs",
    desc: "Setiap pemesanan 15 pcs, dapatkan tambahan 1 pcs gratis sebagai bonus."
  }
];

const FeatureGrid = () => {
  return (
    <section id="features" className="py-32 bg-brand-gray px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div data-aos="fade-right">
            <h2 className="text-5xl md:text-7xl">KUALITAS <br /> TANPA BATAS.</h2>
          </div>
          <div className="max-w-md text-right" data-aos="fade-left">
            <p className="uppercase font-bold text-gray-500 tracking-tight">
              Kami menggabungkan seni desain dengan teknologi sublimasi terbaru untuk memberikan hasil terbaik bagi atlet dan komunitas.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/10 border border-black/10">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-10 group hover:bg-black transition-colors duration-500"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="mb-8 text-black group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="text-2xl mb-4 group-hover:text-white transition-colors">{item.title}</h3>
              <p className="text-gray-500 text-sm font-medium group-hover:text-gray-400 transition-colors">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
