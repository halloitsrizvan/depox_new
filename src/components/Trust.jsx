"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Code2, Smartphone, WebhookIcon } from "lucide-react";
import CardTilt from "./CardTilt";

const items = [
    { icon: CheckCircle, text: "10+ Projects Delivered" },
    { icon: Code2, text: "Modern Tech Stack" },
    { icon: Smartphone, text: "Mobile-First Design" },
    { icon: WebhookIcon, text: "Clean and fast" },
];

export default function Trust() {
    return (
        <section className="py-20 px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((item, index) => (
                        <CardTilt key={index} className="h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                                className="glass p-8 rounded-2xl flex flex-col items-center text-center gap-4 transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:border-primary/20 group h-full justify-center"
                            >
                                <div className="p-4 rounded-full bg-white/30 text-primary group-hover:text-primary group-hover:bg-primary/10 transition-colors shadow-inner ring-1 ring-white/50">
                                    <item.icon size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-lg font-semibold text-text-main group-hover:text-primary transition-colors">
                                    {item.text}
                                </h3>
                            </motion.div>
                        </CardTilt>
                    ))}
                </div>
            </div>
        </section>
    );
}
