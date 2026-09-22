import logo from '../../assets/images/logo.png'
import { Liquid } from '../uilayouts/liquid-gradient'
import { Menu, X, Send } from 'lucide-react'
import { useState } from 'react'

export const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const links = [
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Work', href: '#work' },
        { label: 'Process', href: '#process' },
        { label: 'Why Us', href: '#trust' },
    ]

  return (
        <nav className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
            <div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-between  px-3 py-2 sm:px-4 md:px-8 bg-white rounded-2xl">
                <a
                    href="#home"
                    aria-label="dewOX home"
                    className="logo flex items-center rounded-lg p-2 shadow-[0_0_18px_rgba(255,255,255,0.08)]"
                >
                    <img src={logo} alt="dewOX" className="h-7 w-auto object-contain sm:h-8" />
                </a>

                <div className="hidden md:block">
                    <div className="flex gap-8 md:gap-10">
                        {links.map((link) => (
                            <a key={link.label} href={link.href} className="relative inline-flex items-center text-sm font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:text-[var(--primary)] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[var(--primary)] after:transition-transform after:duration-300 hover:after:scale-x-100">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="hidden md:block">
                    <a
                        href="mailto:info@dewoxsolution.com"
                        className="group relative isolate inline-flex h-10 w-40 items-center justify-center overflow-hidden rounded-full border border-[#6f9cff]/70 bg-[var(--primary)] px-3.5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(52,110,236,0.35)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#4d82f2] hover:shadow-[0_12px_30px_rgba(52,110,236,0.5)] focus:outline-none focus:ring-2 focus:ring-[#9fc1ff] focus:ring-offset-2 focus:ring-offset-[#07101f] active:translate-y-0"
                    >
                        <Liquid />
                        <span className="relative z-10 flex items-center gap-1.5 font-bold">
                            <Send className="h-4 w-4" />
                            Get In Touch
                        </span>
                    </a>
                </div>

                <button
                    type="button"
                    aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen((open) => !open)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 text-black transition-colors hover:bg-black/5 md:hidden"
                >
                    {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>

                {isMenuOpen && (
                    <div className="basis-full border-t border-black/10 pt-3 md:hidden">
                        <div className="flex flex-col gap-1">
                            {links.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-black/75 transition-colors hover:bg-black/5 hover:text-[var(--primary)]"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="mailto:info@dewoxsolution.com"
                                onClick={() => setIsMenuOpen(false)}
                                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-4 py-2.5 text-center text-sm font-semibold text-white"
                            >
                                <Send className="h-4 w-4" />
                                Contact
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
