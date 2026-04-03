import { Metadata } from 'next';
import NavbarThree from '@/components/shared/header/NavbarThree';
import FooterThree from '@/components/shared/footer/FooterThree';
import { Fragment } from 'react';
import FutureOfWorkArticle from "@/components/blogcontant/blog3"


export const metadata: Metadata = {
  title: 'How Worksbot Uses AI Agents to Transform Business Operations in 2025 and Beyond',
  description:
    'Learn how Worksbot’s autonomous AI agents are revolutionizing business operations with intelligent decision-making, automation, and next-gen machine learning in 2025.',
  keywords:
    'Worksbot AI agents, business automation, autonomous systems, AI operations, workflow automation, future of AI 2025',
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
