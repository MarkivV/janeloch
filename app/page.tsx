import { BenefitsSection } from "@/components/layout/sections/benefits";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { TeamSection } from "@/components/layout/sections/team";

export const metadata = {
  title: "Seventons Software",
  description:
    "SevenTons Software offers affordable data management and automation for small and medium businesses. Unlock insights, automate processes, and grow with our cost-effective solutions",
  openGraph: {
    type: "website",
    url: "https://www.seventons.com/",
    title: "Seventons Software",
    description:
      "SevenTons Software offers affordable data management and automation for small and medium businesses. Unlock insights, automate processes, and grow with our cost-effective solutions",
    images: [
      {
        url: "./seventons2.png",
        width: 1200,
        height: 630,
        alt: "Seventons Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://www.seventons.com/",
    title: "Seventons Software",
    description:
      "SevenTons Software offers affordable data management and automation for small and medium businesses. Unlock insights, automate processes, and grow with our cost-effective solutions",
    images: [
      {
        url: "./seventons2.png",
        width: 1200,
        height: 630,
        alt: "Seventons Software",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <ServicesSection />
      <TeamSection />
      <PricingSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
