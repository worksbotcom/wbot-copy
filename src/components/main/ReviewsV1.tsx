'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import GradientOverlay from './GradientOverlay';

interface IndustriesV1Props {
  background?: string;
  sliderClassName?: string;
}

const industries = [
  'Banking & Financial Services',
  'Retail & E-Commerce',
  'Healthcare & Life Sciences',
  'Automotive & Mobility',
  'Telecommunications',
  'Manufacturing & Industry 4.0',
  'Logistics & Warehousing',
  'Education & eLearning',
  'IT & Technology Services',
  'Professional Services',
];

const IndustriesV1 = ({ background, sliderClassName }: IndustriesV1Props) => {
  return (
    <section
      className={cn(
        'relative pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px] bg-background-2'
        ,
      )}>
      <div className="main-container flex flex-col gap-[70px] max-[426px]:gap-10">
        <div className="flex flex-col items-center text-center">
          <RevealAnimation delay={0.1}>
            <h2 className="mx-auto mb-4 max-w-[750px] max-[426px]:mb-3 font-bold">
              The Industries Powered by Our Solutions.
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="max-[426px]:text-tagline-2 max-w-[490px] max-[426px]:max-w-[320px]">
              We partner with organizations across diverse industries, delivering tailored digital solutions that enhance efficiency, improve performance, and drive innovation.
            </p>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.3}>
          <div className="relative">
            <Swiper
              className="swiper reviews-swiper"
              spaceBetween={30}
              centeredSlides={true}
              loop={true}
              speed={1500}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 10 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
              }}
              modules={[Autoplay]}
              navigation={false}
              pagination={false}
              scrollbar={false}
            >
              <div className="swiper-wrapper">
                {industries.map((industry, index) => (
                  <SwiperSlide key={index} className="swiper-slide">
                    <div
                      className={cn(
                        'bg-background-2 dark:bg-background-5 relative z-0 mx-1 flex flex-col justify-center items-center overflow-hidden rounded-[20px] p-8 sm:mx-0 text-center h-full',
                        sliderClassName
                      )}
                    >
                      <GradientOverlay />
                      <p className="text-secondary dark:text-accent review-name text-lg leading-[1.5] font-medium">
                        {industry}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default IndustriesV1;
