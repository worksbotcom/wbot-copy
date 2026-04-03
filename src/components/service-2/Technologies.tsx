import React from 'react';
import Marquee from "react-fast-marquee";

const ScrollingAppsShowcase: React.FC = () => {

  const row1Apps = [
    { name: 'TensorFlow' },
    { name: 'PyTorch' },
    { name: 'Scikit-learn' },
    { name: 'NLP' },
    { name: 'Computer Vision' },
    { name: 'LLM-based systems' },
    { name: 'Apache Spark' },
    { name: 'Airflow' }
  ];

  const row2Apps = [
    { name: 'Kafka' },
    { name: 'Data Lakes' },
    { name: 'ETL Pipelines' },
    { name: 'AWS' },
    { name: 'Azure' },
    { name: 'Google Cloud' },
    { name: 'Kubernetes' },
    { name: 'Docker' }
  ];

  const row3Apps = [
    { name: 'Power BI' },
    { name: 'Tableau' },
    { name: 'Looker' },
    { name: 'Custom AI Dashboards' },
    { name: 'RPA Platforms' },
    { name: 'Workflow Automation' },
    { name: 'Microservices' },
    { name: 'API Integration' }
  ];

  const AppTile: React.FC<{ name: string }> = ({ name }) => (
    <li className="px-8 py-4 mx-4 rounded-lg shadow-md bg-white whitespace-nowrap text-black">
      {name}
    </li>
  );

  const renderTiles = (apps: any[]) => (
    <ul className="flex items-center">
      {apps.map((app, idx) => (
        <AppTile key={idx} name={app.name} />
      ))}
    </ul>
  );

  return (
    <section className="py-16 bg-white md:bg-gray-50 mt-10 md:mt-0">
      <div className="container mx-auto px-4">

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl mb-4 font-bold">
            Technologies We Work With
          </h2>
        </div>

        {/* Row 1 */}
        <div className="pl-1 pr-1 md:pl-2 md:pr-2 lg:pl-35 lg:pr-20">
          <Marquee direction="right" speed={40} pauseOnHover gradient={false}>
            {renderTiles(row1Apps)}
            {renderTiles(row1Apps)}
          </Marquee>
        </div>

        {/* Row 2 */}
        <div className="pl-1 pr-1 md:pl-2 md:pr-2 lg:pl-35 lg:pr-20 mt-6">
          <Marquee direction="left" speed={40} pauseOnHover gradient={false}>
            {renderTiles(row2Apps)}
            {renderTiles(row2Apps)}
          </Marquee>
        </div>

        {/* Row 3 */}
        <div className="pl-1 pr-1 md:pl-2 md:pr-2 lg:pl-35 lg:pr-20 mt-6">
          <Marquee direction="right" speed={40} pauseOnHover gradient={false}>
            {renderTiles(row3Apps)}
            {renderTiles(row3Apps)}
          </Marquee>
        </div>

      </div>
    </section>
  );
};

export default ScrollingAppsShowcase;
