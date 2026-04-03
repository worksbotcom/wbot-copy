import Clients from '@/components/main/Clients';
import CTA from '@/components/main/CTA';
import Steps from '@/components/main/Steps';
import ReviewsV1 from '@/components/main/ReviewsV1';
import About from '@/components/main/About';
import ScrollingAppsShowcase from '@/components/main/Technologies';
import Hero from '@/components/main/Hero';
import Integration from '@/components/main/Integration';
import ChangelogTab from "@/components/main/Fqc"
import NavbarThree from '@/components/shared/header/NavbarThree';
import { Metadata } from 'next';
import FooterThree from '@/components/shared/footer/FooterThree';


export const metadata: Metadata = {
  title: "Worksbot – Enterprise AI Solutions & Automation",
  description: "Worksbot is a global software company delivering enterprise-grade AI solutions, automation platforms, and digital transformation technology for high-growth organizations.",
  keywords: [
    "worksbot software company",
    "enterprise ai solutions",
    "ai automation software",
    "digital transformation technology",
    "ai development company",
    "enterprise software provider",
    "business automation systems",
    "corporate software solutions",
  ],
};

const HomePage = () => {
  return (
    <>
      <NavbarThree btnClassName="btn-primary hover:btn-white-dark dark:hover:btn-white" />
      <main className="bg-white pt-20 md:pt-0">
        <Hero />
        <Clients />
        <Integration />
        <About />
        <ScrollingAppsShowcase />
        <ReviewsV1
          background="lg:pt-[100px] pt-16 lg:pb-[200px] md:pb-[100px] pb-16 bg-background-3 dark:bg-background-9"
          sliderClassName="bg-white dark:bg-background-5"
        />
        <Steps />
        <ChangelogTab />
        <CTA />
      </main>
      <FooterThree />
      
    </>
  );
};

export default HomePage;

