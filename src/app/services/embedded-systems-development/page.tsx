import { Metadata } from 'next';
import NavbarThree from '@/components/shared/header/NavbarThree';
import Hero from '@/components/service-7/Hero';
import MeetOurTeam from '@/components/service-7/MeetOurTeam';
import Clients from '@/components/service-1/Clients';
import Services from "@/components/service-7/WhyChoose"
import Service from '@/components/service-7/OurApproach';
import Integrations from '@/components/service-7/Industries';
import ScrollingAppsShowcase from '@/components/service-7/Technologies';
import CTA from '@/components/service-7/CTA';
import FooterThree from '@/components/shared/footer/FooterThree';
import { Fragment } from 'react';

//  Meta Data (App Router Format)
export const metadata: Metadata = {
  title: 'Embedded Systems Development Services | Worksbot',
  description:
    'Worksbot provides embedded systems development services including firmware engineering, embedded application development, and IoT device integration. We help businesses build smart, connected, and high-performance products.',
  keywords:
    'embedded systems development, firmware development, embedded software engineering, IoT device integration, microcontroller programming, embedded applications, Worksbot embedded services, real-time systems, hardware-software integration',
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
