const Experience = () => {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Datatrendz Solution, Pune",
      period: "Aug 2024 – Dec 2024",
      description: [
        "Collaborated in a 3-member team to build a student–teacher assessment web application powered by Gemini AI.",
        "Developed backend modules to capture, categorize, and store student responses and scores using MySQL.",
        "Integrated Gemini AI to automate result summarization, reducing manual teacher evaluation efforts.",
        "Worked in a Dockerized environment using Dockerfiles and docker-compose for containerization.",
        "Followed agile methodology with weekly progress reviews under industry mentorship.",
      ],
    },
    {
      title: "AI Research & Full-Stack Developer (Academic Project)",
      company: "Vishwakarma Institute of Information Technology, Pune",
      period: "Sept 2024 – Jan 2025",
      description: [
        "Developed an AI-powered classroom platform for plagiarism and AI-text detection with a complete assignment workflow system.",
        "Implemented FAISS semantic search, BM25 retrieval, and AI text classifiers for intelligent plagiarism detection.",
        "Built a microservice architecture using Next.js, Express.js, and FastAPI, containerized via Docker and proxied through Caddy.",
        "Deployed production-grade system on Ubuntu VM with GHCR, health checks, and secured CORS/TLS.",
        "Published a research paper in IEEE Xplore and secured 2nd place in the ‘AI Innovate 2024’ competition.",
      ],
    },
    {
      title: "Full-Stack Developer (Project-Based Work)",
      company: "Hackathon Project",
      period: "Jan 2025",
      description: [
        "Built and deployed multiple full-stack applications including ‘PrintHub’ and other student productivity tools.",
        "Integrated Razorpay payments, Google OAuth authentication, and dynamic Cloudinary file management.",
        "Developed secure APIs with JWT authentication, rate limiting, and optimized MongoDB queries.",
        "Continuously applying software engineering principles, DSA, and system design practices to deliver scalable solutions.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="p-8 rounded-lg bg-card border border-border hover-lift">
              <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">{exp.title}</h3>
                  <p className="text-primary font-semibold">{exp.company}</p>
                </div>
                <span className="text-foreground/60 font-semibold px-4 py-2 rounded-lg bg-primary/10">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-foreground/70 flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
