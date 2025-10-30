import { useState, useEffect } from 'react';

 const nav = [
  {
    name: "Inicio",
    href: "/",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },

  {
    name: "Colecciones",
    href: "/colecciones",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10a2 2 0 01-1.105 1.789l-6.79 3.394a2 2 0 01-1.79 0l-6.79-3.394A2 2 0 014 17V7m8 4v10"
        />
      </svg>
    ),
  },
 
  {
    name: "Contacto",
    href: "/quejas",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M22 6l-10 7L2 6"
        />
      </svg>
    ),
  },
   {
    name: "Carrito",
    href: "/cart",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 8h14m-10 0a1 1 0 11-2 0 1 1 0 012 0zm8 0a1 1 0 11-2 0 1 1 0 012 0z"
        />
      </svg>
    ),
  },
];

export default function JewelryNavbar() {
  const [scroll, setScroll] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
   const [mounted, setMounted] = useState(false);


useEffect(() => {
        setMounted(true); // 🔹 asegura render solo en cliente

              const handleScroll = () => {
          const scrolled = window.scrollY > 20;
          setScroll(scrolled);
          setShowLogo(scrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      if (!mounted) return null; // evita SSR mismatch

      const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("#")) {
          e.preventDefault();
          const target = document.getElementById(href.substring(1));
          if (target) {
            const offset = target.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: offset, behavior: "smooth" });
          }
        }
      };
  //  useEffect(() => {
  //   const handleScroll = () => {
  //     const scrolled = window.scrollY > 20;
  //     setScroll(scrolled);
  //     setShowLogo(scrolled);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  //   const handleSmoothScroll = (e: any, href: string) => {
  //   e.preventDefault();
  //   const element = document.querySelector(href.substring(1));
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <>
      {/* 🔹 Navbar Desktop */}
      <header
        className={`hidden md:flex fixed left-1/4 w-[45%] h-[60px] items-center justify-between rounded-2xl z-50 px-6
        transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)]
        ${scroll
          ? "top-3 bg-white/95 border border-[#8B8B8B]/10 shadow-[0_4px_25px_rgba(44,44,44,0.08)] backdrop-blur-md"
          : "top-6 bg-transparent border border-transparent"
        }`}
      >
        {/* Logo */}
        <div
            className={`transition-all duration-700 ${
              showLogo
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}
          >
            <a
              href="/"
              className="text-2xl font-bold text-[#2C2C2C] tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              ESYMBEL
            </a>
          </div>
        {/* Links */}
        <nav className="flex items-center space-x-6">
          {nav.slice(0, -1).map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className="relative px-3 py-2 rounded-xl text-[14px] font-medium tracking-wide
                text-[#2C2C2C]/90 transition-all duration-500
                hover:text-[#D4AF37] hover:scale-[1.05]
                before:absolute before:inset-0 before:rounded-xl
                before:bg-[#D4AF37]/5 before:opacity-0 hover:before:opacity-100
                before:transition-all before:duration-500"
            >
              <span className="relative z-10">{item.name}</span>
            </a>
          ))}
        </nav>

        {/* 👤 Usuario / Iniciar Sesión */}
        <a
          href="/login"
          className="relative p-2 left-[37px] top-[2px] rounded-xl hover:bg-[#D4AF37]/10 transition-all duration-300"
          title="Iniciar sesión"
        >
          <svg
            className="w-8 h-8 text-[#2C2C2C]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M5.121 17.804A9 9 0 0112 15a9 9 0 016.879 2.804M12 12a4 4 0 100-8 4 4 0 000 8z"
            />
          </svg>
        </a>

        {/* 🛒 Carrito Icon */}
        <button
          onClick={() => setCartOpen(true)}
          className="relative p-2 rounded-xl hover:bg-[#D4AF37]/10 transition-all duration-300"
        >
          <svg
            className="w-6 h-6 text-[#2C2C2C]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 8h14m-10 0a1 1 0 11-2 0 1 1 0 012 0zm8 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
          <span className="absolute -top-1 -right-1 bg-[#D4AF37] text-xs px-1.5 py-0.5 rounded-full text-white font-bold">
            4
          </span>
        </button>
      </header>

      {/* 🔹 Sidebar del carrito */}
      {cartOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300"
            onClick={() => setCartOpen(false)}
          />
          
          {/* Sidebar */}
          <div className="fixed right-0 top-0 h-full w-[400px] bg-[#FAFAFA] shadow-2xl z-50 transform transition-transform duration-300 border-l border-[#8B8B8B]/10">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-[#2C2C2C]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Tu Carrito
                </h2>
                <button
                  onClick={() => setCartOpen(false)}
                  className="p-2 hover:bg-[#D4AF37]/10 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6 text-[#2C2C2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="text-center py-20 text-[#8B8B8B]">
                <p className="text-sm">Tu carrito está vacío</p>
              </div>
            </div>
          </div>
        </>
      )}

      {/* 🔹 Navbar Mobile */}
      <header className="md:hidden fixed left-2 right-2 w-auto rounded-2xl z-50 top-1.5 px-4 py-3 bg-white/95 backdrop-blur-md border border-[#8B8B8B]/10 shadow-[0_4px_20px_rgba(44,44,44,0.08)]">
        <div className="flex justify-center text-xl font-bold text-[#2C2C2C]">
          <a href="/" className="tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
            ESYMBEL
          </a>
        </div>
      </header>

      {/* 🔹 Bottom Tab Menu (Mobile) */}
      <nav className="md:hidden fixed bottom-4 left-4 right-4 z-50">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgba(44,44,44,0.12)] border border-[#8B8B8B]/10">
          <div className="flex justify-around items-center py-3">
            {nav.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="flex flex-col items-center space-y-1 px-3 py-2 rounded-xl transition-all duration-300 hover:bg-[#D4AF37]/10"
              >
                <span className="text-[#2C2C2C] text-[13px] font-medium">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>

  
    </>
  );
}