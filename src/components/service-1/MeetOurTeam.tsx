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
            With deep expertise in machine learning, data engineering, cloud ecosystems, and enterprise innovation, <strong>Worksbot</strong> guides businesses from initial strategy to execution ensuring successful and sustainable AI transformation.
          </h2>

          <RevealAnimation delay={0.2}>
            <div className="text-center">
              <LinkButton
                href="/signup-01"
                className="btn btn-secondary btn-md rounded-sm">
                Meet Worksbot team
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
