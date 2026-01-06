import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const links = [
    {
        text: "공채 커리큘럼 뭐가 다른지 궁금하다면?",
        href: "https://lalasweet.career.greetinghr.com/ko/lalasweetcultureonboaing",
        highlight: false,
    },
    {
        text: "생생한 마케팅 인턴 후기가 궁금하다면?",
        href: "https://lalasweet.career.greetinghr.com/ko/about4",
        highlight: false,
    },
    {
        text: "인턴에서 최연소 리더까지, 인지셀 리더 인터뷰",
        href: "https://lalasweet.career.greetinghr.com/ko/lalasweetleaderinterview1",
        highlight: false,
    },
    {
        text: "온라인 마케팅 9기 지원하기",
        href: "https://lalasweet.career.greetinghr.com/ko/o/186825",
        highlight: true,
    },
];

export default function BottomCTA() {
    return (
        <section className="py-32 bg-deep-dark relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/5 to-transparent pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-neon-blue/10 blur-[100px] rounded-full pointer-events-none animate-pulse" />

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            target="_blank"
                            className={`group block p-10 rounded-3xl transition-all duration-normal relative overflow-hidden hover-lift ${link.highlight
                                    ? "bg-gradient-to-br from-neon-blue to-neon-blue/80 col-span-1 md:col-span-2 text-center shadow-glow-lg hover:shadow-glow-lg hover:scale-105 animate-glow"
                                    : "glass-strong border border-white/10 hover:border-neon-blue/30 hover-glow"
                                } ${index === 2 ? "md:col-span-2 text-center" : ""}`}
                        >
                            {/* Shimmer Effect on Hover */}
                            {!link.highlight && (
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-slower" />
                            )}

                            <span
                                className={`text-xl md:text-2xl font-bold flex items-center justify-center gap-3 relative z-10 ${link.highlight
                                        ? "text-black"
                                        : "text-white group-hover:text-neon-blue transition-colors"
                                    }`}
                            >
                                {link.text}
                                {!link.highlight && (
                                    <ArrowUpRight className="w-6 h-6 opacity-50 group-hover:opacity-100 transition-all duration-normal group-hover:translate-x-1 group-hover:-translate-y-1" />
                                )}
                                {link.highlight && (
                                    <span className="text-4xl ml-2 group-hover:animate-float">→</span>
                                )}
                            </span>

                            {/* Ripple Effect for Highlight Button */}
                            {link.highlight && (
                                <div className="absolute inset-0 rounded-3xl bg-white/20 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-20 transition-all duration-slower" />
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
