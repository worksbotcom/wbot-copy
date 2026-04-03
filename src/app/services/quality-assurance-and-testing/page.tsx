import { Metadata } from 'next';
import NavbarThree from '@/components/shared/header/NavbarThree';
import Hero from '@/components/service-9/Hero';
import MeetOurTeam from '@/components/service-9/MeetOurTeam';
import Clients from '@/components/service-1/Clients';
import Services from "@/components/service-9/WhyChoose"
import Service from '@/components/service-9/OurApproach';
import Integrations from '@/components/service-9/Industries';
import ScrollingAppsShowcase from '@/components/service-9/Technologies';
import CTA from '@/components/service-9/CTA';
import FooterThree from '@/components/shared/footer/FooterThree';
import { Fragment } from 'react';

//  Meta Data (App Router Format)
export const metadata: Metadata = {
  title: 'Quality Assurance & Testing Services | Worksbot',
  description:
    'Worksbot provides comprehensive Quality Assurance and Testing services including automation testing, performance testing, security testing, and semiconductor test engineering. We ensure high-quality, reliable, and secure digital products across all industries.',
  keywords:
    'QA services, software testing, automation testing, performance testing, security testing, semiconductor test engineering, Worksbot QA, quality assurance solutions, enterprise testing services',
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
