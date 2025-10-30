'use client';
import Menu from './menu';
import  Footer  from '@/components/footer/footer';
import { usePathname } from "next/navigation";


export default function MenuLayout({ children }: { children: React.ReactNode }) {

      const pathname = usePathname();
  const hideLayout = ['/login', '/registro'].includes(pathname as string);
  return (
    <html lang="es" className="w-full overflow-x-hidden">
       <link rel="icon" href="/favicon.svg" sizes="any" />
      <body className="w-full max-w-screen overflow-x-hidden">
        {!hideLayout && (
            <Menu />
        )}
        {children}
       {!hideLayout && ( 
         <Footer />
       )}
      </body>
    </html>
  );
}