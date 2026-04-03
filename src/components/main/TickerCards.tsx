import React, { useEffect, useRef, useState } from "react";

interface Card {
    id: number;
    type: string;
    title: string;
    value: string;
    description: string;
    color: string;
}

const CARDS: Card[] = [
  { id: 1, type: "LEADS", title: "Smart Lead Engine", value: "+32% More Leads", description: "AI-Driven Lead Generation", color: "from-slate-800 to-black" },
  { id: 2, type: "AI BOT", title: "Autonomous AI Agent", value: "98% Task Accuracy", description: "Works 24/7. No Supervision.", color: "from-slate-800 to-black" },
  { id: 3, type: "WHATSAPP", title: "Automation Hub", value: "4× Faster Responses", description: "Smart Replies. Instant Engagement.", color: "from-slate-800 to-black" },
  { id: 4, type: "SALES", title: "Pipeline Accelerator", value: "3× More Conversions", description: "Automate Outreach & Follow-Ups", color: "from-slate-800 to-black" },
  { id: 5, type: "OUTREACH", title: "AI Outreach System", value: "10k Contacts Daily", description: "Personalized Messages at Scale", color: "from-slate-800 to-black" },
  { id: 6, type: "CRM", title: "CRM Automation", value: "70% Faster Processes", description: "Organize, Track & Automate Workflows", color: "from-slate-800 to-black" },
];


const TickerColumn: React.FC<{
    cards: Card[];
    speed?: number;
    direction?: "up" | "down";
}> = ({ cards, speed = 0.45, direction = "up" }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const animationRef = useRef<number | null>(null);

    // Triple the cards for seamless loop
    const tripleCards = [...cards, ...cards, ...cards];

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let lastTime = Date.now();
        const pixelsPerSecond = speed * 100; // Adjust speed

        const animate = () => {
            const now = Date.now();
            const deltaTime = (now - lastTime) / 1000;
            lastTime = now;

            setScrollPosition((prev) => {
                const movement = pixelsPerSecond * deltaTime;
                const newPosition = direction === "up" 
                    ? prev + movement 
                    : prev - movement;

                // Get the height of one set of cards
                const singleSetHeight = container.scrollHeight / 3;

                // Reset when we've scrolled one full set
                if (direction === "up" && newPosition >= singleSetHeight) {
                    return newPosition - singleSetHeight;
                } else if (direction === "down" && newPosition <= 0) {
                    return singleSetHeight + newPosition;
                }

                return newPosition;
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [speed, direction]);

    return (
        <div className="relative h-full overflow-hidden w-full">
            <div
                ref={containerRef}
                className="flex flex-col gap-1 sm:gap-3 w-full"
                style={{
                    transform: `translateY(-${scrollPosition}px)`,
                    willChange: 'transform'
                }}
            >
                {tripleCards.map((card, index) => (
                    <div
                        key={`${card.id}-${index}`}
                        className={`flex-shrink-0 w-full h-56 sm:h-72 rounded-xl sm:rounded-2xl bg-gradient-to-br ${card.color} p-3 sm:p-6 shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer`}
                    >
                        <div className="flex flex-col h-full justify-between">
                            <div className="min-h-0">
                                <div className="inline-block px-2 sm:px-3 py-1 bg-white/10 border border-white/20 text-white rounded-full text-[10px] sm:text-xs font-semibold mb-1 sm:mb-3 tracking-wide">
                                    {card.type}
                                </div>

                                <h3 className="text-white text-sm sm:text-2xl font-bold mb-1 sm:mb-2 line-clamp-1">
                                    {card.title}
                                </h3>

                                <p className="text-slate-300 text-[10px] sm:text-sm line-clamp-2">
                                    {card.description}
                                </p>
                            </div>

                            <div className="text-base sm:text-2xl font-extrabold text-white tracking-tight mt-2">
                                {card.value}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const TickerCardsComponent: React.FC = () => {
    return (
        <div className="w-full h-full overflow-hidden max-w-full"> 
            <div className="grid grid-cols-2 gap-1 sm:gap-4 h-full w-full">
                <TickerColumn cards={CARDS} speed={0.5} direction="up" />
                <TickerColumn cards={CARDS} speed={0.4} direction="down" />
            </div>
        </div>
    );
};

export default TickerCardsComponent;