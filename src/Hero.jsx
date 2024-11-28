/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // For routing

export default function Hero({ title, subtitle, cta }) {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!imageRef.current) return;

      const { left, top, width, height } = imageRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      imageRef.current.style.transform = `
        perspective(1000px)
        rotateY(${x * 5}deg)
        rotateX(${-y * 5}deg)
        translateZ(20px)
      `;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative pt-32 pb-16 bg-gradient-to-b from-[#0F1921] to-[#1E3243]">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Section: Text */}
        <div className="space-y-8 text-white flex flex-col">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-left">
            {title.start} 
            <span className="text-teal-400">{title.highlight}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-lg text-left">{subtitle}</p>
          <Link
            to="#"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-2/5"
          >
            {cta}
          </Link>
        </div>

        {/* Right Section: Image with Hover Effect */}
        <div
          ref={imageRef}
          className="relative transition-transform duration-200 ease-out"
        >
          <div className="relative aspect-[16/10] rounded-lg overflow-hidden">
            <img
              src="/Code.png" 
              alt="Platform Preview"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

