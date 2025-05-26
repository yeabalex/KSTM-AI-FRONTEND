"use client";

import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge"
import { motion } from "framer-motion";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get Started Free",
    popular: false,
    inverse: false,
    features: [
      "50 AI chat credits/month",
      "Single store integration",
      "Basic integrations",
      "Community support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 24.99,
    buttonText: "Upgrade to Pro",
    popular: true,
    inverse: true,
    features: [
      "Unlimited AI chat credits",
      "Up to 3 store connections",
      "Full customization options",
      "All integrations included",
      "Priority customer support",
      "Advanced setup assistance",
      "Export chat data",
    ],
  },
  {
    title: "Custom AI",
    monthlyPrice: 120,
    buttonText: "Contact Sales",
    popular: false,
    inverse: false,
    features: [
      "Everything in Pro",
      "Up to 10 store connections",
      "AI image search capability",
      "Dedicated server environment",
      "Custom analytics dashboard",
      "Tailored fields & workflows",
      "In-depth performance insights",
      "Multiple AI models to choose from"
    ],
  },
];


export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">

        <div className="section-heading">
          <h2 className="section-title">
            Our Pricing
          </h2>

          <p className="section-description mt-5">
            Free forever. Upgrade for unlimited tasks, better security, and exclusive features.
          </p>
        </div>


        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {
            pricingTiers.map(({ title, monthlyPrice, buttonText, popular, inverse, features }) => (
              <div key={title}
                className={twMerge("card",
                  inverse === true && 'border-black bg-black text-white')}>

                <div className="flex justify-between">
                  <h3 className={twMerge("text-lg font-bold text-black/50", inverse === true && 'text-white/60')}>
                    {title}
                  </h3>
                  {
                    popular && (
                      <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                        <motion.span
                          animate={{
                            backgroundPositionX: "100%"
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 1,
                            ease: "linear",
                            repeatType: "loop"
                          }}

                          className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium">
                          Popular
                        </motion.span>
                      </div>
                    )
                  }
                </div>

                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">${monthlyPrice}</span>
                  <span className="tracking-tight font-bold text-black/50">/month</span>
                </div>
                <button className={twMerge("btn btn-primary w-full mt-[30px]", inverse === true && "bg-white text-black")}>
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-5 mt-8">
                  {
                    features.map((feature) => (
                      <li key={feature} className="text-sm flex items-center gap-4">
                        <CheckIcon className="h-6 w-6" />
                        <span>{feature}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }

        </div>
      </div>
    </section>
  );
};
