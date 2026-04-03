import { cn } from '@/utils/cn';
import gradient28Img from '@public/images/gradient/gradient-28.png';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

interface ServiceCard {
  id: number;
  label: string;
  value: string;
  description: string;
}

export const serviceCards: ServiceCard[] = [
  {
    id: 1,
    label: ' Experience',
    value: '11+ Years',
    description: 'Proven technology & innovation expertise',
  },
  {
    id: 2,
    label: ' Global Reach',
    value: '80+ Countries',
    description: 'Serving clients worldwide',
  },
  {
    id: 3,
    label: ' Skilled Team',
    value: '100+ Professionals',
    description: 'Driving digital transformation',
  },
  {
    id: 4,
    label: ' Industries',
    value: '10+ Sectors',
    description: 'Providing tailored industry solutions',
  },
  {
    id: 5,
    label: ' Projects Delivered',
    value: '1500+',
    description: 'Successfully completed projects',
  },
  {
    id: 6,
    label: ' Core Expertise',
    value: 'Software • RPA • RPO',
    description: 'Intelligent automation & digital solutions',
  },
  {
    id: 7,
    label: ' Trusted Partner',
    value: 'Global Clients',
    description: 'Preferred by enterprises & startups',
  },
];


// ⭐ Badge Component (extracted)
const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="badge badge-cyan mb-5 ">{children}</span>
);


const Highlights = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="xl:py-[100px] md:py-[100px] py-12 bg-white dark:bg-black">

        {/* ⭐ Added the extracted badge component here */}
        <div className="text-center mb-16">
          <Badge>Company Highlights</Badge>
        </div>

        <div className="relative">

          {/* gradient shadows left/right */}
          <div className="from-white dark:from-black absolute top-0 left-0 z-40 h-full w-[15%] bg-gradient-to-r to-transparent md:w-[20%]" />
          <div className="from-white dark:from-black absolute top-0 right-0 z-40 h-full w-[15%] bg-gradient-to-l to-transparent md:w-[20%]" />

          <Marquee>
            <div className="flex items-center justify-center gap-8 md:mb-14">
              {serviceCards.map((service, index) => (
                <div
                  key={service.id}
                  className={cn(
                    'min-w-[360px] min-h-[270px] bg-background-2 hover:bg-secondary dark:bg-background-5 hover:dark:bg-background-8 rounded-[20px] relative p-8 flex flex-col gap-y-8 z-0 overflow-hidden justify-between group transition-all duration-700 ease-in-out',
                    index === 0 && 'ml-8',
                  )}
                >
                  <figure className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 rotate-[-78deg] -right-[160%] -top-[210%] transition-all duration-1000 ease-in-out transform group-hover:scale-110 select-none pointer-events-none">
                    <Image
                      src={gradient28Img}
                      alt="review-bg"
                      className="w-full h-full object-cover"
                    />
                  </figure>

                  <div className="transition-all duration-700 ease-in-out transform group-hover:translate-y-[4px]">
                    <p className="group-hover:text-white text-secondary/60 dark:text-accent/60 text-lg mb-2 transition-colors duration-700 ease-in-out">
                      {service.label}
                    </p>
                    <h3 className="group-hover:text-ns-yellow text-secondary dark:text-accent transition-colors duration-700 ease-in-out">
                      {service.value}
                    </h3>
                  </div>

                  <p className="group-hover:text-accent/60 text-secondary/60 dark:text-accent/60 transition-all duration-700 ease-in-out transform group-hover:translate-y-[-6px] group-hover:opacity-90">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Highlights;
