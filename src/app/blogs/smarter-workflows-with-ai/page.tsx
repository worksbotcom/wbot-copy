import { Metadata } from 'next';
import NavbarThree from '@/components/shared/header/NavbarThree';
import FooterThree from '@/components/shared/footer/FooterThree';
import { Fragment } from 'react';
import FutureOfWorkArticle from "@/components/blogcontant/blog6"



export const metadata: Metadata = {
  title: "Smarter Workflows with AI: Exploring Worksbot’s Cutting-Edge Automation Capabilities",
  description:
    "Dive into Worksbot’s advanced AI automation capabilities that create smarter, faster, and more adaptive workflows for modern businesses.",
  keywords:
    "Worksbot automation, AI workflows, smart automation, intelligent workflows, business AI tools, workflow optimization",
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
