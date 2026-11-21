import { Navbar } from "@/components/Navbar";
import { HeroSeda } from "@/components/nuevo/HeroSeda";
import { Seda } from "@/components/nuevo/Seda";
import { Manifiesto } from "@/components/nuevo/Manifiesto";
import { Equipo } from "@/components/nuevo/Equipo";
import { Galeria } from "@/components/nuevo/Galeria";
import { Cinta } from "@/components/nuevo/Cinta";
import { Progreso } from "@/components/nuevo/Progreso";
import { Doctor } from "@/components/nuevo/Doctor";
import { PorQue } from "@/components/nuevo/PorQue";
import { Cierre } from "@/components/nuevo/Cierre";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="con-seda">
      <Seda />
      <Progreso />
      <Navbar />
      <HeroSeda />
      <Manifiesto />
      <Equipo />
      <Cinta />
      <Galeria />
      <Doctor />
      <PorQue />
      <Cierre />
      <Footer />
    </main>
  );
}
