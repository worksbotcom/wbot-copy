import gradient5 from '@public/images/gradient/gradient-5.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import CTAV1 from '../shared/cta/CTAV_services';

const CTA = () => {
  return (
    <section className="py-[50px] md:py-20 lg:py-[100px]" aria-label="cta section wrapper">
      <div className="2xl:max-w-[1440px] xl:max-w-[1260px] lg:max-w-[980px] mx-auto xl:px-0 px-5">
        <RevealAnimation delay={0.1}>
          <div className="relative xl:px-20 md:px-10 px-6 bg-secondary dark:bg-background-8 rounded-[20px] overflow-hidden">
            
            {/* Background gradient image */}
            <RevealAnimation delay={0.1} offset={200}>
              <div className="absolute -z-0 left-7 -bottom-52 -translate-x-1/2 w-[600px] h-[600px] rotate-[120deg] select-none pointer-events-none">
                <figure>
                  <Image src={gradient5} alt="cta-bg" className="w-full h-full object-cover" />
                </figure>
              </div>
            </RevealAnimation>

            {/* CTA Content */}
            <CTAV1
              className="lg:py-[100px] py-[50px] md:py-20"
              headingClass="text-accent"
              descriptionClass="text-accent/60"
              
              /* Your new text */
              ctaHeading="Ready to build smart, connected embedded products?"
              description="Contact Us today to get started with Worksbot’s embedded engineering team."
              
              /* Button */
              ctaBtnText="Get started"

              /* REMOVED: badgeText, badgeClass, free trial, card style */
              badgeText=""
              badgeClass="hidden"

              /* Input & checklist styling kept if you want to use them */
              inputFieldClass="sm:w-auto flex-1 bg-accent/5 border-0 px-5 py-3 shadow-1 rounded-full min-h-[48px] h-12 placeholder:text-accent/40 placeholder:text-tagline-1 placeholder:font-normal focus:outline-none focus:border focus:border-primary-600 dark:focus:border-primary-400 text-accent font-normal w-[85%]"
              
            />
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default CTA;
