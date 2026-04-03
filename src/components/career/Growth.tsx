import RevealAnimation from '../animation/RevealAnimation';
import OperationCards from './OperationCards';

const Benefits = () => {
  return (
    <section className="pt-20">
      <div className="main-container">
        <div className="mx-auto mb-14 max-w-[660px] space-y-3 text-center md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <h1 className='font-bold whitespace-nowrap'>Growth <span className='text-primary-600'>and Benefits</span></h1>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className='text-2xl text-gray-900'>
              More than just a Job
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className='text-4xl text-gray-900'>We Invest On Your Growth</p>
          </RevealAnimation>
        </div>
        <div className="main-container">
                <div className="space-y-[70px]">
                  {/* finance and operation  */}
                  <div className="space-y-3">
                  </div>
                  {/* operation cards  */}
                  <OperationCards />
                </div>
        </div>
      </div>
    </section>
  );
};

Benefits.displayName = 'Benefits';
export default Benefits;
