"use client";
import React from "react";
import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-12 px-6 border-t border-text-main/5 bg-[#c1d7c8]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-text-main font-semibold text-lg tracking-tight">
                    Depox Studio <span className="text-text-muted font-normal">© 2026</span>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-8">
                    <a href="#" className="text-text-muted hover:text-primary transition-colors font-medium">
                        WhatsApp
                    </a>
                    <a href="mailto:depoxstudio@gmail.com" className="text-text-muted hover:text-primary transition-colors font-medium">
                        depoxstudio@gmail.com
                    </a>
                </div>

                <div className="flex items-center gap-4">
                    <a href="#" className="p-3 rounded-full hover:bg-black/5 text-text-main transition-colors" aria-label="Instagram">
                        <Instagram size={22} />
                    </a>
                    <a href="#" className="p-3 rounded-full hover:bg-black/5 text-text-main transition-colors" aria-label="LinkedIn">
                        <Linkedin size={22} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
