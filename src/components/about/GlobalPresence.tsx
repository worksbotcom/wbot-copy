import avatar1Img from '@public/images/avatar/avatar-1.png';
import gradient6Img from '@public/images/gradient/gradient-6.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const Reviews = () => {
  return (
    <section className="max-lg:mt-12 overflow-hidden">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="flex flex-col items-center relative overflow-hidden bg-background-2 dark:bg-background-6 rounded-4xl py-[100px]">

            {/* gradient bg */}
            <RevealAnimation delay={0.2} direction="left" offset={100}>
              <div className="absolute select-none pointer-events-none -top-[90%] md:-top-[73%] lg:-top-[70%] -left-[65%] max-[376px]:-left-[76%] md:-left-[30%] lg:-left-[21%] xl:-left-[15%] rotate-[34deg] w-[500px] h-[600px]">
                <Image
                  src={gradient6Img}
                  alt="Decorative gradient background overlay"
                  className="w-full h-full object-cover"
                />
              </div>
            </RevealAnimation>

            <figure className="space-y-4 flex flex-col items-center justify-center">
              <Image
                src={avatar1Img}
                alt="Avatar"
                className="size-10 bg-ns-yellow ring-2 ring-white rounded-full object-cover"
              />
              <figcaption className="text-tagline-2 font-medium dark:text-accent">
                Global Presence
              </figcaption>
            </figure>

            <p className="mt-6 mb-4 text-xl max-w-[890px] text-center mx-auto max-sm:text-tagline-2 max-sm:px-2">
              With clients across 80+ countries, Worksbot has successfully established itself as a trusted technology partner for businesses worldwide. 
              Our global reach and diverse expertise enable us to understand market-specific challenges and deliver scalable, impactful solutions 
              that drive business success.
            </p>

            <strong className="text-lg leading-[1.5] font-medium dark:text-accent">
              Worksbot Global Team
            </strong>

          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Reviews;
