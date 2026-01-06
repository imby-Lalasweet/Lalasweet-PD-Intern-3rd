"use client";

import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

const jobs = [
    {
        title: "SNS 숏폼 광고 콘텐츠 기획 및 제작",
        items: [
            "인스타그램 릴스, 틱톡, 유튜브 쇼츠 등 숏폼 광고를 기획하고 제작합니다.",
            "고객의 시선을 3초 안에 사로잡는 후킹 요소를 연구하고 영상에 적용합니다.",
            "광고 집행 데이터를 분석하여, 소재의 효율을 높이는 개선 작업을 수행합니다.",
        ],
    },
    {
        title: "바이럴 영상 콘텐츠 제작",
        items: [
            "유튜브 등 SNS 채널에서 바이럴 될 수 있는 브랜딩 영상을 기획하고 제작합니다.",
            "웹 예능, 스케치 코미디, 다큐멘터리 등 다양한 포맷의 콘텐츠를 시도합니다.",
            "브랜드 메시지를 효과적으로 전달하며 팬덤을 형성하는 콘텐츠를 만듭니다.",
        ],
    },
];

const commonRequirements = [
    "인턴십 수료 후 정규직 입사가 가능하신 분",
    "Adobe 프로그램 (Premiere Pro, After Effects, Photoshop, Illustrator) 활용이 능숙하신 분",
    "미러리스 이상 등급의 카메라 오퍼레이팅이 가능하신 분 (촬영 조명/오디오 셋팅 포함)",
    "기획, 촬영, 편집 등 영상 제작 전반의 프로세스 경험을 보유하신 분",
    "숏폼 콘텐츠(릴스, 틱톡, 쇼츠) 제작 경험을 보유하신 분",
];

const commonPreferences = [
    "목표 설정 및 파달성을 위한 구체적인 액션 아이템 정리가 가능하신 분",
    "숏폼 제작을 통해 정량적 성과(조회수, 도달률, 전환 등)를 달성해본 경험이 있으신 분",
    "효율 및 데이터 지표 분석을 통해 제작물을 주도적으로 개선해본 경험이 있으신 분",
    "SNS 숏폼 콘텐츠를 수시로 확인하며, 최신 트렌드와 밈(Meme)을 섭렵하고 게신 분",
];

export default function JobDescription() {
    const [openIndices, setOpenIndices] = useState<number[]>([0, 1]);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

    const toggleAccordion = (index: number) => {
        setOpenIndices(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    return (
        <section id="jd" className="py-32 bg-black relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
                    <span className="gradient-text">Job Description</span>
                </h2>

                <div className="space-y-6">
                    {jobs.map((job, index) => (
                        <div key={index} className="rounded-3xl overflow-hidden glass-strong border border-white/10 hover-lift hover-glow transition-all duration-normal">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between p-8 text-left hover:bg-white/5 transition-all duration-normal group"
                            >
                                <span className="text-2xl font-bold text-white group-hover:text-neon-blue transition-colors">{job.title}</span>
                                <ChevronDown
                                    className={`w-7 h-7 text-neon-blue transform transition-all duration-normal group-hover:scale-110 ${openIndices.includes(index) ? "rotate-180" : ""}`}
                                />
                            </button>
                            <div
                                ref={el => { contentRefs.current[index] = el }}
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndices.includes(index) ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                            >
                                <div className="p-6 pt-0">
                                    <ul className="space-y-3 text-gray-300 list-disc pl-5 leading-relaxed">
                                        {job.items.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="glass-strong p-10 rounded-3xl border border-white/10 hover-lift hover-glow transition-all duration-normal">
                        <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="w-1.5 h-8 bg-neon-blue rounded-full animate-pulse" />
                            자격요건
                        </h3>
                        <ul className="space-y-4 text-gray-400 list-disc pl-5 text-base leading-relaxed break-keep">
                            {commonRequirements.map((req, i) => (
                                <li key={i}>{req}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-zinc-900 p-8 rounded-xl border border-white/5">
                        <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                            <span className="w-1 h-6 bg-neon-blue rounded-full" />
                            우대사항
                        </h3>
                        <ul className="space-y-4 text-gray-400 list-disc pl-5 text-base mb-8 leading-relaxed break-keep">
                            {commonPreferences.map((pref, i) => (
                                <li key={i}>{pref}</li>
                            ))}
                        </ul>
                        <div className="bg-neon-blue/5 p-6 rounded-lg border border-neon-blue/10">
                            <p className="text-neon-blue text-sm font-medium leading-relaxed break-keep">
                                "라라스윗 영상팀은 단순히 툴을 잘 다루는 사람이 아닌, <br />
                                <span className="text-white font-bold">'영상을 통해 어떤 성과를 낼 것인가?'</span>를<br />
                                끊임없이 고민하고 증명하려는 분을 찾고 있습니다!"
                            </p>
                        </div>
                    </div>
                </div>

                {/* Working Conditions */}
                <div className="mt-12 bg-zinc-900 p-8 rounded-xl text-center border border-white/5">
                    <h4 className="text-white font-bold mb-4 text-xl">근무 조건</h4>
                    <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-gray-400 text-base">
                        <span className="flex items-center justify-center gap-2">
                            <span className="w-1.5 h-1.5 bg-neon-blue rounded-full" />
                            급여 수준 : 월 220만원 (세전)
                        </span>
                        <span className="flex items-center justify-center gap-2">
                            <span className="w-1.5 h-1.5 bg-neon-blue rounded-full" />
                            근무 시간 : 월-금 09:00 ~ 18:00 (휴게시간 포함)
                        </span>
                    </div>
                    <p className="text-gray-500 text-base mt-4">
                        서울시 강남구 영동대로 333 (삼성역 도보 9분 거리 위치)
                    </p>
                </div>
            </div>
        </section>
    );
}
