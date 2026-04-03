'use client';
import RevealAnimation from '../animation/RevealAnimation';
import StackCardItem from '../ui/stack-card/StackCardItem';
import StackCardWrapper from '../ui/stack-card/StackCardWrapper';

import {
  Microchip,
  CarFront,
  Smartphone,
  Wifi,
  Server,
  Rocket,
} from 'lucide-react';

const stackCards = [
  {
    icon: Microchip,
    title: "Semiconductor & Electronics",
    description: "ASICs, SoCs, FPGA solutions, and advanced semiconductor design workflows.",
  },
  {
    icon: CarFront,
    title: "Automotive",
    description: "ADAS systems, autonomous vehicle solutions, and EV power electronics.",
  },
  {
    icon: Smartphone,
    title: "Consumer Electronics",
    description: "Smart devices, wearables, multimedia chips, and embedded controllers.",
  },
  {
    icon: Wifi,
    title: "Telecommunications",
    description: "5G/6G systems, RF modules, network processors, and telecom semiconductor solutions.",
  },
  {
    icon: Server,
    title: "Industrial & IoT",
    description: "Edge processors, sensor chips, and embedded controllers for industrial applications.",
  },
  {
    icon: Rocket,
    title: "Aerospace & Defense",
    description: "Secure, mission-critical semiconductor systems for aerospace and defense applications.",
  },
];
const Integrations = () => {
  return (
    <section className="bg-background-4 dark:bg-background-5">
      <div className="main-container">
        <div className="flex lg:flex-row flex-col items-start lg:gap-[100px] md:gap-y-20 gap-y-10 pt-14 md:pt-16 lg:pt-[88px] xl:pt-[150px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[150px]">

          {/* LEFT SECTION */}
          <div className="w-full lg:flex-1 lg:sticky lg:top-28 lg:max-w-full max-w-[520px] lg:mx-0 mx-auto text-center lg:text-left">
            <RevealAnimation delay={0.3}>
              <h2 className="mb-3 whitespace-normal font-bold">
                Industries <span className="text-primary-600 font-bold">We Serve</span>
              </h2>
            </RevealAnimation>

            <RevealAnimation delay={0.4}>
              <p className="mb-14 lg:max-w-[620px]">
                Worksbot's semiconductor engineering services support leading technology sectors including
              </p>
            </RevealAnimation>
          </div>

          {/* RIGHT SECTION */}
                              <StackCardWrapper
                                topOffset="15vh"
                                gap="24px"
                                initDelay={100}
                                className="w-full lg:flex-1 md:max-w-[65%] max-w-[90%] mx-auto">
                    
                                {stackCards.map((card, index) => {
                                  const Icon = card.icon;
                    
                                  return (
                                    <StackCardItem key={index}>
                                      <div className="p-8 bg-background-1 dark:bg-background-6 rounded-xl space-y-6 border border-stroke-1/90 dark:border-stroke-5">
                                        
                                        <Icon
                                          size={46}
                                          strokeWidth={1}
                                          className="text-secondary dark:text-accent"
                                        />
                    
                                        <div className="space-y-1">
                                          <h5>{card.title}</h5>
                                          <p>{card.description}</p>
                                        </div>
                    
                                      </div>
                                    </StackCardItem>
                                  );
                                })}
                    
                              </StackCardWrapper>
                    
                            </div>
                          </div>
                        </section>
                      );
                    };
                    
                    export default Integrations;