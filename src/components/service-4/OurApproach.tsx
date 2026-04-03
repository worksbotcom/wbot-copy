import serviceBg from '@public/images/home-page-37/service-bg.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import {
  CloudCog,
  CloudUpload,
  ServerCog,
  GitBranch,
  Activity,
  LifeBuoy
} from "lucide-react";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  delay: number;
  icon: any;
}

const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: 'Cloud Readiness Assessment',
    description: 'Evaluate existing systems, workloads, and infrastructure to define a migration strategy.',
    delay: 0.4,
    icon: <CloudCog className="w-10 h-10 text-accent" />,
  },
  {
    id: 2,
    title: 'Cloud Architecture & Migration',
    description: 'Design and implement cloud-native or hybrid architectures using AWS, Azure, or GCP.',
    delay: 0.5,
    icon: <CloudUpload className="w-10 h-10 text-accent" />,
  },
  {
    id: 3,
    title: 'Infrastructure Automation (IaC)',
    description: 'Automate provisioning and management with Terraform, Ansible, CloudFormation, and Pulumi.',
    delay: 0.6,
    icon: <ServerCog className="w-10 h-10 text-accent" />,
  },
  {
    id: 4,
    title: 'CI/CD Pipeline Development',
    description: 'Build automated pipelines for continuous integration, testing, and deployment.',
    delay: 0.7,
    icon: <GitBranch className="w-10 h-10 text-accent" />,
  },
  {
    id: 5,
    title: 'Monitoring, Logging & Optimization',
    description: 'Implement observability platforms for performance tuning and proactive issue detection.',
    delay: 0.8,
    icon: <Activity className="w-10 h-10 text-accent" />,
  },
  {
    id: 6,
    title: 'Ongoing DevOps Support',
    description: 'Provide continuous management, security updates, and cloud optimization.',
    delay: 0.9,
    icon: <LifeBuoy className="w-10 h-10 text-accent" />,
  },
];

const Service = () => {
  return (
    <section className="max-[1920px]:px-5">
      <div className="bg-secondary max-w-[1880px] md:rounded-4xl rounded-3xl py-25 xl:py-28 md:px-5 mx-auto relative overflow-hidden">
        <RevealAnimation delay={0.4}>
          <figure className="absolute right-0 bottom-0 w-full h-full">
            <Image src={serviceBg} alt="service bg" className="w-full h-full object-cover" />
          </figure>
        </RevealAnimation>

        <div className="main-container mb-13">
          <div className="mb-19 text-center lg:max-w-[730px] lg:mx-auto">
            <RevealAnimation delay={0.2}>
              <h2 className="mb-3 text-accent">Our Approach</h2>
            </RevealAnimation>
          </div>

          {/* service cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-y-8">
            {servicesData.map((service) => (
              <RevealAnimation key={service.id} delay={service.delay}>
                <article className="flex flex-col items-center justify-center text-center space-y-8 p-6 lg:p-9 xl:p-11">

                  {/* ICON */}
                  <figure className="relative h-10 w-10 flex items-center justify-center">
                    {service.icon}
                  </figure>

                  <div className="space-y-2 max-w-[322px]">
                    <h5 className="text-white">{service.title}</h5>
                    <p className="text-tagline-1 text-accent/60">{service.description}</p>
                  </div>
                </article>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
