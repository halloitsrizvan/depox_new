"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
    { title: "Supreme Power Fitness Studio", category: "Web Design", color: "from-gray-800 to-gray-900" },
    { title: "WhatAI – AI Learning Platform", category: "EdTech Platform", color: "from-blue-600 to-indigo-900" },
    { title: "Wedlora – Wedding Invitation Platform", category: "SaaS Application", color: "from-pink-500 to-rose-900" },
];

export default function Portfolio() {
    return (
        <section id="work" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-16">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-text-main tracking-tight"
                    >
                        Featured Work
                    </motion.h2>
                    <a href="#" className="hidden md:block text-lg font-medium text-text-muted hover:text-primary transition-colors">
                        View All Projects →
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative h-[400px] rounded-[32px] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} transition-transform duration-700 group-hover:scale-105`} />

                            {/* Optional Noise TextureOverlay */}
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />

                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />

                            <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end h-full">
                                <div className="transform transition-all duration-500 group-hover:mb-2">
                                    <p className="text-white/80 text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-medium tracking-wide uppercase">
                                        {project.category}
                                    </p>
                                    <div className="flex justify-between items-end w-full">
                                        <h3 className="text-2xl font-bold text-white max-w-[80%] leading-tight">
                                            {project.title}
                                        </h3>
                                        <div className="bg-accent text-text-main p-3 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200">
                                            <ArrowUpRight size={24} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <a href="#" className="inline-block px-8 py-4 rounded-full border border-text-main/20 font-medium hover:bg-white/20 transition-colors">
                        View All Projects
                    </a>
                </div>
            </div>
        </section>
    );
}
