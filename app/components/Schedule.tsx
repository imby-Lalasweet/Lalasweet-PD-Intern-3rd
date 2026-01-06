"use client";

import { useState, useEffect } from "react";
import ScrollAnimation from "./ScrollAnimation";

const scheduleItems = [
    { date: "11/7(금) ~ 11/30(일)", title: "서류 접수", startDate: "2025-11-07", endDate: "2025-11-30", active: false },
    { date: "12/3(수) 오후 2시", title: "서류 합격자 발표", startDate: "2025-12-03", endDate: "2025-12-03", active: false },
    { date: "12/5(금) ~ 12/7(일)", title: "사전 과제 (Online)", startDate: "2025-12-05", endDate: "2025-12-07", active: false },
    { date: "12/9(화) 오후 2시", title: "과제 합격자 발표", startDate: "2025-12-09", endDate: "2025-12-09", active: false },
    { date: "12/11(목) ~ 12/12(금)", title: "대면 인터뷰", startDate: "2025-12-11", endDate: "2025-12-12", active: false },
    { date: "12/16(화) 오후 2시", title: "최종 합격자 발표", startDate: "2025-12-16", endDate: "2025-12-16", active: false },
    { date: "12/22(월) ~ 3/20(금)", title: "인턴 기간", startDate: "2025-12-22", endDate: "2026-03-20", highlight: true, active: false },
];

export default function Schedule() {
    const [items, setItems] = useState(scheduleItems);

    useEffect(() => {
        const checkActiveStatus = () => {
            const now = new Date();
            // 한국 시간(KST) 기준으로 현재 날짜 계산 (UTC+9)
            const kstOffset = 9 * 60 * 60 * 1000;
            const utc = now.getTime() + (now.getTimezoneOffset() * 60 * 1000);
            const kstDate = new Date(utc + kstOffset);
            const today = kstDate.toISOString().split('T')[0]; // Format YYYY-MM-DD for comparison

            const updatedItems = scheduleItems.map(item => {
                const start = item.startDate;
                const end = item.endDate;

                // 날짜 범위 내에 있거나, 당일인 경우 active 처리
                const isActive = today >= start && today <= end;

                return { ...item, active: isActive };
            });
            setItems(updatedItems);
        };

        checkActiveStatus();
        // 매 분마다 상태 체크 (선택사항)
        const interval = setInterval(checkActiveStatus, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="schedule" className="py-32 bg-deep-dark relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-blue/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-20 text-center">
                    <span className="gradient-text">Recruitment Schedule</span>
                </h2>

                <div className="relative">
                    {/* Vertical Line with Gradient - Hidden on mobile, visible on desktop */}
                    <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-transparent via-neon-blue/50 to-transparent -ml-px z-0" />

                    <div className="space-y-12 relative z-10">
                        {items.map((item, index) => (
                            <ScrollAnimation
                                key={index}
                                className={`relative flex items-center md:justify-between ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                                stagger={index * 0.1}
                                direction={index % 2 === 0 ? "left" : "right"}
                            >
                                {/* Dot Indicator - Hidden on mobile, visible on desktop */}
                                <div className="hidden md:flex absolute left-1/2 w-10 h-10 items-center justify-center -ml-5 z-10">
                                    <div className={`w-4 h-4 rounded-full border-2 transition-all duration-normal ${item.active || item.highlight
                                        ? "bg-neon-blue border-neon-blue shadow-[0_0_15px_rgba(0,199,242,0.6)] scale-125 animate-pulse"
                                        : "bg-black border-gray-600"
                                        }`} />
                                </div>

                                {/* Content Card */}
                                <div className={`w-full md:w-[45%] p-6 rounded-2xl border transition-all duration-normal hover-lift relative z-20 ${item.highlight
                                    ? "bg-neon-blue/10 border-neon-blue/50 shadow-glow-sm"
                                    : "glass-strong border-white/10 hover:border-white/30"
                                    }`}>
                                    <div className={`text-sm font-bold mb-2 flex items-center gap-2 ${item.active || item.highlight ? "text-neon-blue" : "text-gray-500"
                                        }`}>
                                        {/* Mobile Active Indicator - Always render to maintain alignment */}
                                        <span className={`md:hidden w-2 h-2 rounded-full flex-shrink-0 ${item.active || item.highlight ? "bg-neon-blue animate-pulse" : "bg-transparent"}`} />
                                        {item.date}
                                    </div>
                                    <div className={`text-xl font-bold ${item.active || item.highlight ? "text-white" : "text-gray-400"
                                        }`}>
                                        {item.title}
                                    </div>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
