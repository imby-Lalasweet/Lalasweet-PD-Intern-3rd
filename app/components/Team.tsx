"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const interviews = [
    {
        id: "team1",
        name: "최재원님",
        role: "영상1팀",
        icon: "/team_icon_icecream.png",
        summary: "우리는 프로젝트 목표를 달성하기 위해서 어떤 연출이 소비자의 마음을 움직일 수 있을지, 끊임없이 고민하고 있는 팀입니다.",
        content:
            "기획 단계부터 최종 송출까지,\n'내가 하고 싶은 영상'이 아닌 '소비자가 반응하는 영상'을 만들기 위해\n각자의 경험과 감각을 가진 팀원들이 함께 토론하고 실험하며 결과를 만들어가고 있습니다.\n\n" +
            '이 곳에서는 <span className="text-white font-bold">내가 만든 콘텐츠가</span> 실제로 국내 <span className="text-white font-bold">수많은 소비자들에게 도달하고, 마음을 움직이는 순간을 경험할 수 있습니다.</span>\n\n' +
            "라라스윗 영상팀은 성장에 욕심이 있고,\n스스로 질문하고 제안할 줄 아는 사람과 함께하고 싶습니다.\n\n" +
            "아직 완벽하지 않아도 괜찮아요.\n\n" +
            '다만, <span className="text-white font-bold">"왜 이렇게 해야 할까?", "다른 방법은 없을까?"</span>를 스스로 묻고,\n더 나은 답을 찾으려는 사람이라면 충분합니다!',
    },
    {
        id: "team2",
        name: "홍민석님",
        role: "영상2팀",
        icon: "/team_icon_donut.png",
        summary: "영상 2T는 우리 제품을 당장 먹고 싶게 만드는 비주얼과 스토리를 만드는 팀입니다.",
        content:
            "'어떻게 하면 고객들이 정말 맛있고, 건강한 우리 제품을 경험하게 할 수 있을까?'에 대한 고민이 가득한 사람들로 모여있습니다.\n\n" +
            "함께 하는 팀원들은\n• TVC, 미디어 커머스 업계 광고 제작, 디자인, 행사 스케치 촬영,\n전문 스튜디오 영상·사진 촬영, 대형 유튜브 총괄 담당 등\n경험 기반의 메시지를 표현하는 방식이 풍부한 전문가들이 함께 고민하며 결과를 만들고 있습니다.\n\n" +
            "고객의 마음을 사로잡을 수 있는 기획, 촬영, 편집 실력을 향상 시키고\n정석으로 배우고 싶은 욕심을 가진 PD분들을 기다립니다.",
    },
];

export default function Team() {
    const [activeTab, setActiveTab] = useState("team1");

    return (
        <section id="team" className="py-32 bg-deep-dark relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
                    <span className="gradient-text">영상팀</span>
                </h2>

                {/* Enhanced Intro Section */}
                <div className="mb-20 text-center glass-dark rounded-3xl p-10 md:p-12 hover-lift">
                    <h3 className="text-3xl md:text-4xl font-bold mb-8 text-white leading-tight">
                        "고객의 시선을 멈추고, <span className="gradient-text">마음을 움직이는 영상</span>"
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg md:text-xl max-w-3xl mx-auto">
                        저희는 단순히 '보기 좋은' 영상에 만족하지 않습니다.<br /><br />
                        3초 안에 스크롤을 멈추게 하는 <span className="text-white font-bold">후킹(Hook)</span>,<br />
                        끝까지 보게 만드는 <span className="text-white font-bold">몰입감(Immersion)</span>,<br />
                        그리고 행동하게 만드는 <span className="text-white font-bold">메시지(Message)</span>에 집중합니다.<br /><br />
                        영상 하나로 브랜드의 운명을 바꿀 수 있다고 믿는<br />
                        야망 있는 크리에이터 여러분을 기다리고 있습니다 :)
                    </p>
                </div>

                {/* Enhanced Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="glass p-1.5 rounded-full inline-flex gap-2 shadow-elevated">
                        {interviews.map((interview) => (
                            <button
                                key={interview.id}
                                onClick={() => setActiveTab(interview.id)}
                                className={`px-8 py-3 rounded-full text-base font-semibold transition-all duration-normal ${activeTab === interview.id
                                    ? "bg-neon-blue text-black shadow-glow-md scale-105"
                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                                    }`}
                            >
                                {interview.name} ({interview.role})
                            </button>
                        ))}
                    </div>
                </div>

                {/* Enhanced Content Cards */}
                <div className="min-h-[500px]">
                    {interviews.map((interview) => (
                        <div
                            key={interview.id}
                            className={`transition-all duration-slow ${activeTab === interview.id ? "block animate-fade-in-up" : "hidden"
                                }`}
                        >
                            {/* Header Card with Glassmorphism */}
                            <div className="glass-strong rounded-3xl p-10 mb-8 flex flex-col md:flex-row items-center gap-8 border border-neon-blue/20 hover-lift hover-glow group">
                                {/* Animated Icon */}
                                <div className="relative w-40 h-40 shrink-0 group-hover:scale-110 transition-transform duration-normal">
                                    <div className="absolute inset-0 bg-neon-blue/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-normal" />
                                    <Image
                                        src={interview.icon}
                                        alt={interview.name}
                                        fill
                                        className="object-contain relative z-10 drop-shadow-2xl"
                                    />
                                </div>

                                <div className="text-left flex-1">
                                    <h3 className="text-3xl font-bold mb-3 flex items-center gap-3">
                                        <span className="gradient-text">{interview.name}</span>
                                        <span className="text-lg font-medium text-gray-400">({interview.role})</span>
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed text-lg">
                                        {interview.summary}
                                    </p>
                                </div>
                            </div>

                            {/* Body Text with Enhanced Typography */}
                            <div className="px-4 md:px-10">
                                <p
                                    className="text-gray-300 leading-loose whitespace-pre-wrap text-lg md:text-xl"
                                    dangerouslySetInnerHTML={{ __html: interview.content }}
                                />

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
