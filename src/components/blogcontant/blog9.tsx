'use client';

import React from 'react';
import RevealAnimation from '../animation/RevealAnimation';

const FutureOfWorkArticle = () => {
  const sections = [
    {
      title: 'How Worksbot Leverages Generative AI to Simplify Complex Business Processes',
      content: [
        'Businesses today operate in an environment defined by rapid change, data overload, and increasing operational complexity. Traditional process automation can no longer keep up with this pace. That\'s why generative AI has become the next frontier of business innovation and Worksbot stands at the forefront of this movement.',
        'Generative AI is not just about text creation or image generation; it’s about generating entire workflows, decisions, and systems. Worksbot harnesses this power to simplify complex business processes in ways that were unimaginable just a few years ago.',
        'Let’s explore how Worksbot uses generative AI to revolutionize operations.',
      ],
    },
    {
      title: '1. Automated Workflow Generation',
      content: [
        'Traditionally, designing workflows required:',
      ],
      bullets: [
        'Technical expertise',
        'Hours of mapping and documentation',
        'Manual configuration',
        'Deep system knowledge',
      ],
      extra: 'Worksbot’s generative AI eliminates these barriers. Users simply describe a business process in plain language—such as: “Automate customer onboarding from form submission to account activation.” Worksbot instantly generates a complete workflow diagram, integrated automation script, connected system actions, error-handling logic, and monitoring dashboard. This reduces setup time from days to minutes.',
    },
    {
      title: '2. Converting Unstructured Data into Actionable Workflows',
      content: [
        'Companies often struggle with unstructured data such as:',
      ],
      bullets: [
        'Emails',
        'PDFs',
        'Chat messages',
        'Contracts',
        'Reports',
      ],
      extra: 'Worksbot’s generative AI can read, understand, and convert this data into tasks, summaries, alerts, workflow triggers, and actionable insights. For example, a contract PDF can automatically trigger a compliance workflow, or a customer email can generate a support case with all necessary details.',
    },
    {
      title: '3. Intelligent Process Optimization',
      content: [
        'Generative AI doesn’t just create workflows—it improves them. Using historical performance data, Worksbot’s models analyze:',
      ],
      bullets: [
        'Bottlenecks',
        'Error trends',
        'Time delays',
        'Redundant steps',
        'Resource utilization',
      ],
      extra: 'The system then generates optimized workflow versions with suggestions such as: “Remove Step 4 to reduce processing time by 18%,” “Reassign verification to AI agent to reduce errors,” and “Merge steps 2 and 3 for faster approval flow.” This turns process improvement into a continuous, AI-driven cycle.',
    },
    {
      title: '4. Natural Language Automation Commands',
      content: [
        'In Worksbot, users can operate the system like speaking to a skilled analyst. Commands such as:',
      ],
      bullets: [
        '“Create a workflow to process employee reimbursements.”',
        '“Summarize last week’s order fulfilment issues.”',
        '“Generate a report on failed transactions.”',
        '“Monitor customer churn predictions.”',
      ],
      extra: 'Generative AI interprets these instructions with precision and executes them instantly.',
    },
    {
      title: '5. AI-Generated Business Insights',
      content: [
        'Worksbot’s generative AI goes beyond workflows—it generates insights that drive strategic decisions. These include:',
      ],
      bullets: [
        'Forecasts',
        'Performance summaries',
        'Risk projections',
        'Customer behavior predictions',
        'Financial insights',
      ],
      extra: 'Leaders gain clarity without sifting through dashboards or complex analytics tools.',
    },
    {
      title: '6. Automated Documentation & Compliance Reporting',
      content: [
        'Documentation is a major burden for businesses. Worksbot automates the creation of:',
      ],
      bullets: [
        'SOP documents',
        'Compliance logs',
        'Workflow summaries',
        'Audit reports',
        'Manuals and training guides',
      ],
      extra: 'Every change made to a workflow can automatically update its related documentation—something no human team could do at scale.',
    },
    {
      title: '7. Human-AI Collaboration Made Seamless',
      content: [
        'Generative AI augments human ability, helping teams:',
      ],
      bullets: [
        'Ideate workflow improvements',
        'Brainstorm business solutions',
        'Write better communication',
        'Automate repetitive thinking tasks',
      ],
      extra: 'Teams move faster, think clearer, and deliver better outcomes.',
    },
    {
      title: 'Conclusion',
      content: [
        'Generative AI is reshaping business operations, and Worksbot is leading this transformation. By enabling automatic workflow creation, intelligent optimization, and seamless human-AI collaboration, Worksbot empowers organizations to simplify even the most complex processes with ease.',
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
                <p key={idx} className="text-gray-700 leading-relaxed">
                  {para}
                </p>
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
