import { ExternalLink, Github, PlayCircle } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Classroom (Plagiarism & AI-Text Detection Platform)",
      description:
        "A full-stack classroom platform integrating AI-based plagiarism and AI-text detection with automated report generation and classroom workflows.",
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "FastAPI",
        "Express.js",
        "PostgreSQL (pgvector)",
        "FAISS",
        "Docker",
        "AWS S3",
        "Redis",
        "Caddy",
      ],
      link: "https://ai-project-ten-lilac.vercel.app",
      github: "https://github.com/AniketBansod/AI-Project",
      demo: "https://drive.google.com/file/d/13l3ZYm7fbKBMnz-IqSJQBbEM1A5LJk10/view?usp=sharing",
      image: "/AI-Powered-Classroom-ss.png",
    },
    {
      title: "PrintHub (Campus Print Management Platform)",
      description:
        "A web-based print ordering and management system with payment gateway integration, admin dashboards, and real-time order tracking for students.",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Cloudinary",
        "Razorpay",
        "JWT",
        "Docker",
        "Render",
      ],
      link: "https://printhub-s7cs.onrender.com",
      github: "https://github.com/AniketBansod/PrintHub",
      demo: "https://drive.google.com/file/d/1RROP5LZDHCZWGxGLvgr-5LHFXnmyklA6/view?usp=sharing",
      image: "/Printhub-ss.png",
    },
    {
      title: "Industrial Project – Web Application for Assessment (Datatrendz Solution)",
      description:
        "An AI-integrated assessment platform that automates student result summarization using Gemini AI, built in a Dockerized environment with MySQL backend.",
      tech: ["React.js", "Node.js", "Express.js", "MySQL", "Docker", "Gemini AI"],
      link: "#",
      github: "https://github.com/PareshRaneOutlook/projEvalPlatform",
      demo: "https://drive.google.com/file/d/17pseSozJk4cnX3aMbMZJBmz_kcsUp9io/view?usp=sharing",
      image: "/Industry-project-demo-screenshot.png",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
          Featured Projects
        </h2>
        <p className="text-lg text-foreground/60 mb-12">
          A showcase of my most impactful and production-grade projects across AI, cloud, and full-stack development.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden bg-card border border-border hover-lift group transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video bg-white">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-contain p-2 rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors font-semibold text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors font-semibold text-sm"
                    >
                      <PlayCircle className="w-4 h-4" />
                      Demo
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-primary text-foreground/70 hover:text-primary transition-colors font-semibold text-sm"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
