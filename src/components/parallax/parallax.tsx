'use client';
import { useState, useEffect } from 'react';

export default function ParallaxSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calcular el efecto parallax basado en el scroll
  const parallaxOffset = scrollY * 0.5;

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Imagen de fondo con efecto parallax */}
      <div 
        className="absolute inset-0 w-full h-[400%] "
        style={{
          transform: `translateY(-${parallaxOffset}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <img
          src="https://cdn.pixabay.com/photo/2022/08/16/04/52/jewel-7389356_1280.jpg"
          alt="Joyería elegante"
          className="w-full h-full object-cover"
        />
        
        {/* Overlay gradiente */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Contenido centrado */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          {/* Badge decorativo */}
          <div 
            className="inline-flex items-center gap-3 mb-8 opacity-0 animate-fadeInUp"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            <div className="w-16 h-px bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-sm tracking-[3px] uppercase font-medium">
              Artesanía Excepcional
            </span>
            <div className="w-16 h-px bg-[#D4AF37]" />
          </div>

          {/* Título principal */}
          <h2 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight opacity-0 animate-fadeInUp"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              animationDelay: '0.4s',
              animationFillMode: 'forwards'
            }}
          >
            Donde el Arte
            <br />
            <span className="text-[#D4AF37]">Cobra Vida</span>
          </h2>

          {/* Descripción */}
          <p 
            className="text-white/90 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed mb-12 font-light opacity-0 animate-fadeInUp"
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
          >
            Cada pieza es un testimonio de horas de trabajo meticuloso, 
            pasión inquebrantable y el compromiso de crear algo verdaderamente único
          </p>

          {/* Estadísticas */}
          <div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 opacity-0 animate-fadeInUp"
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
          >
            <div className="backdrop-blur-md bg-white/5 p-6 rounded-sm border border-white/10">
              <p 
                className="text-5xl font-bold text-[#D4AF37] mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                25+
              </p>
              <p className="text-white/70 text-sm uppercase tracking-wider">
                Años de Maestría
              </p>
            </div>

            <div className="backdrop-blur-md bg-white/5 p-6 rounded-sm border border-white/10">
              <p 
                className="text-5xl font-bold text-[#D4AF37] mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                100%
              </p>
              <p className="text-white/70 text-sm uppercase tracking-wider">
                Hecho a Mano
              </p>
            </div>

            <div className="backdrop-blur-md bg-white/5 p-6 rounded-sm border border-white/10">
              <p 
                className="text-5xl font-bold text-[#D4AF37] mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                5000+
              </p>
              <p className="text-white/70 text-sm uppercase tracking-wider">
                Clientes Felices
              </p>
            </div>
          </div>

          {/* CTA Button */}
          {/* <button 
            className="group relative  px-12 py-5 bg-[#D4AF37] text-white font-medium text-sm tracking-[2px] uppercase overflow-hidden transition-all duration-500 hover:shadow-[0_15px_50px_rgba(212,175,55,0.5)] hover:scale-105 opacity-0 animate-fadeInUp"
            style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
          >
            <span className="relative z-10">Descubre Nuestra Historia</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </button> */}
        </div>
      </div>

      {/* Elementos decorativos flotantes */}
      <div 
        className="absolute top-1/4 left-[10%] w-3 h-3 bg-[#D4AF37]/40 rounded-full"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          animation: 'float 4s ease-in-out infinite'
        }}
      />
      <div 
        className="absolute top-1/3 right-[15%] w-2 h-2 bg-white/30 rounded-full"
        style={{
          transform: `translateY(${scrollY * 0.4}px)`,
          animation: 'float 5s ease-in-out infinite',
          animationDelay: '1s'
        }}
      />
      <div 
        className="absolute bottom-1/4 left-[20%] w-2 h-2 bg-[#D4AF37]/30 rounded-full"
        style={{
          transform: `translateY(${scrollY * 0.25}px)`,
          animation: 'float 6s ease-in-out infinite',
          animationDelay: '2s'
        }}
      />

      {/* Indicador de scroll */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 animate-bounce opacity-70">
          <svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }
      `}</style>

      {/* Contenido de demostración para generar scroll */}
      <div className="relative z-20 bg-[#FAFAFA] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#8B8B8B] text-lg">
            ↑ Haz scroll hacia arriba y abajo para ver el efecto parallax ↑
          </p>
        </div>
      </div>
    </section>
  );
}