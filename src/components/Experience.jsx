export default function Experience() {

  const experiences = [
    {
      company: "Cohere Labs",
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
      company: "GirlScript Summer of Code",
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
      company: "EduSkills Academy",
      role: "DevOps & Cloud Automation Intern",
      period: "Apr 2026 – Jun 2026",
      badge: "Internship",
      location: "Remote",
      bullets: [
        "Completed an 8-week virtual internship focused on cloud-native engineering.",
        "Worked with Docker and GitHub Actions.",
        "Learned Infrastructure as Code, CI/CD pipelines and cloud automation fundamentals."
      ],
      tech: ["Docker", "GitHub Actions", "DevOps"]
    },
    {
      company: "upSkill Campus",
      role: "Data Science & Machine Learning Intern",
      period: "Mar 2026 – May 2026",
      badge: "Internship",
      location: "Remote",
      bullets: [
        "Completed Data Science and Machine Learning virtual internship."
      ],
      tech: ["Data Science", "Machine Learning", "Python"]
    },
    {
      company: "EduSkills Foundation",
      role: "Java Full Stack Intern",
      period: "Dec 2025 – Mar 2026",
      badge: "Internship",
      location: "Remote",
      bullets: [
        "Built full-stack applications using Java and Spring Boot.",
        "Developed REST APIs and integrated frontend with backend.",
        "Worked with MySQL and backend application development."
      ],
      tech: ["Java", "Spring Boot", "REST APIs", "MySQL"]
    },
    {
      company: "McKinsey & Company",
      role: "McKinsey Forward Program Participant",
      period: "Sep 2025 – Dec 2025",
      badge: "Program",
      location: "Remote",
      bullets: [
        "Participated in McKinsey's Forward Program focused on practical, leadership and digital skills."
      ],
      tech: ["Leadership", "Digital Skills", "Problem Solving"]
    },
    {
      company: "Infosys Springboard",
      role: "Python Full Stack Intern",
      period: "Sep 2025 – Nov 2025",
      badge: "Internship",
      location: "Remote",
      bullets: [
        "Built backend modules using Python and SQL.",
        "Developed REST APIs and integrated structured database operations.",
        "Tested and debugged application modules to improve reliability."
      ],
      tech: ["Python", "SQL", "REST APIs"]
    },
    {
      company: "Infosys Springboard",
      role: "Infosys Springboard – Pragati: Path to Future Cohort 6 Participant",
      period: "Jul 2025 – Nov 2025",
      badge: "Program",
      bullets: [
        "Participated in the Pragati: Path to Future Cohort 6 program."
      ],
      tech: ["Python", "Full Stack"]
    },
    {
      company: "Vodafone",
      role: "Data Analyst Intern",
      period: "Sep 2025 – Oct 2025",
      badge: "Internship",
      location: "Remote",
      bullets: [
        "Performed exploratory data analysis using Python and SQL.",
        "Built dashboards and analytical reports.",
        "Worked with data preprocessing and visualization."
      ],
      tech: ["Python", "Pandas", "NumPy", "SQL", "Data Analytics"]
    },
    {
      company: "VRS ACM SIGSPATIAL",
      role: "VRS ACM SIGSPATIAL Chairperson",
      period: "May 2025 – Aug 2026",
      badge: "Leadership",
      bullets: [
        "Led and coordinated student activities, technical initiatives and team-based events related to ACM SIGSPATIAL."
      ],
      tech: ["Leadership", "ACM SIGSPATIAL"]
    },
    {
      company: "VRS ACM-W",
      role: "Member",
      period: "May 2025 – Aug 2026",
      badge: "Member",
      bullets: [
        "Active member of VRS ACM-W chapter."
      ],
      tech: ["ACM-W"]
    },
    {
      company: "VRSEC ACM Student Chapter",
      role: "Member",
      period: "May 2025 – Aug 2026",
      badge: "Member",
      bullets: [
        "Member of VRSEC ACM Student Chapter."
      ],
      tech: ["ACM"]
    },
    {
      company: "National Service Scheme (NSS)",
      role: "NSS Report Writer",
      period: "Aug 2024 – Present",
      badge: "Full-time",
      location: "Vijayawada, Andhra Pradesh, India · On-site",
      bullets: [
        "Contribute to NSS documentation and reporting of community service and campus activities."
      ],
      tech: ["Documentation", "Community Service", "Reporting"]
    },
    {
      company: "Velagapudi Ramakrishna Siddhartha Engineering College",
      role: "Student",
      period: "Sep 2023 – Present",
      badge: "Student",
      location: "Vijayawada, Andhra Pradesh, India",
      bullets: [
        "Information Technology student involved in NSS activities and VRS ACM SIGSPATIAL leadership on campus."
      ],
      tech: ["Information Technology", "Academics"]
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
                  {exp.location && (
                    <>
                      <span className="text-zinc-600 text-xs">•</span>
                      <span className="text-zinc-500 text-xs">{exp.location}</span>
                    </>
                  )}
                </div>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-zinc-800 text-zinc-300 border border-zinc-700/50 self-start">
                {exp.badge}
              </span>
            </div>

            {exp.bullets && exp.bullets.length > 0 && (
              <ul className="list-disc pl-5 space-y-2 text-zinc-400 text-sm mb-6 leading-relaxed">
                {exp.bullets.map((bullet, bIndex) => (
                  <li key={bIndex}>{bullet}</li>
                ))}
              </ul>
            )}

            {exp.tech && exp.tech.length > 0 && (
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
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
