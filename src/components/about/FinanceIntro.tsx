import { CheckIcon } from '@/icons';
import roundImageImg from '@public/images/workbot/home/about/about.our.jpg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';


const principles = [
  { id: 1, label: 'Innovation First – Harnessing AI, automation, and digital technologies.' },
  { id: 2, label: 'Quality Assurance – Delivering excellence and reliability in every solution.' },
  { id: 3, label: 'Client-Centric Focus – Building long-term, value-driven partnerships.' },
];

const FinanceIntro = () => {
  return (
    <section className="py-12 md:py-32 lg:py-40 xl:py-48 2xl:py-[200px] overflow-hidden">
      <div className="main-container flex flex-col-reverse lg:flex-row items-center gap-y-12 gap-x-24">

        {/* LEFT IMAGE SECTION */}
        <div className="md:flex-1 relative flex justify-start w-full lg:w-auto overflow-hidden">
          <RevealAnimation delay={0.2}>
            <Image src={roundImageImg} alt="Finance Hero" className="w-full max-w-[450px] h-auto" />
          </RevealAnimation>
        </div>

        {/* RIGHT CONTENT SECTION */}
        <div className="md:flex-1 flex flex-col lg:items-start lg:text-left">
          <RevealAnimation delay={0.2}>
            <h2 className="mb-3">Our Approach</h2>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <p className="mb-6">
              We believe in an approach that blends innovation, intelligence, and impact.
              Every solution is built with precision, creativity, and business focus to deliver measurable outcomes.
              Our approach is defined by
            </p>
          </RevealAnimation>

          {/* THREE POINTS */}
          <ul className="mb-10 md:mb-14 space-y-2 md:space-y-3.5">
            {principles.map((item) => (
              <RevealAnimation key={item.id} delay={0.3}>
                <li className="text-tagline-1 font-medium flex items-start gap-3 leading-relaxed dark:text-accent">
                  <span className="bg-secondary dark:bg-accent/10 rounded-full size-[18px] flex items-center justify-center">
                    <CheckIcon />
                  </span>
                  {item.label}
                </li>
              </RevealAnimation>
            ))}
          </ul>

        </div>

      </div>
    </section>
  );
};

export default FinanceIntro;
