"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect } from "react";

const CheckIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={cn("w-6 h-6 ", className)}
    >
      <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
};

const CheckFilled = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("w-6 h-6 ", className)}
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

type LoadingState = {
  text: string;
};

const LoaderCore = ({
    loadingStates,
    value = 0,
  }: {
    loadingStates: LoadingState[];
    value?: number;
  }) => {
    return (
        <div className="flex relative justify-start max-w-xl mx-auto flex-col mt-40 pointer-events-none">
          {loadingStates.map((loadingState, index) => {
            const distance = Math.abs(index - value);
            const opacity = Math.max(1 - distance * 0.2, 0);
  
            return (
              <motion.div
                key={index}
                className="text-left flex gap-2 mb-4"
                initial={{ opacity: 0, y: -(value * 40) }}
                animate={{ opacity: opacity, y: -(value * 40) }}
                transition={{ duration: 0.5 }}
              >
                <div>
                  {index > value && (
                    <CheckIcon className="text-black dark:text-white" />
                  )}
                  {index <= value && (
                    <CheckFilled
                      className={cn(
                        "text-black dark:text-white",
                        value === index &&
                          "text-black dark:text-lime-500 opacity-100"
                      )}
                    />
                  )}
                </div>
                <span
                  className={cn(
                    "text-black dark:text-white",
                    value === index && "text-black dark:text-lime-500 opacity-100"
                  )}
                >
                  {loadingState.text}
                </span>
              </motion.div>
            );
          })}
        </div>
    );
  };
  

  export const MultiStepLoader = ({
    loadingStates,
    loading,
    curr,
    loop = false,
  }: {
    loadingStates: LoadingState[];
    loading?: boolean;
    curr: number;
    loop?: boolean;
  }) => {
    const [currentState, setCurrentState] = useState(-1);
  
    useEffect(() => {
      if (!loading) {
        setCurrentState(-1);
        return;
      }
      setCurrentState(curr);
    }, [curr, loading]);
  
    return (
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-white pointer-events-auto" // covers full screen, semi-transparent bg
          >
            {/* Transparent overlay to block interaction */}
            <div className="absolute inset-0 bg-transparent pointer-events-auto z-0" />
  
            {/* Loader content */}
            <div className="relative z-10 pointer-events-none">
              <LoaderCore value={currentState} loadingStates={loadingStates} />
            </div>
  
            {/* Optional visual background effect */}
            <div className="bg-gradient-to-t inset-x-0 bottom-0 absolute h-full z-0 pointer-events-none [mask-image:radial-gradient(900px_at_center,transparent_30%,white)]" />
          </motion.div>
        )}
      </AnimatePresence>
    );
  };
  
