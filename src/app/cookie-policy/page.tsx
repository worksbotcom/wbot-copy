import CookiePolicyContent from '@/components/cookie-policy/RefundPolicyContent';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarThree from '@/components/shared/header/NavbarThree';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';


export const metadata: Metadata = {

  title: 'Cookie Policy | Worksbot – Global GDPR-Compliant Cookie Usage Policy',

  description:
    'Worksbot’s Cookie Policy explains how cookies, tracking technologies, and analytics tools are used on our website. Fully compliant with GDPR, UK GDPR, CCPA, DPDP, and global privacy laws.',

  keywords:
    'Worksbot cookie policy, GDPR cookie compliance, website cookies terms, global cookie usage, EU UK US Gulf cookie policy, analytics cookies, privacy and cookie settings, online tracking policy',
};


const RefundPolicy = () => {
  return (
    <>
      <NavbarThree btnClassName="btn-primary hover:btn-white-dark dark:hover:btn-white" />
      <main className="bg-background-3 dark:bg-background-7">
        <CookiePolicyContent />
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

export default RefundPolicy;
