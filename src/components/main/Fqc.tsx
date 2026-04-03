import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import RevealAnimation from '../animation/RevealAnimation';

export const faqData = [
  {
    id: 1,
    question: 'What software solutions does Worksbot specialize in?',
    answer:
      'AI apps, enterprise systems, SaaS products, custom platforms, automation tools, cloud-native solutions, and mobile applications.',
  },
  {
    id: 2,
    question: 'Can you modernize legacy applications?',
    answer:
      'Yes. We specialize in modernization, re-engineering, cloud migration, and performance optimization.',
  },
  {
    id: 3,
    question: 'Do you offer long-term maintenance?',
    answer:
      'Yes, we provide full lifecycle support including monitoring, updates, scaling, and ongoing enhancements.',
  },
  {
    id: 4,
    question: 'How do you ensure software security?',
    answer:
      'We follow best practices such as encryption, secure coding guidelines, access control, vulnerability testing, and compliance audits.',
  },
  {
    id: 5,
    question: 'Do you work with startups and enterprise businesses?',
    answer:
      'Yes. We support companies of all sizes, from early-stage startups to multinational enterprises.',
  },
];

const ChangelogTab = () => (
  <section className="py-16 md:py-20 bg-background-2 ">
    <div className="container mx-auto px-4">

      {/* Section Heading */}
      <RevealAnimation delay={0.1}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-bold">
          FAQs
        </h2>
      </RevealAnimation>

      {/* Accordion */}
      <Accordion className="mx-auto w-full max-w-[850px] space-y-4">
        {faqData.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id.toString()}
            className="bg-white rounded-[20px] px-6 sm:px-8"
          >
            <AccordionTrigger
              value={item.id.toString()}
              iconType="arrow"
              className="flex w-full justify-between pt-5 pb-5 sm:pt-8 sm:pb-8 text-left font-normal text-secondary"
            >
              {item.question}
            </AccordionTrigger>
            <AccordionContent value={item.id.toString()}>
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

    </div>
  </section>
);

export default ChangelogTab;
