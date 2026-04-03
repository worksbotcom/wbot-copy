import serviceBg from '@public/images/home-page-37/service-bg.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

import {
  Cpu,
  MonitorCog,
  Code,
  RadioTower,
  Bug,
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
    title: 'Requirement & Hardware Analysis',
    description: 'Understand device architecture, performance targets, constraints, and hardware components.',
    delay: 0.4,
    icon: <Cpu className="w-10 h-10 text-accent" />,
  },
  {
    id: 2,
    title: 'Firmware Architecture & Development',
    description: 'Design and build secure, high-performance firmware for microcontrollers, processors, and embedded modules.',
    delay: 0.5,
    icon: < MonitorCog className="w-10 h-10 text-accent" />,
  },
  {
    id: 3,
    title: 'Embedded Application Development',
    description: 'Develop user-facing features, control logic, communication stacks, and real-time systems.',
    delay: 0.6,
    icon: <Code className="w-10 h-10 text-accent" />,
  },
  {
    id: 4,
    title: 'IoT Integration & Connectivity',
    description: 'Enable cloud and edge connectivity using BLE, Wi-Fi, LoRa, Zigbee, MQTT, and custom protocols.',
    delay: 0.7,
    icon: <RadioTower className="w-10 h-10 text-accent" />,
  },
  {
    id: 5,
    title: 'Testing & Hardware Validation',
    description: 'Perform board bring-up, debugging, and validation to ensure optimal performance and reliability.',
    delay: 0.8,
    icon: <Bug className="w-10 h-10 text-accent" />,
  },
  {
    id: 6,
    title: 'Optimization & Long-Term Support',
    description: 'Provide system updates, firmware enhancements, and lifecycle support for long-term product stability.',
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
