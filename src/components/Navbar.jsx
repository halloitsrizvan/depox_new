"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Services", href: "#services" },
        { name: "Work", href: "#work" },
        { name: "Process", href: "#process" },
        { name: "Why Us", href: "#why-us" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={clsx(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                )}
            >
                <div className={clsx("w-full md:w-[95%] lg:max-w-7xl mx-auto md:mt-4 md:rounded-2xl flex items-center justify-between px-6 py-4 md:px-12 transition-all duration-300", isScrolled ? "glass-nav py-3" : "bg-transparent")}>
                    <div className="flex items-center gap-2">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            <Image src="/img/logo.png" alt="Logo" width={50} height={50} />
                        </motion.div>
                        <Link href="/" className="text-2xl font-bold font-display tracking-tight text-primary flex items-center gap-2">
                            Depox Studio
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-text-main hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#004a17] transition-transform hover:scale-105 active:scale-95"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        aria-label="Toggle Menu"
                        className="md:hidden text-text-main p-2"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-[#c1d7c8] flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        <button
                            aria-label="Close Menu"
                            className="absolute top-6 right-6 text-text-main p-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <X size={32} />
                        </button>

                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-3xl font-semibold text-text-main hover:text-primary"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="mt-6 bg-primary text-white px-8 py-3 rounded-full text-xl font-medium"
                        >
                            Contact Us
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
