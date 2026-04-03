import SignupHero from '@/components/authentication/SignupHero';
import CTAV1 from '@/components/shared/cta/CTAV_services';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarThree from '@/components/shared/header/NavbarThree';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';


export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Signup Page - NextSaaS',
};

const SignUpPage01 = () => {
  return (
    <Fragment>
      <NavbarThree btnClassName="btn-primary hover:btn-white-dark dark:hover:btn-white" />
      <main className="bg-background-3 dark:bg-background-7">
        <SignupHero />
        <CTAV1
          className="dark:bg-background-6 bg-white"
          badgeClass="badge-yellow-v2"
          badgeText="Get Started"
          ctaHeading="Build a complete website using the assistance"
          description="Start your free trial today and see your ideas come to life easily and creatively."
          btnClass="hover:btn-secondary dark:hover:btn-accent"
          ctaBtnText="Get started"
        />
      </main>
      <FooterThree />
    </Fragment>
  );
};
export default SignUpPage01;
