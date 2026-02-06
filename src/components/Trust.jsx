"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Code2, Smartphone, Globe2 } from "lucide-react";

const items = [
    { icon: CheckCircle, text: "10+ Projects Delivered" },
    { icon: Code2, text: "Modern Tech Stack" },
    { icon: Smartphone, text: "Mobile-First Design" },
    { icon: Globe2, text: "Based in Kerala, Serving Globally" },
];

export default function Trust() {
    return (
        <section className="py-20 px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="glass p-8 rounded-2xl flex flex-col items-center text-center gap-4 transition-all hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:border-primary/20 group"
                        >
                            <div className="p-4 rounded-full bg-white/30 text-primary group-hover:text-primary group-hover:bg-primary/10 transition-colors shadow-inner">
                                <item.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-lg font-semibold text-text-main group-hover:text-primary transition-colors">
                                {item.text}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
