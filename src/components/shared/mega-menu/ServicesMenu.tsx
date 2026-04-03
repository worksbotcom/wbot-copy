import { servicesMenuItems } from '@/data/header';
import {
  Brain,
  Smartphone,
  Bot,
  Cloud,
  Code,
  BarChartBig,
  Cpu,
  Package,
  ShieldCheck,
  CircuitBoard,
  Clock
} from "lucide-react";

interface ServicesMenuProps {
  className?: string;
}

// Icon mapping
const iconMap: Record<string, any> = {
  "service-1": Brain,
  "service-2": Smartphone,
  "service-3": Bot,
  "service-4": Cloud,
  "service-5": Code,
  "service-6": BarChartBig,
  "service-7": Cpu,
  "service-8": Package,
  "service-9": ShieldCheck,
  "service-10": CircuitBoard,
};

export default function ServicesMenu({ className }: ServicesMenuProps) {
  return (
    <div className={`absolute top-full left-1/2 -translate-x-1/2 z-50 group/nav ${className || ""}`}>

      {/* Hover buffer */}
      <div className="absolute top-0 left-0 w-full h-10"></div>

      {/* Dropdown Container */}
      <div
        className="
          hidden group-hover/nav:block mt-4
          w-[850px] bg-white rounded-3xl shadow-2xl 
          border border-slate-200 overflow-hidden
          transition-all duration-300
        "
      >
        {/* Inner Grid */}
        <div className="grid grid-cols-2 gap-2 p-6">
          {servicesMenuItems.map((item) => {
            const IconComponent = iconMap[item.id] || Clock;

            return (
              <a
                key={item.id}
                href={item.href}
                className="
                  group relative p-4 rounded-2xl cursor-pointer overflow-hidden 
                  transition-all duration-300 hover:bg-slate-50
                "
              >
                <div className="flex gap-4 relative z-10">

                  {/* Icon Box */}
                  <div className="flex-shrink-0 relative z-20">
                    <div className="
                      w-12 h-12 rounded-lg border-2 border-slate-200 
                      flex items-center justify-center bg-white
                    ">
                      <IconComponent
                        size={20}
                        strokeWidth={1.5}
                        className="text-slate-700 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Text with Hover Gradient */}
                  <div className="flex-1 min-w-0 relative">
                    {/* Background Hover Gradient only behind text */}
                    <div className="
                      absolute top-0 right-0 bottom-0 left-[4rem] /* starts after icon box + gap */
                      rounded-2xl 
                      bg-gradient-to-r from-transparent to-blue-50/30 
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-300 -z-10
                    "></div>

                    <h3 className="text-base font-semibold text-slate-900 group-hover:text-slate-950 transition-colors">
                      {item.label}
                    </h3>

                    <p className="text-sm text-slate-500 mt-1 group-hover:text-slate-600 transition-colors line-clamp-1">
                      {item.description}
                    </p>
                  </div>
                </div>

              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
