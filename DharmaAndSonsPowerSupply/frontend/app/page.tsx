import Header from "@/components/Header";
import ProductRangeHeader from '@/components/ProductRangeHeader';
import Hero from '../components/Hero';
import ProductGrid from '../components/Products';
import AboutSection from "@/components/About";
import GensetSection from "@/components/GenSet";
import IndustriesSection from "@/components/Industries";
import PartnerSlider from "@/components/PartnerSlider";
import LatestArticles from "@/components/LatestArtical";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Whatsapp } from "@/CommonUi/WhatsApp";

export default function Home() {
  return (
   <>
   <Hero/>
   <ProductRangeHeader/>
   <ProductGrid/>
   <AboutSection/>
   <GensetSection/>
   <IndustriesSection/>
   <PartnerSlider/>
   <LatestArticles/>
   <ContactSection/>
   <Footer/>
   <Whatsapp/>
   </>
  );
}
