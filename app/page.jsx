import SiteHeader from "@/components/site-header";
import About from "@/components/home/about";
import BackToTop from "@/components/home/back-to-top";
import Contact from "@/components/home/contact";
import Coverage from "@/components/home/coverage";
import Faq from "@/components/home/faq";
import Footer from "@/components/home/footer";
import Hero from "@/components/home/hero";
import Plans from "@/components/home/plans";
import PromoArt from "@/components/home/promo-art";
import Services from "@/components/home/services";
import SocialProof from "@/components/home/social-proof";
import Stats from "@/components/home/stats";
import SvasShowcase from "@/components/home/svas-showcase";
import SvasTicker from "@/components/home/svas-ticker";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Planos", href: "#planos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Cobertura", href: "#cobertura" },
  { label: "Contato", href: "#contato" },
  {
    label: "Central do Assinante",
    href: "https://ixc.topoficial.com.br/central_assinante_web/login",
    external: true,
    variant: "outline",
  },
  {
    label: "Empresas",
    href: "/empresas",
    variant: "outline",
    icon: "building",
  },
];

const cta = {
  label: "WhatsApp",
  href: "https://api.whatsapp.com/send/?phone=5575999534296",
  external: true,
};

export const metadata = {
  title: "Topnet | A melhor fibra óptica da cidade",
  description:
    "Internet fibra óptica para residências e empresas. Atendimento regional, estabilidade e suporte rápido.",
};

export default function Page() {
  return (
    <main className="bg-white text-slate-900">
      <SiteHeader logoHref="#inicio" logoClassName="h-15 w-auto" navItems={navItems} cta={cta} />

      <Hero />
      <SvasTicker />
      <Stats />
      <SocialProof />
      <Plans />
      <PromoArt />
      <Services />
      <About />
      <Coverage />
      <Contact />
      <SvasShowcase />
      <Faq />
      <Footer />
      <BackToTop />
    </main>
  );
}
