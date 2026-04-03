
import RevealAnimation from '../animation/RevealAnimation';

const Main = () => {
  return (
    <section className="pt-16 md:pt-20 lg:pt-[90px] xl:pt-[100px] pb-16 md:pb-20 lg:pb-[90px] xl:pb-[100px] bg-background-2 dark:bg-background-5">
      <div className="main-container">
        <div className="text-center space-y-4 md:space-y-5 max-w-[850px] mx-auto lg:mb-14 mb-10">
          <RevealAnimation delay={0.1}>
            <h1 className="font-bold text-center">
            Build the Future of <span className="text-primary-600">Work with AI</span>
            </h1>
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
      </div>
    </section>
  );
};

export default Main;
