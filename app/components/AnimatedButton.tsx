"use client";

import { useRef, useState, MouseEvent } from "react";

interface AnimatedButtonProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    magnetic?: boolean;
    className?: string;
}

export default function AnimatedButton({
    children,
    href,
    onClick,
    variant = "primary",
    size = "md",
    magnetic = true,
    className = "",
}: AnimatedButtonProps) {
    const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
    const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

    // Magnetic effect on mouse move
    const handleMouseMove = (e: MouseEvent) => {
        if (!magnetic || !buttonRef.current) return;

        const rect = buttonRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        const distance = Math.sqrt(x * x + y * y);
        const maxDistance = 50;

        if (distance < maxDistance) {
            const strength = (maxDistance - distance) / maxDistance;
            const offsetX = x * strength * 0.3;
            const offsetY = y * strength * 0.3;

            buttonRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        }
    };

    const handleMouseLeave = () => {
        if (!buttonRef.current) return;
        buttonRef.current.style.transform = "translate(0px, 0px)";
    };

    // Ripple effect on click
    const createRipple = (e: MouseEvent) => {
        if (!buttonRef.current) return;

        const rect = buttonRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const id = Date.now();

        setRipples((prev) => [...prev, { x, y, id }]);

        setTimeout(() => {
            setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
        }, 600);

        if (onClick) onClick();
    };

    // Base styles
    const baseStyles =
        "relative inline-flex items-center justify-center font-semibold overflow-hidden transition-all duration-normal ease-smooth";

    // Size variants
    const sizeStyles = {
        sm: "px-4 py-2 text-sm rounded-lg",
        md: "px-6 py-3 text-base rounded-xl",
        lg: "px-8 py-4 text-lg rounded-2xl",
    };

    // Color variants
    const variantStyles = {
        primary:
            "bg-neon-blue text-black hover:shadow-glow-md hover:scale-105 active:scale-95",
        secondary:
            "bg-white/10 text-white hover:bg-white/20 hover:shadow-elevated hover:scale-105 active:scale-95 backdrop-blur-sm border border-white/20",
        outline:
            "bg-transparent text-neon-blue border-2 border-neon-blue hover:bg-neon-blue/10 hover:shadow-glow-sm hover:scale-105 active:scale-95",
    };

    const Component = href ? "a" : "button";
    const props = href ? { href } : { onClick: createRipple };

    return (
        <Component
            ref={buttonRef as any}
            className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            {children}

            {/* Ripple effects */}
            {ripples.map((ripple) => (
                <span
                    key={ripple.id}
                    className="absolute rounded-full bg-white/30 pointer-events-none animate-ripple"
                    style={{
                        left: ripple.x,
                        top: ripple.y,
                        width: 20,
                        height: 20,
                        marginLeft: -10,
                        marginTop: -10,
                    }}
                />
            ))}
        </Component>
    );
}
