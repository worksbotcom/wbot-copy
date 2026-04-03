import { Metadata } from 'next';
import NavbarThree from '@/components/shared/header/NavbarThree';
import Hero from '@/components/service-3/Hero';
import MeetOurTeam from '@/components/service-3/MeetOurTeam';
import Clients from '@/components/service-1/Clients';
import Services from "@/components/service-3/WhyChoose"
import Service from '@/components/service-3/OurApproach';
import Integrations from '@/components/service-3/Industries';
import ScrollingAppsShowcase from '@/components/service-3/Technologies';
import CTA from '@/components/service-3/CTA';
import FooterThree from '@/components/shared/footer/FooterThree';
import { Fragment } from 'react';

//  Meta Data (App Router Format)
export const metadata: Metadata = {
  title: 'Automation & RPA Solutions | Worksbot',
  description:
    'Worksbot provides Automation and Robotic Process Automation (RPA) solutions for workflow optimization and intelligent business process automation. We help organizations reduce manual effort, improve accuracy, and accelerate operational efficiency.',
  keywords:
    'RPA solutions, business automation services, workflow automation, robotic process automation, intelligent automation, Worksbot RPA, process optimization, enterprise automation tools',
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
