import featureAsset1 from '@public/images/ns-img-67.png';
import featureAsset2 from '@public/images/ns-img-68.png';
import featureAsset3 from '@public/images/ns-img-69.png';
import featureAsset4 from '@public/images/ns-img-70.png';
import featureAsset5 from '@public/images/ns-img-71.png';
import featureAsset6 from '@public/images/ns-img-72.png';
import featureAssetDark1 from '@public/images/ns-img-dark-44.png';
import featureAssetDark2 from '@public/images/ns-img-dark-45.png';
import featureAssetDark3 from '@public/images/ns-img-dark-46.png';
import featureAssetDark4 from '@public/images/ns-img-dark-47.png';
import featureAssetDark5 from '@public/images/ns-img-dark-48.png';
import featureAssetDark6 from '@public/images/ns-img-dark-49.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const data = [
  {
    id: 1,
    title: 'Competitive salary packages',
    description: 'Get rewarded with a competitive salary package that grows with your impact and performance',
    lightImage: featureAsset1,
    darkImage: featureAssetDark1,
  },
  {
    id: 2,
    title: 'Learning & development support',
    description: 'Our support empower employees with guidance needed to achieve long-term career success',
    lightImage: featureAsset2,
    darkImage: featureAssetDark2,
  },
  {
    id: 3,
    title: 'Opportunity to work on cutting-edge AI',
    description: 'Work with advanced AI technologies and contribute to innovative solutions',
    lightImage: featureAsset3,
    darkImage: featureAssetDark3,
  },
  {
    id: 4,
    title: 'Recognition & performance rewards',
    description: 'Fast-track your career by taking on impactful roles and growing alongside a rapidly scaling startup.',
    lightImage: featureAsset4,
    darkImage: featureAssetDark4,
  },
  {
    id: 5,
    title: 'Career acceleration in a high-growth startup ',
    description: 'Get recognized and rewarded for your performance and achievements.',
    lightImage: featureAsset5,
    darkImage: featureAssetDark5,
  },
  // {
  //   id: 6,
  //   title: 'Investment portfolio tracking',
  //   description: 'Lorem ipsum dolor sit amet consectetur. quis sed duis duis purus quisque.',
  //   lightImage: featureAsset6,
  //   darkImage: featureAssetDark6,
  // },
];

const Growth = () => {
  return (
    <section className="dark:bg-background-6 bg-white py-[100px] xl:py-[200px]">
      <div className="main-container">
        <div className="mb-8 text-center md:mb-[52px]">
         <RevealAnimation delay={0.1}>
            <h1 className="text-[clamp(32px,4vw,56px)] leading-tight font-bold tracking-tight">
             Growth & Benefits
            </h1>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>
            More Than Just a Job
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p>We invest in your growth:</p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item, index) => (
            <RevealAnimation key={item.id} delay={0.3 + index * 0.1}>
              <div className="bg-background-2 dark:bg-background-5 space-y-6 rounded-[20px] p-6">
                <figure>
                  <Image
                    src={item.lightImage}
                    alt="feature"
                    className="block h-full w-full rounded-2xl object-cover dark:hidden"
                  />
                  <Image
                    src={item.darkImage}
                    alt="feature"
                    className="hidden h-full w-full rounded-2xl object-cover dark:block"
                  />
                </figure>
                <div>
                  <h3 className="text-heading-6 sm:text-heading-5 mb-1 font-normal sm:mb-3">{item.title}</h3>
                  <p className="mb-2">{item.description}</p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Growth;
