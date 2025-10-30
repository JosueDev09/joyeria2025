
'use client';
import { useState } from 'react';

export default function ShoppingExperience() {
  const [activeStep, setActiveStep] = useState(0);

  const shoppingSteps = [
    {
      step: "01",
      title: "Explora & Elige",
      description: "Navega nuestra colección exclusiva. Cada pieza incluye fotos de alta resolución, especificaciones detalladas y certificados de autenticidad.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      step: "02",
      title: "Personaliza",
      description: "Ajusta el tamaño, grabado personalizado y empaque especial. Nuestros expertos están disponibles para asesorarte en tiempo real.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      )
    },
    {
      step: "03",
      title: "Pago Seguro",
      description: "Múltiples opciones de pago con encriptación de nivel bancario. Meses sin intereses disponibles. Garantía de devolución de 30 días.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      step: "04",
      title: "Envío Premium",
      description: "Empaque de lujo con seguimiento en tiempo real. Entrega en 24-48h. Cada joya llega en un estuche elegante listo para regalar.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      )
    }
  ];

  const shippingFeatures = [
    {
      title: "Envío Express",
      subtitle: "24-48 Horas",
      description: "Recibe tu joya en tiempo récord con seguimiento GPS en tiempo real",
      icon: "⚡"
    },
    {
      title: "Empaque de Lujo",
      subtitle: "Presentación Premium",
      description: "Caja forrada en terciopelo con certificado de autenticidad incluido",
      icon: "🎁"
    },
    {
      title: "Seguro Incluido",
      subtitle: "Cobertura Total",
      description: "Tu compra está protegida desde que sale hasta que llega a tus manos",
      icon: "🛡️"
    },
    {
      title: "Envío Gratis",
      subtitle: "Compras +$2000",
      description: "Sin cargos adicionales en pedidos superiores a $2000 pesos",
      icon: "✈️"
    }
  ];

  return (
    <section className="relative bg-[#FAFAFA] py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-[#D4AF37]/5 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-[#D4AF37]/5 to-transparent blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-px bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs md:text-sm tracking-[3px] uppercase font-medium">
              Tu Experiencia
            </span>
            <div className="w-12 h-px bg-[#D4AF37]" />
          </div>

          <h2 
            className="text-4xl md:text-6xl font-bold text-[#2C2C2C] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Compra Sin Preocupaciones
          </h2>

          <p className="text-[#8B8B8B] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Desde la selección hasta la entrega, cada paso está diseñado para brindarte 
            una experiencia excepcional y memorable
          </p>
        </div>

        {/* Shopping Journey Timeline */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connection Line - Desktop Only */}
            <div className="hidden lg:block absolute top-[60px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37] to-[#D4AF37]/20" />

            {shoppingSteps.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Card */}
                <div className={`bg-white p-8 rounded-sm transition-all duration-500 cursor-pointer
                  ${activeStep === index 
                    ? 'shadow-[0_20px_60px_rgba(212,175,55,0.15)] -translate-y-2' 
                    : 'shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:-translate-y-1'
                  }`}
                >
                  {/* Step Number */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center transition-all duration-500 border-2
                      ${activeStep === index 
                        ? 'bg-[#D4AF37] border-[#D4AF37] text-white scale-110' 
                        : 'bg-white border-[#D4AF37]/30 text-[#D4AF37] group-hover:border-[#D4AF37]'
                      }`}
                    >
                      <span 
                        className="text-xl font-bold"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {item.step}
                      </span>
                    </div>

                    {/* Icon Overlay */}
                    <div className={`absolute inset-0 w-16 h-16 mx-auto flex items-center justify-center transition-all duration-500
                      ${activeStep === index ? 'opacity-0 scale-50' : 'opacity-0 group-hover:opacity-100 scale-100'}`}
                    >
                      <div className="text-[#D4AF37]">
                        {item.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 
                    className="text-xl font-bold text-[#2C2C2C] mb-3 text-center transition-colors duration-300 group-hover:text-[#D4AF37]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {item.title}
                  </h3>

                  <p className="text-[#8B8B8B] text-sm leading-relaxed text-center">
                    {item.description}
                  </p>

                  {/* Active Indicator */}
                  <div className={`mt-6 h-1 bg-[#D4AF37] transition-all duration-500 rounded-full
                    ${activeStep === index ? 'w-full' : 'w-0 group-hover:w-full'}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shipping Experience Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 
              className="text-3xl md:text-5xl font-bold text-[#2C2C2C] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Experiencia de Envío Premium
            </h3>
            <p className="text-[#8B8B8B] text-lg max-w-2xl mx-auto">
              Cada detalle cuenta, especialmente cuando se trata de algo tan especial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shippingFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-sm hover:shadow-[0_10px_40px_rgba(44,44,44,0.08)] transition-all duration-500"
              >
                {/* Icon */}
                <div className="text-5xl mb-6 transition-transform duration-500 group-hover:scale-110">
                  {feature.icon}
                </div>

                {/* Title */}
                <h4 
                  className="text-xl font-bold text-[#2C2C2C] mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {feature.title}
                </h4>

                {/* Subtitle */}
                <p className="text-[#D4AF37] text-sm font-medium tracking-[1px] uppercase mb-3">
                  {feature.subtitle}
                </p>

                {/* Description */}
                <p className="text-[#8B8B8B] text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Border */}
                <div className="mt-6 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Visual Shipping Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Large Image */}
              <div className="col-span-2 h-[400px] rounded-sm overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&q=80"
                  alt="Empaque premium"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Small Images */}
              <div className="h-[200px] rounded-sm overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=400&q=80"
                  alt="Detalle caja"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="h-[200px] rounded-sm overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&q=80"
                  alt="Certificado"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#D4AF37] text-white p-8 rounded-sm shadow-[0_20px_60px_rgba(212,175,55,0.3)]">
              <p className="text-sm tracking-[2px] uppercase mb-2">Satisfacción</p>
              <p 
                className="text-5xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                99%
              </p>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h3 
              className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Cada Joya es una Experiencia
            </h3>

            <p className="text-[#8B8B8B] text-lg leading-relaxed mb-8">
              No solo vendemos joyas, creamos momentos memorables. Desde el empaque 
              elegante hasta el seguimiento detallado, cada aspecto está cuidadosamente 
              diseñado para sorprenderte.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {[
                "Rastreo en tiempo real con notificaciones",
                "Entrega con firma requerida",
                "Embalaje discreto para mayor seguridad",
                "Devoluciones gratuitas dentro de 30 días"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-[#2C2C2C] text-sm">{item}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="group px-10 py-4 bg-[#2C2C2C] text-white text-sm tracking-[2px] uppercase font-medium transition-all duration-500 hover:bg-[#D4AF37] hover:shadow-[0_8px_30px_rgba(212,175,55,0.3)]">
              Comenzar a Comprar
              <svg className="inline-block ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Dots */}
      <div className="absolute top-40 left-20 w-2 h-2 bg-[#D4AF37] rounded-full opacity-30" />
      <div className="absolute bottom-40 right-20 w-2 h-2 bg-[#D4AF37] rounded-full opacity-30" />
    </section>
  );
}