import Link from "next/link";
import { featuredProjects, experiences, skills } from "@/data/data";

export default function ProjectsPage() {
  return (
    <main className="portfolio-body">
      <div className="portfolio-container">
        <nav className="portfolio-nav">
          <div className="portfolio-nav-links">
            <Link href="/">Home</Link>
            <Link href="/projects" className="active">
              Work
            </Link>
            <Link href="/blogs">Research</Link>
          </div>
        </nav>

        {experiences.length > 0 && (
          <section>
            <h1>Experience</h1>
            {experiences.map((exp) => (
              <article key={exp.id} className="portfolio-project-item">
                <h3>{exp.role}</h3>
                <p className="portfolio-project-meta">
                  {exp.company} · {exp.period}
                </p>
                <ul>
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>
        )}

        <section>
          <h2>Projects</h2>
          {featuredProjects.map((project) => (
            <article key={project.id} className="portfolio-project-item">
              <h3>{project.title}</h3>
              <p className="portfolio-project-meta">
                {project.stack.join(" · ")}
              </p>
              <p>{project.oneLiner}</p>
              <p className="portfolio-project-links">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {project.githubUrl && project.demoUrl && " · "}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </p>
            </article>
          ))}
        </section>

        <section>
          <h2>Technical Skills</h2>
          <div className="portfolio-skills-grid">
            {Object.entries(skills).map(([group, values]) => (
              <div key={group}>
                <h3>{group}</h3>
                <ul>
                  {values.map((value) => (
                    <li key={value}>{value}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <footer className="portfolio-footer">
          <p>Powered by gradient descent and questionable sleep schedules.</p>
        </footer>
      </div>
    </main>
  );
}
