export default function About() {
  const stats = [
    {
      value: "8+",
      label: "Projects",
      link: "https://drive.google.com/drive/folders/1pnAFkjCDJIe2ZdvAP3BHxJMcMy0Szlxg?usp=sharing"
    },
    {
      value: "10+",
      label: "Credentials",
      link: "https://drive.google.com/drive/folders/1cVQoSvTaJhnqCmeZr-waMlxgkdBN6Ymw?usp=sharing"
    },
    {
      value: "4+",
      label: "Internships",
      link: "https://drive.google.com/drive/folders/1wR5GzhLSFg_fsft1khyEXSj0egF0evim?usp=sharing"
    }
  ]

  const handleCardClick = (url) => {
    window.open(url, "_blank")
  }

  return (
    <section id="about" className="reveal py-32 px-6">

      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-white">
        About
      </h2>

      {/* About Text */}
      <div className="flex justify-center">
        <div className="w-full max-w-[950px] text-center space-y-6 mb-16">

          <p className="text-zinc-300 text-base md:text-lg leading-9">
            I am an Information Technology student dedicated to
            developing robust, scalable, and intelligent software systems.
            My academic journey has fueled a deep passion for Software
            Engineering, Artificial Intelligence, Full Stack Development,
            Cloud technologies, and Open Source contributions.
          </p>

          <p className="text-zinc-300 text-base md:text-lg leading-9">
            I thrive on solving complex problems and turning innovative ideas
            into impactful, real-world applications. By combining strong
            technical foundations with a continuous learning mindset, I aim
            to build high-quality solutions that make a meaningful difference.
          </p>

          <p className="text-zinc-300 text-base md:text-lg leading-9">
            Currently, I am actively seeking software engineering, AI, and
            cloud opportunities where I can apply my skills, collaborate
            with forward-thinking teams, and contribute to cutting-edge
            technology development.
          </p>

        </div>
      </div>

      {/* Stats */}
      <div className="flex justify-center">

        <div className="w-full max-w-[950px] grid grid-cols-1 md:grid-cols-3 gap-8">

          {stats.map((stat, index) => (

            <button
              key={index}
              onClick={() => handleCardClick(stat.link)}
className="
group
w-full
h-44
rounded-2xl
border border-amber-500/20
bg-black/30
backdrop-blur-xl
hover:bg-white/10
hover:border-amber-400/40
transition-all duration-300
flex flex-col justify-center items-center
cursor-pointer
"
            >

              <h3
                className="
                  text-6xl
                  font-black
                  text-amber-350
                  drop-shadow-[0_0_12px_rgba(245,158,11,.95)]
                  mb-3
                  transition-all
                  duration-300
                  group-hover:scale-110
                "
              >
                {stat.value}
              </h3>

              <div className="flex items-center gap-1 text-white font-semibold text-lg">

                {stat.label}

                <span
                  className="
                    text-amber-400
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                >
                  ↗
                </span>

              </div>

            </button>

          ))}

        </div>

      </div>

    </section>
  )
}