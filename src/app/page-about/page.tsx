import FinanceIntro from '@/components/about/FinanceIntro';
import OurMission from '@/components/about/OurMission';
import Reviews from '@/components/about/GlobalPresence';
import VisionStatement from '@/components/about/VisionStatement';
import CTAV2 from '@/components/shared/cta/OurVision';
import Highlights from '@/components/about/Highlights';
import NavbarThree from '@/components/shared/header/NavbarThree';
import ReviewsV1 from '@/components/about/Industries';
import { Metadata } from 'next';
import FooterThree from '@/components/shared/footer/FooterThree';

export const metadata: Metadata = {
  title: 'Worksbot | Global Technology Company for Software, RPA & RPO Solutions',
  description:
    'Worksbot is a leading global technology company with 11+ years of experience, a 100+ expert team, and clients in over 80 countries. We provide innovative software, RPA, and RPO solutions for industries like automobile, semiconductor, healthcare, fintech, IT, and engineering.',
  keywords:
    'Worksbot, software development company, RPA automation, RPO solutions, semiconductor technology, IT engineering, fintech software, healthcare IT, global software company, automation solutions, digital transformation',
};

const AboutPage = () => {
  return (
    <>
      <NavbarThree btnClassName="btn-primary hover:btn-white-dark dark:hover:btn-white" />
      <main className="bg-white dark:bg-background-8">
        <VisionStatement />
        <Highlights />
        <OurMission />
        <ReviewsV1
          badgeColor="badge-green-v2"
          background="lg:pt-[100px] pt-16 lg:pb-[200px] md:pb-[100px] pb-16 bg-background-3 dark:bg-background-9"
          sliderClassName="bg-white dark:bg-background-5"
        />
        <FinanceIntro />
        <Reviews />
        <CTAV2
          ctaHeading="Our Vision"
          ctaDescription="To be a global leader in intelligent automation, software innovation, and digital transformation — empowering businesses to build a smarter, faster, and more efficient future."
          ctaCheckListData={[]}
        />
      </main>
      <FooterThree />
    </>
  );
};

export default AboutPage;
