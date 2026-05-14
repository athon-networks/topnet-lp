import SiteHeader from "@/components/site-header";
import About from "@/components/home/about";
import BackToTop from "@/components/home/back-to-top";
import Contact from "@/components/home/contact";
import Coverage from "@/components/home/coverage";
import Faq from "@/components/home/faq";
import Footer from "@/components/home/footer";
import GamerLatency from "@/components/home/gamer-latency";
import Hero from "@/components/home/hero";
import Plans from "@/components/home/plans";
import PromoArt from "@/components/home/promo-art";
import Services from "@/components/home/services";
import SocialProof from "@/components/home/social-proof";
import Stats from "@/components/home/stats";
import SvasTicker from "@/components/home/svas-ticker";

export const metadata = {
  title: "Topnet | A melhor fibra óptica da cidade",
  description:
    "Internet fibra óptica para residências e empresas. Atendimento regional, estabilidade e suporte rápido.",
};

export default function Page() {
  return (
    <main className="bg-white text-slate-900">
      <SiteHeader />

      <Hero />
      <SvasTicker />
      <GamerLatency />
      <Stats />
      <SocialProof />
      <Plans />
      <PromoArt />
      <Services />
      <About />
      <Coverage />
      <Contact />
      <Faq />
      <Footer />
      <BackToTop />
    </main>
  );
}
