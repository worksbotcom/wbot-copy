import { Metadata } from 'next';
import NavbarThree from '@/components/shared/header/NavbarThree';
import Hero from '@/components/service-4/Hero';
import MeetOurTeam from '@/components/service-4/MeetOurTeam';
import Clients from '@/components/service-1/Clients';
import Services from "@/components/service-4/WhyChoose"
import Service from '@/components/service-4/OurApproach';
import Integrations from '@/components/service-4/Industries';
import ScrollingAppsShowcase from '@/components/service-4/Technologies';
import CTA from '@/components/service-4/CTA';
import FooterThree from '@/components/shared/footer/FooterThree';
import { Fragment } from 'react';

//  Meta Data (App Router Format)
export const metadata: Metadata = {
  title: 'Cloud Transformation & DevOps Services | Worksbot',
  description:
    'Worksbot delivers cloud transformation and DevOps services including cloud migration, infrastructure automation, CI/CD implementation, and performance optimization. We help businesses scale faster, improve reliability, and accelerate digital innovation.',
  keywords:
    'cloud transformation services, DevOps services, cloud migration, infrastructure automation, CI/CD implementation, cloud optimization, Worksbot cloud services, Kubernetes solutions, cloud-native development',
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
