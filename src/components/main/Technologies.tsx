import React from "react";
import Marquee from "react-fast-marquee";
import RevealAnimation from "../animation/RevealAnimation";
import Image from "next/image";

const ScrollingAppsShowcase: React.FC = () => {
  const row1Apps = [
    { img: "/images/workbot/home/aws.svg", alt: "Worksbot - AWS" },
    { img: "/images/workbot/home/Python.svg", alt: "Worksbot - Python" },
    { img: "/images/workbot/home/Kafka.svg", alt: "Worksbot - Kafka" },
    { img: "/images/workbot/home/NET.svg", alt: "Worksbot - .NET" },
    { img: "/images/workbot/home/Typescript.svg", alt: "Worksbot - TypeScript" },
    { img: "/images/workbot/home/Azure.svg", alt: "Worksbot - Azure" },
    { img: "/images/workbot/home/Power_BI.svg", alt: "Worksbot - Power BI" },
    { img: "/images/workbot/home/Django.svg", alt: "Worksbot - Django" },
    { img: "/images/workbot/home/Kubernetes.svg", alt: "Worksbot - Kubernetes" },
    { img: "/images/workbot/home/Spring_Boot.svg", alt: "Worksbot - Spring Boot" },
    { img: "/images/workbot/home/Vue.js.svg", alt: "Worksbot - Vue.js" },
    { img: "/images/workbot/home/React.svg", alt: "Worksbot - React" },
  ];

  const row2Apps = [
    { img: "/images/workbot/home/GitHub.svg", alt: "Worksbot - GitHub" },
    { img: "/images/workbot/home/Go.svg", alt: "Worksbot - Go" },
    { img: "/images/workbot/home/DigitalOcean.svg", alt: "Worksbot - DigitalOcean" },
    { img: "/images/workbot/home/Java.svg", alt: "Worksbot - Java" },
    { img: "/images/workbot/home/Snowflake.svg", alt: "Worksbot - Snowflake" },
    { img: "/images/workbot/home/Ansible.svg", alt: "Worksbot - Ansible" },
    { img: "/images/workbot/home/Redshift.png", alt: "Worksbot - Redshift" },
    { img: "/images/workbot/home/PHP.svg", alt: "Worksbot - PHP" },
    { img: "/images/workbot/home/OpenCV.svg", alt: "Worksbot - OpenCV" },
  ];

  const row3Apps = [
    { img: "/images/workbot/home/Swift.svg", alt: "Worksbot - Swift" },
    { img: "/images/workbot/home/Tableau.svg", alt: "Worksbot - Tableau" },
    { img: "/images/workbot/home/TensorFlow.svg", alt: "Worksbot - TensorFlow" },
    { img: "/images/workbot/home/Docker.svg", alt: "Worksbot - Docker" },
    { img: "/images/workbot/home/Angular.svg", alt: "Worksbot - Angular" },
    { img: "/images/workbot/home/PyTorch.svg", alt: "Worksbot - PyTorch" },
    { img: "/images/workbot/home/Next.js.svg", alt: "Worksbot - Next.js" },
    { img: "/images/workbot/home/FastAPI.svg", alt: "Worksbot - FastAPI" },
    { img: "/images/workbot/home/Google_Cloud.svg", alt: "Worksbot - Google Cloud" },
    { img: "/images/workbot/home/Google-flutter.svg", alt: "Worksbot - Google Flutter" },
    { img: "/images/workbot/home/Hugging_Face.svg", alt: "Worksbot - Hugging Face" },
    { img: "/images/workbot/home/Jenkins.svg", alt: "Worksbot - Jenkins" },
    { img: "/images/workbot/home/Kotlin.svg", alt: "Worksbot - Kotlin" },
    { img: "/images/workbot/home/Spark.svg", alt: "Worksbot - Spark" },
    { img: "/images/workbot/home/SpaCy.svg", alt: "Worksbot - SpaCy" },
  ];

  // ✅ RESPONSIVE PERFECT CIRCLE TILE
  const AppTile: React.FC<{ img: string; alt: string; large?: boolean }> = ({
    img,
    alt,
    large,
  }) => {
    const isJenkins = img.includes("Jenkins");

    return (
      <li
        className={`
          rounded-full overflow-hidden bg-primary-50
          flex items-center justify-center
          
          min-w-[85px] w-[85px] h-[85px]     /* ✅ Mobile */
          md:min-w-[110px] md:w-[110px] md:h-[110px]  /* ✅ Tablet */
          lg:min-w-[130px] lg:w-[130px] lg:h-[130px]  /* ✅ Desktop */

          ${large ? "mx-2 md:mx-3 lg:mx-4" : "mx-2 md:mx-4"}
        `}
      >
        <div
          className={`
            relative
            w-[38px] h-[38px]     /* ✅ Mobile */
            md:w-[50px] md:h-[50px]   /* ✅ Tablet */
            lg:w-[60px] lg:h-[60px]   /* ✅ Desktop */

            ${isJenkins ? "lg:w-[70px] lg:h-[70px]" : ""}
          `}
        >
          <Image src={img} alt={alt} fill className="object-contain" />
        </div>
      </li>
    );
  };

  const renderTiles = (apps: any[], large = false) => (
    <ul className="flex items-center">
      {apps.map((app, idx) => (
        <AppTile key={idx} img={app.img} alt={app.alt} large={large} />
      ))}
    </ul>
  );

  return (
    <section className="py-16 bg-white mt-10 md:mt-0">
      <div className="container mx-auto px-4">
        <div className="text-center mb-5">
          <RevealAnimation delay={0.2}>
            <h2 className="text-3xl md:text-4xl mb-4 font-bold">
              Cutting-edge technologies that enable our engineering excellence
            </h2>
          </RevealAnimation>
        </div>

        <div className="text-center mb-12">
          <RevealAnimation delay={0.3}>
            <p>
              We leverage modern, enterprise-grade technologies to build
              scalable, secure, and high-performance digital solutions.
            </p>
          </RevealAnimation>
        </div>

        {/* ROW 1 */}
        <div className="px-1 md:px-2 lg:px-20">
          <Marquee direction="right" speed={40} pauseOnHover gradient={false}>
            {renderTiles(row1Apps)}
            {renderTiles(row1Apps)}
          </Marquee>
        </div>

        {/* ROW 2 */}
        <div className="px-1 md:px-2 lg:px-20 mt-6">
          <Marquee direction="left" speed={40} pauseOnHover gradient={false}>
            {renderTiles(row2Apps)}
            {renderTiles(row2Apps)}
          </Marquee>
        </div>

        {/* ROW 3 */}
        <div className="px-1 md:px-2 lg:px-20 mt-6">
          <Marquee direction="right" speed={40} pauseOnHover gradient={false}>
            {renderTiles(row3Apps, true)}
            {renderTiles(row3Apps, true)}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default ScrollingAppsShowcase;
