import JewelryHeroVideo from '@/components/hero/hero';
import JewelryCollections from '@/components/colecciones/colecciones';
import MaterialsQuality from '@/components/material-calidad/materialCalidad';
import ShoppingExperience from '@/components/experiencia-servicio-envio/experienciaSerEnv';

export default function InicioPage() {
  return (
     <main className="w-full overflow-x-hidden">
      <JewelryHeroVideo />
      <JewelryCollections />
        <MaterialsQuality />
      <ShoppingExperience />
     </main>
  );
}