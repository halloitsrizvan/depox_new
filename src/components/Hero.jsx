"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
            {/* Background Abstract Elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -z-10 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />

            <div className="max-w-5xl mx-auto text-center z-10 relative">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-text-main mb-8 leading-[1.1]"
                >
                    We design websites that shape
                    <br className="hidden md:block" />{" "}
                    <span className="text-primary italic relative">
                        how customers feel
                        <svg
                            className="absolute w-full h-3 -bottom-1 left-0 text-accent opacity-60"
                            viewBox="0 0 100 10"
                            preserveAspectRatio="none"
                        >
                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                        </svg>
                    </span>{" "}
                    online.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-2xl text-text-muted mb-12 max-w-2xl mx-auto font-light leading-relaxed"
                >
                    Thoughtful design. Clean code. Real business impact.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#contact"
                        className="group relative bg-accent text-text-main px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-[0_0_30px_rgba(5,231,0,0.4)] active:scale-95 flex items-center gap-2"
                    >
                        Schedule a Free Call
                        <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                    </a>
                    <a
                        href="#work"
                        className="px-8 py-4 rounded-full text-lg font-medium border border-text-main/10 hover:bg-white/20 transition-colors active:scale-95"
                    >
                        View Our Work
                    </a>
                </motion.div>
            </div>

            {/* Floating Website Mockup - Abstract Representation */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl h-[30vh] bg-gradient-to-t from-white/40 to-white/10 backdrop-blur-xl rounded-t-[40px] border-t border-white/40 -z-10 shadow-2xl"
            >
                <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-[#c1d7c8] to-transparent" />
            </motion.div>
        </section>
    );
}
