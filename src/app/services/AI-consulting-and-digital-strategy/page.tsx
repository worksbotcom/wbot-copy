import { Metadata } from 'next';
import NavbarThree from '@/components/shared/header/NavbarThree';
import Hero from '@/components/service-1/Hero';
import MeetOurTeam from '@/components/service-1/MeetOurTeam';
import Clients from '@/components/service-1/Clients';
import Services from "@/components/service-1/WhyChoose"
import Service from '@/components/service-1/OurApproach';
import Integrations from '@/components/service-1/Industries';
import ScrollingAppsShowcase from '@/components/service-1/Technologies';
import CTA from '@/components/service-1/CTA';
import FooterThree from '@/components/shared/footer/FooterThree';
import { Fragment } from 'react';

//  Meta Data (App Router Format)
export const metadata: Metadata = {
  title: 'AI-Powered Application Development | Worksbot',
  description:
    'Worksbot delivers AI-powered application development solutions designed to enhance automation, decision-making, and digital innovation. Our intelligent applications help businesses optimize operations, improve accuracy, and drive future-ready transformation.',
  keywords:
    'AI application development, machine learning applications, NLP solutions, computer vision apps, AI automation software, predictive analytics tools, Worksbot AI services, intelligent software development',
};

export default function Service1Page() {
  return (
    <Fragment>
      <NavbarThree btnClassName="btn-primary hover:btn-white-dark dark:hover:btn-white" />
      <main className="bg-background-1 dark:bg-background-6">
        <Hero/>
        <MeetOurTeam />
        <Clients/>
        <Services />
        <Service />
        <Integrations />
        <ScrollingAppsShowcase/>
        <CTA/>
        <FooterThree />
      </main>
    </Fragment>
  );
}
