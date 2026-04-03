import { IServices } from '@/interface';
import { cn } from '@/utils/cn';
import RevealAnimation from '../animation/RevealAnimation';
import { Rocket, Database, BrainCircuit, ShieldCheck, Layers3 } from 'lucide-react';

const servicesData: IServices[] = [
  {
    slug: 'end-to-end-transformation',
    title: 'End-to-End Transformation Guidance',
    description: 'From discovery to deployment, we help define and execute your AI vision.',
    icon: BrainCircuit,
  },
  {
    slug: 'data-driven-decision-making',
    title: 'Data-Driven Decision-Making',
    description: 'Leverage insights and analytics to identify high-impact AI opportunities.',
    icon: Database,
  },
  {
    slug: 'accelerated-innovation',
    title: 'Accelerated Innovation',
    description: 'Adopt cutting-edge AI technologies faster with expert strategic support.',
    icon: Rocket,
  },
  {
    slug: 'reduced-risk-cost',
    title: 'Reduced Risk & Cost',
    description: 'Avoid common adoption pitfalls with structured readiness assessments.',
    icon: ShieldCheck,
  },
  {
    slug: 'scalable-future-strategy',
    title: 'Scalable, Future-Focused Strategy',
    description: 'Build transformation plans designed to grow with your business and technology needs.',
    icon: Layers3,
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
              <h2 className='font-bold'>Why Choose AI Consulting & Digital Strategy?</h2>
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
