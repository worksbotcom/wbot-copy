import { Metadata } from 'next';
import NavbarThree from '@/components/shared/header/NavbarThree';
import FooterThree from '@/components/shared/footer/FooterThree';
import { Fragment } from 'react';
import FutureOfWorkArticle from "@/components/blogcontant/blog2"


export const metadata: Metadata = {
  title: "Next-Gen Machine Learning: 10 Breakthrough Innovations Shaping Worksbot’s Roadmap",
  description:
    "Explore the groundbreaking machine learning innovations driving Worksbot’s next-generation AI platform, from predictive automation to hyper-intelligent AI agents.",
  keywords:
    "Worksbot ML, next-gen AI, machine learning tools, automation innovations, AI roadmap, predictive analytics",
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
