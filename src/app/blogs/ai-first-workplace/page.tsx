import { Metadata } from 'next';
import NavbarThree from '@/components/shared/header/NavbarThree';
import FooterThree from '@/components/shared/footer/FooterThree';
import { Fragment } from 'react';
import FutureOfWorkArticle from "@/components/blogcontant/blog10"



export const metadata: Metadata = {
  title: "The AI-First Workplace: Trends Worksbot Is Building for the Future of Digital Employees",
  description:
    "Explore the emerging AI-first workplace trends that Worksbot is creating—from digital employees to autonomous workflows and next-gen productivity ecosystems.",
  keywords:
    "AI-first workplace, digital employees, Worksbot automation, future of work, autonomous AI, workplace trends",
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
