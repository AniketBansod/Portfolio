import { Award } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Best Innovative Project – AI Innovate 2024",
      description:
        "Secured 2nd place among 360+ students for the AI-Powered Classroom platform, recognized for innovation and scalability.",
    },
    {
      title: "IEEE Xplore Publication",
      description:
        "Co-authored and published a research paper on 'Plagiarism Detection and Task Management' based on AI-driven academic workflows.",
    },
    {
      title: "Coding Premier League 2024",
      description:
        "Reached the semi-finals (Top 4 out of 231 teams) in VIIT’s premier inter-college coding competition.",
    },
    {
      title: "TechnoFEA 2.0 Hackathon Finalist",
      description:
        "Selected as one of the Top 10 teams among 200+ participants for innovative AI-based solutions.",
    },
    {
      title: "Problem Solving & DSA",
      description:
        "Solved 450+ Data Structures & Algorithms problems across LeetCode and other coding platforms.",
    },
    {
      title: "Professional Certifications",
      description:
        "IBM Full Stack Software Developer specialization (15 courses) and 'DSA with Java – Alpha' by Apna College.",
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
          Achievements & Certifications
        </h2>
        <p className="text-lg text-foreground/60 mb-12">
          Recognitions, research, and milestones in my software development journey
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-card border border-border hover-lift flex flex-col transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {achievement.title}
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
