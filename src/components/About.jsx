const About = () => {
  return (
    <section id="about" className="relative py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">
          About Me
        </h2>

        {/* top-right avatar for md+ screens (absolute) */}
        <div className="hidden md:block absolute top-8 right-8 md:top-12 md:right-12 z-10">
          <img
            src="/Ani_Pic.jpg"
            alt="Aniket Bansod"
            className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover ring-4 ring-card/40 shadow-lg"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Bio with small-screen avatar (hidden on md+) */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Avatar - visible on small screens only */}
            <div className="flex-shrink-0 md:hidden">
              {/* Use the public folder path; Vite serves public files at the root ("/Ani_Pic.jpg") */}
              <img
                src="/Ani_Pic.jpg"
                alt="Aniket Bansod"
                className="w-40 h-40 rounded-full object-cover mb-4 shadow-lg"
              />
            </div>

            {/* Bio text */}
            <div>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                I’m{" "}
                <span className="font-semibold text-foreground">
                  Aniket Bansod
                </span>
                , a passionate
                <span className="text-gradient font-semibold">
                  {" "}
                  Software Engineer and Full-Stack Developer{" "}
                </span>
                pursuing my B.Tech in Information Technology at VIIT Pune. I
                specialize in building scalable, intelligent, and cloud-native
                applications that combine robust backend architecture with
                modern AI integration.
              </p>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                With hands-on experience across the full stack — from React.js,
                Node.js, and FastAPI to Dockerized deployments and AWS cloud — I
                love crafting solutions that merge performance, clean design,
                and technical depth. I’ve also published my research on AI-based
                plagiarism detection in IEEE Xplore and earned recognition in
                national hackathons and innovation challenges.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Beyond coding, I’m driven by curiosity and a growth mindset —
                constantly exploring how technology can solve real-world
                problems. Currently based in Pune, India, I’m eager to
                collaborate on impactful projects that push the boundaries of
                software and AI innovation.
              </p>
            </div>
          </div>

          {/* Right side - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-card border border-border hover-lift">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-600 mb-2">
                1+
              </div>
              <p className="text-foreground/70 font-semibold">
                Years of Experience
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border hover-lift">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-600 mb-2">
                5+
              </div>
              <p className="text-foreground/70 font-semibold">Major Projects</p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border hover-lift">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-600 mb-2">
                450+
              </div>
              <p className="text-foreground/70 font-semibold">
                DSA Problems Solved
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border hover-lift">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-600 mb-2">
                2+
              </div>
              <p className="text-foreground/70 font-semibold">
                Hackathons & Awards
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
