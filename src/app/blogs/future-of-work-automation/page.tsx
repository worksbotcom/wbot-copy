import { Metadata } from 'next';
import NavbarThree from '@/components/shared/header/NavbarThree';
import FooterThree from '@/components/shared/footer/FooterThree';
import { Fragment } from 'react';
import FutureOfWorkArticle from "@/components/blogcontant/blog1"



export const metadata: Metadata = {
  title: 'The Future of Work Automation: How Worksbot Is Redefining AI-Powered Productivity',
  description:
    'Discover how Worksbot is transforming the future of work through advanced AI-powered automation, intelligent agents, and next-gen machine learning capabilities.',
  keywords:
    'Worksbot, AI automation, machine learning, future of work, AI agents, workflow automation, productivity tools',
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
