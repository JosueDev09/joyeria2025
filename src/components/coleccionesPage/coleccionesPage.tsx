'use client';

import { useState } from 'react';

export default function CollectionsPage() {
  const [hoveredCollection, setHoveredCollection] = useState<number | null>(null);

  const collections = [
    {
      id: 1,
      name: 'Oro Eterno',
      subtitle: 'Colección Clásica',
      description: 'Piezas atemporales en oro de 18k que capturan la esencia de la elegancia. Cada diseño es un testimonio de la artesanía tradicional fusionada con visión contemporánea.',
      pieces: 24,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      priceRange: 'Desde $8,500'
    },
    {
      id: 2,
      name: 'Diamante Puro',
      subtitle: 'Colección Premium',
      description: 'Diamantes certificados GIA que brillan con luz propia. Seleccionados por su excepcional claridad y corte perfecto, cada piedra cuenta una historia de lujo incomparable.',
      pieces: 16,
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
      priceRange: 'Desde $15,000'
    },
    {
      id: 3,
      name: 'Plata Luna',
      subtitle: 'Colección Moderna',
      description: 'Diseños contemporáneos en plata 925 para el espíritu libre y audaz. Formas orgánicas y líneas minimalistas que redefinen la joyería moderna.',
      pieces: 32,
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
      priceRange: 'Desde $4,200'
    },
    {
      id: 4,
      name: 'Piedras Místicas',
      subtitle: 'Colección Exclusiva',
      description: 'Gemas de colores excepcionales: esmeraldas, rubíes y zafiros de grado AAA. Cada piedra es única y seleccionada personalmente por nuestros gemólogos expertos.',
      pieces: 12,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      priceRange: 'Desde $18,000'
    },
    {
      id: 5,
      name: 'Herencia',
      subtitle: 'Colección Vintage',
      description: 'Joyas inspiradas en el Art Déco y la elegancia victoriana. Piezas que honran las técnicas tradicionales con un toque de sofisticación atemporal.',
      pieces: 18,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      priceRange: 'Desde $12,000'
    },
    {
      id: 6,
      name: 'Natura',
      subtitle: 'Colección Orgánica',
      description: 'Inspirada en las formas de la naturaleza. Diseños fluidos que capturan la belleza de hojas, flores y elementos naturales en metal precioso.',
      pieces: 20,
      image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
      priceRange: 'Desde $6,800'
    },
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden bg-[#2C2C2C] min-h-screen w-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80"
            alt="Colecciones"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#2C2C2C]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center max-w-4xl">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-white/60 text-sm mb-6">
              <a href="/" className="hover:text-[#D4AF37] transition-colors">Inicio</a>
              <span>/</span>
              <span className="text-white">Colecciones</span>
            </div>

            {/* Title */}
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Nuestras
              <br />
              <span className="text-[#D4AF37]">Colecciones</span>
            </h1>

            {/* Description */}
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Explora seis colecciones únicas, cada una con su propia personalidad y estilo. 
              Desde la elegancia clásica hasta la audacia contemporánea
            </p>

            {/* Stats */}
            <div className="flex justify-center gap-12 mt-12">
              <div>
                <p 
                  className="text-4xl font-bold text-[#D4AF37] mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  6
                </p>
                <p className="text-white/70 text-sm uppercase tracking-wider">Colecciones</p>
              </div>
              <div className="w-px h-16 bg-white/20" />
              <div>
                <p 
                  className="text-4xl font-bold text-[#D4AF37] mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  122
                </p>
                <p className="text-white/70 text-sm uppercase tracking-wider">Piezas Únicas</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-px bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs md:text-sm tracking-[3px] uppercase font-medium">
              Descubre
            </span>
            <div className="w-12 h-px bg-[#D4AF37]" />
          </div>

          <h2 
            className="text-3xl md:text-5xl font-bold text-[#2C2C2C] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Explora Cada Colección
          </h2>
          <p className="text-[#8B8B8B] text-lg max-w-2xl mx-auto">
            Cada colección representa una visión única del arte de la joyería
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection, index) => (
            <div
              key={collection.id}
              className="group relative bg-white rounded-sm overflow-hidden cursor-pointer transition-all duration-700 hover:shadow-[0_30px_80px_rgba(44,44,44,0.15)]"
              onMouseEnter={() => setHoveredCollection(collection.id)}
              onMouseLeave={() => setHoveredCollection(null)}
              style={{
                animation: `fadeInUp 0.8s ease-out ${index * 0.15}s both`
              }}
            >
              {/* Image Container */}
              <div className="relative h-[450px] overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Number Badge */}
                <div className="absolute top-6 right-6 w-14 h-14 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                  <span 
                    className="text-white font-bold text-xl"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {collection.id.toString().padStart(2, '0')}
                  </span>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-700 transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />

                {/* Pieces Count */}
                <div className="absolute top-6 left-6 bg-[#D4AF37] text-white px-4 py-2 text-xs font-medium tracking-wider uppercase">
                  {collection.pieces} Piezas
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Subtitle */}
                <p className="text-[#D4AF37] text-xs tracking-[2px] uppercase font-medium mb-3">
                  {collection.subtitle}
                </p>

                {/* Title */}
                <h3 
                  className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4 group-hover:text-[#D4AF37] transition-colors duration-500"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {collection.name}
                </h3>

                {/* Description */}
                <p className="text-[#8B8B8B] text-sm md:text-base leading-relaxed mb-6">
                  {collection.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-[#8B8B8B]/10">
                  {/* Price Range */}
                  <div>
                    <p className="text-[#8B8B8B] text-xs uppercase tracking-wider mb-1">
                      Rango de Precios
                    </p>
                    <p className="text-[#2C2C2C] font-semibold text-lg">
                      {collection.priceRange}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <button 
                    className={`group/btn px-6 py-3 bg-transparent text-[#2C2C2C] text-sm tracking-[2px] uppercase font-medium border border-[#2C2C2C]/20 transition-all duration-500 hover:bg-[#D4AF37] hover:text-white hover:border-[#D4AF37] ${
                      hoveredCollection === collection.id ? 'translate-x-0' : ''
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      Explorar
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

              {/* Hover Indicator Line */}
              <div 
                className={`absolute bottom-0 left-0 right-0 h-1 bg-[#D4AF37] transition-all duration-700 ${
                  hoveredCollection === collection.id ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-[#8B8B8B] text-lg mb-6">
            ¿No encuentras lo que buscas?
          </p>
          <button className="group px-12 py-4 bg-[#2C2C2C] text-white text-sm tracking-[2px] uppercase font-medium transition-all duration-500 hover:bg-[#D4AF37] hover:shadow-[0_10px_40px_rgba(212,175,55,0.3)]">
            Solicitar Diseño Personalizado
            <svg className="inline-block ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-white py-16 border-t border-[#8B8B8B]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 text-[#D4AF37]">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h4 
                className="text-xl font-bold text-[#2C2C2C] mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Certificación GIA
              </h4>
              <p className="text-[#8B8B8B] text-sm leading-relaxed">
                Todas nuestras piedras preciosas cuentan con certificación internacional
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 text-[#D4AF37]">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h4 
                className="text-xl font-bold text-[#2C2C2C] mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Empaque Premium
              </h4>
              <p className="text-[#8B8B8B] text-sm leading-relaxed">
                Cada pieza llega en una caja de lujo lista para regalar
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 text-[#D4AF37]">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 
                className="text-xl font-bold text-[#2C2C2C] mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Garantía de por Vida
              </h4>
              <p className="text-[#8B8B8B] text-sm leading-relaxed">
                Respaldamos la calidad de cada pieza con garantía vitalicia
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}