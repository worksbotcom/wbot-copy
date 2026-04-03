import { Metadata } from 'next';
import NavbarThree from '@/components/shared/header/NavbarThree';
import FooterThree from '@/components/shared/footer/FooterThree';
import { Fragment } from 'react';
import FutureOfWorkArticle from "@/components/blogcontant/blog7"



export const metadata: Metadata = {
  title: "The Rise of AI Co-Workers: How Worksbot Empowers Teams with Intelligent Agents",
  description:
    "Discover how Worksbot’s intelligent AI co-workers are transforming teamwork, enhancing productivity, and reshaping how businesses operate in the modern AI era.",
  keywords:
    "AI co-workers, Worksbot AI agents, team productivity, AI collaboration, intelligent automation, digital workforce",
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
