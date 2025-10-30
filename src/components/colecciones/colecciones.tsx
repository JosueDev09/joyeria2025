
'use client';
import { useState } from 'react';

export default function JewelryCollections() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const collections = [
    {
      title: "Oro Eterno",
      subtitle: "Colección Clásica",
      description: "Piezas atemporales en oro de 18k que capturan la esencia de la elegancia",
      items: "24 Piezas",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    },
    {
      title: "Diamante Puro",
      subtitle: "Colección Premium",
      description: "Diamantes certificados que brillan con luz propia en cada creación única",
      items: "16 Piezas",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    },
    {
      title: "Plata Luna",
      subtitle: "Colección Moderna",
      description: "Diseños contemporáneos en plata 925 para el espíritu libre y audaz",
      items: "32 Piezas",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    },
  ];

  return (
    <section className="relative bg-[#FAFAFA] py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-px bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs md:text-sm tracking-[3px] uppercase font-medium">
              Explora
            </span>
            <div className="w-12 h-px bg-[#D4AF37]" />
          </div>

          {/* Title */}
          <h2 
            className="text-4xl md:text-6xl font-bold text-[#2C2C2C] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Nuestras Colecciones
          </h2>

          {/* Description */}
          <p className="text-[#8B8B8B] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Cada colección es una historia única de artesanía, pasión y dedicación 
            al detalle más sublime
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white rounded-sm cursor-pointer transition-all duration-700"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image Container */}
              <div className="relative h-[500px] overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Decorative Corner */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-all duration-500">
                {/* Subtitle */}
                <p className="text-[#D4AF37] text-xs tracking-[2px] uppercase font-medium mb-2">
                  {collection.subtitle}
                </p>

                {/* Title */}
                <h3 
                  className="text-white text-3xl md:text-4xl font-bold mb-3 transition-transform duration-500 group-hover:translate-y-[-4px]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {collection.title}
                </h3>

                {/* Items Count */}
                <p className="text-white/70 text-sm mb-4">
                  {collection.items}
                </p>

                {/* Description - Appears on Hover */}
                <p 
                  className={`text-white/90 text-sm leading-relaxed mb-6 transition-all duration-500 ${
                    hoveredIndex === index 
                      ? 'opacity-100 translate-y-0 max-h-24' 
                      : 'opacity-0 translate-y-4 max-h-0'
                  }`}
                >
                  {collection.description}
                </p>

                {/* CTA Button */}
                <button 
                  className={`group/btn relative px-6 py-3 bg-transparent text-white text-xs tracking-[2px] uppercase font-medium border border-white/30 overflow-hidden transition-all duration-500 ${
                    hoveredIndex === index 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                >
                  <span className="relative z-10">Ver Colección</span>
                  <div className="absolute inset-0 bg-[#D4AF37] transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left" />
                </button>
              </div>

              {/* Number Badge */}
              <div className="absolute top-6 left-6 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                <span 
                  className="text-white font-bold text-lg"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {(index + 1).toString().padStart(2, '0')}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="group relative px-12 py-4 bg-[#2C2C2C] text-white text-sm tracking-[2px] uppercase font-medium overflow-hidden transition-all duration-500 hover:shadow-[0_10px_40px_rgba(44,44,44,0.3)]">
            <span className="relative z-10">Ver Todas las Colecciones</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#2C2C2C] to-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
          </button>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
    </section>
  );
}