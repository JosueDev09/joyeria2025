'use client'

import { useState } from 'react';

export default function MaterialsQuality() {
  const [activeTab, setActiveTab] = useState(0);

  const materials = [
    {
      name: "Oro 18K",
      icon: "◇",
      purity: "75% Pureza",
      description: "Oro auténtico de 18 quilates, certificado y procedente de minas éticas. Cada pieza garantiza durabilidad y brillo eterno.",
      features: ["Certificado de autenticidad", "Hipoalergénico", "Resistente al agua"],
      color: "#D4AF37"
    },
    {
      name: "Diamantes",
      icon: "◆",
      purity: "Certificación GIA",
      description: "Diamantes naturales certificados por el Gemological Institute of America. Claridad VS1 o superior con corte excepcional.",
      features: ["Certificado GIA", "Corte ideal", "Claridad VS1+"],
      color: "#E8E8E8"
    },
    {
      name: "Plata 925",
      icon: "○",
      purity: "92.5% Plata Pura",
      description: "Plata sterling de ley, conocida como plata 925. Pulida a mano y con baño de rodio para mayor brillo y protección.",
      features: ["Sellado 925", "Baño de rodio", "Anti-oxidante"],
      color: "#C0C0C0"
    },
    {
      name: "Piedras Preciosas",
      icon: "◈",
      purity: "Grado AAA",
      description: "Rubíes, esmeraldas y zafiros de grado AAA. Seleccionadas individualmente por expertos gemólogos.",
      features: ["Origen verificado", "Color natural", "Corte artesanal"],
      color: "#8B4789"
    }
  ];

  const certifications = [
    { name: "GIA", desc: "Gemological Institute" },
    { name: "ISO 9001", desc: "Calidad Certificada" },
    { name: "RJC", desc: "Responsible Jewellery" },
    { name: "Fairmined", desc: "Oro Ético" }
  ];

  return (
    <section className="relative bg-white py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #2C2C2C 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-px bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs md:text-sm tracking-[3px] uppercase font-medium">
              Excelencia
            </span>
            <div className="w-12 h-px bg-[#D4AF37]" />
          </div>

          <h2 
            className="text-4xl md:text-6xl font-bold text-[#2C2C2C] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Materiales y Calidad
          </h2>

          <p className="text-[#8B8B8B] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Cada pieza es creada con los materiales más nobles y certificados. 
            Nuestra obsesión por la calidad es inquebrantable
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {materials.map((material, index) => (
            <div
              key={index}
              className="group relative bg-[#FAFAFA] p-8 rounded-sm cursor-pointer transition-all duration-500 hover:bg-white hover:shadow-[0_10px_40px_rgba(44,44,44,0.08)]"
              onMouseEnter={() => setActiveTab(index)}
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div 
                  className="w-20 h-20 mx-auto flex items-center justify-center text-5xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
                  style={{ 
                    color: material.color,
                    fontFamily: "'Playfair Display', serif"
                  }}
                >
                  {material.icon}
                </div>
                
                {/* Decorative Ring */}
                <div 
                  className="absolute inset-0 w-20 h-20 mx-auto rounded-full border-2 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-125"
                  style={{ borderColor: material.color }}
                />
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 
                  className="text-2xl font-bold text-[#2C2C2C] mb-2 transition-colors duration-300"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {material.name}
                </h3>
                
                <p className="text-[#D4AF37] text-sm font-medium tracking-[1px] uppercase mb-4">
                  {material.purity}
                </p>

                <p className="text-[#8B8B8B] text-sm leading-relaxed mb-6 min-h-[80px]">
                  {material.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {material.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center gap-2 text-xs text-[#2C2C2C]">
                      <svg className="w-4 h-4 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Active Indicator */}
              <div 
                className={`absolute bottom-0 left-0 right-0 h-1 transition-all duration-500 ${
                  activeTab === index ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ backgroundColor: material.color }}
              />
            </div>
          ))}
        </div>

        {/* Quality Process */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Image */}
          <div className="relative h-[500px] rounded-sm overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80"
              alt="Proceso de calidad"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            
            {/* Floating Badge */}
            <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md p-6 rounded-sm">
              <p className="text-[#D4AF37] text-xs tracking-[2px] uppercase font-medium mb-2">
                Proceso Artesanal
              </p>
              <p 
                className="text-[#2C2C2C] text-3xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                100%
              </p>
              <p className="text-[#8B8B8B] text-sm">Hecho a mano</p>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h3 
              className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Compromiso con la Excelencia
            </h3>

            <p className="text-[#8B8B8B] text-lg leading-relaxed mb-8">
              Cada joya pasa por un riguroso proceso de inspección de calidad. 
              Nuestros artesanos expertos dedican horas a perfeccionar cada detalle, 
              asegurando que solo las piezas excepcionales lleguen a tus manos.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <p 
                  className="text-4xl font-bold text-[#D4AF37] mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  25+
                </p>
                <p className="text-[#8B8B8B] text-sm">Años de experiencia</p>
              </div>
              <div className="text-center">
                <p 
                  className="text-4xl font-bold text-[#D4AF37] mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  12
                </p>
                <p className="text-[#8B8B8B] text-sm">Pasos de control</p>
              </div>
              <div className="text-center">
                <p 
                  className="text-4xl font-bold text-[#D4AF37] mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  100%
                </p>
                <p className="text-[#8B8B8B] text-sm">Garantía</p>
              </div>
            </div>

            <button className="group px-10 py-4 bg-[#2C2C2C] text-white text-sm tracking-[2px] uppercase font-medium transition-all duration-500 hover:bg-[#D4AF37] hover:shadow-[0_8px_30px_rgba(212,175,55,0.3)]">
              Conoce Nuestro Proceso
              <svg className="inline-block ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-[#FAFAFA] p-12 rounded-sm">
          <h3 
            className="text-2xl md:text-3xl font-bold text-[#2C2C2C] text-center mb-12"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Certificaciones Internacionales
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="group text-center transition-all duration-300 hover:scale-105"
              >
                <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-full flex items-center justify-center border-2 border-[#D4AF37]/20 group-hover:border-[#D4AF37] transition-all duration-300">
                  <span 
                    className="text-xl font-bold text-[#2C2C2C]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {cert.name}
                  </span>
                </div>
                <p className="text-[#8B8B8B] text-sm">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-32 right-12 w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
      <div className="absolute bottom-32 left-12 w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
}