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
    bgImage: '/images/workbot/home/card25.jpg',
    bgColor: 'rgb(5,5,7)',
    title: 'Firmware & Embedded Software Development',
    description:
      'Build reliable, high-performance firmware for devices, sensors, and hardware products.',
    impact:
      'Improves device stability by 90%+ and reduces failures by 70%.'
  },
  {
    id: 1,
    bgImage: '/images/workbot/home/card26.jpg',
    bgColor: 'rgb(5,5,7)',
    title: 'IoT Device Engineering & Connectivity',
    description:
      'Develop IoT-enabled embedded systems with secure cloud connectivity and real-time data exchange.',
    impact:
      'Enhances device communication efficiency by 3× and accelerates data access by 60%.'
  },
  {
    id: 2,
    bgImage: '/images/workbot/home/card27.jpg',
    bgColor: 'rgb(5,5,7)',
    title: 'Hardware–Software Integration',
    description:
      'Ensure seamless integration between custom hardware, drivers, and embedded applications.',
    impact:
      'Cuts integration issues by 80% and speeds up time-to-market by 40–50%.'
  },
  {
    id: 3,
    bgImage: '/images/workbot/home/card28.jpg',
    bgColor: 'rgb(5,5,7)',
    title: 'Real-Time Systems & Performance Optimization',
    description:
      'Optimize embedded systems for low-latency, real-time operation across mission-critical environments.',
    impact:
      'Achieves response times up to 10× faster and boosts overall system performance by 50–70%.'
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
                   <span className="px-5 py-2 rounded-full text-sm font-medium tracking-wider bg-primary-50 text-primary-600 border border-primary-600">Embedded Systems Development</span>
                </RevealAnimation>

                <div className="space-y-4 mt-6">
                  <RevealAnimation delay={0.2}>
                    <h1 className="text-[clamp(32px,4vw,64px)]  leading-[1.15] max-w-[900px] text-balance font-bold">
                    Building Intelligent, Connected & High-Performance Smart Products.
                    </h1>

                  </RevealAnimation>

                  <RevealAnimation delay={0.3}>
                    <p>
                      At <strong>Worksbot</strong>,we specialize in <strong>embedded systems development</strong> that powers the next generation of smart, connected, and efficient devices. From low-level firmware and real-time embedded applications to IoT device integration, our engineering teams deliver solutions that enable seamless hardware–software interaction and dependable product performance.
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
                            <div className="absolute inset-0 bg-black/50 to-transparent p-6 sm:p-4 lg:p-6 flex flex-col justify-between text-white z-10">
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