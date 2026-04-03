import selectUsReason from '@public/images/choosecareer.jpg';
import selectUsReasonDark from '@public/images/choosecareer.jpg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const featuresData = [
  {
    id: '1',
    icon: 'ns-shape-8',
    title: 'Build AI agents that perform real-world jobs ',
  },
  {
    id: '2',
    icon: 'ns-shape-12',
    title: 'Work on products used by startups and enterprises',
  },
  {
    id: '3',
    icon: 'ns-shape-14',
    title: 'Solve meaningful problems, not just write code ',
  },
  {
    id: '4',
    icon: 'ns-shape-16',
    title: 'Grow faster than traditional corporate environments ',
  },
];

const Choose = () => {
  return (
    <section className="pt-16 md:pt-20">
      <div className="main-container">
        <div className="grid grid-cols-12 items-center gap-y-16 lg:gap-20 xl:gap-[100px]">
          
          <div className="col-span-12 lg:col-span-6">
            <div className="mx-auto max-w-[500px] space-y-5 sm:space-y-8 lg:mx-0 lg:max-w-full">
              <div className="space-y-5">
                <RevealAnimation delay={0.1}>
                  <h1 className="text-[clamp(32px,4vw,64px)]  leading-[1.15] max-w-[900px] text-balance font-bold">Why <span>Worksbot</span></h1>
                </RevealAnimation>
                <div className="space-y-3">
                  <RevealAnimation delay={0.2}>
                    <h2>Work on What Truly Matters</h2>
                  </RevealAnimation>
                  <RevealAnimation delay={0.3}>
                    <p>
                     We believe the future belongs to <strong>automation, intelligence, and human creativity working together.</strong>
                    </p>
                  </RevealAnimation>
                </div>
              </div>
              <div>
                <p className='font-medium text-xl p-2'>At Worksbot, you’ll:</p>
                <ul className="space-y-1 sm:space-y-2">
                  {featuresData.map((item, index) => (
                    <RevealAnimation delay={0.4 + index * 0.1} key={item.id}>
                      <li className="flex items-center gap-4 p-2">
                        <span className={`${item.icon} text-secondary dark:text-accent text-[36px]`} />
                        <span className="text-tagline-1 text-secondary dark:text-accent font-medium">{item.title}</span>
                      </li>
                    </RevealAnimation>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <RevealAnimation delay={0.2} offset={100}>
              <figure className="mx-auto w-full max-w-[500px] lg:mx-0 lg:max-w-[669px]">
                <Image src={selectUsReason} alt="select-us-reason" className="size-full dark:hidden rounded-2xl" />
                <Image src={selectUsReasonDark} alt="select-us-reason" className="hidden size-full dark:block rounded-2xl" />
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
