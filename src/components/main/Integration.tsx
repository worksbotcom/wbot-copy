import {
  Brain,
  Image as ImageIcon,
  Smartphone,
  BarChart,
  Bot,
  Cloud,
  Code,
  Users,
  InfinityIcon,
  Cpu,
  ShieldCheck,
  Laptop,
  Server,
} from "lucide-react";



import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const logos = [
  { icon: Brain },
  { icon: ImageIcon },
  { icon: Smartphone },
  { icon: BarChart },
  { icon: Bot },
];

const logosRight = [
  { icon: Cloud },
  { icon: Code },
  { icon: Users },
  { icon: InfinityIcon },
];

const logosBottom = [
  { icon: Cpu },
  { icon: ShieldCheck },
  { icon: Laptop },
  { icon: Server },
  { icon: Brain },
];

const Integration = () => {
  return (
    <section className="pt-14 pb-24 md:pt-16 md:pb-24 lg:pt-[88px] lg:pb-[140px] xl:pt-[100px] xl:pb-[200px] ">
      <div className="main-container">
        <article className="flex flex-col gap-x-20 gap-y-20 lg:flex-row">
          <div className="w-full max-lg:text-center lg:w-1/2">

            <RevealAnimation delay={0.1}>
              <h2 className="mb-3 font-bold">
                Your Global Partner in
                <span className="text-primary-600 lg:block font-bold">AI & Software</span> Innovation
              </h2>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <p className="mb-8 lg:max-w-[596px]">
                Worksbot is an international software engineering company helping organizations modernize processes, unlock automation, and build future-ready digital products. With deep expertise in AI, cloud, DevOps, and enterprise application development, we blend innovation with engineering discipline to accelerate business growth.
              </p>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="mb-8 lg:max-w-[596px]">
                For more than a decade, we’ve partnered with enterprises, startups, and digital-first companies to deliver secure, scalable, and intelligent software solutions.
              </p>
            </RevealAnimation>

            <RevealAnimation delay={0.4}>
              <div>
                <LinkButton
                  href="/signup-01"
                  className="btn btn-secondary  btn-md rounded-sm mx-auto block w-[90%] md:mx-0 md:inline-block md:w-auto">
                  See it in action
                </LinkButton>
              </div>
            </RevealAnimation>

          </div>

          <RevealAnimation delay={0.5}>
            <div className="relative flex w-full flex-col items-center space-y-6 lg:w-1/2">

              <div className="from-background-2 dark:from-background-5 absolute top-0 left-0 z-40 h-full w-[15%] bg-gradient-to-r to-transparent md:w-[20%]" />
              <div className="from-background-2 dark:from-background-5 absolute top-0 right-0 z-40 h-full w-[15%] bg-gradient-to-l to-transparent md:w-[20%]" />

              {/* ROW 1 */}
              <Marquee autoFill speed={30}>
                <div className="flex items-center gap-x-6">
                  {logos.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <figure
                        key={idx}
                        className="dark:bg-background-7 flex size-12 items-center justify-center rounded-2xl bg-white p-3 first:ml-6 md:size-20 lg:size-24">
                        <Icon size={48} strokeWidth={1} />
                      </figure>
                    );
                  })}
                </div>
              </Marquee>

              {/* ROW 2 */}
              <Marquee autoFill direction="right" speed={30}>
                <div className="flex items-center gap-x-6">
                  {logosRight.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <figure
                        key={idx}
                        className="dark:bg-background-7 flex size-12 items-center justify-center rounded-2xl bg-white p-3 first:ml-6 md:size-20 lg:size-24">
                        <Icon size={48} strokeWidth={1}/>
                      </figure>
                    );
                  })}
                </div>
              </Marquee>

              {/* ROW 3 */}
              <Marquee autoFill speed={30}>
                <div className="flex items-center gap-x-6">
                  {logosBottom.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <figure
                        key={idx}
                        className="dark:bg-background-7 flex size-12 items-center justify-center rounded-2xl bg-white p-3 first:ml-6 md:size-20 lg:size-24">
                        <Icon size={48} strokeWidth={1} />
                      </figure>
                    );
                  })}
                </div>
              </Marquee>

            </div>
          </RevealAnimation>

        </article>
      </div>
    </section>
  );
};

Integration.displayName = 'Integration';
export default Integration;
