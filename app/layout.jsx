import { geistSans, geistMono, poppins } from "./ui/font";
import "./ui/globals.css";
import { THEME_STORAGE_KEY } from "@/lib/theme";
import VlibrasWidget from "@/components/vlibras-widget";

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
    icon: "/images/logos/topnet.png",
    shortcut: "/images/logos/topnet.png",
    apple: "/images/logos/topnet.png",
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
        url: "/images/logos/topnet.png",
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
    images: ["/images/logos/topnet.png"],
  },
  alternates: {
    canonical: "https://topoficial.com.br",
  },
};


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
        url: "https://topoficial.com.br/images/logos/topnet.png",
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

const themeScript = `
  (function () {
    try {
      var themeKey = "${THEME_STORAGE_KEY}";
      var storedTheme = window.localStorage.getItem(themeKey);
      var hasStoredTheme = storedTheme === "light" || storedTheme === "dark";
      var preferredTheme = hasStoredTheme
        ? storedTheme
        : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

      if (preferredTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      document.documentElement.dataset.theme = preferredTheme;
    } catch (_error) {}
  })();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}>
        {children}
        <VlibrasWidget />
      </body>
    </html>
  );
}
