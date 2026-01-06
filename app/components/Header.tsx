"use client";

import Image from "next/image";
import Link from "next/link";

const navItems = [
    { name: "Intro", href: "#intro" },
    { name: "Team", href: "#team" },
    { name: "JD", href: "#jd" },
    { name: "Schedule", href: "#schedule" },
    { name: "FAQ", href: "#faq" },
    { name: "Apply", href: "https://lalasweet.career.greetinghr.com/ko/o/186825", external: true },
];

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 bg-black/50 backdrop-blur-md border-b border-white/5 transition-all duration-300">
            <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
                <Link href="/" className="relative h-6 w-24">
                    <Image
                        src="/lalasweet-logo.png"
                        alt="Lalasweet Logo"
                        fill
                        className="object-contain"
                    />
                </Link>
                <nav className="hidden md:flex gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            target={item.external ? "_blank" : undefined}
                            className={`text-sm font-medium transition-colors hover:text-neon-blue ${item.name === "Apply" ? "text-neon-blue" : "text-gray-300"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
