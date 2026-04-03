//press client

import RevealAnimation from '../animation/RevealAnimation';
import { PiCodeBold } from "react-icons/pi";
import { SiGoogleassistant } from "react-icons/si";
import { MdContentPasteSearch } from "react-icons/md";
import { BsChatRightTextFill } from "react-icons/bs";

const Build = () => {
  return (
    <section>
      <div className="main-container">
    <section className="pt-[100px]  lg:pt-[140px]  xl:pt-[170px] ">
      <div className="main-container">
        <div className="text-center">
          <div className="mt-5 mb-14 space-y-4 text-center">
            <RevealAnimation delay={0.2}>
              <h1 className="font-bold">
               What We <span className="text-primary-500">Build</span>
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>
                Creating the AI Workforce of Tomorrow
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
                <div className='text-2xl font-medium'>Worksbot is an all-in-one <span className='text-primary-600'>AI platform that enables:</span></div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
     <div className="grid grid-cols-16 items-stretch gap-2">
          <RevealAnimation delay={0.1}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="items-center justify-center rounded-[20px] bg-white px-10 py-14 sm:px-14 sm:py-20 md:px-23 md:py-32 border-2 border-primary-600">
                <PiCodeBold size={60}/>
                  <div className='text-center text-2xl font-semibold'>AI CODERS</div>
                  <p className='p-1'>Python,Java,Web Development</p>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="items-center justify-center rounded-[20px] bg-white px-10 py-14 sm:px-14 sm:py-20 md:px-23 md:py-32 border-2 border-primary-600">
             <SiGoogleassistant size={60}/>
                <div className='text-center text-2xl font-semibold'>AI HR ASSISTANTS</div>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="items-center justify-center rounded-[20px] bg-white px-10 py-14 sm:px-14 sm:py-20 md:px-23 md:py-32 border-2 border-primary-600">
              <MdContentPasteSearch size={60}/>
               <div className='text-center text-2xl font-semibold'>AI CONTENT CREATORS</div>
              </div>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="items-center justify-center rounded-[20px] bg-white px-10 py-14 sm:px-14 sm:py-20 md:px-23 md:py-32 border-2 border-primary-600">
           <BsChatRightTextFill size={60}/>
           <div className='text-center text-2xl font-semibold'>AI Chatbots & Automation Systems </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
        <div className="mt-5 mb-14 space-y-4 text-center">
            <RevealAnimation delay={0.2}>
              <div className='text-2xl'>
               We’re redefining how work gets done  - <span className="text-primary-500">and you can be part of it.</span>
              </div>
            </RevealAnimation>
          </div>
      </div>
    </section>
  );
};

Build.displayName = 'Build';
export default Build;
