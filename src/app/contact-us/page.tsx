import ContactInfo from '@/components/contact-page/ContactInfo';
import ContactMap from '@/components/contact-page/ContactMap';
import CTAV1 from '@/components/shared/cta/CTAV_services';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarThree from '@/components/shared/header/NavbarThree';
import { Metadata } from 'next';

export const metadata: Metadata = {
  
  title: "Contact Worksbot | Get in Touch for AI, Software, Cloud & Digital Solutions",
  description:
    "Contact Worksbot to discuss your needs in AI, Software Engineering, Cloud Transformation, Automation, Data Analytics, and Digital Innovation. Our team is ready to assist with consultations, project inquiries, and support.",
  keywords: [
    "worksbot contact",
    "contact worksbot team",
    "worksbot support",
    "worksbot inquiry",
    "tech services contact",
    "ai solutions contact",
    "cloud services contact",
    "software development inquiry",
    "digital transformation contact",
  ],
};

const ContactUs = () => {
  return (
    <>
      <NavbarThree btnClassName="btn-primary hover:btn-white-dark dark:hover:btn-white" />
      <main className="bg-background-3 dark:bg-background-7">
       
        <ContactInfo />
        <ContactMap />
        <CTAV1
          className="dark:bg-background-5 bg-white"
          badgeClass="badge-yellow-v2"
          badgeText="Get started"
          ctaBtnText="Contact us"
          ctaHeading="Get in touch"
          description="We're here to help you with your inquiries and needs. Feel free to reach out to us using the contact form below, and we'll get back to you as soon as possible."
        />
      </main>
      <FooterThree />
    </>
  );
};
ContactUs.displayName = 'AboutPage03';
export default ContactUs;
