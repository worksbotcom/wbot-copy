"use client";

import gradient32Img from '@public/images/gradient/gradient-32.png';
import gradient33Img from '@public/images/gradient/gradient-33.png';
import gradient34Img from '@public/images/gradient/gradient-34.png';
import gradient9Img from '@public/images/gradient/gradient-9.png';
import step1Img from '@public/images/home-page-34/step-1.png';
import step2DarkImg from '@public/images/home-page-34/step-2-dark.png';
import step2Img from '@public/images/home-page-34/step-2.png';
import step3DarkImg from '@public/images/home-page-34/step-3-dark.png';
import step3Img from '@public/images/home-page-34/step-3.png';
import step4DarkImg from '@public/images/home-page-34/step-4-dark.png';
import step4Img from '@public/images/home-page-34/step-4.png';
import Image, { StaticImageData } from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import StackCardItem from '../ui/stack-card/StackCardItem';
import StackCardWrapper from '../ui/stack-card/StackCardWrapper';

interface StepCard {
  id: number;
  title: string;
  description: string;
  gradientSrc: StaticImageData;
  stepImg: StaticImageData;
  stepDarkImg?: StaticImageData;
  maxDescriptionWidth: string;
}

const stepCards: StepCard[] = [
  {
    id: 1,
    title: 'Deep Software Engineering Expertise',
    description: 'A decade of building mission-critical, scalable, intelligent software.',
    gradientSrc: gradient32Img,
    stepImg: step1Img,
    maxDescriptionWidth: 'max-w-[281px]',
  },
  {
    id: 2,
    title: 'AI-First Engineering Mindset',
    description: 'Integrating automation and intelligence into every product.',
    gradientSrc: gradient33Img,
    stepImg: step2Img,
    stepDarkImg: step2DarkImg,
    maxDescriptionWidth: 'max-w-[250px]',
  },
  {
    id: 3,
    title: 'Cloud-Ready, Future-Ready Systems',
    description: 'Modern architecture built for flexibility, security, and speed.',
    gradientSrc: gradient34Img,
    stepImg: step3Img,
    stepDarkImg: step3DarkImg,
    maxDescriptionWidth: 'max-w-[250px]',
  },
  {
    id: 4,
    title: 'Global Delivery Model',
    description: 'Engineering teams across the US, UK, Europe, India, and GCC.',
    gradientSrc: gradient9Img,
    stepImg: step4Img,
    stepDarkImg: step4DarkImg,
    maxDescriptionWidth: 'max-w-[280px]',
  },
  {
    id: 5,
    title: 'Transparent & Agile Execution',
    description: 'Predictable delivery with continuous communication.',
    gradientSrc: gradient33Img,
    stepImg: step2Img,
    stepDarkImg: step2DarkImg,
    maxDescriptionWidth: 'max-w-[250px]',
  },
  {
    id: 6,
    title: 'Security & Compliance Standards',
    description: 'GDPR, ISO, SOC, CCPA, OWASP practices.',
    gradientSrc: gradient34Img,
    stepImg: step3Img,
    stepDarkImg: step3DarkImg,
    maxDescriptionWidth: 'max-w-[250px]',
  },
];


const Steps = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section
        className="relative py-16 md:py-20 lg:py-[100px] bg-white"
        aria-label="Hero section">
        <div className="main-container">
          <div className="grid grid-cols-12 xl:gap-[60px] gap-y-14 items-start justify-items-center">
            <div className="col-span-12 lg:col-span-6 lg:sticky lg:top-28">
              <div className="md:space-y-14 space-y-10 lg:text-left text-center">
                <div className="space-y-3">
                  <RevealAnimation delay={0.1}>
                    <h2 className="xl:max-w-[479px] w-full xl:mx-0 mx-auto font-bold">Why Worksbot Is Your Ideal Innovation Partner</h2>
                  </RevealAnimation>
                  <RevealAnimation delay={0.2}>
                    <p>With a strong focus on innovation, agility, and technical mastery, Worksbot delivers solutions that help businesses operate smarter, grow faster, and stay ahead in a rapidly changing digital world.</p>
                  </RevealAnimation>
                </div>
                <RevealAnimation delay={0.3}>
                  <div>
                    <button
                      onClick={() => window.open("https://calendly.com/hsohtnas3/30min", "_blank")}
                      type="button"
                      className="btn btn-secondary  btn-md rounded-sm px-8 py-3"
                    >
                      Explore all features
                    </button>

                  </div>
                </RevealAnimation>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <StackCardWrapper
                topOffset="11vh"
                gap="24px"
                initDelay={100}
                className="sm:flex-1 flex-none w-full sm:order-1 order-2">
                {stepCards.map((step, index) => (
                  <RevealAnimation key={step.id} delay={0.4 + index * 0.1}>
                    <StackCardItem>
                      <div className="p-2 relative rounded-[20px] z-20 flex items-center justify-center sm:max-w-[483px] max-w-full sm:mx-0 mx-auto w-full overflow-hidden">
                        <figure className="absolute pointer-events-none -top-[99%] -left-[88%] size-[1000px] -z-10 rotate-[307deg] opacity-50 select-none">
                          <Image src={step.gradientSrc} alt="step" />
                        </figure>
                        <div className="relative z-10 p-8 rounded-[14px] sm:max-w-[467px] max-w-full w-full space-y-6 bg-white dark:bg-black">
                          <div className="space-y-1">
                            <p className="text-heading-5 text-secondary dark:text-accent">{step.title}</p>
                            <p className={`${step.maxDescriptionWidth} w-full`}>{step.description}</p>
                          </div>
                          <figure className="max-w-[385px] w-full rounded-2xl overflow-hidden">
                            {step.stepDarkImg ? (
                              <>
                                <Image
                                  src={step.stepImg}
                                  alt="step"
                                  className="dark:hidden block md:max-h-[300px] md:min-h-[300px]"
                                />
                                <Image
                                  src={step.stepDarkImg}
                                  alt="step"
                                  className="hidden dark:block md:max-h-[300px] md:min-h-[300px]"
                                />
                              </>
                            ) : (
                              <Image src={step.stepImg} alt="step" className="md:max-h-[300px] md:min-h-[300px]" />
                            )}
                          </figure>
                        </div>
                      </div>
                    </StackCardItem>
                  </RevealAnimation>
                ))}
              </StackCardWrapper>
            </div>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Steps;
