"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
    "Clarity over complexity",
    "Design backed by strategy",
    "Fast, responsive, scalable builds",
    "Direct and transparent communication",
];

export default function WhyDepox() {
    return (
        <section id="why-us" className="py-32 px-6 bg-white/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-main leading-tight tracking-tight">
                            We don’t just build websites.
                            <span className="text-text-muted/60 block mt-6 text-3xl md:text-4xl lg:text-5xl font-medium">
                                We design experiences that feel right and work better.
                            </span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-8"
                    >
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
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
