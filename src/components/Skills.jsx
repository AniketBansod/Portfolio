const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "FastAPI",
        "Prisma ORM",
        "REST APIs",
      ],
    },
    {
      title: "Databases",
      skills: [
        "PostgreSQL (pgvector)",
        "MySQL",
        "MongoDB",
        "Redis",
      ],
    },
    {
      title: "AI & Systems",
      skills: [
        "FAISS",
        "Sentence Transformers",
        "BM25",
        "LLM Integration",
        "AI Text Detection",
        "Vector Search",
      ],
    },
    {
      title: "DevOps & Cloud",
      skills: [
        "Docker",
        "GitHub Actions",
        "GHCR",
        "AWS",
        "Caddy",
        "Vercel",
        "Linux",
      ],
    },
    {
      title: "Tools & Utilities",
      skills: [
        "Cloudinary",
        "Razorpay",
        "Nodemailer",
        "Git",
        "GitHub",
        "Postman",
      ],
    },
    {
      title: "Architecture & Concepts",
      skills: [
        "Microservices",
        "System Design",
        "Scalability",
        "Security",
        "OOP",
        "DSA",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
          Skills & Expertise
        </h2>
        <p className="text-lg text-foreground/60 mb-12">
          A strong foundation in software engineering backed by hands-on
          experience across full-stack development, AI integration, and
          cloud-native systems.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-lg bg-card border border-border hover-lift"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary border border-primary/30 hover:border-primary transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
