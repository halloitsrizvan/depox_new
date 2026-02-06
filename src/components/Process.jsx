"use client";
import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, PenTool, LayoutTemplate, Search, Rocket } from "lucide-react";

const steps = [
    { title: "Plan", icon: MessageSquare },
    { title: "Design", icon: PenTool },
    { title: "Build", icon: LayoutTemplate },
    { title: "Review", icon: Search },
    { title: "Launch", icon: Rocket },
];

export default function Process() {
    return (
        <section id="process" className="py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-text-main mb-24 text-center tracking-tight"
                >
                    How We Work
                </motion.h2>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-[30px] left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-transparent via-text-main/10 to-transparent z-0" />

                    <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-4 relative z-10 px-4 md:px-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="flex flex-col items-center gap-6 w-full md:w-auto group"
                            >
                                <div className="w-16 h-16 rounded-full bg-[#c1d7c8] border border-white/50 shadow-md flex items-center justify-center text-text-muted group-hover:text-primary group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(5,231,0,0.3)] group-hover:border-primary/30 transition-all duration-300 relative z-10">
                                    <step.icon size={26} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-semibold text-text-main group-hover:text-primary transition-colors">
                                    {step.title}
                                </h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
