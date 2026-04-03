import { cn } from '@/utils/cn';
import RevealAnimation from '../animation/RevealAnimation';
import { IServices } from '@/interface';

// Lucide Icons
import { 
  Workflow, 
  ShieldCheck, 
  Rocket, 
  Bot, 
  BadgeDollarSign 
} from "lucide-react";

const servicesData: IServices[] = [
  {
    slug: 'eliminate-manual-work',
    title: 'Eliminate Manual Work',
    description: 'Reduce repetitive processes and free teams to focus on high-value tasks.',
    icon: Workflow,
  },
  {
    slug: 'increase-accuracy-compliance',
    title: 'Increase Accuracy & Compliance',
    description: 'Ensure error-free execution and consistent process adherence.',
    icon: ShieldCheck,
  },
  {
    slug: 'boost-operational-efficiency',
    title: 'Boost Operational Efficiency',
    description: 'Accelerate workflows and improve overall process cycle times.',
    icon: Rocket,
  },
  {
    slug: 'scalable-automation-frameworks',
    title: 'Scalable Automation Frameworks',
    description: 'Deploy bots and automated systems that scale across departments and functions.',
    icon: Bot,
  },
  {
    slug: 'cost-savings-roi',
    title: 'Cost Savings & Improved ROI',
    description: 'Lower operational expenses through smart automation and optimized workflows.',
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
              <h2 className='font-bold'>Why Choose Automation & RPA Solutions?</h2>
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

                  {/* Icon Box */}
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="w-12 h-12 text-primary" strokeWidth={1} />
                  </div>

                  {/* Content */}
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
