import serviceBg from '@public/images/home-page-37/service-bg.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

import {
  SearchCheck,
  LayoutDashboard,
  Code2,
  PlugZap,
  ShieldCheck,
  Wrench
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
    title: 'Requirement Analysis & Consulting',
    description: 'We analyze your business workflows, challenges, and objectives to define a clear development strategy.',
    delay: 0.4,
    icon: <SearchCheck className="w-10 h-10 text-accent" />,
  },
  {
    id: 2,
    title: 'Solution Architecture & UI/UX Design',
    description: 'Design user-friendly interfaces and a scalable architecture aligned with technical and business needs.',
    delay: 0.5,
    icon: <LayoutDashboard className="w-10 h-10 text-accent" />,
  },
  {
    id: 3,
    title: 'Custom Development & Engineering',
    description: 'Our development teams build secure, high-performance applications using modern technologies.',
    delay: 0.6,
    icon: <Code2 className="w-10 h-10 text-accent" />,
  },
  {
    id: 4,
    title: 'Integration & Deployment',
    description: 'We integrate your custom software with existing systems, APIs, and third-party services.',
    delay: 0.7,
    icon: <PlugZap className="w-10 h-10 text-accent" />,
  },
  {
    id: 5,
    title: 'Quality Assurance & Performance Testing',
    description: 'Comprehensive testing ensures your solution is fast, reliable, and secure.',
    delay: 0.8,
    icon: <ShieldCheck className="w-10 h-10 text-accent" />,
  },
  {
    id: 6,
    title: 'Maintenance & Continuous Enhancement',
    description: 'Provide long-term support, enhancements, and updates to keep your software running smoothly.',
    delay: 0.9,
    icon: <Wrench className="w-10 h-10 text-accent" />,
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

          {/* service cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-y-8">
            {servicesData.map((service) => (
              <RevealAnimation key={service.id} delay={service.delay}>
                <article className="flex flex-col items-center justify-center text-center space-y-8 p-6 lg:p-9 xl:p-11">
                  
                  <figure className="relative h-10 w-10 flex items-center justify-center">
                    {service.icon}
                  </figure>

                  <div className="space-y-2 max-w-[322px]">
                    <h5 className="text-white">{service.title}</h5>
                    <p className="text-tagline-1 text-accent/60">{service.description}</p>
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
