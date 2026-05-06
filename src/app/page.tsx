import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { QuienesSomosSection } from "@/components/QuienesSomosSection";
import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { TreatmentsSection } from "@/components/TreatmentsSection";
import { WhyMaysoonSection } from "@/components/WhyMaysoonSection";
import { DoctorSection } from "@/components/DoctorSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <QuienesSomosSection />
      <BeforeAfterSection />
      <TreatmentsSection />
      <WhyMaysoonSection />
      <DoctorSection />
      <TestimonialsSection />
      <ExperienceSection />
      <CTASection />
      <Footer />
    </main>
  );
}
