"use client";

import Image from "next/image";
import LinkButton from "../ui/button/LinkButton";
import TabContent from "../ui/tab/TabContent";
import { WobbleCard } from "./wobble-card";

import {
  Brain,
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
  Workflow,
  Database,
  Activity,
  Layers,
  BarChart3,
  BrainCircuit,
} from "lucide-react";

const aboutTabsData = [
  {
    id: "ai-consulting",
    description:
      "We provide expert guidance to help businesses adopt AI effectively, define strategic digital roadmaps, and accelerate transformation through intelligent technologies.",
    image: "/images/workbot/home/about/Ai Consulting & Digital Strategy.jpg",
    imageAlt: "AI consulting and digital transformation",
    buttonText: "Learn More",
    buttonHref: "/services/AI-consulting-and-digital-strategy",
    features: [
      { icon: Brain, title: "Assess organizational and data readiness for AI" },
      { icon: BarChart, title: "Identify high-impact AI opportunities and use cases" },
      { icon: Code, title: "Develop tailored AI and digital strategies" },
      { icon: Workflow, title: "Guide intelligent automation implementation" },
      { icon: InfinityIcon, title: "Enable data-driven decision-making" },
    ],
  },

  {
    id: "ai-app-dev",
    description:
      "AI-Powered Application Development focuses on building intelligent, scalable software solutions using machine learning, NLP, computer vision, and automation.",
    image: "/images/workbot/home/about/Ai powered Application Development.jpg",
    imageAlt: "AI Application Development",
    buttonText: "Learn More",
    buttonHref: "/services/AI-powered-application-development",
    features: [
      { icon: Smartphone, title: "Develop smart, data-driven applications" },
      { icon: Bot, title: "Integrate ML & NLP systems" },
      { icon: Code, title: "Automate workflows with AI" },
      { icon: BarChart, title: "Improve predictive analytics" },
      { icon: Cloud, title: "Build scalable AI systems" },
    ],
  },
  { id: 'automation-rpa', description: 'We automate repetitive processes using RPA and intelligent workflows to improve accuracy, reduce manual effort, and increase operational productivity.', image: '/images/workbot/home/about/Automation & RPA Solutions.jpg', imageAlt: 'Automation and RPA', buttonText: 'Learn More', buttonHref: '/services/automation-and-RPA-solutions', features: [{ icon: Cpu, title: 'Robotic Process Automation implementation' }, { icon: Workflow, title: 'Workflow optimization & digital process automation' }, { icon: Bot, title: 'AI-enhanced bots for complex tasks' }, { icon: Server, title: 'Enterprise system integration (ERP, CRM, HRMS)' }, { icon: ShieldCheck, title: 'Monitoring, support, and automation scaling' },], },
  { id: 'cloud-devops', description: 'We help businesses modernize their IT infrastructure with cloud-native architectures, automated workflows, and DevOps practices.', image: '/images/workbot/home/about/Cloud Transformation & Devops.jpg', imageAlt: 'Cloud and DevOps', buttonText: 'Learn More', buttonHref: '/services/cloud-transformation-and-DevOps', features: [{ icon: Cloud, title: 'Migrate applications and workloads to AWS, Azure, or Google Cloud' }, { icon: Code, title: 'Implement CI/CD pipelines for faster, automated releases' }, { icon: Server, title: 'Build secure, scalable cloud architectures and microservices' }, { icon: Laptop, title: 'Automate infrastructure using IaC tools like Terraform and Ansible' }, { icon: BarChart, title: 'Performance monitoring and optimization' }, { icon: Users, title: 'Integrate DevOps culture and processes across teams' },], },
  { id: 'custom-software', description: 'We design and develop custom software solutions tailored to your business needs, delivering scalable, secure, and high-performance applications.', image: '/images/workbot/home/about/Custom Software Engineering.jpg', imageAlt: 'Custom software engineering', buttonText: 'Learn More', buttonHref: '/services/custom-software-engineering', features: [{ icon: Code, title: 'End-to-end development of enterprise software and platforms' }, { icon: Server, title: 'Custom architecture designed for scalability & reliability' }, { icon: Cloud, title: 'Modern cloud-ready systems with best practices' }, { icon: InfinityIcon, title: 'Seamless integration with tools, APIs, workflows' }, { icon: Users, title: 'Agile development with iterative delivery' },], },
  { id: 'data-engineering', description: 'We build reliable data ecosystems that help businesses process information efficiently, gain actionable insights, and make data-driven decisions.', image: '/images/workbot/home/about/Data Engineering & Analytics.jpg', imageAlt: 'Data Engineering', buttonText: 'Learn More', buttonHref: '/services/data-engineering-and-analytics', features: [{ icon: Database, title: "Scalable data pipeline implementation" }, { icon: Layers, title: "Enterprise data warehousing & lake architecture" }, { icon: Activity, title: "Real-time data processing & streaming" }, { icon: BarChart3, title: "Advanced BI and analytics dashboards" }, { icon: BrainCircuit, title: "AI-powered predictive insights" }, { icon: ShieldCheck, title: "Data governance, quality & security" },], },
];


const AboutTabContent = () => {
  return (
    <>
      {aboutTabsData.map((tab, index) => (
        <TabContent key={tab.id} index={index}>
          <div className="flex w-full flex-col items-start justify-between gap-x-24 gap-y-14 lg:flex-row">

            {/* LEFT CONTENT */}
            <div className="flex-1 sm:mx-auto sm:max-w-[500px] lg:max-w-full">
              <h2 className="lg:text-heading-4 text-heading-4 mb-8 text-[clamp(32px,4vw,64px)] leading-[1.15] max-w-[900px] text-balance">
                {tab.description}
              </h2>

              <ul className="mb-7 md:mb-14 space-y-1.5">
                {tab.features.map((feature, i) => {
                  const Icon = feature.icon;
                  return (
                    <li key={i} className="flex items-center gap-4 py-2">
                      <Icon
                        className="text-secondary text-[36px] dark:text-white"
                        strokeWidth={1}
                      />
                      <strong className="text-tagline-1 text-secondary dark:text-accent font-medium">
                        {feature.title}
                      </strong>
                    </li>
                  );
                })}
              </ul>
              <LinkButton
                href={tab.buttonHref}
                className="btn btn-secondary  btn-md rounded-sm md:w-auto w-[90%] mx-auto md:mx-0"
              >
                <span>Learn More</span>

                {/*  SEO + Lighthouse ku mattum */}
                <span className="sr-only">
                  about {tab.imageAlt}
                </span>
              </LinkButton>
            </div>

            {/* RIGHT IMAGE WITH WOBBLE ANIMATION */}
            <WobbleCard
              containerClassName="
                w-[332px] h-[320px]
                sm:w-[360px] sm:h-[280px]
                md:w-[480px] md:h-[380px]
                lg:w-[520px] lg:h-[520px]
                relative overflow-hidden
                md:ml-48
                bg-neutral-900
              "
            >
              <Image
                src={tab.image}
                alt={tab.imageAlt}
                fill
                className="object-cover rounded-xl"
                priority={index === 0}
              />
            </WobbleCard>

          </div>
        </TabContent>
      ))}
    </>
  );
};

AboutTabContent.displayName = "AboutTabContent";
export default AboutTabContent;


