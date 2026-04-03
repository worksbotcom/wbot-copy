import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarThree from '@/components/shared/header/NavbarThree';
import TermsConditionContent from '@/components/terms-conditions/TermsConditionContent';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Worksbot – Global Service, Usage & Compliance Policy',

  description:
    'Read Worksbot’s comprehensive global Terms & Conditions covering service usage, payments, no-refund policy, intellectual property, disclaimers, GDPR & international compliance for clients across the EU, UK, US, India, and Gulf regions.',

  keywords:
    'Worksbot terms and conditions, global service terms, international T&C, GDPR compliant terms, software development terms, AI service terms, no refund policy, UK US EU India Gulf terms & conditions, Worksbot policies',
};


const TermsConditions = () => {
  return (
    <>
      <NavbarThree btnClassName="btn-primary hover:btn-white-dark dark:hover:btn-white" />
      <main className="bg-background-3 dark:bg-background-7">
        <TermsConditionContent />
        <CTAV1
          className="dark:bg-background-5 bg-white"
          badgeClass="badge-yellow-v2"
          badgeText="Get Started"
          ctaHeading="Ready to start earning with NextSaaS?"
          description="If you have any questions, feel free to reach out to our team."
          btnClass="hover:btn-secondary dark:hover:btn-accent"
          ctaBtnText="Get started"
        />
      </main>
      <FooterThree />
    </>
  );
};

export default TermsConditions;
