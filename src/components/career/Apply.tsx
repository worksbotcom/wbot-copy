import RevealAnimation from '../animation/RevealAnimation';


const Apply = () => {
  return (
    <section className="pb-[10px] md:pb-[20px]">
      <div className="main-container">
        <div className="flex flex-col items-center gap-y-14 lg:flex-row lg:gap-[100px] bg-primary-100 rounded-2xl p-10">
    
          <div className="mx-auto max-w-[540px] flex-1 space-y-14 text-center lg:mx-0 lg:max-w-full lg:text-left">
            <div className="space-y-3">
              <RevealAnimation delay={0.1}>
                <h1><span className='text-primary-600 font-bold'>APPLY</span></h1>
              </RevealAnimation>
              <RevealAnimation delay={0.1}>
                <h2>Ready to Build the Future?</h2>
              </RevealAnimation>
               <RevealAnimation delay={0.1}>
                <p>We’re always looking for passionate individuals who want to make an impact.</p>
              </RevealAnimation>
            </div>
          </div>
                  <div className="flex-1">
            <RevealAnimation delay={0.3}>
            <div className="font-medium text-center text-sm sm:text-base md:text-lg px-4">
                Apply now or send your profile to:
                <br className="block sm:hidden" />

                <strong className="block sm:inline-block mt-2 sm:mt-0 sm:ml-2 border-2 bg-white px-3 py-1 rounded text-sm sm:text-base break-all">
                    careers@worksbot.com
                </strong>
                </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apply;
