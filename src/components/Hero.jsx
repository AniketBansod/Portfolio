import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden pt-20 px-4">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-background to-violet-600/10 blur-3xl -z-10 animate-pulse" />

      <div className="max-w-6xl mx-auto text-center">
        {/* Animated initials circle */}
        <div className="mb-8 inline-flex">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center animate-pulse">
            <span className="text-4xl font-bold text-white">AB</span>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
          <span className="gradient-text">Aniket Bansod</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-foreground/80 mb-4 fade-in max-w-3xl mx-auto">
          Software Engineer | Full-Stack Developer | AI & Cloud Enthusiast
        </p>

        {/* Description */}
        <p className="text-lg text-foreground/60 mb-10 fade-in max-w-2xl mx-auto leading-relaxed">
          Designing and developing scalable, intelligent, and cloud-native software systems powered by modern AI and full-stack technologies.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 fade-in">
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-violet-600 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-200 hover-lift"
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
        <div className="flex gap-6 justify-center fade-in">
          <a
            href="https://github.com/AniketBansod"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-lg bg-card border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-all duration-200 hover-lift"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/aniket-bansod-70b46825b"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-lg bg-card border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-all duration-200 hover-lift"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:aniketbansod2004@gmail.com"
            className="w-12 h-12 rounded-lg bg-card border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-all duration-200 hover-lift"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
