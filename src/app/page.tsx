import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/nuevo/Hero";
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
    <main>
      <Progreso />
      <Navbar sobreFoto />
      <Hero />
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
