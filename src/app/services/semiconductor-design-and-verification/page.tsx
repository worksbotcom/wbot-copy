import { Metadata } from 'next';
import NavbarThree from '@/components/shared/header/NavbarThree';
import Hero from '@/components/service-10/Hero';
import MeetOurTeam from '@/components/service-10/MeetOurTeam';
import Clients from '@/components/service-1/Clients';
import Services from "@/components/service-10/WhyChoose"
import Service from '@/components/service-10/OurApproach';
import Integrations from '@/components/service-10/Industries';
import ScrollingAppsShowcase from '@/components/service-10/Technologies';
import CTA from '@/components/service-10/CTA';
import FooterThree from '@/components/shared/footer/FooterThree';
import { Fragment } from 'react';

//  Meta Data (App Router Format)
export const metadata: Metadata = {
  title: 'Semiconductor Design & Verification Services | Worksbot',
  description:
    'Worksbot offers full-cycle semiconductor design and verification services including RTL development, functional verification, and post-silicon validation. We help semiconductor companies accelerate chip innovation with reliable, high-performance engineering solutions.',
  keywords:
    'semiconductor design services, chip design, RTL development, functional verification, post-silicon validation, VLSI design services, Worksbot semiconductor engineering, ASIC design, FPGA design, verification services',
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
