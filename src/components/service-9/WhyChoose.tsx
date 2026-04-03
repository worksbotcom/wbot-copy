import { IServices } from '@/interface';
import { cn } from '@/utils/cn';
import RevealAnimation from '../animation/RevealAnimation';
import {
  ShieldCheck,
  ShieldAlert,
  TimerReset,
  SmilePlus,
  BadgeDollarSign,
} from "lucide-react";

const servicesData: IServices[] = [
  {
    slug: 'improved-product-reliability',
    title: 'Improved Product Reliability',
    description: 'Identify issues early and ensure consistent product performance across all environments.',
    icon: ShieldCheck,
  },
  {
    slug: 'enhanced-security-compliance',
    title: 'Enhanced Security & Compliance',
    description: 'Detect vulnerabilities and safeguard your application against potential threats.',
    icon: ShieldAlert,
  },
  {
    slug: 'faster-time-to-market',
    title: 'Faster Time-to-Market',
    description: 'Accelerate release cycles with automated testing and efficient QA workflows.',
    icon: TimerReset,
  },
  {
    slug: 'higher-user-satisfaction',
    title: 'Higher User Satisfaction',
    description: 'Deliver flawless, bug-free experiences to your customers.',
    icon: SmilePlus,
  },
  {
    slug: 'reduced-development-costs',
    title: 'Reduced Development Costs',
    description: 'Prevent costly post-release defects with proactive testing strategies.',
    icon: BadgeDollarSign,
  },
];

const Services = () => {
  return (
    <section className="bg-background-2 dark:bg-background-7 py-16 md:py-20 lg:py-[90px] xl:py-[100px]">
      <div className="main-container">

        {/* Heading */}
        <div className="mb-10 md:mb-[70px] text-center lg:text-left">
          <div className="flex flex-col lg:flex-row gap-8 justify-between">
            <RevealAnimation delay={0.3}>
              <h2 className='font-bold'>Why Choose Data Engineering & Analytics?</h2>
            </RevealAnimation>

            <RevealAnimation delay={0.4}>
              <p className="max-w-[518px] text-center lg:text-left mx-auto lg:mx-0"></p>
            </RevealAnimation>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-14 grid grid-cols-12 gap-y-8 md:gap-x-8">
          {servicesData.map((item, index) => {
            const Icon = item.icon;

            return (
              <RevealAnimation key={item.slug} delay={0.5 + index * 0.1}>
                <div
                  className={cn(
                    `col-span-12 sm:col-span-6 px-6 py-8 rounded-[20px] bg-white dark:bg-background-6 
                     flex flex-col items-start space-y-6 
                     transition-all duration-500 ease-in-out 
                     hover:-translate-y-5 hover:scale-[1.02] hover:shadow-xl`,
                    index >= 3 ? 'lg:col-span-6' : 'lg:col-span-4'
                  )}
                >

                  {/* Lucide Icon */}
                  <div className="w-12 h-12 flex items-center justify-center">
                    <Icon className="w-12 h-12 stroke-[1]" />
                  </div>

                  {/* Title + Description */}
                  <div>
                    <h5 className="mb-2 max-md:text-heading-6">{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              </RevealAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
