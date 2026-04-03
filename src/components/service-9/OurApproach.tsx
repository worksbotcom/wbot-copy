import serviceBg from '@public/images/home-page-37/service-bg.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

import {
  ClipboardList,
  ListChecks,
  TestTube,
  Gauge,
  ShieldAlert,
  Cpu,
  FileBarChart
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
    title: 'Requirement Analysis & Test Planning',
    description: 'Understand project requirements and define a custom QA strategy tailored to application complexity.',
    delay: 0.4,
    icon: ClipboardList,
  },
  {
    id: 2,
    title: 'Test Case Design & Test Environment Setup',
    description: 'Create detailed test scenarios and configure environments for accurate, real-world simulation.',
    delay: 0.5,
    icon: ListChecks,
  },
  {
    id: 3,
    title: 'Manual & Automation Testing',
    description: 'Execute functional, regression, and automated test suites for faster and more scalable coverage.',
    delay: 0.6,
    icon: TestTube,
  },
  {
    id: 4,
    title: 'Performance, Load & Stress Testing',
    description: 'Evaluate application responsiveness, stability, and scalability under peak conditions.',
    delay: 0.7,
    icon: Gauge,
  },
  {
    id: 5,
    title: 'Security & Vulnerability Testing',
    description: 'Perform penetration testing, code analysis, and security assessments to ensure system integrity.',
    delay: 0.8,
    icon: ShieldAlert,
  },
  {
    id: 6,
    title: 'Semiconductor Test Engineering',
    description: 'Deliver silicon validation, board testing, yield analysis, and reliability testing for semiconductor products.',
    delay: 0.9,
    icon: Cpu,
  },
  {
    id: 7,
    title: 'Reporting, Optimization & Support',
    description: 'Provide detailed test reports, highlight improvements, and offer ongoing QA support.',
    delay: 1.0,
    icon: FileBarChart,
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
                  <article
                    className={`flex flex-col items-center justify-center text-center space-y-8 p-6 lg:p-9 xl:p-11
                      ${service.id === 7 ? "lg:col-start-2" : ""}
                    `}
                  >
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
