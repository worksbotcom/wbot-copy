import { cn } from '@/utils/cn';
import RevealAnimation from '../animation/RevealAnimation';
import { IServices } from '@/interface';


import { 
  Workflow, 
  LineChart, 
  Target, 
  UserRoundCheck, 
  Layers 
} from 'lucide-react';

const servicesData: IServices[] = [
  {
    slug: 'smarter-automation',
    title: 'Smarter Automation',
    description: 'Automate routine tasks and streamline workflows using intelligent algorithms.',
    icon: Workflow,
  },
  {
    slug: 'enhanced-decision-making',
    title: 'Enhanced Decision-Making',
    description: 'Leverage real-time insights, predictions, and analytics to drive better business outcomes.',
    icon: LineChart,
  },
  {
    slug: 'improved-accuracy-efficiency',
    title: 'Improved Accuracy & Efficiency',
    description: 'Reduce human error and optimize processes with AI-driven precision.',
    icon: Target,
  },
  {
    slug: 'personalized-user-experiences',
    title: 'Personalized User Experiences',
    description: 'Deliver tailored recommendations, dynamic content, and conversational interactions.',
    icon: UserRoundCheck,
  },
  {
    slug: 'scalable-future-ready',
    title: 'Scalable & Future-Ready',
    description: 'Our AI systems evolve with your business needs and adapt to growing data and workflows.',
    icon: Layers,
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
              <h2 className='font-bold'>Why Choose AI-Powered Application Development?</h2>
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
