import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/nuevo/Hero";
import { Manifiesto } from "@/components/nuevo/Manifiesto";
import { Equipo } from "@/components/nuevo/Equipo";
import { Areas } from "@/components/nuevo/Areas";
import { Doctor } from "@/components/nuevo/Doctor";
import { PorQue } from "@/components/nuevo/PorQue";
import { Cierre } from "@/components/nuevo/Cierre";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar sobreFoto />
      <Hero />
      <Manifiesto />
      <Equipo />
      <Areas />
      <Doctor />
      <PorQue />
      <Cierre />
      <Footer />
    </main>
  );
}
