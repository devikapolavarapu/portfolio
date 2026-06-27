import {
  FaPython,
  FaJava,
  FaReact,
  FaGitAlt,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaServer,
  FaBrain,
  FaDocker
} from "react-icons/fa"

import {
  SiJavascript,
  SiDjango,
  SiMysql,
  SiSpringboot,
  SiPandas,
  SiNumpy,
  SiOpencv,
  SiTwilio,
  SiCloudinary,
  SiGithub,
  SiGithubactions
} from "react-icons/si"

export default function Skills() {

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: <FaPython /> },
        { name: "Java", icon: <FaJava /> },
        { name: "JavaScript", icon: <SiJavascript /> }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Django", icon: <SiDjango /> },
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "REST APIs", icon: <FaServer /> }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <SiGithub /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Cloudinary", icon: <SiCloudinary /> },
        { name: "Twilio API", icon: <SiTwilio /> },
        { name: "QGIS / GIS", icon: <FaDatabase /> },
        { name: "GitHub Actions", icon: <SiGithubactions /> }
      ]
    },
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "YOLOv8", icon: <FaBrain /> },
        { name: "OpenCV", icon: <SiOpencv /> },
        { name: "Machine Learning", icon: <FaBrain /> },
        { name: "XGBoost", icon: <FaBrain /> }
      ]
    },
    {
      title: "Data & Databases",
      skills: [
        { name: "SQL", icon: <FaDatabase /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "Pandas", icon: <SiPandas /> },
        { name: "NumPy", icon: <SiNumpy /> },
        { name: "Data Analytics", icon: <FaDatabase /> }
      ]
    }
  ]

  return (
    <section id="skills" className="reveal pt-28 pb-20 px-6">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-white">
        Tech Stack
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="border border-zinc-800 p-6 rounded-xl bg-zinc-900/10 backdrop-blur-sm hover:border-amber-500 transition duration-300"
          >
            <h3 className="text-lg font-bold text-zinc-100 mb-4 border-b border-zinc-800/80 pb-2">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill, sIndex) => (
                <div
                  key={sIndex}
                  className="flex items-center gap-2 border border-zinc-800 rounded-lg px-3.5 py-2 hover:border-amber-500/50 bg-zinc-950 text-zinc-300 transition duration-200"
                >
                  <span className="text-amber-400 text-sm">
                    {skill.icon}
                  </span>
                  <span className="text-xs font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}