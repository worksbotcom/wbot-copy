'use client';

import Image from 'next/image';
import heroBg from '@public/images/home-page-19/hero-bg.svg';
import LinkButton from '../ui/button/LinkButton';
import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';


interface Story {
  id: number;
  bgImage: string;
  bgColor: string;
  title: string;
  description: string;
  impact: string;
}

const stories: Story[] = [
  {
    id: 0,
    bgImage: '/images/workbot/home/card37.jpg',
    bgColor: 'rgb(5,5,7)',
    title: 'RTL Design & IP Development',
    description:
      'Create high-performance, low-power digital designs and reusable IP blocks.',
    impact:
      'Improves design efficiency by 40–60% and reduces power consumption by 20–30%.'
  },
  {
    id: 1,
    bgImage: '/images/workbot/home/card38.jpg',
    bgColor: 'rgb(5,5,7)',
    title: 'Functional Verification & Validation',
    description:
      'Use simulation, UVM, formal methods, and coverage-driven verification to ensure design correctness.',
    impact:
      'Cuts silicon bugs by 70–90% and accelerates tape-out readiness by 2×.'
  },
  {
    id: 2,
    bgImage: '/images/workbot/home/card39.jpg',
    bgColor: 'rgb(5,5,7)',
    title: 'Physical Design & Timing Optimization',
    description:
      'Optimize placement, routing, timing closure, and DRC/LVS compliance for advanced nodes.',
    impact:
      'Enhances performance by 30% and reduces physical design cycles by 50%.'
  },
  {
    id: 3,
    bgImage: '/images/workbot/home/card40.jpg',
    bgColor: 'rgb(5,5,7)',
    title: 'Emulation, Prototyping & Post-Silicon Testing',
    description:
      'Validate chips using FPGA prototypes, emulators, and lab-based testing.',
    impact:
      'Shortens debug time by 3× and increases first-pass silicon success by 40–50%.'
  },
];



const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cardWidth = 360;
  const gap = 20;
  const prevPeek = 0.13 * cardWidth;
  const nextPeek = 0.13 * cardWidth;

  return (
    <section className="pt-[115px] pb-[97px] overflow-hidden">
      <div className="max-w-[1365px] mx-auto">
        <div className="relative">

          {/* Hero background */}
          <figure className="absolute animate-pulse z-0 max-w-[1365px] -top-5 left-[50%] translate-x-[-50%] w-full h-full overflow-hidden">
            <Image src={heroBg} alt="Decorative background pattern" className="size-full object-cover" />
          </figure>

          <div className="main-container">
            <div className="flex items-start gap-12 xl:gap-0 flex-col lg:flex-row justify-between pt-4 lg:pt-[120px] xl:pt-[42px] pb-[110px]">

              {/* LEFT HERO CONTENT */}
              <div className="lg:max-w-[590px] xl:max-w-[629px] w-full space-y-5 lg:space-y-6 text-center md:text-left">
                <RevealAnimation delay={0.1}>
                   <span className="px-5 py-2 rounded-full text-sm font-medium tracking-wider bg-primary-50 text-primary-600 border border-primary-600">Semiconductor Design & Verification</span>
                </RevealAnimation>

                <div className="space-y-4 mt-6">
                  <RevealAnimation delay={0.2}>
                    <h1 className="text-[clamp(32px,4vw,64px)]  leading-[1.15] max-w-[900px] text-balance font-bold">
                   Powering Next-Generation Chip Innovation.
                    </h1>

                  </RevealAnimation>

                  <RevealAnimation delay={0.3}>
                    <p>
                      At <strong>Worksbot</strong>,we provide end-to-end <strong>semiconductor design and verification</strong> services that enable companies to develop high-performance, reliable, and energy-efficient chips. From RTL development and design verification to post-silicon validation, our engineers ensure every stage of the chip development lifecycle meets the highest standards of quality and precision.
                    </p>
                  </RevealAnimation>
                </div>

                <RevealAnimation delay={0.1} className="w-full md:w-auto lg:-mt-2">
                  <button
                    onClick={() => window.open("https://calendly.com/hsohtnas3/30min", "_blank")}
                    type="button"
                    className="btn btn-secondary btn-md rounded-sm w-[90%] md:w-auto"
                  >
                    <span>Book a strategy call</span>
                  </button>
                </RevealAnimation>
              </div>

              {/* RIGHT SLIDER — SWIPER */}
              <div className="relative mt-14 lg:mt-2 w-full lg:w-auto flex justify-center xl:-translate-x-0">
                <RevealAnimation delay={0.2}>
                  <div
                    className="relative overflow-hidden"
                    style={{
                      width: `${cardWidth + gap + prevPeek + nextPeek}px`,
                      height: '540px',
                    }}
                  >
                    <Swiper
                      modules={[Autoplay]}
                      slidesPerView="auto"
                      spaceBetween={15}
                      centeredSlides={true}
                      loop={true}
                      initialSlide={0}
                      autoplay={{ delay: 3500 }}
                      onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
                      className="w-full h-full rounded-xl"
                    >
                      {stories.map((story) => (
                        <SwiperSlide
                          key={story.id}
                          className="flex justify-center "
                          style={{ width: `${cardWidth}px` }}
                        >
                          <div
                            className="rounded-xl overflow-hidden shadow-lg relative transition-transform duration-500 ease-in-out"
                            style={{
                              height: '540px',
                              backgroundImage: `url(${story.bgImage})`,
                              backgroundColor: story.bgColor,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              transform: `scale(${story.id === currentSlide ? 1 : 0.92})`,
                            }}
                          >
                            <div className="absolute inset-0 bg-black/50 p-6 sm:p-4 lg:p-6 flex flex-col justify-between text-white z-10">
                              <div>
                                {/* ✅ TITLE */}
                                <h1 className="text-3xl font-bold mb-3 text-white uppercase mt-10 md:mt-15 lg:mt-[40px]">
                                  {story.title}
                                </h1>

                                {/* ✅ DESCRIPTION */}
                                <p className="text-2xl leading-relaxed mb-4 text-white mt-4 md:mt-6 lg:mt-[10px]">
                                  {story.description}
                                </p>

                                {/* ✅ IMPACT */}
                                <div className="pt-3 border-t border-white mt-6 md:mt-6 lg:mt-[20px]">
                                  <p className="text-xl font-medium text-white">
                                    {story.impact}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>

                  </div>
                </RevealAnimation>
                {/* DOTS BELOW (Custom Pagination) */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                  {stories.map((_, index) => (
                    <RevealAnimation key={index} delay={0.1 + index * 0.1}>
                      <button
                        className={`rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-black w-8' : 'bg-gray-400 w-3'
                          }`}
                        style={{ height: '12px' }}
                      />
                    </RevealAnimation>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;