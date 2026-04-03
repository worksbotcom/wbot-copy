import { cn } from '@/utils/cn';
import Image, { StaticImageData } from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

// Import all 13 logos
import logo1 from '@public/images/workbot/clients/grop.svg';
import logo2 from '@public/images/workbot/clients/Etched.svg';
import logo3 from '@public/images/workbot/clients/Vast.svg';
import logo4 from '@public/images/workbot/clients/xai.svg';
import logo5 from '@public/images/workbot/clients/Axelera.svg';

// Add remaining 8 images (you can replace these paths)
import logo6 from '@public/images/workbot/clients/cohere.svg';
import logo7 from '@public/images/workbot/clients/helsing.svg';
import logo8 from '@public/images/workbot/clients/iqm.png';
import logo9 from '@public/images/workbot/clients/mistral-ai-logo.svg';
import logo10 from '@public/images/workbot/clients/multiverse.svg';
import logo11 from '@public/images/workbot/clients/nscnce.png';
import logo12 from '@public/images/workbot/clients/verisoul.svg';
import logo13 from '@public/images/workbot/clients/Uniphore.svg';

interface ClientLogo {
  id: number;
  src: StaticImageData;
  alt: string;
}

const clientLogos: ClientLogo[] = [
  { id: 1, src: logo1, alt: 'Client logo' },
  { id: 2, src: logo2, alt: 'Client logo' },
  { id: 3, src: logo3, alt: 'Client logo' },
  { id: 4, src: logo4, alt: 'Client logo' },
  { id: 5, src: logo5, alt: 'Client logo' },
  { id: 6, src: logo6, alt: 'Client logo' },
  { id: 7, src: logo7, alt: 'Client logo' },
  { id: 8, src: logo8, alt: 'Client logo' },
  { id: 9, src: logo9, alt: 'Client logo' },
  { id: 10, src: logo10, alt: 'Client logo' },
  { id: 11, src: logo11, alt: 'Client logo' },
  { id: 12, src: logo12, alt: 'Client logo' },
  { id: 13, src: logo13, alt: 'Client logo' },
];

const Clients = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="lg:py-[60px] py-5 md:py-[50px] mt-8 sm:mt-[60px] lg:mt-[30px] xl:mt-[40px]">
        <div className="main-container">
          <div className="relative max-w-[1200px] mx-auto">

            <div className="absolute left-0 top-0 h-full w-[15%] md:w-[20%] bg-gradient-to-r from-background-2 to-transparent z-40" />
            <div className="absolute right-0 top-0 h-full w-[15%] md:w-[20%] bg-gradient-to-l from-background-2 to-transparent z-40" />

            <Marquee speed={50} gradient={false}>
              <div className="flex items-center justify-center gap-12">
                {clientLogos.map((logo) => (
                  <figure
                    key={logo.id}
                    className="flex items-center justify-center min-w-[150px]"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      className="h-[35px] w-auto object-contain filter grayscale brightness-0 invert-0 opacity-90"
                    />
                  </figure>
                ))}
              </div>
            </Marquee>

          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Clients;
