import { Metadata } from 'next';
import NavbarThree from '@/components/shared/header/NavbarThree';
import FooterThree from '@/components/shared/footer/FooterThree';
import { Fragment } from 'react';
import FutureOfWorkArticle from "@/components/blogcontant/blog4"



export const metadata: Metadata = {

  title: "From Data to Decisions: The Advanced ML Models Powering Worksbot’s Automation Engine",
  description:
    "Discover the powerful machine learning models driving Worksbot’s automation engine—from predictive analytics to adaptive intelligence and real-time decision-making.",
  keywords:
    "Worksbot machine learning, automation engine, predictive analytics, ML models, decision intelligence, AI automation",
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
