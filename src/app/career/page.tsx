import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarThree from '@/components/shared/header/NavbarThree';
import { Metadata } from 'next';
import Benefits from '@/components/career/Growth';
import Build from '@/components/career/Build';
import OurMission from '@/components/career/OurMission';
import Apply from '@/components/career/Apply';
import Choose from '@/components/career/Choose';
import Main from '@/components/career/Main';


export const metadata: Metadata = {
  
  title: "Worksbot Careers | Join the Future of AI Workforce & Automation",
  description:
    "Join Worksbot and build the future of AI-powered work. Explore careers in AI, development, design, and automation. Work on cutting-edge tools shaping tomorrow’s workforce.",
  keywords: [
    "Worksbot careers",
    "AI jobs",
    "automation careers",
    "tech jobs India",
    "AI startup hiring",
    "developer jobs",
    "chatbot jobs",
    "SaaS careers",
    "remote AI jobs",
    "careers in artificial intelligence",
  ],
};

const ContactUs = () => {
  return (
    <div className='overflow-hidden'>
      <NavbarThree btnClassName="btn-primary hover:btn-white-dark dark:hover:btn-white" />
      <main className="bg-background-3 dark:bg-background-7">
        <Main/>
        <Choose/>
       <Build/>
       <Benefits/>
        <OurMission/>
        <Apply/>
      </main>
      <FooterThree />
    </div>
  );
};
ContactUs.displayName = 'AboutPage03';
export default ContactUs;
