import learnBanner from '@public/images/aicareer.jpg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';


const OurMission = () => {
  return (
    <section className="pt-[170px] pb-[100px] md:pb-[200px] xl:pt-[200px]">
      <div className="main-container">
        <div className="flex flex-col items-center gap-y-14 lg:flex-row lg:gap-[100px]">
               <div className="flex-1">
            <RevealAnimation delay={0.3}>
              <figure className="w-full max-w-[596px] overflow-hidden rounded-[20px] opacity-0">
                <Image src={learnBanner} className="h-full w-full object-cover" alt="learn banner" />
              </figure>
            </RevealAnimation>
          </div>
          <div className="mx-auto max-w-[540px] flex-1 space-y-14 text-center lg:mx-0 lg:max-w-full lg:text-left">
            <div className="space-y-3">
              <RevealAnimation delay={0.1}>
                <h1 className="text-[clamp(32px,4vw,64px)]  leading-[1.15] max-w-[900px] text-balance font-bold">Our <span>Mission</span></h1>
              </RevealAnimation>
              <RevealAnimation delay={0.1}>
                <h2>Powering the Next Generation of Work</h2>
              </RevealAnimation>
               <RevealAnimation delay={0.2}>
                <p className='font-bold'>
              Our mission is simple:
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <p>
                 To build intelligent AI systems that can perform real-world roles and empower businesses globally.
                If you’re excited about <strong>AI, automation, and building something meaningful</strong>, Worksbot is your place.
                </p>
              </RevealAnimation>
            </div>
          </div>
       
        </div>
      </div>
    </section>
  );
};

export default OurMission;
