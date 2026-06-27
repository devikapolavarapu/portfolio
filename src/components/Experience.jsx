export default function Experience() {

  const experiences = [
    {
      company: "GirlScript Summer of Code",
      role: "Open Source & AI Contributor",
      period: "May 2026 – Present",
      badge: "Open Source",
      bullets: [
        "Contributing to open-source repositories by resolving issues and submitting pull requests.",
        "Collaborating with mentors and contributors using Git and GitHub.",
        "Working on AI and software engineering related projects."
      ],
      tech: ["Git", "GitHub", "Open Source", "Collaboration"]
    },
    {
      company: "EduSkills Academy",
      role: "DevOps & Cloud Automation Intern",
      period: "Apr 2026 – Jun 2026",
      badge: "Internship",
      bullets: [
        "Completed an 8-week virtual internship focused on cloud-native engineering.",
        "Worked with Docker,and GitHub Actions.",
        "Learned Infrastructure as Code, CI/CD pipelines and cloud automation fundamentals."
      ],
      tech: ["Docker", "GitHub Actions"]
    },
    {
      company: "EduSkills Foundation",
      role: "Java Full Stack Intern",
      period: "Dec 2025 – Mar 2026",
      badge: "Internship",
      bullets: [
        "Built full-stack applications using Java and Spring Boot.",
        "Developed REST APIs and integrated frontend with backend.",
        "Worked with MySQL and backend application development."
      ],
      tech: ["Java", "Spring Boot", "REST APIs", "MySQL", "HTML", "CSS"]
    },
    {
      company: "Infosys Springboard",
      role: "Python Full Stack Development Intern",
      period: "Sep 2025 – Nov 2025",
      badge: "Internship",
      bullets: [
        "Built backend modules using Python and SQL.",
        "Developed REST APIs and integrated structured database operations.",
        "Tested and debugged application modules to improve reliability."
      ],
      tech: ["Python", "SQL", "REST APIs", "HTML", "CSS"]
    },
    {
      company: "Vodafone VOIS (EDUNET)",
      role: "Data Analytics Intern",
      period: "Sep 2025 – Oct 2025",
      badge: "Internship",
      bullets: [
        "Performed exploratory data analysis using Python and SQL.",
        "Built dashboards and analytical reports.",
        "Worked with data preprocessing and visualization."
      ],
      tech: ["Python", "Pandas", "NumPy", "SQL", "Data Analytics"]
    }
  ]

  return (
<section
  id="experience"
  className="reveal py-24 px-6"
>
  <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-white">
    Experience
  </h2>

  <div className="w-full max-w-5xl mx-auto space-y-8">
    {experiences.map((exp, i) => (
      <div
        key={i}
        className="w-full card p-8 rounded-xl bg-zinc-900/10 backdrop-blur-sm border border-zinc-800 hover:border-amber-500 transition duration-300"
      >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
              <div>
                <h3 className="text-xl font-bold text-zinc-100">{exp.company}</h3>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-0.5">
                  <span className="text-amber-400 font-medium text-sm">{exp.role}</span>
                  <span className="text-zinc-600 text-xs">•</span>
                  <span className="text-zinc-400 text-xs">{exp.period}</span>
                </div>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-zinc-800 text-zinc-300 border border-zinc-700/50 self-start">
                {exp.badge}
              </span>
            </div>

            <ul className="list-disc pl-5 space-y-2 text-zinc-400 text-sm mb-6 leading-relaxed">
              {exp.bullets.map((bullet, bIndex) => (
                <li key={bIndex}>{bullet}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5">
              {exp.tech.map((techName, tIndex) => (
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

