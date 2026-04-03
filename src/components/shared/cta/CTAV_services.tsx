import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';
import CtaInputForm from './CtaInputForm';

interface CTAV1Props {
  className?: string;
  badgeClass?: string;
  ctaHeading?: string;
  spanText?: string;
  description?: string;
  btnClass?: string;
  ctaBtnText?: string;
  badgeText?: string;
  descriptionClass?: string;
  headingClass?: string;
  inputFieldClass?: string;
}

const CTAV1 = ({
  className,
  badgeClass,
  ctaHeading,
  spanText,
  description,
  btnClass,
  ctaBtnText,
  badgeText,
  descriptionClass,
  headingClass,
  inputFieldClass,
}: CTAV1Props) => {
  return (
    <section className={cn('py-[50px] md:py-20 lg:py-28', className)} aria-label="cta section">
      <div className="main-container">
        <div className="flex flex-col items-center justify-between gap-8 xl:flex-row xl:gap-0">

          {/* LEFT CONTENT */}
          <div className="mx-3 max-w-[649px] space-y-3 text-center sm:mx-0 md:w-full xl:text-left">
            {badgeText && (
              <RevealAnimation delay={0.3}>
                <span className={cn('badge badge-green', badgeClass)}>{badgeText}</span>
              </RevealAnimation>
            )}

            <div className="space-y-3">
              <RevealAnimation delay={badgeText ? 0.4 : 0.3}>
                <h2 className={cn('md:text-heading-2 text-heading-5', headingClass)} aria-label="cta-heading">
                  {ctaHeading}
                  {spanText && <span className="text-primary-500"> {spanText}</span>}
                </h2>
              </RevealAnimation>
            </div>
          </div>

          {/* RIGHT SIDE (INPUT + DESCRIPTION INSTEAD OF CHECKLIST) */}
          <div
            className={cn(
              'w-full max-w-[562px] space-y-6 lg:pl-9 xl:pl-[96px]',
              badgeText && 'mt-[40px] lg:mt-[67px] space-y-6',
            )}
          >
            {/* INPUT + BUTTON */}
            <CtaInputForm
              btnClass={btnClass}
              ctaBtnText={ctaBtnText}
              inputFieldClass={inputFieldClass}
            />

            {/* DESCRIPTION SHOWN WHERE CHECKLIST WAS */}
            {description && (
              <RevealAnimation delay={0.2}>
                <p className={cn('text-black/70 text-sm leading-relaxed', descriptionClass)}>
                  {description}
                </p>
              </RevealAnimation>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTAV1;
