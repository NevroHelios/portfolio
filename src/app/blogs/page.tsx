import Link from "next/link";
import { papers } from "@/data/data";

export default function BlogsPage() {
  return (
    <main className="portfolio-body">
      <div className="portfolio-container">
        <nav className="portfolio-nav">
          <div className="portfolio-nav-links">
            <Link href="/">Home</Link>
            <Link href="/projects">Work</Link>
            <Link href="/blogs" className="active">
              Research
            </Link>
          </div>
        </nav>

        <section>
          <h1>Research</h1>
          <p>
            Published work on AI safety, adversarial robustness, and machine learning systems.
          </p>
        </section>

        <section>
          <h2>Papers</h2>
          {papers.map((paper) => (
            <article key={paper.id} className="portfolio-project-item">
              <h3>
                <a href={paper.url} target="_blank" rel="noopener noreferrer">
                  {paper.title}
                </a>
              </h3>
              <p className="portfolio-project-meta">
                {paper.authors.split(", ").map((author, i, arr) => (
                  <span key={author}>
                    {author === "Arka Dash" ? <strong>{author}</strong> : author}
                    {i < arr.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>
              <p>{paper.oneLiner}</p>
            </article>
          ))}
        </section>

        <section>
          <h2>Recent Writing</h2>
          <p className="portfolio-project-meta">Nothing here yet — check back later.</p>
        </section>

        <footer className="portfolio-footer">
          <p>Powered by gradient descent and questionable sleep schedules.</p>
        </footer>
      </div>
    </main>
  );
}
