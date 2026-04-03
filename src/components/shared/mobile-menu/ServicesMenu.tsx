import Link from 'next/link';
import MobileMenuItem from './MobileMenuItem';

const newServices = [
  { id: 'service-1', label: 'AI Consulting & Digital Strategy', href: '/services/AI-consulting-and-digital-strategy' },
  { id: 'service-2', label: 'AI-Powered Application Development', href: '/services/AI-powered-application-development' },
  { id: 'service-3', label: 'Automation & RPA Solutions', href: '/services/automation-and-RPA-solutions' },
  { id: 'service-4', label: 'Cloud Transformation & DevOps', href: '/services/cloud-transformation-and-DevOps' },
  { id: 'service-5', label: 'Custom Software Engineering', href: '/services/custom-software-engineering' },
  { id: 'service-6', label: 'Data Engineering & Analytics', href: '/services/data-engineering-and-analytics' },
  { id: 'service-7', label: 'Embedded Systems Development', href: '/services/embedded-systems-development' },
  { id: 'service-8', label: 'Product Engineering & Prototyping', href: '/services/product-engineering-and-prototyping' },
  { id: 'service-9', label: 'Quality Assurance & Testing', href: '/services/quality-assurance-and-testing' },
  { id: 'service-10', label: 'Semiconductor Design & Verification', href: '/services/semiconductor-design-and-verification' },
];

const ServicesMenu = () => {
  return (
    <MobileMenuItem id="services" title="Services" hasSubmenu={true}>
      <ul>
        {/* New services only */}
        {newServices.map((service) => (
          <li key={service.id}>
            <Link
              href={service.href}
              className="text-tagline-1 text-secondary/60 dark:text-accent/60 border-stroke-4 dark:border-stroke-6 block w-full border-b py-3 text-left font-normal transition-all duration-200"
            >
              {service.label}
            </Link>
          </li>
        ))}
      </ul>
    </MobileMenuItem>
  );
};

ServicesMenu.displayName = 'ServicesMenu';

export default ServicesMenu;
