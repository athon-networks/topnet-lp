import { geistSans, geistMono, poppins } from "./ui/font";
import localFont from "next/font/local";
import "./ui/globals.css";

export const metadata = {
  metadataBase: new URL("https://topoficial.com.br"),
  title: {
    default: "Topnet | Internet Fibra Óptica",
    template: "%s | Topnet",
  },
  description:
    "Topnet Serviços de Provedor LTDA. Internet fibra óptica para residências e empresas com estabilidade e suporte humano.",
  keywords: [
    "topnet",
    "internet fibra",
    "provedor de internet",
    "internet residencial",
    "internet empresarial",
    "bahia",
  ],
  authors: [{ name: "Topnet" }],
  creator: "Topnet",
  publisher: "Topnet",
  icons: {
    icon: "/logos/topnet.png",
    shortcut: "/logos/topnet.png",
    apple: "/logos/topnet.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://topoficial.com.br",
    title: "Topnet | Internet Fibra Óptica",
    description:
      "Internet fibra óptica com cobertura regional, suporte rápido e planos para casa e empresa.",
    siteName: "Topnet",
    images: [
      {
        url: "/logos/topnet.png",
        width: 1200,
        height: 630,
        alt: "Topnet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Topnet | Internet Fibra Óptica",
    description:
      "Internet fibra óptica com cobertura regional, suporte rápido e planos para casa e empresa.",
    images: ["/logos/topnet.png"],
  },
  alternates: {
    canonical: "https://topoficial.com.br",
  },
};

const myFont = localFont({
  src: [{ path: "./../public/fonts/uxumregular.otf", weight: "400", style: "normal" }],
  variable: "--font-uxum",
});

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://topoficial.com.br/#organization",
      name: "Topnet",
      url: "https://topoficial.com.br",
      logo: {
        "@type": "ImageObject",
        url: "https://topoficial.com.br/logos/topnet.png",
      },
      description:
        "Provedor de internet com foco em fibra óptica, estabilidade e atendimento regional.",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+55-75-99953-4296",
        contactType: "customer service",
        availableLanguage: ["pt-BR"],
      },
      sameAs: [
        "https://www.instagram.com/topnet.provedor.de.internet/",
        "https://www.facebook.com/61554419318757",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://topoficial.com.br/#website",
      url: "https://topoficial.com.br",
      name: "Topnet",
      inLanguage: "pt-BR",
      publisher: {
        "@id": "https://topoficial.com.br/#organization",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${myFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
