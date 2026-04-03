'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import GradientOverlay from './GradientOverlay';

interface ReviewsV1Props {
  background?: string;
  badgeColor?: string;
  btnClassName?: string;
  buttonLink?: string;
  sliderClassName?: string;
  badgeText?: string;
}

const industries = [
  {
    id: 1,
    name: "Automobile",
    position: "Driving digital transformation in manufacturing and mobility.",
    avatar: "/images/industries/auto.png",
  },
  {
    id: 2,
    name: "Semiconductor",
    position: "Innovating in chip design and engineering systems.",
    avatar: "/images/industries/semiconductor.png",
  },
  {
    id: 3,
    name: "Healthcare",
    position: "Powering secure, data-driven healthcare platforms.",
    avatar: "/images/industries/healthcare.png",
  },
  {
    id: 4,
    name: "Fintech",
    position: "Revolutionizing financial operations with smart software and automation.",
    avatar: "/images/industries/fintech.png",
  },
  {
    id: 5,
    name: "Information Technology",
    position: "Delivering robust and adaptive IT solutions.",
    avatar: "/images/industries/it.png",
  },
  {
    id: 6,
    name: "Engineering & Electronics",
    position: "Supporting product innovation through intelligent systems and automation.",
    avatar: "/images/industries/electronics.png",
  },
];

const ReviewsV1 = ({
  background,
  badgeColor,
  btnClassName,
  buttonLink,
  sliderClassName,
  badgeText,
}: ReviewsV1Props) => {
  return (
    <section
     
        className={cn(
  'relative pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px] bg-[#f8f6f2]',
)}
    >
      <div className="main-container flex flex-col gap-[70px] max-[426px]:gap-10">
        
        {/* Heading */}
        <div className="flex flex-col items-center text-center">

          {/* 👇 Removed badgeText completely */}

          <RevealAnimation delay={0.2}>
            <h2 className="mx-auto mb-4 max-w-[750px] max-[426px]:mb-3">
              Industries We Serve
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <p className="max-[426px]:text-tagline-2 max-w-[490px] max-[426px]:max-w-[320px]">
              "Our versatile expertise spans across key sectors, enabling us to provide domain-specific, future-ready solutions."
            </p>
          </RevealAnimation>
        </div>

        {/* Slider */}
        <RevealAnimation delay={0.4}>
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
            >
              <div className="swiper-wrapper">
                {industries.map((review) => (
                  <SwiperSlide key={review.id} className="swiper-slide">
                    <div
                      className={cn(
                        'bg-background-2 dark:bg-background-5 relative z-0 mx-1 flex flex-col gap-y-6 overflow-hidden rounded-[20px] p-8 sm:mx-0 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl',
                        sliderClassName,
                      )}
                    >
                      <GradientOverlay />

                      {/* Icon */}
                      <figure className="relative inline-block size-16 overflow-hidden rounded-full bg-linear-[156deg,_#FFF_32.92%,_#83E7EE_91%] ring-4 ring-white dark:ring-background-5">
                        <Image
                          src={review.avatar}
                          height={100}
                          width={100}
                          quality={100}
                          alt={review.name}
                          className="max-w-full object-cover"
                        />
                      </figure>

                      {/* Text */}
                      <p className="text-secondary/60 dark:text-accent/60 line-clamp-3 review-text text-[15px]">
                        {review.position}
                      </p>

                      <p className="text-secondary dark:text-accent review-name text-xl font-semibold">
                        {review.name}
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

export default ReviewsV1;
