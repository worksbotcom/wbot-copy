import { Metadata } from 'next';
import NavbarThree from '@/components/shared/header/NavbarThree';
import FooterThree from '@/components/shared/footer/FooterThree';
import { Fragment } from 'react';
import FutureOfWorkArticle from "@/components/blogcontant/blog8"



export const metadata: Metadata = {
  title: "Hyper-Automation 2.0: Worksbot’s Vision for a Fully AI-Driven Enterprise",
  description:
    "Explore Hyper-Automation 2.0 and how Worksbot is building the foundation of a fully AI-driven enterprise with autonomous workflows and intelligent systems.",
  keywords:
    "hyper-automation, Worksbot AI, AI enterprise, intelligent automation, workflow automation, future of business AI",
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
