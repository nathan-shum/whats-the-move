"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const DirectionAwareHover = ({
  imageUrl,
  children,
  childrenClassName,
  imageClassName,
  className,
}: {
  imageUrl: string;
  children: React.ReactNode | string;
  childrenClassName?: string;
  imageClassName?: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<
    "top" | "bottom" | "left" | "right" | string
  >("left");

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!ref.current) return;
    const direction = getDirection(event, ref.current);
    setDirection(["top", "right", "bottom", "left"][direction] || "left");
  };

  const getDirection = (
    ev: React.MouseEvent<HTMLDivElement, MouseEvent>,
    obj: HTMLElement
  ) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - w / 2;
    const y = ev.clientY - top - h / 2;
    return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      ref={ref}
      className={cn(
        "rounded-3xl bg-neutral-900 overflow-hidden flex flex-col items-start justify-start relative z-10 group",
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          className="relative h-full w-full"
          initial="initial"
          whileHover={direction}
          exit="exit"
        >
          <Image
            alt="Drama poster"
            className={cn(
              "object-cover absolute z-10 inset-0",
              imageClassName
            )}
            fill
            src={imageUrl}
          />
          <motion.div
            variants={variants}
            className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
          />
          <motion.div
            variants={textVariants}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className={cn(
              "absolute inset-0 z-30 flex flex-col justify-end p-4",
              childrenClassName
            )}
          >
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

const variants = {
  initial: { opacity: 0 },
  exit: { opacity: 0 },
  top: { opacity: 1 },
  bottom: { opacity: 1 },
  left: { opacity: 1 },
  right: { opacity: 1 },
};

const textVariants = {
  initial: { y: 20, opacity: 0 },
  exit: { y: 20, opacity: 0 },
  top: { y: 0, opacity: 1 },
  bottom: { y: 0, opacity: 1 },
  left: { y: 0, opacity: 1 },
  right: { y: 0, opacity: 1 },
};