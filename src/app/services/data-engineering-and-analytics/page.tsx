import { Metadata } from 'next';
import NavbarThree from '@/components/shared/header/NavbarThree';
import Hero from '@/components/service-6/Hero';
import MeetOurTeam from '@/components/service-6/MeetOurTeam';
import Clients from '@/components/service-1/Clients';
import Services from "@/components/service-6/WhyChoose"
import Service from '@/components/service-6/OurApproach';
import Integrations from '@/components/service-6/Industries';
import ScrollingAppsShowcase from '@/components/service-6/Technologies';
import CTA from '@/components/service-6/CTA';
import FooterThree from '@/components/shared/footer/FooterThree';
import { Fragment } from 'react';

//  Meta Data (App Router Format)
export const metadata: Metadata = {
  title: 'Data Engineering & Analytics Services | Worksbot',
  description:
    'Worksbot provides data engineering and analytics services including data pipelines, warehousing solutions, and advanced analytics platforms. We help organizations harness data for actionable insights and smarter decision-making.',
  keywords:
    'data engineering services, data analytics solutions, data pipelines, data warehousing, ETL development, business intelligence platforms, Worksbot data services, big data engineering, advanced analytics',
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
