'use client'
import RevealAnimation from '../animation/RevealAnimation';


const CTA = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="md:py-16 py-20 lg:py-[76px] bg-secondary dark:bg-background-6">
        <div className="main-container">
          <div className="text-center">
            <RevealAnimation delay={0.1}>
              <h2 className="mb-3 text-white font-bold">Ready to Transform Your Business with Intelligent Software?</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="mb-6 text-white/60">
                Let’s build software that drives growth, efficiency, and innovation.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <div className="text-center">
                <button
                  onClick={() => window.open("https://calendly.com/hsohtnas3/30min", "_blank")}
                  type="button"
                  className="btn btn-secondary  btn-md rounded-sm px-8 py-3">
                  Talk to an Expert
                </button>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default CTA;
