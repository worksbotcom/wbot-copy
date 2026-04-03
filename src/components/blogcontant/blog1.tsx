'use client';

import React from 'react';
import RevealAnimation from '../animation/RevealAnimation';

const FutureOfWorkArticle = () => {
  // Split content into sections for easier animation
  const sections = [
    {
      title: 'The Future of Work Automation: How Worksbot Is Redefining AI-Powered Productivity',
      content: `The rapid evolution of artificial intelligence is reshaping industries at a pace we could not have imagined a decade ago. Automation no longer refers to simple task scheduling or rule-based workflows—it's about intelligent systems capable of thinking, learning, and adapting. At the forefront of this evolution is Worksbot, a next-generation AI/ML platform designed to transform how humans and machines collaborate in the modern workplace.`
    },
    {
      title: 'From Manual Processes to Intelligent Automation',
      content: `Traditional enterprise automation has relied heavily on static workflows—processes that require manual updates, predefined triggers, and constant human supervision. These solutions were helpful but limited. They couldn’t understand context, predict needs, or self-correct errors. Worksbot changes everything. Rather than depending on rigid processes, Worksbot introduces AI-driven automation powered by machine learning models that analyze patterns, learn from user behavior, and continuously optimize workflows. This means tasks don’t just get automated—they evolve.`
    },
    {
      title: 'AI Agents That Work Like Digital Employees',
      content: `One of Worksbot’s most futuristic innovations is its system of autonomous AI agents. These agents behave less like traditional software bots and more like digital coworkers who can:`,
      bullets: [
        'Learn tasks by observing usage',
        'Make decisions based on real-time data',
        'Adapt to business changes automatically',
        'Communicate with other AI agents',
        'Operate 24/7 without supervision'
      ]
    },
    {
      title: 'Machine Learning at the Core of Every Workflow',
      content: `Worksbot’s ML capabilities enable intelligent workflow optimization and decision-making:`,
      bullets: [
        'Predictive workflow optimization — the platform anticipates bottlenecks before they occur',
        'Intelligent recommendations — offering faster, more efficient ways to complete tasks',
        'Adaptive decision-making — modifying workflows based on new data',
        'Natural language understanding — allowing teams to interact with AI agents conversationally'
      ]
    },
    {
      title: 'Enhancing Human Productivity Through AI Collaboration',
      content: `Many fear that AI will replace jobs. Worksbot shows a different path—one where AI becomes a partner, not a competitor. By taking over repetitive, time-consuming tasks, Worksbot allows employees to focus on higher-value work such as strategy, creativity, and innovation. Examples:`,
      bullets: [
        'Finance teams can analyze insights instead of reconciling spreadsheets.',
        'HR departments can focus on people instead of paperwork.',
        'Operations teams can strategize instead of firefighting daily issues.'
      ]
    },
    {
      title: 'A Future Where Automation Is Effortless',
      content: `The long-term vision of Worksbot is simple yet revolutionary: Automation should feel as natural as using a smartphone. With intuitive interfaces, conversational AI, and self-learning workflows, businesses will soon be able to deploy hyper-automation across departments with minimal technical expertise. As the system continues to evolve, automation will become:`,
      bullets: [
        'Faster',
        'Smarter',
        'More context-aware',
        'More accessible to everyone'
      ]
    },
    {
      title: 'Conclusion',
      content: `The future of work is not just automated—it’s adaptive, intelligent, and deeply collaborative. Worksbot stands at the forefront of this revolution, empowering organizations to move beyond traditional productivity tools and embrace AI-powered efficiency like never before.`
    }
  ];

  return (
    <section className="py-24 md:py-26 lg:py-24 xl:py-28">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-16">
        {sections.map((section, index) => (
          <RevealAnimation delay={0.3 + index * 0.1} key={index}>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
              <p className="text-gray-700 leading-relaxed">{section.content}</p>

              {section.bullets && (
                <ul className="list-disc list-inside pl-4 space-y-2 text-gray-700">
                  {section.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          </RevealAnimation>
        ))}
      </div>
    </section>
  );
};

export default FutureOfWorkArticle;
