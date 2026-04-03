"use client";

import { useEffect, useRef } from "react";
// @ts-ignore
import HoverEffect from "hover-effect";

type Props = {
  image1: string;
  image2: string;
  displacement: string;
};

const DisplacementImage = ({ image1, image2, displacement }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    new HoverEffect({
      parent: containerRef.current,

      intensity: 0.15,          
      speedIn: 0.8,
      speedOut: 0.8,
      easing: "easeOutQuart",

      image1,
      image2,
      displacementImage: displacement,

    
    });
  }, [image1, image2, displacement]);

  return (
    <div
      ref={containerRef}
      className="
        w-full h-full 
        transition-transform 
        duration-[400ms] 
        ease-out 
        hover:scale-[1.04]
      "
    />
  );
};

export default DisplacementImage;
