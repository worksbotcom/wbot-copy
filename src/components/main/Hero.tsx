"use client";

import RevealAnimation from "../animation/RevealAnimation";
import { projectAchievements } from "@/data/achievements";
import OurAchievements from "../shared/OurAchievement";
import { BackgroundRippleEffect } from "./background";
import TickerCardsComponent from "./TickerCards";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-[20px] sm:pt-[20px] md:pt-[40px] pb-[40px] lg:pb-[80px] 2xl:pt-[120px]">

      {/*  RIPPLE GRID BACKGROUND */}
      <div className="absolute inset-0 z-1">
        <BackgroundRippleEffect />
      </div>

      {/*  CONTENT LAYER */}
      <div className="relative z-3 main-container">
        <div className="grid grid-cols-12 items-center gap-6 sm:gap-8 lg:gap-10">

          {/*  LEFT CONTENT */}
          <div className="col-span-12 xl:col-span-6 -mt-6 sm:mt-4 lg:mt-6 xl:mt-8">
            <div className="relative z-[1] text-center xl:text-left">

              <RevealAnimation delay={0.1}>
                <span className="px-3 py-1.5 text-[11px] sm:px-4 sm:py-2 sm:text-sm md:px-5 md:py-2 rounded-full font-medium tracking-wide bg-primary-50 text-primary-600 border border-primarye-600 text-center">
                  AI. Cloud. Automation. Enterprise Software
                </span>
              </RevealAnimation>

              <div className="mx-auto mt-5 mb-10 max-w-full sm:max-w-[600px] xl:mx-0 xl:max-w-full space-y-4 px-3 sm:px-0">

                <RevealAnimation delay={0.2}>
                  <h1 className="font-bold">Building the Future of Digital Intelligence.</h1>
                </RevealAnimation>

                <RevealAnimation delay={0.3}>
                  <p>
                    Worksbot transforms businesses with intelligent, scalable,
                    and secure digital solutions.
                  </p>
                </RevealAnimation>

                <RevealAnimation delay={0.4}>
                  <p>Let’s build your next breakthrough.</p>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.4}>
                 <div className="mx-auto mt-2 mb-6 sm:mb-8 lg:mb-12 xl:mx-0">
                  <button
                    onClick={() => window.open("https://calendly.com/hsohtnas3/30min", "_blank")}
                    type="button"
                    className="btn btn-secondary btn-md rounded-sm px-8 py-4"
                  >
                    <span>Start Your Digital Journey</span>
                  </button>
                </div>
              </RevealAnimation>

            </div>
          </div>

          {/* RIGHT SIDE - TICKER CARDS  */}
          <div className="relative z-[1] col-span-12 xl:col-span-6 -mt-5 xl:mt-0 h-[600px] sm:h-[640px] w-full max-w-full overflow-hidden">
            <TickerCardsComponent />
          </div>

        </div>

        {/*  ACHIEVEMENTS */}
        <RevealAnimation delay={0.6}>
          <div className="mt-20">
            <OurAchievements achievements={projectAchievements} />
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

Hero.displayName = "Hero";
export default Hero;
