"use client";

import ArrowIcon from "@/assets/arrow-right.svg";
import CogImage from "@/assets/cog.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">Launch your AI sales agent in minutes</div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Get Your AI Sales Chatbot with{" "}
              <span className="text-5xl md:text-6xl font-black bg-gradient-to-b from-black to-[#001E80] px-2 py-1 rounded-md text-white transform rotate-2 inline-block shadow-lg border-4">
                ZERO Coding
              </span>
            </h1>

            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Connect your website or Telegram with zero code. Our AI auto-scans
              your pages, learns your products, and starts chatting with
              customers instantly.
            </p>

            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1 hover:gap-3 transition-all duration-100 ease-in-out">
                <span>Learn more</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={CogImage.src}
              alt="Cog Image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{ translateY: [-30, 30] }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
