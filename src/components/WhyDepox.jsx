"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
    "Clarity over complexity",
    "Design backed by strategy",
    "Fast, responsive, scalable builds",
    "Direct and transparent communication",
];

export default function WhyDepox() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "center center"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 1]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
    const x = useTransform(scrollYProgress, [0, 1], [-50, 0]);

    return (
        <section id="why-us" className="py-32 px-6 bg-white/20 backdrop-blur-sm" ref={containerRef}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
                    <motion.div style={{ opacity, scale, x }}>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-main leading-tight tracking-tight">
                            We don’t just build websites.
                            <span className="text-text-muted/60 block mt-6 text-3xl md:text-4xl lg:text-5xl font-medium">
                                We design experiences that feel right and work better.
                            </span>
                        </h2>
                    </motion.div>

                    <div className="flex flex-col gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-5 group"
                            >
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-text-main transition-all duration-300">
                                    <Check size={20} strokeWidth={3} />
                                </div>
                                <span className="text-xl md:text-2xl font-medium text-text-main/80 group-hover:text-text-main transition-colors">
                                    {benefit}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
