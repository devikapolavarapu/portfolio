import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

export default function Projects() {

  const projects = [
    {
      title: "WatchGuard AI Surveillance",
      desc: "A real-time threat detection system utilizing YOLOv8 and OpenCV to identify weapons in video feeds. Implements context-aware risk scoring, temporal validation across frames to reduce false alarms, and automated SMS alerts via Twilio with incident evidence uploaded to Cloudinary.",
      tech: ["Python", "YOLOv8", "OpenCV", "Twilio", "Cloudinary"],
      github: "https://github.com/devikapolavarapu/watchguard-ai-surveillance",
      demo: null,
      status: "Completed",
      featured: true
    },
    {
      title: "Identifying Vulnerable Vector-Prone Areas through Remote Sensing",
      desc: "A Remote Sensing and GIS-based spatial framework utilizing Landsat-8 satellite imagery to identify mosquito vector breeding zones in Krishna District, India. Integrates NDVI, NDWI, NDMI, and Land Surface Temperature (LST) indices to perform spatial risk analysis and zonation.",
      tech: ["Remote Sensing", "GIS", "Landsat-8", "QGIS", "Spatial Analysis"],
      github: "https://github.com/devikapolavarapu/Identifying-Vulnerable-Vector-Prone-Areas-through-Remote-Sensing-Krishna-Dt-Andhra-Pradesh-India",
      demo: null,
      status: "Academic Project",
      featured: false
    },
    {
      title: "FoodPulse",
      desc: "A smart hostel mess management platform designed to track food waste, collect student menu feedback, and enable menu preference voting. Provides mess administrators with an analytics dashboard for meal planning metrics.",
      tech: ["React", "Spring Boot", "Java", "MySQL", "REST API"],
      github: "https://github.com/devikapolavarapu/FoodPulse",
      demo: null,
      status: "Completed",
      featured: false
    },
    {
      title: "Freelance Skill Matching Platform",
      desc: "A freelance services marketplace developed during my Python Full Stack Internship. The public repository hosts the system design, database schemas, and platform architecture documentation.",
      tech: ["Python", "Django", "JavaScript", "SQL"],
      github: "https://github.com/devikapolavarapu/Web-Platform-for-Freelance-Services-and-Skill-Matching_September_2025",
      demo: null,
      status: "Completed",
      featured: false
    }
  ]

  return (
    <section id="projects" className="reveal py-32 px-6">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-white">
        Projects
      </h2>

      <div className="projects-grid max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <article
            key={index}
            className="card flex flex-col justify-between h-full"
          >
            <div>
              {/* Badges Header */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.featured && (
                  <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    Featured
                  </span>
                )}
                <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-zinc-800 text-zinc-300 border border-zinc-700/50">
                  {project.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-zinc-100 leading-tight">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {project.desc}
              </p>
            </div>

            <div>
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tech.map((techName, tIndex) => (
                  <span
                    key={tIndex}
                    className="text-xs px-2 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-zinc-900 font-mono"
                  >
                    {techName}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium border border-zinc-800 hover:border-zinc-700 bg-zinc-900/50 hover:bg-zinc-900 text-zinc-300 hover:text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium bg-amber-600 hover:bg-amber-500 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
