/* eslint-disable @typescript-eslint/no-explicit-any */
import RevealAnimation from '@/components/animation/RevealAnimation';
import ServiceCard from './ServiceCard';

export interface ServiceData {
  id: string;
  title: string;
  icon: any;
}

const servicesData: ServiceData[] = [
  {
    id: '1',
    title: 'AI Coders (Python, Java, Web Development) ',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={33}
        viewBox="0 0 32 33"
        fill="none"
        className="shrink-0"
        aria-hidden="true">
        <path
          d="M19.491 7.31881C20.85 7.8132 22.1253 8.60552 23.2155 9.69574C24.3057 10.786 25.098 12.0612 25.5924 13.4202M19.491 7.31881C22.9775 5.1998 25.9126 4.48815 27.1678 5.74341C28.4231 6.99866 27.7114 9.93374 25.5924 13.4202M19.491 7.31881C16.8228 6.34819 13.8318 6.52598 11.2839 7.8525M25.5924 13.4202C24.2027 15.7068 22.2076 18.2306 19.765 20.6732C18.7478 21.6903 17.7166 22.6299 16.6943 23.4804M25.5924 13.4202C26.563 16.0884 26.3852 19.0795 25.0587 21.6273M20.7191 25.9669C21.6198 25.498 22.4651 24.8855 23.2212 24.1294C23.9773 23.3733 24.5898 22.528 25.0587 21.6273M20.7191 25.9669C22.8521 26.9625 24.5718 27.1567 25.4102 26.3184C26.2485 25.48 26.0543 23.7604 25.0587 21.6273M20.7191 25.9669C19.4856 25.3912 18.1138 24.5474 16.6943 23.4804M20.7191 25.9669C18.1713 27.2934 15.1802 27.4712 12.512 26.5006M16.6943 23.4804C15.4184 22.5214 14.1039 21.3819 12.8166 20.0946C10.097 17.375 8.03753 14.5343 6.9443 12.1921M16.6943 23.4804C15.2616 24.6724 13.8464 25.6896 12.512 26.5006M6.41061 20.3992C6.90499 21.7582 7.69732 23.0335 8.78754 24.1237C9.87776 25.2139 11.153 26.0062 12.512 26.5006M6.41061 20.3992C4.2916 23.8857 3.57995 26.8208 4.8352 28.076C6.09046 29.3313 9.02554 28.6196 12.512 26.5006M6.41061 20.3992C5.43998 17.731 5.61778 14.74 6.9443 12.1921M6.9443 12.1921C5.94872 10.0591 5.7545 8.33943 6.59286 7.50107C7.43123 6.6627 9.15088 6.85692 11.2839 7.8525M6.9443 12.1921C7.41324 11.2914 8.02574 10.4461 8.78181 9.69002C9.53788 8.93395 10.3832 8.32145 11.2839 7.8525"
          stroke="#12161F"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: '2',
    title: 'AI HR Assistants ',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={33} height={34} viewBox="0 0 33 34" fill="none" aria-hidden="true">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32.5 17.9569H19.027L28.5538 27.4837L27.0735 28.964L17.5467 19.4373V32.9102H15.4533V19.4372L5.9264 28.964L4.44611 27.4837L13.973 17.9569H0.5V15.8634H13.9729L4.44611 6.33663L5.9264 4.85634L15.4533 14.3832V0.910156H17.5467V14.3831L27.0735 4.85634L28.5538 6.33663L19.027 15.8634H32.5V17.9569Z"
          stroke="#12161F"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: '3',
    title: 'AI Content Creators ',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={34} height={33} viewBox="0 0 34 33" fill="none" aria-hidden="true">
        <path
          d="M31.6278 16.967C31.6278 11.1905 28.268 6.19697 23.3921 3.82602M31.6278 16.967C30.8697 16.967 30.2548 17.5802 30.2548 18.3366C30.2548 19.0931 30.8693 19.7063 31.6274 19.7063C32.3855 19.7063 33 19.0931 33 18.3366C33 17.5802 32.3859 16.967 31.6278 16.967ZM23.3921 3.82602C23.0282 4.48962 22.1941 4.73338 21.529 4.3703C20.864 4.00722 20.6198 3.17492 20.9837 2.51132C21.3476 1.84771 22.1817 1.60409 22.8467 1.96718C23.5118 2.33026 23.7559 3.16242 23.3921 3.82602ZM16.9865 2.35732C10.0004 2.35732 4.15723 7.23952 2.69655 13.7711M2.60213 19.7063C3.88711 26.4656 9.83866 31.5766 16.9865 31.5766C22.179 31.5766 26.7402 28.8794 29.3396 24.8126M26.6223 17.3216C26.6223 22.8688 22.1156 27.3657 16.5564 27.3657C10.9971 27.3657 6.49049 22.8688 6.49049 17.3216C6.49049 13.0629 9.14662 9.42328 12.8961 7.96217M16.5564 7.27745C20.863 7.27745 24.5379 9.97613 25.9754 13.7711M3.70794 15.4217C3.53169 16.1574 2.7911 16.6112 2.0538 16.4354C1.31649 16.2595 0.861674 15.5205 1.03793 14.7848C1.21418 14.0491 1.95477 13.5952 2.69208 13.7711C3.42938 13.947 3.8842 14.6859 3.70794 15.4217ZM22.962 17.3216C22.962 20.8516 20.0941 23.7133 16.5564 23.7133C13.0187 23.7133 10.1508 20.8516 10.1508 17.3216C10.1508 13.7915 13.0187 10.9299 16.5564 10.9299C20.0941 10.9299 22.962 13.7915 22.962 17.3216Z"
          stroke="#12161F"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: '4',
    title: 'AI Chatbots & Automation Systems',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={35} height={33} viewBox="0 0 35 33" fill="none" aria-hidden="true">
        <path
          d="M1 12.9102C3.2 23.5768 5.4 23.5768 7.6 12.9102C9.8 23.5768 12 23.5768 14.2 12.9102C16.4 23.5768 18.6 23.5768 20.8 12.9102C23 23.5768 25.2 23.5768 27.4 12.9102C29.6 23.5768 31.8 23.5768 34 12.9102"
          stroke="#12161F"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },

];

const Build = () => {
  return (
    <section className="relative w-full overflow-hidden pt-14 pb-30 xl:pt-28 xl:pb-31">
      <div className="main-container">
              
        {/* 🔹 Heading Section */}
        <div className="mb-12 text-center max-w-3xl mx-auto md:mb-16">
          <RevealAnimation delay={0.1}>
            <h1 className="text-[clamp(32px,4vw,56px)] leading-tight font-bold tracking-tight">
              What We Build
            </h1>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <h2 className="mt-4 text-lg md:text-xl text-gray-600 leading-relaxed">
              Worksbot is an all-in-one AI platform that enables:
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <p className="mt-4 text-sm md:text-base text-gray-500 leading-relaxed">
              We’re redefining how work gets done and you can be part of it.
            </p>
          </RevealAnimation>
        </div>

        <div className="space-y-12 lg:space-y-19">
          <div
            className="grid w-full grid-cols-12  items-stretch  justify-center gap-3"
            aria-label="NextSaaS service features">
            {servicesData.map((service, index) => (
              <RevealAnimation delay={0.4 + index * 0.1} key={service.id}>
                <ServiceCard service={service} index={index} />
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Build.displayName = 'Services';
export default Build;
