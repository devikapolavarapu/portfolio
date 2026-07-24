import { useState, useEffect } from "react"
import { FaEnvelope, FaGithub, FaLinkedin, FaDiscord, FaFileAlt, FaPhone } from "react-icons/fa"

export default function Contact() {
  const [showForm, setShowForm] = useState(false)
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    error: false,
  })
  const [message, setMessage] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (!isModalOpen) return
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsModalOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isModalOpen])

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isModalOpen])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ submitted: false, submitting: true, error: false })

    const form = e.target
    const data = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/xzdangrw", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setStatus({ submitted: true, submitting: false, error: false })
        form.reset()
        setMessage("Thank you! Your message has been sent successfully.")
      } else {
        const errorData = await response.json()
        setStatus({ submitted: false, submitting: false, error: true })
        setMessage(errorData.error || "Oops! There was a problem submitting your form.")
      }
    } catch {
      setStatus({ submitted: false, submitting: false, error: true })
      setMessage("An unexpected error occurred. Please try again later.")
    }
  }

  return (
    <section id="contact" className="reveal py-32 px-6">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float-portrait {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float-icon-1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        @keyframes float-icon-2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .animate-float-portrait {
          animation: float-portrait 6s ease-in-out infinite;
        }
        .animate-float-icon {
          animation: float-icon-1 4s ease-in-out infinite;
        }
        .animate-float-icon-slow {
          animation: float-icon-2 5s ease-in-out infinite;
        }
      `}} />

      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-white">
        Contact
      </h2>

      <div className="max-w-6xl mx-auto bg-zinc-950/40 border border-amber-500/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl shadow-[0_0_50px_rgba(245,158,11,0.15)] flex flex-col lg:flex-row lg:items-center justify-between gap-12">
        {/* Left Column (45% on large screens) */}
        <div className="w-full lg:w-[45%] flex flex-col items-center justify-center text-center lg:-translate-y-4">
          {/* Profile & Floating Icons Container */}
          <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto flex items-center justify-center select-none">
            
            {/* Dashed Connecting Lines SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
              <line x1="50" y1="50" x2="10" y2="12" stroke="rgba(245,158,11,0.22)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="50" y1="50" x2="90" y2="12" stroke="rgba(245,158,11,0.22)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="50" y1="50" x2="0" y2="50" stroke="rgba(245,158,11,0.22)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="50" y1="50" x2="100" y2="50" stroke="rgba(245,158,11,0.22)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="50" y1="50" x2="10" y2="88" stroke="rgba(245,158,11,0.22)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="50" y1="50" x2="90" y2="88" stroke="rgba(245,158,11,0.22)" strokeWidth="1" strokeDasharray="3 3" />
            </svg>

            {/* Profile Photo (Center attraction) */}
            <div className="relative z-10 p-1.5 rounded-full bg-gradient-to-r from-amber-500 via-orange-400 to-amber-600 shadow-[0_0_50px_rgba(245,158,11,0.5)] animate-float-portrait">
              <div className="p-1 rounded-full bg-zinc-950">
                <button
                  onClick={() => setIsModalOpen(true)}
                  aria-label="View profile photo"
                  style={{
                    background: 'transparent',
                    padding: 0,
                    border: 'none',
                    borderRadius: '50%',
                    boxShadow: 'none',
                    display: 'block'
                  }}
                  className="cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 outline-none focus:ring-2 focus:ring-amber-500/50"
                >
                  <img
                    src="/profile.jpg"
                    alt="Devika Polavarapu"
                    className="w-36 h-36 md:w-44 md:h-44 object-cover rounded-full ring-2 ring-amber-400/20"
                  />
                </button>
              </div>
            </div>

            {/* Sparkles around photo */}
            <div className="absolute top-[20%] left-[18%] text-amber-400 animate-pulse text-lg">&#x2728;</div>
            <div className="absolute bottom-[20%] right-[18%] text-amber-400 animate-pulse text-lg delay-700">&#x2728;</div>

            {/* Floating Clickable Icons */}
            {/* Phone */}
            <a
              href="tel:+918500156156"
              className="absolute top-[4%] left-[2%] z-20 flex items-center justify-center w-12 h-12 rounded-full bg-zinc-900 border border-amber-500/40 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:shadow-[0_0_25px_rgba(245,158,11,0.6)] hover:scale-110 hover:-translate-y-1 hover:text-white transition-all duration-300 animate-float-icon group"
            >
              <FaPhone className="text-base" />
              <span className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-zinc-950 text-white text-xs rounded px-2.5 py-1.5 absolute -top-10 left-1/2 -translate-x-1/2 pointer-events-none whitespace-nowrap border border-zinc-800 shadow-xl">
                Phone: +91 85001 56156
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:puppy567567@gmail.com"
              className="absolute top-[4%] right-[2%] z-20 flex items-center justify-center w-12 h-12 rounded-full bg-zinc-900 border border-amber-500/40 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:shadow-[0_0_25px_rgba(245,158,11,0.6)] hover:scale-110 hover:-translate-y-1 hover:text-white transition-all duration-300 animate-float-icon-slow group"
            >
              <FaEnvelope className="text-base" />
              <span className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-zinc-950 text-white text-xs rounded px-2.5 py-1.5 absolute -top-10 left-1/2 -translate-x-1/2 pointer-events-none whitespace-nowrap border border-zinc-800 shadow-xl">
                Email: puppy567567@gmail.com
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/devikapolavarapu"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-[44%] left-[-8%] z-20 flex items-center justify-center w-12 h-12 rounded-full bg-zinc-900 border border-amber-500/40 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:shadow-[0_0_25px_rgba(245,158,11,0.6)] hover:scale-110 hover:-translate-y-1 hover:text-white transition-all duration-300 animate-float-icon group"
            >
              <FaGithub className="text-base" />
              <span className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-zinc-950 text-white text-xs rounded px-2.5 py-1.5 absolute -top-10 left-1/2 -translate-x-1/2 pointer-events-none whitespace-nowrap border border-zinc-800 shadow-xl">
                GitHub: devikapolavarapu
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/devika-polavarapu"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-[44%] right-[-8%] z-20 flex items-center justify-center w-12 h-12 rounded-full bg-zinc-900 border border-amber-500/40 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:shadow-[0_0_25px_rgba(245,158,11,0.6)] hover:scale-110 hover:-translate-y-1 hover:text-white transition-all duration-300 animate-float-icon-slow group"
            >
              <FaLinkedin className="text-base" />
              <span className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-zinc-950 text-white text-xs rounded px-2.5 py-1.5 absolute -top-10 left-1/2 -translate-x-1/2 pointer-events-none whitespace-nowrap border border-zinc-800 shadow-xl">
                LinkedIn: Devika Polavarapu
              </span>
            </a>

            {/* Discord */}
            <a
              href="https://discord.com/users/1110434267462385685"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-[4%] left-[2%] z-20 flex items-center justify-center w-12 h-12 rounded-full bg-zinc-900 border border-amber-500/40 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:shadow-[0_0_25px_rgba(245,158,11,0.6)] hover:scale-110 hover:-translate-y-1 hover:text-white transition-all duration-300 animate-float-icon group"
            >
              <FaDiscord className="text-base" />
              <span className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-zinc-950 text-white text-xs rounded px-2.5 py-1.5 absolute -top-10 left-1/2 -translate-x-1/2 pointer-events-none whitespace-nowrap border border-zinc-800 shadow-xl">
                Discord: devikapolavarapu
              </span>
            </a>

            {/* Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-[4%] right-[2%] z-20 flex items-center justify-center w-12 h-12 rounded-full bg-zinc-900 border border-amber-500/40 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:shadow-[0_0_25px_rgba(245,158,11,0.6)] hover:scale-110 hover:-translate-y-1 hover:text-white transition-all duration-300 animate-float-icon-slow group"
            >
              <FaFileAlt className="text-base" />
              <span className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-zinc-950 text-white text-xs rounded px-2.5 py-1.5 absolute -top-10 left-1/2 -translate-x-1/2 pointer-events-none whitespace-nowrap border border-zinc-800 shadow-xl">
                Download Resume
              </span>
            </a>

          </div>

          {/* Profile Text */}
          <div className="text-center space-y-2 mt-4 max-w-sm mx-auto">
            <h4 className="text-2xl font-extrabold text-white">Devika Polavarapu</h4>
            <p className="text-sm font-medium text-zinc-400 uppercase tracking-wider">Information Technology Student</p>
            <p className="text-sm font-semibold text-amber-400">Open Source Contributor</p>
            <p className="text-zinc-400 text-sm leading-relaxed mt-4 border-t border-zinc-800/60 pt-4">
              I'm always open to internships, collaborations, open source projects and exciting opportunities.
            </p>
          </div>
        </div>
<div className="hidden lg:flex items-center">
  <div className="w-px h-[150px] bg-gradient-to-b from-transparent via-amber-500/20 to-transparent shadow-[0_0_25px_rgba(245,158,11,.22)]"></div>
</div>
        {/* Right Column (55% on large screens) */}
       <div className="w-full lg:w-[55%] relative flex flex-col items-center justify-center min-h-[580px]">
          
          {/* Card 1: Illustration & Call to Action (Initial State) */}
          <div
            className={`w-full flex flex-col items-center justify-center text-center transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${
              !showForm
                ? "opacity-100 translate-y-0 scale-100 relative z-10"
                : "opacity-0 translate-y-[-30px] scale-95 pointer-events-none absolute"
            }`}
          >
            <div
              style={{ marginBottom: '24px' }}
              className="max-w-[170px] md:max-w-[230px] p-1 bg-gradient-to-r from-amber-500/20 to-orange-400/20 rounded-2xl border border-amber-500/20 shadow-2xl"
            >
              <img
                src="/illustration.jpg"
                alt="Contact Illustration"
                className="w-full h-auto rounded-xl object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Want to send me a message?</h3>
            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed mb-0">
              Have a question, opportunity, or project in mind? Drop a message here and it will be delivered straight to my email.
            </p>
            
            <button
              onClick={() => setShowForm(true)}
              aria-label="Send a Message"
              style={{
                background: 'transparent',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                outline: 'none',
                marginTop: '14px',
                width: '240px',
                height: '110px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              className="group hover:scale-[1.03] active:scale-[0.97] transition-all duration-300"
            >
              {/* SVG Cloud Shape */}
              <svg
                viewBox="10 10 180 80"
                className="absolute inset-0 w-full h-full filter drop-shadow-[0_8px_20px_rgba(251,146,60,0.25)] group-hover:drop-shadow-[0_12px_35px_rgba(249,115,22,0.45)] transition-all duration-300"
              >
                <path
                  d="M 50 76 C 35 76, 20 68, 25 52 C 15 40, 35 32, 45 38 C 50 28, 70 24, 80 34 C 90 16, 120 16, 130 36 C 140 28, 155 32, 160 40 C 168 36, 180 40, 182 50 C 192 54, 192 66, 180 70 C 170 75, 158 74, 150 68 C 140 76, 120 78, 108 74 C 98 78, 78 78, 68 72 Z"
                  className="fill-[#FB923C] group-hover:fill-[#F97316] transition-colors duration-300"
                />
              </svg>

              {/* Text Layer */}
              <span
                style={{ transform: 'translateY(-5px)' }}
                className="relative z-10 text-white text-sm font-semibold tracking-wide flex items-center gap-2 select-none"
              >
                <span>Send a Message</span>
                <span className="group-hover:translate-x-1.5 transition-transform duration-300">&rarr;</span>
              </span>
            </button>
          </div>

          {/* Card 2: Contact Form (Active State) */}
          <div
            className={`w-full transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${
              showForm
                ? "opacity-100 translate-y-0 scale-100 relative z-10"
                : "opacity-0 translate-y-20 scale-95 pointer-events-none absolute"
            }`}
          >
            {/* Back Button */}
            <button
              onClick={() => setShowForm(false)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-950/30 border border-amber-500/30 text-amber-300 hover:text-white hover:bg-amber-900/40 hover:border-amber-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(245,158,11,.35)] mb-8"
            >
              &larr; Back
            </button>

            {status.submitted && (
              <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-400 text-sm rounded-xl mb-6 flex items-center gap-3 backdrop-blur-sm">
                <span className="text-lg">✓</span>
                <span>{message}</span>
              </div>
            )}
            {status.error && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-xl mb-6 flex items-center gap-3 backdrop-blur-sm">
                <span className="text-lg">⚠️</span>
                <span>{message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="relative">
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder=" "
                  required
                  className="block w-full px-5 pt-7 pb-3 bg-zinc-900/70 border border-zinc-800 hover:border-amber-500/40 rounded-2xl text-white placeholder-transparent focus:outline-none focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all duration-300 backdrop-blur-xl peer"
                />
                <label
                  htmlFor="contact-name"
                  className="
                    absolute
                    left-5
                    top-5
                    text-sm
                    text-zinc-400
                    pointer-events-none
                    origin-left
                    bg-[#0b0618]
                    px-2
                    rounded
                    transition-all
                    duration-300

                    peer-placeholder-shown:translate-y-0
                    peer-placeholder-shown:scale-100

                    peer-focus:-translate-y-6
                    peer-focus:scale-75
                    peer-focus:text-amber-400

                    peer-[:not(:placeholder-shown)]:-translate-y-6
                    peer-[:not(:placeholder-shown)]:scale-75
                    peer-[:not(:placeholder-shown)]:text-amber-400
                  "
                >
                  Name
                </label>
              </div>

              <div className="relative">
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder=" "
                  required
                  className="block w-full px-5 pt-7 pb-3 bg-zinc-900/70 border border-zinc-800 hover:border-amber-500/40 rounded-2xl text-white placeholder-transparent focus:outline-none focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all duration-300 backdrop-blur-xl peer"
                />
                <label
                  htmlFor="contact-email"
                  className="
                    absolute
                    left-5
                    top-5
                    text-sm
                    text-zinc-400
                    pointer-events-none
                    origin-left
                    bg-[#0b0618]
                    px-2
                    rounded
                    transition-all
                    duration-300

                    peer-placeholder-shown:translate-y-0
                    peer-placeholder-shown:scale-100

                    peer-focus:-translate-y-6
                    peer-focus:scale-75
                    peer-focus:text-amber-400

                    peer-[:not(:placeholder-shown)]:-translate-y-6
                    peer-[:not(:placeholder-shown)]:scale-75
                    peer-[:not(:placeholder-shown)]:text-amber-400
                  "
                >
                  Email
                </label>
              </div>

              <div className="relative">
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder=" "
                  required
                  className="block w-full px-5 pt-7 pb-3 bg-zinc-900/70 border border-zinc-800 hover:border-amber-500/40 rounded-2xl text-white placeholder-transparent focus:outline-none focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all duration-300 backdrop-blur-xl peer"
                />
                <label
                  htmlFor="contact-subject"
                  className="
                    absolute
                    left-5
                    top-5
                    text-sm
                    text-zinc-400
                    pointer-events-none
                    origin-left
                    bg-[#0b0618]
                    px-2
                    rounded
                    transition-all
                    duration-300

                    peer-placeholder-shown:translate-y-0
                    peer-placeholder-shown:scale-100

                    peer-focus:-translate-y-6
                    peer-focus:scale-75
                    peer-focus:text-amber-400

                    peer-[:not(:placeholder-shown)]:-translate-y-6
                    peer-[:not(:placeholder-shown)]:scale-75
                    peer-[:not(:placeholder-shown)]:text-amber-400
                  "
                >
                  Subject
                </label>
              </div>

              <div className="relative">
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder=" "
                  rows={6}
                  required
                  className="block w-full px-5 pt-7 pb-3 min-h-[180px] bg-zinc-900/70 border border-zinc-800 hover:border-amber-500/40 rounded-2xl text-white placeholder-transparent focus:outline-none focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all duration-300 backdrop-blur-xl peer resize-none"
                />
                <label
                  htmlFor="contact-message"
                  className="
                    absolute
                    left-5
                    top-5
                    text-sm
                    text-zinc-400
                    pointer-events-none
                    origin-left
                    bg-[#0b0618]
                    px-2
                    rounded
                    transition-all
                    duration-300

                    peer-placeholder-shown:translate-y-0
                    peer-placeholder-shown:scale-100

                    peer-focus:-translate-y-6
                    peer-focus:scale-75
                    peer-focus:text-amber-400

                    peer-[:not(:placeholder-shown)]:-translate-y-6
                    peer-[:not(:placeholder-shown)]:scale-75
                    peer-[:not(:placeholder-shown)]:text-amber-400
                  "
                >
                  Message
                </label>
              </div>

              <button
                type="submit"
                disabled={status.submitting}
                className="w-full h-14 rounded-2xl bg-gradient-to-r from-amber-600 via-orange-500 to-orange-500 text-white font-semibold tracking-wide transition-all duration-300 hover:-translate-y-1 active:scale-95 hover:shadow-[0_18px_40px_rgba(217,119,6,0.35)] hover:from-amber-500 hover:to-orange-400 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
              >
                {status.submitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Lightbox / Modal */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md transition-opacity duration-300 ${
          isModalOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsModalOpen(false)}
      >
        {/* Close button inside modal (X) */}
        <button
          onClick={() => setIsModalOpen(false)}
          aria-label="Close profile photo"
          style={{
            background: 'rgba(24, 24, 27, 0.4)',
            padding: 0,
            border: 'none',
            borderRadius: '50%',
            boxShadow: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '48px',
            height: '48px'
          }}
          className="absolute top-6 right-6 text-white hover:text-amber-500 hover:scale-110 active:scale-95 transition-all duration-300 text-3xl font-semibold cursor-pointer z-50"
        >
          &times;
        </button>

        {/* Large Image Container */}
        <div
          className={`relative p-2 max-w-[80vw] lg:max-w-[650px] w-full max-h-[85vh] flex items-center justify-center transition-all duration-300 transform ${
            isModalOpen ? "scale-100 opacity-100" : "scale-75 opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
        >
          <img
            src="/profile.jpg"
            alt="Devika Polavarapu Expanded Profile"
            className="w-full h-full max-w-[80vw] lg:max-w-[650px] max-h-[85vh] object-contain rounded-2xl border border-amber-500/20 shadow-[0_0_50px_rgba(245,158,11,0.25)]"
          />
        </div>
      </div>
    </section>
  )
}