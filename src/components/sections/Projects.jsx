import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/10 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Formula 1 Web Platform</h3>
              <p className="text-gray-400 mb-4">
                Formula 1 Web Platform with ML-Based Race Predictions,
                Historical Insights, and Live Data Visualization
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React",
                  "TailwindCSS",
                  "FastF1 API",
                  "Machine Learning",
                  "Vercel",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/RushaanRajeshPai/f1"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project{" "}
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/10 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Gym Fitness Web</h3>
              <p className="text-gray-400 mb-4">
                A responsive fitness tracking web app designed to help users
                manage workouts, track progress, and stay motivated.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React",
                  "Material UI",
                  "Tailwind CSS",
                  "JavaScript",
                  "Netlify",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://fitness-app-svayam.netlify.app"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project{" "}
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/10 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Stock Home</h3>
              <p className="text-gray-400 mb-4">
                An AI-powered mobile solution that detects and highlights
                changes in dynamic spaces through sequential room scans for
                real-time environmental monitoring.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Computer Vision", "NodeJS", "YOLO", "Render"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/RinayGajjar/Codeshastra_XI_syntax_squad"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project{" "}
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/10 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                Movie Recommendation System
              </h3>
              <p className="text-gray-400 mb-4">
                Built a personalized movie recommendation engine using
                collaborative filtering and content-based filtering techniques
                to suggest relevant films based on user preferences and viewing
                history.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Data Processing", "NLP"," Scikit-learn"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://colab.research.google.com/github/mepky/movie-recommendation-system/blob/master/Movie_recommendation_engine.ipynb"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
