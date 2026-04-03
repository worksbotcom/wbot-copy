import serviceBg from '@public/images/home-page-37/service-bg.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import {
  Search,
  Route,
  Bot,
  Workflow,
  ShieldCheck,
  RefreshCw
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
    title: 'Process Discovery & Analysis',
    description: 'Identify automation candidates and assess workflow complexity, ROI, and feasibility.',
    delay: 0.4,
    icon: <Search className="w-10 h-10 text-accent" />,
  },
  {
    id: 2,
    title: 'Automation Strategy & Roadmap',
    description: 'Define scalable automation frameworks aligned with business goals.',
    delay: 0.5,
    icon: <Route className="w-10 h-10 text-accent" />,
  },
  {
    id: 3,
    title: 'RPA Bot Development',
    description: 'Build and deploy unattended, attended, and cognitive bots using leading RPA tools.',
    delay: 0.6,
    icon: <Bot className="w-10 h-10 text-accent" />,
  },
  {
    id: 4,
    title: 'Workflow Integration & Optimization',
    description: 'Integrate RPA with existing ERP, CRM, HRMS, finance systems, and APIs.',
    delay: 0.7,
    icon: <Workflow className="w-10 h-10 text-accent" />,
  },
  {
    id: 5,
    title: 'Testing, Monitoring & Governance',
    description: 'Ensure security, accuracy, performance, and compliance with enterprise standards.',
    delay: 0.8,
    icon: <ShieldCheck className="w-10 h-10 text-accent" />,
  },
  {
    id: 6,
    title: 'Maintenance & Continuous Improvement',
    description: 'Provide ongoing support, bot upgrades, and advanced analytics to enhance automation over time.',
    delay: 0.9,
    icon: <RefreshCw className="w-10 h-10 text-accent" />,
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
