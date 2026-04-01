import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SobreSection from "@/components/SobreSection";
import FormacaoSection from "@/components/FormacaoSection";
import AtuacaoSection from "@/components/AtuacaoSection";
import EspecialidadesSection from "@/components/EspecialidadesSection";
import FAQSection from "@/components/FAQSection";
import ContatoSection from "@/components/ContatoSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <SobreSection />
      <FormacaoSection />
      <AtuacaoSection />
      <EspecialidadesSection />
      <FAQSection />
      <ContatoSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
