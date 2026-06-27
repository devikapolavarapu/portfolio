export default function Leadership() {
  const cards = [
    {
      organization: "VRS ACM SIGSPATIAL",
      role: "Chairperson",
      period: "May 2025 – Present",
      badge: "Leadership",
      bullets: [
        "Lead the student chapter by organizing technical events and workshops.",
        "Coordinate team activities, event planning and student engagement initiatives."
      ],
      tech: ["Leadership", "Event Management", "Team Coordination", "Student Engagement", "Student Chapter"]
    },
    {
      organization: "National Service Scheme (NSS)",
      role: "Report Writer",
      period: "Aug 2024 – Present",
      badge: "Volunteer",
      bullets: [
        "Prepare reports documenting community service activities and outreach programs.",
        "Coordinate documentation for campus initiatives and NSS events.",
        "Support communication and reporting for social impact activities."
      ],
      tech: ["Documentation", "Communication", "Teamwork", "Community Service"]
    },
    {
      organization: "McKinsey & Company",
      role: "Forward Program Graduate",
      period: "Sep 2025 – Dec 2025",
      badge: "Professional Program",
      bullets: [
        "Completed McKinsey Forward, a global professional development program.",
        "Strengthened structured problem solving, communication and leadership skills.",
        "Applied business frameworks through practical learning modules and case exercises."
      ],
      tech: ["Problem Solving", "Leadership", "Communication", "Business Strategy"]
    },
    {
      organization: "VRSEC ACM Student Chapter",
      role: "Member",
      period: "May 2025 – Present",
      badge: "Membership",
      bullets: [
        "Participate in technical sessions, workshops and coding activities.",
        "Engage with peers through collaborative learning and chapter initiatives."
      ],
      tech: ["ACM", "Learning", "Networking"]
    },
    {
      organization: "VRS ACM-W",
      role: "Member",
      period: "May 2025 – Present",
      badge: "Membership",
      bullets: [
        "Participate in activities supporting women in technology.",
        "Attend technical events, workshops and community initiatives."
      ],
      tech: ["ACM-W", "Community", "Networking", "Women in Tech"]
    }
  ]

  return (
    <section
      id="leadership"
      className="reveal py-24 px-6"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-white">
        Leadership & Activities
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
                </div>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-zinc-800 text-zinc-300 border border-zinc-700/50 self-start">
                {card.badge}
              </span>
            </div>

            <ul className="list-disc pl-5 space-y-2 text-zinc-400 text-sm mb-6 leading-relaxed">
              {card.bullets.map((bullet, bIndex) => (
                <li key={bIndex}>{bullet}</li>
              ))}
            </ul>

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
          </div>
        ))}
      </div>
    </section>
  )
}
