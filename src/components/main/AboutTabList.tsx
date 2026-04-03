import Tab from '../ui/tab/Tab';
import TabList from '../ui/tab/TabList';
import RevealAnimation from '../animation/RevealAnimation';

const AboutTabList = () => {
  return (
    <>
      {/*  TITLE + DESCRIPTION WITH REVEAL ANIMATION */}
      <div className="mb-10 text-center ">
        <RevealAnimation>
          <h2 className="mb-3 font-bold">
                 What&nbsp;<span className="text-primary-600">We Do</span>
              </h2>
        </RevealAnimation>

        <RevealAnimation delay={0.1}>
          <p className="text-gray-600 text-base md:text-lg max-w-4xl mx-auto">
            We combine AI innovation with advanced software engineering to develop smart applications, cloud platforms, and automation systems that modernize business operations.
          </p>
        </RevealAnimation>
      </div>

      {/*  DESKTOP TAB LIST (UNCHANGED) */}
      <TabList variant="desktop">
        <Tab index={0} variant="desktop">
          AI Consulting & Digital Strategy
        </Tab>
        <Tab index={1} variant="desktop">
          AI-Powered Application Development
        </Tab>
        <Tab index={2} variant="desktop">
          Automation & RPA Solutions
        </Tab>
        <Tab index={3} variant="desktop">
          Cloud Transformation & DevOps
        </Tab>
        <Tab index={4} variant="desktop">
          Custom Software Engineering
        </Tab>
        <Tab index={5} variant="desktop">
          Data Engineering & Analytics
        </Tab>
      </TabList>

      {/*  MOBILE TAB LIST → 3 ROW × 2 COLUMN GRID */}
      <TabList variant="mobile">
        <div className="grid grid-cols-2 gap-3">
          <Tab index={0} variant="mobile">
            AI Consulting & Digital Strategy
          </Tab>
          <Tab index={1} variant="mobile">
            AI-Powered Application Development
          </Tab>
          <Tab index={2} variant="mobile">
            Automation & RPA Solutions
          </Tab>
          <Tab index={3} variant="mobile">
            Cloud Transformation & DevOps
          </Tab>
          <Tab index={4} variant="mobile">
            Custom Software Engineering
          </Tab>
          <Tab
            index={5}
            variant="mobile"
            className="text-center break-words leading-tight px-2"
          >
            Data Engineering & Analytics
          </Tab>
        </div>
      </TabList>
    </>
  );
};

AboutTabList.displayName = 'AboutTabList';
export default AboutTabList;
