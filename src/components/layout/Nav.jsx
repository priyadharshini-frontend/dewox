import logo from '../../assets/images/logo.png'
import { Liquid } from '../uilayouts/liquid-gradient'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const links = ['Home', 'About', 'Why choose', 'Help']

  return (
        <nav className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
            <div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-between rounded-xl border border-white/10 bg-[#071629]/85 px-3 py-2 shadow-[0_10px_30px_rgba(7,22,41,0.55)] backdrop-blur-md sm:px-4 md:px-8">
                <div className="logo flex items-center rounded-lg bg-white/5 p-2 shadow-[0_0_18px_rgba(255,255,255,0.08)]">
                    <img src={logo} alt="logo" className="h-7 w-auto object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.6)] brightness-110 contrast-125 sm:h-8" />
                </div>

                <div className="hidden md:block">
                    <div className="flex gap-8 md:gap-10">
                        {links.map((link) => (
                            <a key={link} href="#" className="relative inline-flex items-center text-sm font-medium text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:text-[#9fc1ff] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[#9fc1ff] after:transition-transform after:duration-300 hover:after:scale-x-100">
                                {link}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="hidden md:block">
        <button
        type="button"
        className="group relative isolate inline-flex h-10 w-32 items-center justify-center overflow-hidden rounded-full border border-[#6f9cff]/70 bg-[var(--primary)] px-3.5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(52,110,236,0.35)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#4d82f2] hover:shadow-[0_12px_30px_rgba(52,110,236,0.5)] focus:outline-none focus:ring-2 focus:ring-[#9fc1ff] focus:ring-offset-2 focus:ring-offset-[#07101f] active:translate-y-0"
    >
       <Liquid/>
        <span className="relative z-10 font-bold">Contact</span>


    </button>
                </div>

                <button
                    type="button"
                    aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen((open) => !open)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white transition-colors hover:bg-white/10 md:hidden"
                >
                    {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>

                {isMenuOpen && (
                    <div className="basis-full border-t border-white/10 pt-3 md:hidden">
                        <div className="flex flex-col gap-1">
                            {links.map((link) => (
                                <a
                                    key={link}
                                    href="#"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-[#9fc1ff]"
                                >
                                    {link}
                                </a>
                            ))}
                            <a
                                href="mailto:hello@dewox.com"
                                onClick={() => setIsMenuOpen(false)}
                                className="mt-2 rounded-full bg-[var(--primary)] px-4 py-2.5 text-center text-sm font-semibold text-white"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
