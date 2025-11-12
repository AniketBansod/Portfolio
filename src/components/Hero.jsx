import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden px-6 pt-24 pb-16 bg-gradient-to-b from-background via-background/50 to-background">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-background to-violet-600/10 blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
        {/* Left side: Profile Image */}
        <div className="flex justify-center md:justify-start fade-in">
          <div className="relative">
            <img
              src="/Ani_Pic.jpg"
              alt="Aniket Bansod"
              loading="eager"
              className="rounded-2xl w-[280px] h-[280px] md:w-[360px] md:h-[360px] object-cover shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/10 to-violet-600/10 backdrop-blur-[1px]" />
          </div>
        </div>

        {/* Right side: Text & Actions */}
        <div className="text-center md:text-left fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="gradient-text">Aniket Bansod</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/80 mb-4">
            Software Engineer | Full-Stack Developer | AI & Cloud Enthusiast
          </p>

          <p className="text-lg text-foreground/60 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            Designing and developing scalable, intelligent, and cloud-native
            software systems powered by modern AI and full-stack technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-10">
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-violet-600 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-violet-500/40 transition-all duration-200 hover-lift"
            >
              View My Work
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg border border-border bg-card text-foreground font-semibold hover:bg-card/80 transition-all duration-200 hover-lift"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center md:justify-start">
            <a
              href="https://github.com/AniketBansod"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-lg bg-card border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-all duration-200 hover-lift"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/aniket-bansod-70b46825b"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-lg bg-card border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-all duration-200 hover-lift"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:aniketbansod2004@gmail.com"
              className="w-11 h-11 rounded-lg bg-card border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-all duration-200 hover-lift"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
