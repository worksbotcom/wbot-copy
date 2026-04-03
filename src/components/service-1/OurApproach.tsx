import serviceBg from '@public/images/home-page-37/service-bg.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

import {
  SearchCheck,
  Map,
  Route,
  Layers,
  Settings,
  GraduationCap,
} from "lucide-react";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  delay: number;
  icon: any;
}

const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: 'Discovery & Readiness Assessment',
    description: 'Evaluate business goals, data maturity, infrastructure, and organizational readiness.',
    delay: 0.4,
    icon: SearchCheck,
  },
  {
    id: 2,
    title: 'AI Opportunity Mapping',
    description: 'Identify high-impact use cases that align with business priorities.',
    delay: 0.5,
    icon: Map,
  },
  {
    id: 3,
    title: 'AI Roadmap Development',
    description: 'Create a step-by-step execution plan across technology, data, and talent.',
    delay: 0.6,
    icon: Route,
  },
  {
    id: 4,
    title: 'Architecture & Solution Blueprinting',
    description: 'Build scalable architectures for cloud, data pipelines, and AI systems.',
    delay: 0.7,
    icon: Layers,
  },
  {
    id: 5,
    title: 'Implementation Advisory',
    description: 'Hands-on support during model development, integration, and deployment.',
    delay: 0.8,
    icon: Settings,
  },
  {
    id: 6,
    title: 'Change Management & Training',
    description: 'Equip teams to adopt and manage AI-driven tools and workflows effectively.',
    delay: 0.9,
    icon: GraduationCap,
  },
];

const Service = () => {
  return (
    <section className="max-[1920px]:px-5">
      <div className="bg-secondary max-w-[1880px] md:rounded-4xl rounded-3xl py-25 xl:py-28 md:px-5 mx-auto relative overflow-hidden">
        
        {/* BG Image */}
        <RevealAnimation delay={0.4}>
          <figure className="absolute right-0 bottom-0 w-full h-full">
            <Image
              src={serviceBg}
              alt="service bg"
              className="w-full h-full object-cover"
            />
          </figure>
        </RevealAnimation>

        <div className="main-container mb-13">
          {/* Heading */}
          <div className="mb-19 text-center lg:max-w-[730px] lg:mx-auto">
            <RevealAnimation delay={0.2}>
              <h2 className="mb-3 text-accent">Our Approach</h2>
            </RevealAnimation>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-y-8">
            {servicesData.map((service) => (
              <RevealAnimation key={service.id} delay={service.delay}>
                <article className="flex flex-col items-center justify-center text-center space-y-8 p-6 lg:p-9 xl:p-11">

                  {/* Lucide Icon */}
                  <figure className="h-10 w-10 flex items-center justify-center">
                    <service.icon
                      size={40}
                      className="text-accent"
                      strokeWidth={1.5}
                    />
                  </figure>

                  <div className="space-y-2 max-w-[322px]">
                    <h5 className="text-white">{service.title}</h5>
                    <p className="text-tagline-1 text-accent/60">
                      {service.description}
                    </p>
                  </div>

                </article>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
