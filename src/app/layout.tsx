import type { Metadata } from "next";
import '../styles/globals.css';
import MenuLayout from '@/components/menu/menu-layout';



export const metadata: Metadata = {
  title: "Esymbel-Joyería",
  description: "Sitio web de Esymbel Joyería",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <MenuLayout>
      {children}
    </MenuLayout>
  );
}