'use client';

import Image from 'next/image';
import heroBg from '@public/images/home-page-19/hero-bg.svg';
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
    bgImage: '/images/workbot/home/card9.jpg',
    bgColor: 'rgb(5,5,7)',
    title: 'Manual Process Automation',
    description: 'Automate repetitive, rule-based tasks across departments.',
    impact: 'Reduces manual workload by 60–80% and eliminates 90%+ of human errors.'
  },
  {
    id: 1,
    bgImage: '/images/workbot/home/card10.jpg',
    bgColor: 'rgb(5,5,7)',
    title: 'Document & Data Processing',
    description: 'Use bots to extract, validate, and process information from invoices, forms, emails, and PDFs.',
    impact: 'Speeds processing by 3–5× and cuts operational costs by 50%.'
  },
  {
    id: 2,
    bgImage: '/images/workbot/home/card11.jpg',
    bgColor: 'rgb(5,5,7)',
    title: 'Workflow Orchestration & System Integration',
    description: 'Connect legacy systems, apps, and databases through automated workflows.',
    impact: 'Improves process efficiency by 40% and reduces turnaround time by 70%.'
  },
  {
    id: 3,
    bgImage: '/images/workbot/home/card12.jpg',
    bgColor: 'rgb(5,5,7)',
    title: 'Customer Service & Support Automation',
    description: 'Deploy digital workers for ticket triage, responses, routing, and backend updates.',
    impact: 'Decreases handling time by 50% and boosts customer satisfaction by 30–40%.'
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
                   <span className="px-5 py-2 rounded-full text-sm font-medium tracking-wider bg-primary-50 text-primary-600 border border-primary-600">Automation & RPA Solutions</span>
                </RevealAnimation>

                <div className="space-y-4 mt-6">
                  <RevealAnimation delay={0.2}>
                    <h1 className="text-[clamp(32px,4vw,64px)]  leading-[1.15] max-w-[900px] text-balance font-bold">
                        Driving Efficiency Through Intelligent <span className='whitespace-nowrap'>Workflow Automation.</span>
                    </h1>

                  </RevealAnimation>

                  <RevealAnimation delay={0.3}>
                    <p>
                      At <strong>Worksbot</strong>, we deliver <strong>Automation and RPA solutions</strong> that transform manual, repetitive tasks into efficient, intelligent workflows. Our solutions enable organizations to boost productivity, reduce operational costs, and eliminate human error through robotic process automation, workflow optimization, and AI-driven decision engines.
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
                                <p className="text-2xl leading-relaxed mb-4 text-white mt-6 md:mt-8 lg:mt-[25px]">
                                  {story.description}
                                </p>

                                {/* ✅ IMPACT */}
                                <div className="pt-3 border-t border-white mt-6 md:mt-6 lg:mt-[30px]">
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