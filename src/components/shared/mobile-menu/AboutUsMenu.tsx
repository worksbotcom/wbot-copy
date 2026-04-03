import Link from 'next/link';
import MobileMenuItem from './MobileMenuItem';

const AboutUsMenu = () => {
  return (
    <MobileMenuItem id="Our Company" title="Our Company" hasSubmenu={true}>
      <ul>
        <li>
          <Link
            href="/page-about"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200">
            About
          </Link>
        </li>
        <li>
          <Link
            href="/blogs"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200">
            Blogs
          </Link>
        </li>
        <li>
          <Link
            href="/contact-us"
            className="text-tagline-1 text-secondary/60 dark:text-accent/60 block w-full py-3 text-left font-normal transition-all duration-200">
            Contact Us
          </Link>
        </li>
      </ul>
    </MobileMenuItem>
  );
};

AboutUsMenu.displayName = 'AboutUsMenu';
export default AboutUsMenu;
