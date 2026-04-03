import { Metadata } from 'next';
import NavbarThree from '@/components/shared/header/NavbarThree';
import Hero from '@/components/service-8/Hero';
import MeetOurTeam from '@/components/service-8/MeetOurTeam';
import Clients from '@/components/service-1/Clients';
import Services from "@/components/service-8/WhyChoose"
import Service from '@/components/service-8/OurApproach';
import Integrations from '@/components/service-8/Industries';
import ScrollingAppsShowcase from '@/components/service-8/Technologies';
import CTA from '@/components/service-8/CTA';
import FooterThree from '@/components/shared/footer/FooterThree';
import { Fragment } from 'react';

//  Meta Data (App Router Format)
export const metadata: Metadata = {
  title: 'Product Engineering & Prototyping Services | Worksbot',
  description:
    'Worksbot provides product engineering and rapid prototyping services, including hardware–software co-design and scalable product development. We help businesses bring innovative products to market faster with reliable engineering solutions.',
  keywords:
    'product engineering services, rapid prototyping, hardware–software co-design, product development, MVP development, Worksbot engineering services, hardware prototyping, scalable product design, IoT product development',
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
