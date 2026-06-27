export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center px-6 text-white"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-tight mb-6 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
          Devika Polavarapu
        </h1>
        <p className="text-lg md:text-2xl text-amber-400 font-medium tracking-wide mb-12">
          AI &bull; Software Engineering &bull; Full Stack Developer
        </p>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-3xl mx-auto mt-8">
          <a
            href="#home"
            className="px-5 py-2.5 bg-zinc-900/40 hover:bg-amber-950/20 text-zinc-300 hover:text-amber-400 rounded-full border border-zinc-800 hover:border-amber-500/50 backdrop-blur-sm transition-all duration-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            Home
          </a>
          <a
            href="#about"
            className="px-5 py-2.5 bg-zinc-900/40 hover:bg-amber-950/20 text-zinc-300 hover:text-amber-400 rounded-full border border-zinc-800 hover:border-amber-500/50 backdrop-blur-sm transition-all duration-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            About
          </a>
          <a
            href="#experience"
            className="px-5 py-2.5 bg-zinc-900/40 hover:bg-amber-950/20 text-zinc-300 hover:text-amber-400 rounded-full border border-zinc-800 hover:border-amber-500/50 backdrop-blur-sm transition-all duration-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            Experience
          </a>
          <a
            href="#leadership"
            className="px-5 py-2.5 bg-zinc-900/40 hover:bg-amber-950/20 text-zinc-300 hover:text-amber-400 rounded-full border border-zinc-800 hover:border-amber-500/50 backdrop-blur-sm transition-all duration-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            Leadership
          </a>
          <a
            href="#projects"
            className="px-5 py-2.5 bg-zinc-900/40 hover:bg-amber-950/20 text-zinc-300 hover:text-amber-400 rounded-full border border-zinc-800 hover:border-amber-500/50 backdrop-blur-sm transition-all duration-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="px-5 py-2.5 bg-zinc-900/40 hover:bg-amber-950/20 text-zinc-300 hover:text-amber-400 rounded-full border border-zinc-800 hover:border-amber-500/50 backdrop-blur-sm transition-all duration-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 bg-zinc-900/40 hover:bg-amber-950/20 text-zinc-300 hover:text-amber-400 rounded-full border border-zinc-800 hover:border-amber-500/50 backdrop-blur-sm transition-all duration-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            Contact
          </a>
          <a
            href="/Devika_Polavarapu_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-white rounded-full border border-amber-500 hover:border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.4)] hover:shadow-[0_0_25px_rgba(245,158,11,0.6)] backdrop-blur-sm transition-all duration-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-black animate-pulse"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  )
}