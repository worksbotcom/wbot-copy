import dynamic from 'next/dynamic';
import RevealAnimation from '../animation/RevealAnimation';

// 1. DYNAMIC IMPORT DEFINITION (Correct)
const DynamicDisplacementImage = dynamic(
  () => import('@/components/about/DisplacementImage'),
  { 
    loading: () => <p>Loading detailed image viewer...</p>, 
    // ssr: false (optional)
  }
);

const VisionStatement = () => {
  return (
    <section className="pb-10 md:pb-12 lg:pb-14 xl:pb-2 pt-[120px]">
      <div className="main-container space-y-12 md:space-y-16 lg:space-y-[100px]">
        
        <div className="space-y-3 text-center max-w-[880px] mx-auto">
          <RevealAnimation delay={0.3}>
            <h2 className="font-medium">Who <span className="text-primary-600">We Are</span></h2>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <p>Worksbot is a global technology company committed to building intelligent, scalable, and automation-driven solutions for the digital age. With over 11 years of proven expertise, a team of 100+ skilled professionals, and a presence in 80+ countries, Worksbot has become a trusted partner for organizations seeking digital excellence. We help businesses harness the power of technology to automate operations, enhance workforce efficiency, and achieve sustainable growth in an increasingly connected world.
              </p>
          </RevealAnimation>
        </div>

        <article className="flex flex-col md:flex-row gap-8 justify-center">
          <RevealAnimation delay={0.5} instant={true}>
            
            {/* DISPLACEMENT IMAGE EFFECT HERE */}
            <figure className="rounded-[10px] overflow-hidden w-full md:w-[930px] h-[520px]">
              {/*  CORRECTED LINE: Use the dynamic component name */}
              <DynamicDisplacementImage
                image1="/images/workbot/home/about/About us.jpg" 
                image2="/images/workbot/home/about/Who We Are_Worksbot is a global technology company committed to building intelligent, scalable, and au.jpg" 
                displacement="/images/workbot/home/about/masks.jpg" 
              />
            </figure>

          </RevealAnimation>
        </article>
      </div>
    </section>
  );
};

export default VisionStatement;




