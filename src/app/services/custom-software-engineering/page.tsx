import { Metadata } from 'next';
import NavbarThree from '@/components/shared/header/NavbarThree';
import Hero from '@/components/service-5/Hero';
import MeetOurTeam from '@/components/service-5/MeetOurTeam';
import Clients from '@/components/service-1/Clients';
import Services from "@/components/service-5/WhyChoose"
import Service from '@/components/service-5/OurApproach';
import Integrations from '@/components/service-5/Industries';
import ScrollingAppsShowcase from '@/components/service-5/Technologies';
import CTA from '@/components/service-5/CTA';
import FooterThree from '@/components/shared/footer/FooterThree';
import { Fragment } from 'react';

//  Meta Data (App Router Format)
export const metadata: Metadata = {
  title: 'Custom Software Engineering Services | Worksbot',
  description:
    'Worksbot delivers end-to-end custom software engineering services, including enterprise software development, cloud-native platforms, and high-performance digital products. We help businesses modernize operations, enhance user experience, and accelerate digital transformation.',
  keywords:
    'custom software engineering, enterprise software development, cloud-native applications, digital product development, software modernization, Worksbot software solutions, custom application development, scalable software platforms',
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
