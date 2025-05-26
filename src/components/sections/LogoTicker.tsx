"use client";

import AcmeLogo from "@/assets/OpenAI-black-monoblossom.png";
import QuantumLogo from "@/assets/claude-ai-icon.png";
import EchoLogo from "@/assets/deepseek-color.png";
import CelestialLogo from "@/assets/google-gemini-icon.png";
import PulseLogo from "@/assets/perplexity-color.png";
import ApexLogo from "@/assets/grok.png";

import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image src={AcmeLogo} alt="AcmeLogo" className="h-12 w-auto" />
            <Image src={QuantumLogo} alt="QuantumLogo" className="h-12 w-auto" />
            <Image src={EchoLogo} alt="EchoLogo" className="h-12 w-auto" />
            <Image src={CelestialLogo} alt="CelestialLogo" className="h-12 w-auto" />
            <Image src={PulseLogo} alt="PulseLogo" className="h-12 w-auto" />
            <Image src={ApexLogo} alt="ApexLogo" className="h-12 w-auto" />

            <Image src={AcmeLogo} alt="AcmeLogo" className="h-12 w-auto" />
            <Image src={QuantumLogo} alt="QuantumLogo" className="h-12 w-auto" />
            <Image src={EchoLogo} alt="EchoLogo" className="h-12 w-auto" />
            <Image src={CelestialLogo} alt="CelestialLogo" className="h-12 w-auto" />
            <Image src={PulseLogo} alt="PulseLogo" className="h-12 w-auto" />
            <Image src={ApexLogo} alt="ApexLogo" className="h-12 w-auto" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
