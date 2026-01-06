import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-16 bg-black border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                {/* Gradient Divider */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent mb-12" />

                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <div className="relative h-[35px] w-[140px] transition-opacity hover:opacity-100 opacity-60">
                            <Image
                                src="/lalasweet-logo.png"
                                alt="Lalasweet Logo"
                                fill
                                className="object-contain grayscale hover:grayscale-0 transition-all duration-normal"
                            />
                        </div>
                        <p className="text-gray-500 text-sm">
                            © 2024 Lalasweet. All rights reserved.
                        </p>
                    </div>

                    <div className="flex gap-8">
                        <Link
                            href="#"
                            className="text-gray-500 hover:text-neon-blue transition-colors duration-normal text-sm font-medium hover:scale-110 transition-transform"
                        >
                            Instagram
                        </Link>
                        <Link
                            href="#"
                            className="text-gray-500 hover:text-neon-blue transition-colors duration-normal text-sm font-medium hover:scale-110 transition-transform"
                        >
                            Youtube
                        </Link>
                        <Link
                            href="#"
                            className="text-gray-500 hover:text-neon-blue transition-colors duration-normal text-sm font-medium hover:scale-110 transition-transform"
                        >
                            Blog
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
