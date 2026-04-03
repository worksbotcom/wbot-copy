import bannerImage from '@public/images/careerpicture.png';
import RevealAnimation from '../animation/RevealAnimation';
import Image from 'next/image';

const Main = () => {
  return (
    <section className="pt-32 pb-[100px] sm:pt-36 md:pt-42 xl:pt-[180px] xl:pb-[100px]">
      <div className="main-container">
        <div className="text-center space-y-4 md:space-y-5 max-w-[850px] mx-auto lg:mb-14 mb-10 px-4">
        <RevealAnimation delay={0.1}>
          <div className="flex justify-center">
            <h1 className="text-[clamp(28px,5vw,64px)] leading-[1.1] font-bold text-center text-balance whitespace-normal lg:whitespace-nowrap max-w-fit">
              Build the Future of <span>Work with AI</span>
            </h1>
          </div>
        </RevealAnimation>
          <div>
            <RevealAnimation delay={0.2}>
              <p className="mb-3 text-2xl text-gray-900">At Worksbot, we’re not just building software — we’re creating AI-powered workforces that transform how businesses operate.</p>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="max-w-[520px] mx-auto">
               Join a team where innovation meets real-world impact.
              </p>
            </RevealAnimation>
          </div>
          
        </div>
          <RevealAnimation delay={0.4}>
          <figure className="mb-18">
            <Image src={bannerImage} alt="banner-image" className="rounded-2xl" />
          </figure>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Main;
