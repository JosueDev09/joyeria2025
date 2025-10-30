import JewelryHeroVideo from '@/components/hero/hero';
import JewelryCollections from '@/components/colecciones/colecciones';
import MaterialsQuality from '@/components/material-calidad/materialCalidad';

export default function InicioPage() {
  return (
     <main className="w-full overflow-x-hidden">
      <JewelryHeroVideo />
      <JewelryCollections />
        <MaterialsQuality />
     </main>
  );
}