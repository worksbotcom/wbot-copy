'use client';

import { useWordAnimation } from '@/hooks/useWordAnimation';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const MeetOurTeam = () => {
  const { titleRef } = useWordAnimation();

  return (
    <section className="pb-[50px] md:pb-[80px] lg:pb-[100px]" aria-label="Team Introduction">
      <div className="main-container">
        <div className="space-y-7 md:space-y-14">
          <h2 ref={titleRef} className="split-text-team-title text-center">
            We combine multidisciplinary expertise electronics, embedded systems, software engineering, mechanical design, and industrial IoT to help companies build reliable, user centric, and future ready products.
                  </h2>

          <RevealAnimation delay={0.2}>
            <div className="text-center">
              <LinkButton
                href="/signup-01"
                className="btn btn-secondary btn-md rounded-sm">
                Meet worksbot team
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
