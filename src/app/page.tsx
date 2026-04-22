import Image from "next/image";
import Link from "next/link";
import { FileText, Github, Linkedin, Mail } from "lucide-react";
import { featuredProjects, skills } from "@/data/data";

const interests = [
  "AI & Machine Learning in Medicine",
  "LLM Evaluation & Alignment",
];

export default function Home() {
  const lastUpdated = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date());

  return (
    <main className="portfolio-body">
      <div className="portfolio-container">
        <nav className="portfolio-nav">
          <div className="portfolio-nav-links">
            <Link href="/" className="active">
              Home
            </Link>
            <Link href="/projects">Work</Link>
            <Link href="/blogs">Research</Link>
          </div>
        </nav>

        <section className="portfolio-profile-header">
          <div className="portfolio-profile-info">
            <h1>Arka Dash</h1>
            {/* <p className="portfolio-subtitle">
              Machine Learning Engineer   
            </p> */}
            <p>
              CS undergrad at <strong>IIT Madras & KGEC</strong>, focused on
              building <strong>software that ships</strong> — solving real problems
              end-to-end. Driven by{" "}
              <strong>strong fundamentals, clean systems, and a bias for action</strong>.
            </p>

            <div className="portfolio-social-links">
              <a href="mailto:arkadash1173@gmail.com" aria-label="Email">
                <Mail size={18} />
              </a>
              <a
                href="https://github.com/NevroHelios"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/arka-dash/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <Link href="/blogs">Blog</Link>
              {/* <a href="#" aria-label="Resume">
                <FileText size={17} />
              </a> */}
            </div>
          </div>

          <Image
            src="/image-2.png"
            alt="Arka Dash"
            width={150}
            height={150}
            className="portfolio-profile-img"
            priority
          />
        </section>

        {/* <section>
          <h2>Research Interests</h2>
          <ul>
            {interests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        </section> */}

        {/* <section>
          <h2>Selected Work</h2>
          <ul>
            {featuredProjects.slice(0, 3).map((project) => (
              <li key={project.id}>
                <strong>{project.title}</strong> — {project.stack.slice(0, 3).join(", ")}
              </li>
            ))}
          </ul>
        </section> */}

        <section>
          <h2>Technical Skills</h2>
          <ul>
            <li><strong>ML:</strong> PyTorch, PyTorch Lightning, LightGBM, Scikit-learn, ONNX, TensorRT</li>
            <li><strong>MLOps:</strong> Docker, GCP, AWS SageMaker, W&B, CI/CD</li>
            <li><strong>Languages:</strong> Python, TypeScript, SQL, Bash</li>
            <li><strong>Frameworks:</strong> React, Nextjs</li>
          </ul>
        </section>

        <footer className="portfolio-footer">
          <p>Last updated: {lastUpdated}</p>
        </footer>
      </div>
    </main>
  );
}
