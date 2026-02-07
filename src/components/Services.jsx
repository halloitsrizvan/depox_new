"use client";
import React from "react";
import { motion } from "framer-motion";
import { Monitor, FileCode, Palette, ShoppingBag, Layout, PenTool } from "lucide-react";
import CardTilt from "./CardTilt";

const services = [
    { title: "Website Design", icon: Monitor, description: "Beautiful and functional websites that adapt to your content and user needs." },
    { title: "Web Development", icon: FileCode, description: "Custom web solutions built with modern technologies to meet your business needs." },
    { title: "UI/UX Design", icon: Palette, description: "Appealing and user-friendly interfaces that enhance user experience." },
    { title: "E-Commerce", icon: ShoppingBag, description: "Complete online store solutions to grow your business and reach more customers." },
    { title: "Portfolio", icon: Layout, description: "Showcase your work and skills with a professional portfolio website." },
    { title: "Branding & Graphics", icon: PenTool, description: "Creative branding solutions that make your business stand out." },
];

export default function Services() {
    return (
        <section id="services" className="py-24 px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-bold text-text-main mb-16 text-center tracking-tight"
                >
                    What We Do
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <CardTilt key={index}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
                                className="border border-white/30 p-8 rounded-3xl flex flex-col items-center justify-center text-center gap-6 h-64 transition-all shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:border-primary/20 group cursor-default backdrop-blur-sm"
                            >
                                <div className="text-text-muted group-hover:text-primary transition-colors transform group-hover:scale-110 duration-500 ease-out">
                                    <service.icon size={48} strokeWidth={1} />
                                </div>
                                <h3 className="text-2xl font-medium text-text-main group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-text-muted group-hover:text-primary transition-colors">
                                    {service.description}
                                </p>
                            </motion.div>
                        </CardTilt>
                    ))}
                </div>
            </div>
        </section>
    );
}
