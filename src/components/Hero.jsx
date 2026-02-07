
"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import FloatingShapes from "./FloatingShapes";
import Magnetic from "./Magnetic";

const wordVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.05 } },
};

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      {/* 3D Background */}
      <FloatingShapes />

      {/* Fallback/Additional Abstract Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -z-10 animate-pulse" />

      <motion.div
        style={{ y: y1 }}
        className="max-w-5xl mx-auto text-center z-10 relative"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-text-main leading-[1.1]">
            {[
              "We", "design", "websites", "that", "shape"
            ].map((word, i) => (
              <motion.span key={i} variants={wordVariants} className="inline-block mr-3">
                {word}
              </motion.span>
            ))}
            <br className="hidden md:block" />
            <span className="text-primary italic relative inline-block mr-3">
              <motion.span variants={wordVariants}>
                how customers feel
              </motion.span>
              <svg
                className="absolute w-full h-3 -bottom-1 left-0 text-accent opacity-60"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </span>
            <motion.span variants={wordVariants} className="inline-block">
              online.
            </motion.span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-2xl text-text-muted mb-12 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Thoughtful design. Clean code. Real business impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Magnetic>
            <a
              href="https://wa.me/918593826375"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-accent text-text-main px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-[0_0_30px_rgba(5,231,0,0.4)] flex items-center gap-2"
            >
              Chat on WhatsApp
              <MessageCircle size={20} className="transition-transform group-hover:translate-x-1" />
            </a>
          </Magnetic>

          <Magnetic strength={0.2}>
            <a
              href="#work"
              className="px-8 py-4 rounded-full text-lg font-medium border border-text-main/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              View Our Work
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* Floating Website Mockup - Parallax Content Layer */}
      <motion.div
        style={{ y: y2, opacity }}
        className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl h-[30vh] bg-gradient-to-t from-white/40 to-white/10 backdrop-blur-xl rounded-t-[40px] border-t border-white/40 -z-10 shadow-2xl overflow-hidden"
      >
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-[#c1d7c8] to-transparent" />
        {/* Subtle grid pattern inside mockup */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
      </motion.div>
    </section>
  );
}

