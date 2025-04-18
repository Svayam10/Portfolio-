import { RevealOnScroll } from "../RevealOnScroll.jsx";

export const About = () => {
  const frontendSkills = [
    "ReactJS",
    "Vue",
    "Tailwindcss",
    "JavaScript",
    "Vite",
  ];
  const backendSkills = [
    "NodeJs",
    "Python",
    "MongoDB",
    "ExpressJS",
    "Cloudinary",
    "RESTFUL API",
    "Flask",
    "Multer"
  ];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend Skills */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all col-span-2">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-none text-gray-300 space-y-4">
                <li className="flex justify-between">
                  <strong>Children's Academy</strong>
                  <span className="text-sm text-gray-400">
                    <em>2008 - 2020</em>
                  </span>
                </li>
                <li className="text-sm text-gray-400">Grade 10: Scored 96%</li>
                <li className="flex justify-between">
                  <strong>Prakash College</strong>
                  <span className="text-sm text-gray-400">
                    <em>2020 - 2022</em>
                  </span>
                </li>
                <li className="text-sm text-gray-400">Grade 12: Scored 81%</li>
                <li className="text-sm text-gray-400">CET: 97.854 %ile</li>
                {/* <li className="text-sm text-gray-400">JEE: 87 %ile</li> */}
                <li>
                  <div className="flex justify-between">
                    <strong>B. Tech in Computer Engineering</strong>
                    <span className="text-sm text-gray-400">
                      <em>[2022 - 2026]</em>
                    </span>
                  </div>
                  <div className="text-sm text-gray-400">
                    Dwarkadas J. Sanghvi College of Engineering
                  </div>
                </li>
                <li>
                  <strong>Relevant Coursework:</strong> <br />
                  <span className="text-sm text-gray-400">
                    Data Structures and Algorithms, Web Development, Artificial
                    Intelligence, Machine Learning, Data Warehousing and Mining,
                    Database Management System, Computer Networks
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Professional Experience Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Webxela Experience */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                💼 Professional Experience
              </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Webxela | <em>June 2024 - September 2024</em>
                  </h4>
                  - Web Development Intern
                </div>
                <p>
                  Developed key features for DocsX, a documentation platform,
                  using MkDocs and Flask. Implemented file management,
                  integrated LLaMA AI for document conversion, and added OCR for
                  text extraction. Designed a profile page with authentication
                  via Google APIs, gaining experience in backend development and
                  API integration.
                </p>
              </div>
            </div>

            {/* VJTI Racing Experience */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    VJTI Racing | <em>July 2024 - Present</em>
                  </h4>
                  - Lead Web Developer
                </div>
                <p>
                  Developed the official website{" "}
                  <a
                    href="https://www.vjtiracing.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <u>VJTI Racing</u>
                  </a>{" "}
                  using ReactJS and Tailwind CSS for a dynamic user experience.
                  Implemented backend automation with Google Apps Script,
                  improving efficiency. Collaborated on design and features to
                  enhance visibility and engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
