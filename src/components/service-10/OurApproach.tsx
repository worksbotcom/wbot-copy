import serviceBg from '@public/images/home-page-37/service-bg.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

import {
  Layers,
  Binary,
  CheckCircle,
  Cpu,
  Activity,
  Repeat,
} from "lucide-react";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  delay: number;
  icon: any; // Lucide icon component
}

const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: 'Requirements & Architecture Definition',
    description: 'Partner with your engineering teams to define chip architecture, performance goals, and design specifications.',
    delay: 0.4,
    icon: Layers,
  },
  {
    id: 2,
    title: 'RTL Design & Development',
    description: 'Create optimized, high-quality RTL code using industry best practices for ASIC and FPGA development.',
    delay: 0.5,
    icon: Binary,
  },
  {
    id: 3,
    title: 'Functional Verification & Validation',
    description: 'Use advanced methodologies such as UVM, SystemVerilog, and constrained-random testing to ensure design correctness.',
    delay: 0.6,
    icon: CheckCircle,
  },
  {
    id: 4,
    title: 'Physical Design Support (Optional)',
    description: 'Collaborate with PD teams on synthesis, DFT, STA, and backend optimization.',
    delay: 0.7,
    icon: Cpu,
  },
  {
    id: 5,
    title: 'Post-Silicon Validation',
    description: 'Perform bring-up, debugging, validation, and performance optimization on real silicon.',
    delay: 0.8,
    icon: Activity,
  },
  {
    id: 6,
    title: 'Continuous Support',
    description: 'Provide ongoing engineering support for tape-out, revisions, and next-generation chip improvements.',
    delay: 0.9,
    icon: Repeat,
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

          {/* Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-y-8">
            {servicesData.map((service) => {
              const Icon = service.icon;

              return (
                <RevealAnimation key={service.id} delay={service.delay}>
                  <article className="flex flex-col items-center justify-center text-center space-y-8 p-6 lg:p-9 xl:p-11">

                    {/* ICON */}
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
