'use client';
import { useState, useEffect } from 'react';

export default function JewelryHeroVideo() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#FAFAFA]">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Overlay oscuro para legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-10" />
        
        {/* Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Crect fill='%23FAFAFA' width='1920' height='1080'/%3E%3C/svg%3E"
        >
          <source src="/assets/videos/hero.mp4" type="video/mp4" />
          {/* Fallback para navegadores sin soporte */}
          Tu navegador no soporta video HTML5
        </video>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-6 md:px-12">
        <div 
          className={`max-w-4xl text-center transition-all duration-1000 transform
            ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Badge Superior */}
          <div 
            className={`inline-block mb-6 transition-all duration-1000 delay-200
              ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <span className="inline-flex items-center px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <span className="w-2 h-2 bg-[#D4AF37] rounded-full mr-3 animate-pulse" />
              <span className="text-white text-xs md:text-sm font-medium tracking-[3px] uppercase">
                Nueva Colección 2025
              </span>
            </span>
          </div>

          {/* Título Principal */}
          <h1 
            className={`text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight transition-all duration-1000 delay-300
              ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Elegancia
            <br />
            <span className="text-[#D4AF37]">Atemporal</span>
          </h1>

          {/* Descripción */}
          <p 
            className={`text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light transition-all duration-1000 delay-500
              ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Descubre piezas únicas de joyería artesanal que realzan tu esencia.
            Cada creación cuenta una historia de sofisticación y belleza.
          </p>

          {/* Botones CTA */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-700
              ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <button className="group relative px-10 py-4 bg-[#D4AF37] text-white font-medium text-sm tracking-[2px] uppercase rounded-none overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_10px_40px_rgba(212,175,55,0.4)]">
              <span className="relative z-10">Explorar Colección</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </button>

            <button className="group px-10 py-4 bg-transparent text-white font-medium text-sm tracking-[2px] uppercase rounded-none border border-white/50 backdrop-blur-sm transition-all duration-500 hover:bg-white hover:text-[#2C2C2C] hover:border-white">
              Ver Catálogo
            </button>
          </div>

          {/* Indicador de Scroll */}
          {/* <div 
            className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000
              ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <span className="text-white/60 text-xs tracking-[2px] uppercase">Scroll</span>
              <svg 
                className="w-6 h-6 text-white/60" 
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
          </div> */}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-px h-24 bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent z-20" />
      {/* <div className="absolute bottom-20 right-10 w-px h-24 bg-gradient-to-t from-transparent via-[#D4AF37]/50 to-transparent z-20" /> */}

      {/* Floating Elements Animation */}
      <div className="absolute top-1/4 left-[10%] w-2 h-2 bg-[#D4AF37]/30 rounded-full animate-float z-20" />
      <div className="absolute top-1/3 right-[15%] w-3 h-3 bg-white/20 rounded-full animate-float-delayed z-20" />
      {/* <div className="absolute bottom-1/4 left-[20%] w-2 h-2 bg-[#D4AF37]/20 rounded-full animate-float z-20" /> */}

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px);
            opacity: 0.6;
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-30px);
            opacity: 0.5;
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}