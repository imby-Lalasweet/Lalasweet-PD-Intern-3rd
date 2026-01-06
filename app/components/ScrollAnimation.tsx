"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationProps {
    children: React.ReactNode;
    className?: string;
    stagger?: number;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    toggleActions?: string;
    scale?: boolean;
    parallax?: boolean;
    rotate?: boolean;
}

export default function ScrollAnimation({
    children,
    className = "",
    stagger = 0,
    delay = 0,
    direction = "up",
    toggleActions = "play none none none",
    scale = false,
    parallax = false,
    rotate = false,
}: ScrollAnimationProps) {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const element = ref.current;
        if (!element) return;

        const xOffset = direction === "left" ? 50 : direction === "right" ? -50 : 0;
        const yOffset = direction === "up" ? 50 : direction === "down" ? -50 : 0;

        // If there are children elements to stagger (e.g., list items), target them.
        // Otherwise, animate the container itself.
        const targets = stagger > 0 ? element.children : element;

        const animationProps: gsap.TweenVars = {
            x: xOffset,
            y: yOffset,
            opacity: 0,
            duration: 1.2,
            delay: delay,
            stagger: stagger,
            ease: "power3.out",
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: toggleActions,
            },
        };

        // Add scale animation if enabled
        if (scale) {
            animationProps.scale = 0.8;
        }

        // Add rotation if enabled
        if (rotate) {
            animationProps.rotation = direction === "left" ? -15 : direction === "right" ? 15 : 0;
        }

        gsap.from(targets, animationProps);

        // Parallax effect for the element itself
        if (parallax) {
            gsap.to(element, {
                y: -30,
                ease: "none",
                scrollTrigger: {
                    trigger: element,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
            });
        }
    }, { scope: ref });

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}
