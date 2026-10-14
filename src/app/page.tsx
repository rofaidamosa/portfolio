import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const content = {
  name: "Rofaida Mosa",
  role: "Software Engineer",
  intro:
    "A software engineer passionate about web dev, Go, and system programming.",
  email: "rofaidaahmed879@gmail.com",
  github: "https://github.com/rofaidamosa",
  linkedin: "https://www.linkedin.com/in/rofaida-mosa-3402a2233/",
  projects: [
    {
      name: "Zawya Reservation API",
      path: "/projects/zawya-reservation-api",
      description:
        "Production-ready backend for a movie reservation platform. JWT-based authentication, role-based access control for admin and user routes, and a normalized relational data model for movies, halls, and seat management.",
      tech: ["Go", "Gin", "GORM", "MySQL", "JWT"],
      link: "https://github.com/rofaidamosa/zawya-reservation-api",
    },
    {
      name: "Gocker",
      path: "/projects/gocker",
      description:
        "A minimal container runtime built from scratch in Go — showing that Docker is really just Linux features combined together. Runs an isolated process using namespaces, cgroups v2, chroot, and a virtual network bridge.",
      tech: ["Go", "Linux Namespaces", "cgroups v2", "Networking"],
      link: "https://github.com/rofaidamosa/gocker-",
    },
    {
      name: "Data Access Layer",
      path: "/projects/data-access",
      description:
        "A Go application implementing clean data-access patterns with MySQL — schema design, CRUD operations, and careful connection management.",
      tech: ["Go", "MySQL", "SQL"],
      link: "https://github.com/rofaidamosa/data_access",
    },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-text">
      {/* Navbar Links */}
      <nav className="max-w-3xl mx-auto px-6 pt-8 pb-4 flex justify-end items-center font-mono text-sm">
        <div className="flex gap-6 text-text-muted transition-colors">
          <Link href="/tech-reading" className="hover:text-accent">
            tech reading
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <h1 className="font-display font-semibold text-4xl md:text-5xl leading-tight mb-3">
          {content.name}
        </h1>
        <p className="font-mono text-accent-dim text-lg mb-10">
          {content.role}
        </p>

        <p className="text-text-muted text-lg leading-relaxed mb-16 max-w-xl">
          {content.intro}
        </p>

        {/* Projects Section */}
        <div className="mb-24">
          <div className="font-mono text-sm md:text-base font-bold text-accent uppercase tracking-wider mb-2">
            projects
          </div>
          <h2 className="font-display font-semibold text-2xl mb-8">
            A few things I&apos;ve shipped
          </h2>

          <div className="space-y-4">
            {content.projects.map((project) => (
              <a
                key={project.name}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-surface border border-border rounded-xl p-6 transition-colors hover:border-accent-dim"
              >
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span className="font-mono text-xs font-semibold bg-accent text-white px-2 py-0.5 rounded">
                    GET
                  </span>
                  <span className="font-mono text-sm text-text-muted">
                    {project.path}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  {project.name}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4 max-w-xl">
                  {project.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs text-text-dim border border-border px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>

        {}
        <div>
          <div className="font-mono text-sm md:text-base font-bold text-accent uppercase tracking-wider mb-2">
            contact
          </div>
          <h2 className="font-display font-semibold text-2xl mb-6">
            Let&apos;s work together
          </h2>

          <div className="flex flex-col gap-4 font-mono text-sm md:text-base">
            <a
              href={content.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-text-muted hover:text-accent underline transition-colors w-fit"
            >
              <FaGithub className="text-2xl text-text shrink-0" />
              <span>{content.github}</span>
            </a>

            <a
              href={content.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-text-muted hover:text-accent underline transition-colors w-fit"
            >
              <FaLinkedin className="text-2xl text-text shrink-0" />
              <span>{content.linkedin}</span>
            </a>

            <a
              href={`mailto:${content.email}`}
              className="flex items-center gap-3 text-text-muted hover:text-accent underline transition-colors w-fit"
            >
              <FaEnvelope className="text-2xl text-text shrink-0" />
              <span>{content.email}</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}