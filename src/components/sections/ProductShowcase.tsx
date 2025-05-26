"use client";

import PyramidImage from "@/assets/pyramid.png";
import TubeImage from "@/assets/tube.png";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Automate Sales with AI</div>
          </div>
          <h2 className="section-title mt-5">
            No-Code AI Chatbot to Sell For You 24/7
          </h2>

          <p className="section-description mt-5">
            Instantly turn website visitors and social media leads into paying customers with our plug-and-play AI sales assistant.
          </p>
        </div>
        <div className="relative">
          <div className="flex flex-col items-center mt-20 mb-16">
            <div className="relative w-full max-w-3xl mx-auto">
              {/* Interactive product explanation */}
              <div className="mt-16 mb-8">
                <div className="grid md:grid-cols-3 gap-x-6 gap-y-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <span className="text-indigo-700 font-bold text-xl">1</span>
                    </div>
                    <div className="absolute top-6 left-full w-full h-0.5 bg-indigo-200 -z-10 hidden md:block"></div>
                    <h4 className="text-lg font-semibold text-center mb-2">Connect in Minutes</h4>
                    <p className="text-gray-600 text-center">
                      Create a free account
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="relative"
                  >
                    <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <span className="text-indigo-700 font-bold text-xl">2</span>
                    </div>
                    <div className="absolute top-6 left-full w-full h-0.5 bg-indigo-200 -z-10 hidden md:block"></div>
                    <h4 className="text-lg font-semibold text-center mb-2">Add Knowledge Base</h4>
                    <p className="text-gray-600 text-center">
                      Just copy the url to your products web page/telegram channel/facebook marketplace and your chatbot learns what you sell and starts selling immediately.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="relative"
                  >
                    <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <span className="text-indigo-700 font-bold text-xl">3</span>
                    </div>
                    <h4 className="text-lg font-semibold text-center mb-2">Get your Custom AI Sales bot</h4>
                    <p className="text-gray-600 text-center">
                      Let the AI handle product questions, recommend items, and convert leads while you sleep.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Animated feature demonstration */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mt-12 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Powerful AI Features, Zero Code Required
                </h3>
                <ul className="space-y-4">
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <div className="bg-green-100 p-1 rounded-full mt-1">
                      ✔️
                    </div>
                    <p className="text-gray-700">
                      <span className="font-medium">Multi-Platform Support:</span>{" "}
                      Connect your chatbot to your website, Telegram, or Instagram store.
                    </p>
                  </motion.li>

                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <div className="bg-green-100 p-1 rounded-full mt-1">
                      ✔️
                    </div>
                    <p className="text-gray-700">
                      <span className="font-medium">Real-Time Learning:</span>{" "}
                      Updates instantly when you add, edit, or sell products.
                    </p>
                  </motion.li>

                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <div className="bg-green-100 p-1 rounded-full mt-1">
                      ✔️
                    </div>
                    <p className="text-gray-700">
                      <span className="font-medium">Conversion-Optimized:</span>{" "}
                      Built-in sales psychology, upsells, and smart product suggestions.
                    </p>
                  </motion.li>
                </ul>
              </div>

              <div className="w-full md:w-1/2">
                <motion.div
                  animate={{
                    boxShadow: [
                      "0px 0px 0px rgba(79, 70, 229, 0)",
                      "0px 0px 20px rgba(79, 70, 229, 0.3)",
                      "0px 0px 0px rgba(79, 70, 229, 0)",
                    ],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                  }}
                  className="bg-white rounded-xl p-4 border border-indigo-100"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <div className="flex-1 h-5 bg-gray-100 rounded"></div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <div className="h-4 w-24 bg-indigo-100 rounded"></div>
                      <div className="h-4 w-16 bg-green-100 rounded"></div>
                    </div>
                    <div className="h-10 bg-gray-100 rounded w-full"></div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-20 bg-blue-50 rounded"></div>
                      <div className="h-20 bg-purple-50 rounded"></div>
                      <div className="h-20 bg-indigo-50 rounded"></div>
                    </div>
                    <div className="h-12 bg-gray-100 rounded-lg w-3/4 mx-auto"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.img
            src={PyramidImage.src}
            alt="Pyramid Image"
            width={262}
            height={262}
            className="hidden md:block absolute -right-36 -top-32"
            style={{ translateY: translateY }}
          />
          <motion.img
            src={TubeImage.src}
            alt="Tube image"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{ translateY: translateY }}
          />
        </div>
      </div>
    </section>
  );
};
