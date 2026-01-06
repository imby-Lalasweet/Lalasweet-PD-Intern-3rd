"use client";

import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "필수 제출 서류는 무엇인가요?",
        answer: "영상 PD 인턴십 3기 채용은 아래 2가지 서류를 필수 제출 서류로 받고 있습니다.\n\n1. 자유 양식의 이력서\n2. 영상 포트폴리오 (본인의 기획/촬영/편집 기여도 명시 필수)\n\n포트폴리오는 영상 파일 원본보다는, URL 링크나 노션, PDF 형태로 정리하여 제출해주시는 것을 권장합니다. 단순 영상 링크 나열보다는, '어떤 의도로 기획했고, 어떤 부분(촬영/편집 등)을 담당했는지' 상세히 적어주시면 좋습니다."
    },
    {
        question: "사전 과제는 어떻게 진행되나요?",
        answer: "사전 과제는 서류 합격자를 대상으로 진행되며, 라라스윗의 제품을 활용한 숏폼 영상을 기획/제작하는 형태입니다.\n\n구체적인 가이드는 서류 합격 발표와 함께 메일로 안내드리며, 제작 기간은 약 3일 정도 부여됩니다. 여러분의 센스와 편집 감각을 마음껏 보여주세요!"
    },
    {
        question: "휴학생도 지원이 가능한가요?",
        answer: "본 채용은 채용전환형 인턴십 프로그램으로, '인턴 수습 후 정규직 전환에 어려움이 없는 지원자'를 대상으로 하고 있습니다.\n\n따라서 재학/휴학 상태와 관계없이, 위 전환형 프로세스로 정식 입사가 가능한 분이라면 채용지원이 가능합니다."
    },
    {
        question: "사용하는 장비나 툴 제한이 있나요?",
        answer: "특별한 제한은 없으나, 실무에서는 Adobe Premiere Pro와 After Effects를 주력으로 사용하고 있습니다.\n\n따라서 어도비 툴 활용이 능숙하신 분을 우대하며, 사내 업무 환경 역시 Mac 기반의 어도비 풀 패키지를 지원하고 있습니다."
    },
    {
        question: "지원 결과는 합불여부 관계 없이 모두 안내 받을 수 있나요?",
        answer: "네, 각 전형별 결과는 메일 통해 일괄 안내 드릴 예정입니다.\n\n많은 관심 부탁 드리며, 추가적인 문의사항은 recruit@lalasweet.kr 로 문의 부탁 드립니다."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-32 bg-black relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-neon-blue/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
                    <span className="gradient-text">FAQ</span>
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl overflow-hidden border transition-all duration-normal ${openIndex === index
                                ? "bg-zinc-900 border-neon-blue/50 shadow-glow-sm"
                                : "glass-strong border-white/10 hover:border-white/30"
                                }`}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between p-8 text-left hover:bg-white/5 transition-colors group"
                            >
                                <span className={`text-xl font-bold transition-colors ${openIndex === index ? "text-neon-blue" : "text-white group-hover:text-neon-blue"
                                    }`}>
                                    Q. {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-neon-blue" : "group-hover:text-white"
                                        }`}
                                />
                            </button>
                            <div
                                ref={el => { contentRefs.current[index] = el }}
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="p-8 pt-0 text-gray-300 leading-relaxed whitespace-pre-line text-lg">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
