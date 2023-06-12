import BenefitContent from "../components/BenefitContent";
import ContactContent from "../components/ContactContent";
import FAQContent from "../components/FAQContent";
import Hero from "../components/Hero";
import ScamContent from "../components/ScamContent";
import WhyUs from "../components/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <BenefitContent />
      <ScamContent />
      <FAQContent />
      <ContactContent />
    </>
  );
}
