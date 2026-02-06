"use client";
import React from "react";
import { motion } from "framer-motion";
import { Monitor, FileCode, Palette, ShoppingBag, Layout, PenTool } from "lucide-react";

const services = [
    { title: "Website Design", icon: Monitor },
    { title: "Web Development", icon: FileCode },
    { title: "UI/UX Design", icon: Palette },
    { title: "E-Commerce", icon: ShoppingBag },
    { title: "Landing Pages", icon: Layout },
    { title: "Branding & Graphics", icon: PenTool },
];

export default function Services() {
    return (
        <section id="services" className="py-24 px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-text-main mb-16 text-center tracking-tight"
                >
                    What We Do
                </motion.h2>

                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.4)" }}
                            className="bg-white/20 border border-white/30 p-8 rounded-3xl flex flex-col items-center justify-center text-center gap-6 h-64 transition-all shadow-sm hover:shadow-xl hover:border-primary/20 group cursor-default"
                        >
                            <div className="text-text-muted group-hover:text-primary transition-colors transform group-hover:-translate-y-1 duration-300">
                                <service.icon size={48} strokeWidth={1} />
                            </div>
                            <h3 className="text-2xl font-medium text-text-main group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
