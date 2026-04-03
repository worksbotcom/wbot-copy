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
            Our engineering teams combine deep technical expertise with domain specific knowledge to deliver robust, scalable, and future ready software solutions that enhance productivity, strengthen decision making, and accelerate digital transformation.
  
          </h2>

          <RevealAnimation delay={0.2}>
            <div className="text-center">
              <LinkButton
                href="/singup-01"
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
