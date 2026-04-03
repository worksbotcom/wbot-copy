import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarThree from '@/components/shared/header/NavbarThree';
import PrivacyPolicyContent from '@/components/privacy-policy/Privacy';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Privacy Policy | Worksbot – GDPR, CCPA, UK GDPR & DPDP Compliant',

  description:
    'Worksbot’s Privacy Policy outlines how we collect, use, store, and protect personal data in compliance with GDPR, UK GDPR, CCPA/CPRA, and India’s DPDP Act. Learn about your rights and our global data protection practices.',

  keywords:
    'Worksbot privacy policy, GDPR compliant privacy policy, CCPA privacy terms, UK GDPR privacy, DPDP Act privacy policy, global data protection, user rights, data usage policy, personal data protection',
};
;

const Privacy = () => {
  return (
    <>
       <NavbarThree btnClassName="btn-primary hover:btn-white-dark dark:hover:btn-white" />
       <main className="bg-background-3 dark:bg-background-7">
        <PrivacyPolicyContent />
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

export default Privacy;
