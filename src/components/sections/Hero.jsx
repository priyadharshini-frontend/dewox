import Earth from '../uilayouts/Earth'

export const Hero = () => {
  return (
   <>
      <div className="relative min-h-screen overflow-hidden bg-[#071629]">
        <div className="pointer-events-none absolute inset-0 z-0 " />
        <Earth
          className="pointer-events-none absolute left-1/2 top-[58%] z-0 h-[min(82vw,680px)] w-[min(82vw,680px)] -translate-x-1/2 -translate-y-1/2 opacity-50 md:top-[56%]"
        />
        <article className="relative z-10 mx-auto grid max-w-5xl gap-5 px-5 pt-20 text-center text-white md:pt-28">
       
          <span
            data-aos="fade-down"
            data-aos-duration="700"
            className="mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-[#3273ff]/40 bg-[#0f1c35]/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#9fc1ff]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#5d91ff] shadow-[0_0_12px_#5d91ff]" />
            Built for what is next
          </span>
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
            className="font-heading mx-auto max-w-4xl text-5xl font-bold leading-[1.02] tracking-[-0.02em] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] md:text-7xl"
          >
            Engineering the{' '}
            <span className="text-[var(--primary)]">
              digital backbone
            </span>{' '}
            of tomorrow&apos;s businesses
          </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
          className="font-body mx-auto max-w-[60ch] text-center text-base leading-7 text-slate-200 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] md:text-lg"
        >
          dewOX designs distinctive brands, builds scalable web and mobile
          products, and deploys autonomous AI agents that work for you
          around the clock.
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="800"
          className="flex flex-wrap justify-center gap-3 pt-2"
        >
          <a
            href="#contact"
            className="rounded-full bg-[var(--primary)] px-7 py-3.5 text-sm font-semibold text-[#17120a] shadow-[0_10px_30px_rgba(242,198,109,0.22)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#ffda87] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f2c66d]"
          >
            Book Project Consultation
          </a>
          <a
            href="#services"
            className="rounded-full border-4 border-[var(--primary)]/40  px-7 py-3.5 text-sm font-medium text-white transition duration-200 hover:-translate-y-0.5 hover:border-[#9fc1ff]/70 hover:bg-white/[0.09] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9fc1ff]"
          >
            Explore Our Work
          </a>
        </div>
        </article>
      </div>
   </>
  )
}

export default Hero

