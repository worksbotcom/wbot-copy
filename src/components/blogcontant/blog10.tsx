'use client';

import React from 'react';
import RevealAnimation from '../animation/RevealAnimation';

const FutureOfWorkArticle = () => {
  const sections = [
    {
      title: 'The AI-First Workplace: Trends Worksbot Is Building for the Future of Digital Employees',
      content: [
        'We are entering a historic transformation in the workplace. For the first time, digital employees powered by AI are becoming as essential as human workers. This shift marks the beginning of the AI-first workplace, where intelligent automation, machine learning, and autonomous systems shape every aspect of operations.',
        'Worksbot is playing a pivotal role in creating this future. Through its advanced automation platform, intelligent agents, and ML-driven decision engines, Worksbot is building trends that define how teams work, collaborate, and grow in the next decade.',
        'Let’s explore the biggest AI-first workplace trends Worksbot is shaping.',
      ],
    },
    {
      title: '1. Digital Employees as Core Workforce Members',
      content: [
        'Digital employees—AI agents capable of performing knowledge tasks—are becoming standard. Worksbot equips businesses with agents that can:',
      ],
      bullets: [
        'Process data',
        'Make decisions',
        'Run workflows',
        'Communicate with teams',
        'Learn and adapt',
      ],
      extra: 'These digital employees take on operational load while humans handle strategy and creativity.',
    },
    {
      title: '2. AI-Powered Workflows that Operate Autonomously',
      content: [
        'In the AI-first workplace, workflows aren’t programmed—they’re learned. Worksbot’s autonomous workflows:',
      ],
      bullets: [
        'Self-adjust',
        'Self-heal',
        'Self-improve',
        'Scale instantly',
        'Operate independently',
      ],
      extra: 'This creates an environment where processes evolve continuously without human effort.',
    },
    {
      title: '3. AI-Augmented Decision-Making',
      content: [
        'Human decision-making is enhanced with:',
      ],
      bullets: [
        'Predictive insights',
        'Scenario simulations',
        'Risk forecasting',
        'Automated recommendations',
      ],
      extra: 'Worksbot’s AI helps leaders make faster, more accurate decisions by presenting clear, data-driven options.',
    },
    {
      title: '4. Conversations Replace Clicks',
      content: [
        'The future workplace is voice-activated and conversation-driven. Worksbot enables teams to:',
      ],
      bullets: [
        'Trigger workflows',
        'Ask for reports',
        'Create tasks',
        'Manage operations',
      ],
      extra: 'Simply by speaking or typing in natural language. This dramatically reduces the learning curve for employees.',
    },
    {
      title: '5. Generative AI Becomes an Everyday Tool',
      content: [
        'From writing to planning to designing workflows, generative AI becomes a core productivity tool. Worksbot integrates generative models that help employees:',
      ],
      bullets: [
        'Draft emails',
        'Create content',
        'Build SOPs',
        'Generate workflow logic',
        'Solve problems creatively',
      ],
      extra: 'Generative AI enhances every role across the organization.',
    },
    {
      title: '6. Data Becomes Fully Democratized',
      content: [
        'Data silos disappear in the AI-first workplace. Worksbot creates a unified data layer where:',
      ],
      bullets: [
        'Everyone can access insights',
        'Data transforms into actionable tasks',
        'Decisions are made collaboratively',
        'AI agents share intelligence across teams',
      ],
      extra: 'This accelerates innovation and transparency.',
    },
    {
      title: '7. Continuous Upskilling with AI Coaching',
      content: [
        'AI doesn’t just automate work—it teaches. Worksbot’s AI agents provide:',
      ],
      bullets: [
        'Personalized suggestions',
        'Skill recommendations',
        'Process guidance',
        'Real-time coaching',
      ],
      extra: 'Employees improve naturally while working.',
    },
    {
      title: '8. Human-AI Collaboration Becomes Normalized',
      content: [
        'The AI-first workplace is not a battle between humans and machines—it’s a partnership. Worksbot fosters collaboration where:',
      ],
      bullets: [
        'AI handles complexity',
        'Humans handle creativity',
        'AI ensures consistency',
        'Humans ensure vision',
      ],
      extra: 'This balance drives sustainable growth.',
    },
    {
      title: '9. Enterprises Move Toward Complete Autonomy',
      content: [
        'By 2035, fully autonomous enterprises will be common. Worksbot is already building:',
      ],
      bullets: [
        'Autonomous operations',
        'Predictive systems',
        'Self-running departments',
        'Real-time corrective workflows',
      ],
      extra: 'Businesses will spend less time running daily operations and more time innovating.',
    },
    {
      title: 'Conclusion',
      content: [
        'The AI-first workplace is no longer a futuristic concept—it’s happening right now. Worksbot is spearheading this movement by introducing digital employees, generative tools, adaptive workflows, and intelligent decision-making systems.',
        'Together, these trends are shaping a workplace where humans and AI thrive side by side.',
      ],
    },
  ];

  return (
    <section className="py-24 md:py-26 lg:py-24 xl:py-28">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-16">
        {sections.map((section, index) => (
          <RevealAnimation delay={0.3 + index * 0.1} key={index}>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>

              {section.content?.map((para, idx) => (
                <p key={idx} className="text-gray-700 leading-relaxed">{para}</p>
              ))}

              {section.bullets && (
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {section.bullets.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {section.extra && (
                <p className="text-gray-700 leading-relaxed">{section.extra}</p>
              )}
            </div>
          </RevealAnimation>
        ))}
      </div>
    </section>
  );
};

export default FutureOfWorkArticle;
