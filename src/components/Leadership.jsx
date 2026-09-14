export default function Leadership() {
  const cards = [
    {
      organization: "Cohere Labs",
      role: "ML Summer School Participant",
      period: "Jul 2026 – Aug 2026",
      badge: "Apprenticeship",
      location: "Remote",
      bullets: [
        "Participated in Cohere Labs ML Summer School."
      ],
      tech: ["Machine Learning", "AI"]
    },
    {
      organization: "GirlScript Summer of Code",
      role: "Open Source, AI Agents Contributor",
      period: "May 2026 – Aug 2026",
      badge: "Internship",
      location: "Remote",
      bullets: [
        "Contributed to open-source projects with a focus on AI agents.",
        "Collaborated with mentors and contributors using Git and GitHub."
      ],
      tech: ["Git", "GitHub", "Open Source", "AI Agents"]
    },
    {
      organization: "Infosys Springboard – Pragati",
      role: "Infosys Springboard – Pragati: Path to Future Cohort 6 Participant",
      period: "Jul 2025 – Nov 2025",
      badge: "Program",
      bullets: [
        "Participated in the Pragati: Path to Future Cohort 6 program."
      ],
      tech: ["Python", "Full Stack"]
    }
  ]

  return (
    <section
      id="leadership"
      className="reveal py-24 px-6"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-white">
        Training & Open Source
      </h2>

      <div className="w-full max-w-5xl mx-auto space-y-8">
        {cards.map((card, i) => (
          <div
            key={i}
            className="w-full card p-8 rounded-xl bg-zinc-900/10 backdrop-blur-sm border border-zinc-800 hover:border-amber-500 transition duration-300"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
              <div>
                <h3 className="text-xl font-bold text-zinc-100">{card.organization}</h3>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-0.5">
                  <span className="text-amber-400 font-medium text-sm">{card.role}</span>
                  <span className="text-zinc-600 text-xs">•</span>
                  <span className="text-zinc-400 text-xs">{card.period}</span>
                  {card.location && (
                    <>
                      <span className="text-zinc-600 text-xs">•</span>
                      <span className="text-zinc-500 text-xs">{card.location}</span>
                    </>
                  )}
                </div>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-zinc-800 text-zinc-300 border border-zinc-700/50 self-start">
                {card.badge}
              </span>
            </div>

            {card.bullets && card.bullets.length > 0 && (
              <ul className="list-disc pl-5 space-y-2 text-zinc-400 text-sm mb-6 leading-relaxed">
                {card.bullets.map((bullet, bIndex) => (
                  <li key={bIndex}>{bullet}</li>
                ))}
              </ul>
            )}

            {card.tech && card.tech.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {card.tech.map((techName, tIndex) => (
                  <span
                    key={tIndex}
                    className="text-xs px-2 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-zinc-900 font-mono"
                  >
                    {techName}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
