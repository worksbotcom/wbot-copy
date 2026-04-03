import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';
import DarkLogo from '@public/images/shared/dark-logo.svg';
import LightLogo from '@public/images/shared/main-logo1.png';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import FooterDivider from './FooterDivider';

interface FooterThreeProps {
  className?: string;
  bgGradientImg?: StaticImageData;
  gradientClassName?: string;
  toggleTheme?: boolean;
  defaultTheme?: 'light' | 'dark';
}

const FooterThree: FC<FooterThreeProps> = ({ bgGradientImg, className, gradientClassName, defaultTheme }) => {
  return (
    <footer className={cn('dark:bg-background-8 relative overflow-hidden bg-white', className)}>
      <div className="main-container ">
        {bgGradientImg && (
          <RevealAnimation delay={0.7} offset={100} direction="right">
            <figure className={cn('absolute overflow-hidden', gradientClassName)}>
              <Image src={bgGradientImg} alt="gradient-img" className="h-full w-full object-cover" />
            </figure>
          </RevealAnimation>
        )}

        <div className="grid grid-cols-12 justify-between gap-x-0 gap-y-12 pt-12 pb-12 lg:gap-x-6 xl:gap-x-8 xl:pt-[100px]">
          <div className="col-span-12 lg:col-span-4">
            <RevealAnimation delay={0.3}>
              <div className="xl:max-w-[306px]">
                <figure>
                  <Image src={LightLogo} className="dark:hidden" alt="NextSass" />
                  <Image src={DarkLogo} className="hidden dark:block" alt="NextSass" />
                </figure>
                <p className="text-secondary dark:text-accent mt-4 mb-7">
                  AI That Works, Making Software Smarter.
                </p>
                <div className="flex items-center gap-3">
                  {/* Only Instagram and LinkedIn remain */}
                  <div className="flex items-center gap-3">
                    {/* Instagram */}
                    <Link target="_blank" href="https://www.instagram.com/worksbot/" className="footer-social-link">
                      <span className="sr-only">Instagram</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11 1H5C2.79086 1 1 2.79086 1 5V11C1 13.2091 2.79086 15 5 15H11C13.2091 15 15 13.2091 15 11V5C15 2.79086 13.2091 1 11 1Z"
                          className="stroke-secondary dark:stroke-accent"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8C11 8.79565 10.6839 9.55871 10.1213 10.1213C9.55871 10.6839 8.79565 11 8 11Z"
                          className="stroke-secondary dark:stroke-accent"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <rect
                          x="11"
                          y="5"
                          width="2"
                          height="2"
                          rx="1"
                          transform="rotate(-90 11 5)"
                          className="fill-secondary dark:fill-accent"
                        />
                        <rect
                          x="11.5"
                          y="4.5"
                          width="1"
                          height="1"
                          rx="0.5"
                          transform="rotate(-90 11.5 4.5)"
                          className="stroke-secondary dark:stroke-accent"
                          strokeLinecap="round"
                        />
                      </svg>
                    </Link>

                    <div className="bg-stroke-1 dark:bg-stroke-8 h-5 w-px"></div>

                    {/* LinkedIn */}
                    <Link target="_blank" href="https://www.linkedin.com/company/worksbotapplications/" className="footer-social-link">
                      <span className="sr-only">LinkedIn</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="0 0 13 11" fill="none">
                        <path
                          d="M2.25 4C2.25 3.58579 1.91421 3.25 1.5 3.25C1.08579 3.25 0.75 3.58579 0.75 4H2.25ZM0.75 10C0.75 10.4142 1.08579 10.75 1.5 10.75C1.91421 10.75 2.25 10.4142 2.25 10H0.75ZM10.75 10C10.75 10.4142 11.0858 10.75 11.5 10.75C11.9142 10.75 12.25 10.4142 12.25 10H10.75ZM5.5 7H4.75H5.5ZM4.75 10C4.75 10.4142 5.08579 10.75 5.5 10.75C5.91421 10.75 6.25 10.4142 6.25 10H4.75ZM2.25 1C2.25 0.585786 1.91421 0.25 1.5 0.25C1.08579 0.25 0.75 0.585786 0.75 1H2.25ZM0.75 2C0.75 2.41421 1.08579 2.75 1.5 2.75C1.91421 2.75 2.25 2.41421 2.25 2H0.75ZM1.5 4H0.75V10H1.5H2.25V4H1.5ZM11.5 10H12.25V7H11.5H10.75V10H11.5ZM11.5 7H12.25C12.25 4.92893 10.5711 3.25 8.5 3.25V4V4.75C9.74264 4.75 10.75 5.75736 10.75 7H11.5ZM8.5 4V3.25C6.42893 3.25 4.75 4.92893 4.75 7H5.5H6.25C6.25 5.75736 7.25736 4.75 8.5 4.75V4ZM5.5 7H4.75V10H5.5H6.25V7H5.5ZM1.5 1H0.75V2H1.5H2.25V1H1.5Z"
                          className="fill-secondary dark:fill-accent"
                        />
                      </svg>
                    </Link>

                    <div className="bg-stroke-1 dark:bg-stroke-8 h-5 w-px"></div>

                    {/* Twitter */}
                    <Link target="_blank" href="https://x.com/worksbotapp" className="footer-social-link">
                      <span className="sr-only">Twitter</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                        <path
                          d="M16 1.538c-.59.262-1.223.438-1.888.517a3.3 3.3 0 001.448-1.826 6.57 6.57 0 01-2.084.797A3.28 3.28 0 007.88 3.5a9.32 9.32 0 01-6.767-3.431 3.28 3.28 0 001.015 4.377 3.27 3.27 0 01-1.488-.412v.042a3.28 3.28 0 002.632 3.218 3.3 3.3 0 01-1.483.056 3.28 3.28 0 003.067 2.28 6.574 6.574 0 01-4.07 1.4A6.32 6.32 0 010 11.615 9.29 9.29 0 005.034 13c6.038 0 9.337-5 9.337-9.337 0-.142-.004-.284-.01-.425A6.68 6.68 0 0016 1.538z"
                          className="fill-secondary dark:fill-accent"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>

          <div className="col-span-12 grid grid-cols-12 gap-x-2 gap-y-8 lg:col-span-8 lg:gap-x-4"> {/* **CHANGED: gap-x-4 to gap-x-2 and lg:gap-x-6 to lg:gap-x-4** */}
            {/* Company Section */}
            <div className="col-span-6 md:col-span-3">
              <RevealAnimation delay={0.4}>
                <div className="space-y-4">
                  <p className="sm:text-heading-6 text-tagline-1 text-secondary dark:text-accent font-normal">
                    Company
                  </p>
                  <ul className="space-y-3">
                    <li><Link href="/page-about" className="footer-link-v2">About Us</Link></li>
                    <li><Link href="/career" className="footer-link-v2">Career</Link></li>
                    <li><Link href="/blogs" className="footer-link-v2">Blogs</Link></li>
                    <li><Link href="/contact-us" className="footer-link-v2">Contact Us</Link></li>
                  </ul>
                </div>
              </RevealAnimation>
            </div>

            {/* Support Section */}
            <div className="col-span-12 md:col-span-6">
              <RevealAnimation delay={0.5}>
                <div className="space-y-4">
                  <p className="sm:text-heading-6 text-tagline-1 text-secondary dark:text-accent font-normal">
                    Services
                  </p>
                  <ul className="grid grid-cols-2 gap-y-3 gap-x-3">
                    <li><Link href="services/AI-consulting-and-digital-strategy" className="footer-link-v2">AI consulting and digital strategy</Link></li>
                    <li><Link href="/services/cloud-transformation-and-DevOps" className="footer-link-v2">Cloud transformation and DevOps</Link></li>
                    <li><Link href="/services/AI-powered-application-development" className="footer-link-v2">AI powered application</Link></li>
                    <li><Link href="/services/automation-and-RPA-solutions" className="footer-link-v2">Automation and RPA</Link></li>
                    <li><Link href="/services/custom-software-engineering" className="footer-link-v2">Custom software engineering</Link></li>
                    <li><Link href="/services/data-engineering-and-analytics" className="footer-link-v2">Data engineering and analytics</Link></li>
                    <li><Link href="/services/semiconductor-design-and-verification" className="footer-link-v2">Semiconductor design and verification</Link></li>
                    <li><Link href="/services/product-engineering-and-prototyping" className="footer-link-v2">Product engineering and prototyping</Link></li>
                    <li><Link href="/services/quality-assurance-and-testing" className="footer-link-v2">Quality assurance and testing</Link></li>
                    <li><Link href="/services/embedded-systems-development" className="footer-link-v2">Embedded systems</Link></li>
                  </ul>
                </div>
              </RevealAnimation>
            </div>

            {/* Legal Policies Section */}
            <div className="col-span-6 md:col-span-3">
              <RevealAnimation delay={0.6}>
                <div className="space-y-4">
                  <p className="sm:text-heading-6 text-tagline-1 text-secondary dark:text-accent font-normal">
                    Legal Policies
                  </p>
                  <ul className="space-y-3">
                    <li><Link href="/terms-conditions" className="footer-link-v2">Terms & Conditions</Link></li>
                    <li><Link href="/privacy" className="footer-link-v2">Privacy Policy</Link></li>
                    <li><Link href="/cookie-policy" className="footer-link-v2">Cookie Policy</Link></li>
                  </ul>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden pt-6 pb-[60px] text-center">
          <FooterDivider className="bg-stroke-2 dark:bg-accent/5" />
          <RevealAnimation delay={0.7} offset={10} start="top 105%">
            <p className="text-secondary dark:text-accent/60">
              Copyright &copy;Worksbot – smart application for modern business
            </p>
          </RevealAnimation>
        </div>
      </div>
      
    </footer>
  );
};

export default FooterThree;