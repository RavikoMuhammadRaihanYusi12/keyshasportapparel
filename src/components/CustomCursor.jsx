import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('.cursor-hover')) {
        setIsHovering(true);
        const text = e.target.closest('.cursor-hover').getAttribute('data-cursor-text');
        setCursorText(text || "");
      } else {
        setIsHovering(false);
        setCursorText("");
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-black rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePos.x - 8,
          y: mousePos.y - 8,
          scale: isHovering ? 2.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-black rounded-full pointer-events-none z-[9998] flex items-center justify-center overflow-hidden"
        animate={{
          x: mousePos.x - 20,
          y: mousePos.y - 20,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 1 : 0.5,
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20 }}
      >
        {isHovering && cursorText && (
          <span className="text-[8px] font-bold uppercase text-black whitespace-nowrap px-1 bg-white">
            {cursorText}
          </span>
        )}
      </motion.div>
    </>
  );
};

export default CustomCursor;
