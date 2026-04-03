import gradientBorder from '@public/images/ns-img-523.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const operationCardsData = [
  {
    id: '1',
    shapeClass: 'ns-shape-19',
    title: 'Competitive salary packages ',
    description: 'Get rewarded with a competitive salary package that grows with your impact and performance',
  },
  {
    id: '2',
    shapeClass: 'ns-shape-35',
    title: 'Learning & development support ',
    description: 'Our support empower employees with guidance needed to achieve long-term career success',
  },
  {
    id: '3',
    shapeClass: 'ns-shape-4',
    title: 'Opportunity to work on cutting-edge AI ',
    description: 'Work with advanced AI technologies and contribute to innovative solutions',
  },
  {
    id: '4',
    shapeClass: 'ns-shape-32',
    title: 'Career acceleration in a high-growth startup',
    description: 'Fast-track your career by taking on impactful roles and growing alongside a rapidly scaling startup.',
  },
    {
    id: '5',
    shapeClass: 'ns-shape-28',
    title: 'Recognition & performance rewards',
    description: 'Get recognized and rewarded for your performance and achievements.',
  },
];

const OperationCards = () => {
  return (
    <div className="grid grid-cols-16 items-center justify-center gap-10 p-4">
      {operationCardsData.map((card) => (
        <RevealAnimation key={card.id}>
          <div className="dark:bg-background-7 relative col-span-12 w-full overflow-hidden rounded-[20px] bg-white p-2 md:col-span-6 lg:col-span-6 xl:col-span-3 xl:w-[300px]">
            {/* border img  */}
            <figure className="pointer-events-none absolute top-[-95%] left-[-85%] size-[800px] rotate-[82deg] overflow-hidden select-none">
              <Image src={gradientBorder} alt="border-img" className="size-full" />
            </figure>
            {/* card content  */}
            <div className="bg-background-1 dark:bg-background-6 relative z-10 space-y-6 rounded-xl p-8">
              <div className="inline-block">
                <span className={`${card.shapeClass} text-secondary dark:text-accent text-[52px]`} />
              </div>
              <div className="space-y-1">
                <h4 className="text-heading-5">{card.title}</h4>
                <p>{card.description}</p>
              </div>
            </div>
          </div>
        </RevealAnimation>
      ))}
    </div>
  );
};

OperationCards.displayName = 'OperationCards';
export default OperationCards;
