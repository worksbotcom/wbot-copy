import { Metadata } from 'next';
import NavbarThree from '@/components/shared/header/NavbarThree';
import FooterThree from '@/components/shared/footer/FooterThree';
import { Fragment } from 'react';
import FutureOfWorkArticle from "@/components/blogcontant/blog5"



export const metadata: Metadata = {
  title: "Why Autonomous AI Systems Are the Future — And How Worksbot Leads the Revolution",
  description:
    "Explore why autonomous AI systems are becoming the foundation of future enterprises and how Worksbot is pioneering this revolution with intelligent, self-operating automation.",
  keywords:
    "autonomous AI, Worksbot automation, AI revolution, future of AI, intelligent systems, autonomous workflows",
};

export default function Service1Page() {
  return (
    <Fragment>
      <NavbarThree btnClassName="btn-primary hover:btn-white-dark dark:hover:btn-white" />
      <main className="bg-background-1 dark:bg-background-6">
        <FutureOfWorkArticle/>
        <FooterThree />
      </main>
    </Fragment>
  );
}
