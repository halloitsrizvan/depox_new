"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Magnetic from "./Magnetic";

const projects = [
    { title: "Supreme Power Fitness Studio", category: "Web Design", color: "from-gray-800 to-gray-900", bg_img: 'img/image.png', link: 'https://supremepowerfitnessstudio.vercel.app/' },
    { title: "Noor Electricals", category: "Web Design", color: "from-pink-500 to-rose-900", bg_img: 'img/noor.png', link: 'https://noorelectricals.vercel.app/' },
    { title: "Wedlora – Wedding Invitation Platform", category: "SaaS Application", color: "from-pink-500 to-rose-900", bg_img: 'img/we.png', link: 'https://wedlora.vercel.app/' },
    { title: "BIA Business Consultants", category: "Web Design", color: "from-pink-500 to-rose-900", bg_img: 'img/bia.png', link: 'https://biabusinessconsultants.vercel.app' },
    { title: "Flight 99", category: "Web Design", color: "from-pink-500 to-rose-900", bg_img: 'img/flight.png', link: 'https://flight999.netlify.app/' },
    { title: "WhatAI – AI Learning Platform", category: "EdTech Platform", color: "from-blue-600 to-indigo-900", bg_img: 'img/e.png', link: 'https://what-ai-for-all.vercel.app/' },
];

export default function Portfolio() {
    return (
        <section id="work" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-20">
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl md:text-6xl font-bold text-text-main tracking-tight"
                    >
                        Featured Work
                    </motion.h2>
                    {/* <Magnetic>
                        <a href="#" className="hidden md:flex items-center gap-2 text-lg font-medium text-text-muted hover:text-primary transition-colors group">
                            View All Projects
                            <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </a>
                    </Magnetic> */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
                            whileHover={{ y: -10 }}
                            onClick={() => window.open(project.link, '_blank')}
                            className="group relative h-[350px] rounded-[12px] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-700"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                                style={{ backgroundImage: `url(${project.bg_img})` }}
                            />
                            {/* Color Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br  opacity-60 mix-blend-multiply transition-opacity duration-500`} />


                            {/* Noise Texture */}
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />

                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

                            <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end h-full">
                                <div className="transform transition-all duration-500 group-hover:mb-4">
                                    <p className="text-white/80 text-sm mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-medium tracking-wide uppercase">
                                        {project.category}
                                    </p>
                                    <div className="flex justify-between items-end w-full">
                                        <h3 className="text-3xl font-bold text-white max-w-[80%] leading-tight">
                                            {project.title}
                                        </h3>
                                        <div className="bg-white text-black p-4 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200 shadow-xl">
                                            <ArrowUpRight size={24} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* <div className="mt-16 text-center md:hidden">
                    <a href="#" className="inline-block px-8 py-4 rounded-full border border-text-main/20 font-medium hover:bg-white/20 transition-colors">
                        View All Projects
                    </a>
                </div> */}
            </div>
        </section>
    );
}
