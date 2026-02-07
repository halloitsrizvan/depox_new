"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageSquare, PenTool, LayoutTemplate, Search, Rocket } from "lucide-react";

const steps = [
    { title: "Plan", icon: MessageSquare },
    { title: "Design", icon: PenTool },
    { title: "Build", icon: LayoutTemplate },
    { title: "Review", icon: Search },
    { title: "Launch", icon: Rocket },
];

export default function Process() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section id="process" className="py-24 px-6 overflow-hidden" ref={containerRef}>
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
                    {/* Animated Connecting Line */}
                    <div className="hidden md:block absolute top-[30px] left-[5%] right-[5%] h-0.5 bg-text-main/10 z-0">
                        <motion.div
                            style={{ scaleX, transformOrigin: "left" }}
                            className="h-full bg-primary w-full"
                        />
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-4 relative z-10 px-4 md:px-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="flex flex-col items-center gap-6 w-full md:w-auto group relative"
                            >
                                <div className="w-16 h-16 rounded-full bg-[#fafeff] border border-white/50 shadow-md flex items-center justify-center text-text-muted group-hover:text-primary group-hover:scale-125 group-hover:shadow-[0_0_30px_rgba(5,231,0,0.4)] group-hover:border-primary transition-all duration-500 relative z-10 ease-out">
                                    <step.icon size={26} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-semibold text-text-main group-hover:text-primary transition-colors">
                                    {step.title}
                                </h3>

                                {/* Mobile Line */}
                                {index < steps.length - 1 && (
                                    <div className="md:hidden w-0.5 h-12 bg-text-main/10 absolute -bottom-14 overflow-hidden">
                                        <motion.div
                                            style={{
                                                scaleY: scaleX, // Reuse the scroll progress, but applied vertically
                                                transformOrigin: "top"
                                            }}
                                            className="w-full h-full bg-primary"
                                        />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
