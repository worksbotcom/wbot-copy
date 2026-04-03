import serviceBg from '@public/images/home-page-37/service-bg.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

import {
  ClipboardList,
  Database,
  AppWindow,
  Rocket,
  Wrench,
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
    title: 'Business Requirement Analysis',
    description: 'Understand objectives, operational challenges, and the data ecosystem to define an AI strategy.',
    delay: 0.4,
    icon: ClipboardList,
  },
  {
    id: 2,
    title: 'Data Processing & AI Model Development',
    description: 'Build machine learning and deep learning models tailored to your business needs.',
    delay: 0.5,
    icon: Database,
  },
  {
    id: 3,
    title: 'Application Engineering',
    description: 'Integrate AI models into powerful, user-friendly applications—web, mobile, or cloud.',
    delay: 0.6,
    icon: AppWindow,
  },
  {
    id: 4,
    title: 'Deployment & Integration',
    description: 'Ensure seamless deployment, integration with existing systems, and optimal performance.',
    delay: 0.7,
    icon: Rocket,
  },
  {
    id: 5,
    title: 'Support & Continuous Improvement',
    description: 'Provide ongoing support, model updates, and performance enhancements.',
    delay: 0.8,
    icon: Wrench,
  },
];

const Service = () => {
  return (
    <section className="max-[1920px]:px-5">
      <div className="bg-secondary max-w-[1880px] md:rounded-4xl rounded-3xl py-25 xl:py-28 md:px-5 mx-auto relative overflow-hidden">
        
        {/* Background Image */}
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
          <div className="mb-19 text-center lg:max-w-[730px] lg:mx-auto">
            <RevealAnimation delay={0.2}>
              <h2 className="mb-3 text-accent">Our Approach</h2>
            </RevealAnimation>
          </div>

          {/* Services Cards */}
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
