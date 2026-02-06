"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function FinalCTA() {
    return (
        <section id="contact" className="py-32 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass p-12 md:p-24 rounded-[48px] shadow-2xl relative overflow-hidden"
                >
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-accent/20 blur-[100px] rounded-full -z-10" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -z-10" />

                    <h2 className="text-4xl md:text-6xl font-bold text-text-main mb-8 tracking-tight">
                        Let’s build something meaningful.
                    </h2>
                    <p className="text-xl md:text-2xl text-text-muted mb-12 max-w-2xl mx-auto">
                        Tell us about your project and we’ll guide you forward.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a
                            href="#"
                            className="w-full sm:w-auto bg-primary text-white px-10 py-5 rounded-full text-lg font-semibold transition-all hover:bg-[#004a17] hover:shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
                        >
                            Schedule a Free Call
                            <ArrowRight size={20} />
                        </a>
                        <a
                            href="#"
                            className="w-full sm:w-auto bg-transparent border-2 border-text-main/10 text-text-main px-10 py-5 rounded-full text-lg font-semibold transition-all hover:bg-white/40 hover:border-transparent flex items-center justify-center gap-3 active:scale-95"
                        >
                            <MessageCircle size={20} />
                            Chat on WhatsApp
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
