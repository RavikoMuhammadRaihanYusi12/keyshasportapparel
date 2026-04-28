import React from 'react';
import { motion } from 'framer-motion';

// Import assets
import soccerImg from '../assets/soccer.png';
import basketImg from '../assets/basketball.png';
import badmintonImg from '../assets/badminton.png';
import esportImg from '../assets/esport.png';
import vollyImg from '../assets/volly.png';
import baseballImg from '../assets/baseball.png';
import futsalImg from '../assets/futsal.png';

const items = [
  { name: "FUTSAL JERSEY", image: futsalImg },
  { name: "SOCCER JERSEY", image: soccerImg },
  { name: "BASKETBALL JERSEY", image: basketImg },
  { name: "BADMINTON JERSEY", image: badmintonImg },
  { name: "E-SPORTS JERSEY", image: esportImg },
  { name: "VOLLEYBALL JERSEY", image: vollyImg },
  { name: "BASEBALL JERSEY", image: baseballImg },
];

const Katalog = () => {
  const scrollRef = React.useRef(null);
  const [isPaused, setIsPaused] = React.useState(false);

  React.useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId;
    let lastTime = 0;
    const speed = 50; // pixels per second

    const animate = (time) => {
      if (!lastTime) lastTime = time;
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      if (!isPaused) {
        scrollContainer.scrollLeft += speed * delta;

        // Seamless loop: when we reach the end of the first set of items, jump back to start
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <section id="katalog" className="py-32 overflow-hidden bg-black text-white">
      <div className="px-6 mb-16 flex justify-between items-end">
        <div data-aos="fade-right">
          <h2 className="text-5xl md:text-7xl mb-0 italic font-black uppercase">KATALOG <br /> TERBARU.</h2>
        </div>
        <div className="hidden md:block" data-aos="fade-left">
          <p className="text-gray-400 uppercase font-black tracking-[0.2em] text-[10px]">Scroll or drag to explore</p>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div className="flex gap-10 whitespace-nowrap px-6">
          {[...items, ...items].map((item, idx) => (
            <div
              key={idx}
              className="relative w-[300px] md:w-[450px] flex-shrink-0 group"
              data-aos="fade-up"
              data-aos-delay={(idx % items.length) * 100}
            >
              <div className="aspect-[3/4] bg-zinc-900 overflow-hidden mb-8 transition-all duration-700 relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 pointer-events-none"
                />
              </div>
              <h3 className="text-3xl font-black italic tracking-tighter uppercase">{item.name}</h3>
              <div className="w-12 h-[3px] bg-white mt-4 group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Katalog;
