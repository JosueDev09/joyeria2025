'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: 'general', message: '' });
    }, 3000);
  };

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Showroom',
      content: ['Av. Paseo de la Reforma 123', 'Col. Juárez, CDMX 06600', 'México'],
      action: 'Ver en Mapa'
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Teléfono',
      content: ['+52 55 1234 5678', 'Lun - Vie: 10:00 - 19:00', 'Sáb: 11:00 - 17:00'],
      action: 'Llamar Ahora'
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      content: ['hola@lumiere.com', 'ventas@lumiere.com', 'soporte@lumiere.com'],
      action: 'Enviar Email'
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: 'WhatsApp',
      content: ['+52 55 9876 5432', 'Atención inmediata', 'Disponible 24/7'],
      action: 'Chat en Vivo'
    }
  ];

  const faqs = [
    {
      question: '¿Ofrecen servicio de diseño personalizado?',
      answer: 'Sí, nuestros diseñadores trabajan contigo para crear piezas únicas.'
    },
    {
      question: '¿Cuál es el tiempo de entrega?',
      answer: 'Envío express en 24-48 horas. Diseños personalizados: 2-3 semanas.'
    },
    {
      question: '¿Tienen garantía?',
      answer: 'Garantía de por vida en todas nuestras piezas de oro y plata.'
    }
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden bg-[#2C2C2C] min-h-screen w-full">
        <div className="absolute inset-0">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/06/19/05/jewelry-store-1803808_1280.jpg"
            alt="Contacto"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#2C2C2C]" />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center max-w-4xl">
            <div className="flex items-center justify-center gap-2 text-white/60 text-sm mb-6">
              <a href="/" className="hover:text-[#D4AF37] transition-colors">Inicio</a>
              <span>/</span>
              <span className="text-white">Contacto</span>
            </div>

            <h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Hablemos de tu
              <br />
              <span className="text-[#D4AF37]">Joya Perfecta</span>
            </h1>

            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Estamos aquí para ayudarte a encontrar o crear la pieza que siempre soñaste. 
              Nuestro equipo de expertos está listo para atenderte
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 -mt-20 relative z-20 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-sm shadow-[0_10px_40px_rgba(44,44,44,0.08)] hover:shadow-[0_20px_60px_rgba(44,44,44,0.12)] transition-all duration-500 group"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="w-14 h-14 text-[#D4AF37] mb-6 transition-transform duration-500 group-hover:scale-110">
                {info.icon}
              </div>

              <h3 
                className="text-xl font-bold text-[#2C2C2C] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {info.title}
              </h3>

              {info.content.map((line, idx) => (
                <p key={idx} className="text-[#8B8B8B] text-sm mb-1">
                  {line}
                </p>
              ))}

              <button className="mt-6 text-[#D4AF37] text-sm font-medium hover:text-[#B8941F] transition-colors duration-300 flex items-center gap-2 group/btn">
                {info.action}
                <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Form Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - Form */}
          <div>
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-12 h-px bg-[#D4AF37]" />
                <span className="text-[#D4AF37] text-xs tracking-[3px] uppercase font-medium">
                  Escríbenos
                </span>
              </div>

              <h2 
                className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Envíanos un Mensaje
              </h2>
              <p className="text-[#8B8B8B] text-lg">
                Completa el formulario y te responderemos en menos de 24 horas
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-[#2C2C2C] text-sm font-medium mb-2 tracking-wide">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white border border-[#8B8B8B]/20 text-[#2C2C2C] focus:outline-none focus:border-[#D4AF37] transition-all duration-300"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#2C2C2C] text-sm font-medium mb-2 tracking-wide">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white border border-[#8B8B8B]/20 text-[#2C2C2C] focus:outline-none focus:border-[#D4AF37] transition-all duration-300"
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#2C2C2C] text-sm font-medium mb-2 tracking-wide">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white border border-[#8B8B8B]/20 text-[#2C2C2C] focus:outline-none focus:border-[#D4AF37] transition-all duration-300"
                    placeholder="+52 55 1234 5678"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#2C2C2C] text-sm font-medium mb-2 tracking-wide">
                  Asunto *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white border border-[#8B8B8B]/20 text-[#2C2C2C] focus:outline-none focus:border-[#D4AF37] transition-all duration-300"
                >
                  <option value="general">Consulta General</option>
                  <option value="custom">Diseño Personalizado</option>
                  <option value="repair">Reparación</option>
                  <option value="order">Estado de Pedido</option>
                  <option value="wholesale">Ventas Mayoreo</option>
                </select>
              </div>

              <div>
                <label className="block text-[#2C2C2C] text-sm font-medium mb-2 tracking-wide">
                  Mensaje *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-6 py-4 bg-white border border-[#8B8B8B]/20 text-[#2C2C2C] focus:outline-none focus:border-[#D4AF37] transition-all duration-300 resize-none"
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                  required
                />
              </div>

              <button
                onClick={handleSubmit}
                className={`w-full py-5 text-white text-sm tracking-[2px] uppercase font-medium transition-all duration-500 ${
                  submitted 
                    ? 'bg-green-600' 
                    : 'bg-[#D4AF37] hover:bg-[#B8941F] hover:shadow-[0_10px_40px_rgba(212,175,55,0.3)]'
                }`}
              >
                {submitted ? '¡Mensaje Enviado! ✓' : 'Enviar Mensaje'}
              </button>

              <p className="text-[#8B8B8B] text-xs text-center">
                Al enviar este formulario aceptas nuestra política de privacidad
              </p>
            </div>
          </div>

          {/* Right - Additional Info */}
          <div>
            {/* Map Placeholder */}
            <div className="bg-white rounded-sm overflow-hidden shadow-[0_10px_40px_rgba(44,44,44,0.08)] mb-12 h-[400px] relative group">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                alt="Ubicación showroom"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm uppercase tracking-wider mb-2">Nuestro Showroom</p>
                <p 
                  className="text-2xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Ciudad de México
                </p>
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-white p-8 rounded-sm shadow-[0_10px_40px_rgba(44,44,44,0.08)]">
              <h3 
                className="text-2xl font-bold text-[#2C2C2C] mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Preguntas Frecuentes
              </h3>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-[#8B8B8B]/10 pb-6 last:border-0 last:pb-0">
                    <h4 className="text-[#2C2C2C] font-semibold mb-2 flex items-start gap-2">
                      <span className="text-[#D4AF37] mt-1">•</span>
                      {faq.question}
                    </h4>
                    <p className="text-[#8B8B8B] text-sm leading-relaxed pl-4">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>

              <button className="mt-8 text-[#D4AF37] text-sm font-medium hover:text-[#B8941F] transition-colors duration-300 flex items-center gap-2 group">
                Ver todas las preguntas
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#2C2C2C] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            ¿Prefieres una Visita Personal?
          </h3>
          <p className="text-white/80 text-lg mb-8">
            Agenda una cita privada en nuestro showroom y recibe asesoría personalizada
          </p>
          <button className="px-12 py-4 bg-[#D4AF37] text-white text-sm tracking-[2px] uppercase font-medium hover:bg-[#B8941F] hover:shadow-[0_10px_40px_rgba(212,175,55,0.4)] transition-all duration-500">
            Agendar Cita
          </button>
        </div>
      </section>

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
      `}</style>
    </div>
  );
}