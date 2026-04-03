import { IServices } from '@/interface';
import { cn } from '@/utils/cn';
import RevealAnimation from '../animation/RevealAnimation';
import {
  Timer,
  Route,
  Layers,
  PiggyBank,
  UploadCloud,
} from "lucide-react";

const servicesData: IServices[] = [
  {
    slug: 'accelerated-time-to-market',
    title: 'Accelerated Time-to-Market',
    description: 'Develop and validate product concepts rapidly with iterative prototypes.',
    icon: Timer,
  },
  {
    slug: 'end-to-end-product-expertise',
    title: 'End-to-End Product Expertise',
    description: 'From concept modeling to mass production support, we cover the entire lifecycle.',
    icon: Route,
  },
  {
    slug: 'hardware-software-integration',
    title: 'Seamless Hardware–Software Integration',
    description: 'Ensure smooth coordination across electronics, firmware, cloud, and applications.',
    icon: Layers,
  },
  {
    slug: 'cost-efficient-development',
    title: 'Cost-Efficient Development',
    description: 'Test feasibility early to reduce development risks and unnecessary investments.',
    icon: PiggyBank,
  },
  {
    slug: 'scalable-architecture-growth',
    title: 'Scalable Architecture for Growth',
    description: 'Design products that can scale in production, features, and ecosystem integration.',
    icon: UploadCloud,
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
