import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const OurMission = () => {
  return (
    <section className="pt-14 md:pt-16 lg:pt-[10px] xl:pt-[100px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px] overflow-hidden">
      <div className="main-container">
        <div className="grid grid-cols-12 lg:gap-x-0 xl:gap-x-28 gap-y-12 items-center">
          <div className="col-span-12 lg:col-span-6">
            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <span className="badge badge-cyan mb-5">What We Do</span>
              </RevealAnimation>

              <RevealAnimation delay={0.3}>
                <h2>
                  At Worksbot, we focus on delivering end-to-end technology solutions that combine intelligence,
                  automation, and innovation. Our core offerings include
                </h2>
              </RevealAnimation>

              <RevealAnimation delay={0.4}>
                <p>
                  <strong>Software Development</strong>: Designing and developing high-performance software systems
                  tailored to meet complex business needs.
                  <br />
                  <strong>Robotic Process Automation (RPA)</strong>: Streamlining repetitive workflows through
                  AI-powered automation tools.
                  <br />
                  <strong>Recruitment Process Outsourcing (RPO)</strong>: Enabling companies to scale efficiently with
                  data-driven recruitment and workforce management solutions.
                </p>
              </RevealAnimation>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <div>
              <figure className="relative w-full"> 
                <RevealAnimation delay={0.4}>
                  <div className="w-full">
                    <Image
                      src="/images/workbot/home/about/about9.jpg"
                      alt="features"
                      className="transform md:-translate-x-1 lg:translate-x-14 transition-transform duration-300"
                      width={1100}
                      height={900}
                    />
                  </div>
                </RevealAnimation>
              </figure>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurMission;