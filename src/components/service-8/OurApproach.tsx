import serviceBg from '@public/images/home-page-37/service-bg.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

import {
  ClipboardCheck,
  Rocket,
  Cpu,
  Settings,
  ShieldCheck,
  Wrench
} from "lucide-react";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  delay: number;
  icon: any;  // Lucide icon component
}

const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: 'Concept Analysis & Feasibility Study',
    description: 'Evaluate product ideas, user needs, and technical feasibility to establish clear requirements.',
    delay: 0.4,
    icon: ClipboardCheck,
  },
  {
    id: 2,
    title: 'Rapid Prototyping & MVP Development',
    description: 'Build functional prototypes using agile cycles to validate design, performance, and usability.',
    delay: 0.5,
    icon: Rocket,
  },
  {
    id: 3,
    title: 'Hardware–Software Co-Design',
    description: 'Integrate electronics, mechanical components, firmware, cloud, and applications.',
    delay: 0.6,
    icon: Cpu,
  },
  {
    id: 4,
    title: 'Product Engineering & Optimization',
    description: 'Refine the solution for reliability, manufacturability, and scalability.',
    delay: 0.7,
    icon: Settings,
  },
  {
    id: 5,
    title: 'Testing, Validation & Compliance',
    description: 'Perform design validation, stress testing, regulatory assessments, and certifications.',
    delay: 0.8,
    icon: ShieldCheck,
  },
  {
    id: 6,
    title: 'Production Support & Lifecycle Management',
    description: 'Assist with manufacturing handoff, quality assurance, and iterative upgrades.',
    delay: 0.9,
    icon: Wrench,
  },
];

const Service = () => {
  return (
    <section className="max-[1920px]:px-5">
      <div className="bg-secondary max-w-[1880px] md:rounded-4xl rounded-3xl py-25 xl:py-28 md:px-5 mx-auto relative overflow-hidden">
        <RevealAnimation delay={0.4}>
          <figure className="absolute right-0 bottom-0 w-full h-full">
            <Image src={serviceBg} alt="service bg" className="w-full h-full object-cover" />
          </figure>
        </RevealAnimation>

        <div className="main-container mb-13">
          <div className="mb-19 text-center lg:max-w-[730px] lg:mx-auto">
            <RevealAnimation delay={0.2}>
              <h2 className="mb-3 text-accent">Our Approach</h2>
            </RevealAnimation>
          </div>

          {/* services cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-y-8">
            {servicesData.map((service) => {
              const Icon = service.icon;

              return (
                <RevealAnimation key={service.id} delay={service.delay}>
                  <article className="flex flex-col items-center justify-center text-center space-y-8 p-6 lg:p-9 xl:p-11">

                    {/* ICON UPDATED TO LUCIDE */}
                    <figure className="h-10 w-10 flex items-center justify-center">
                      <Icon size={40} className="text-accent" />
                    </figure>

                    <div className="space-y-2 max-w-[322px]">
                      <h5 className="text-white">{service.title}</h5>
                      <p className="text-tagline-1 text-accent/60">{service.description}</p>
                    </div>
                  </article>
                </RevealAnimation>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Service;
