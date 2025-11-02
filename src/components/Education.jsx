import { BookOpen } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Information Technology",
      field: "Information Technology",
      institution: "Vishwakarma Institute of Information Technology (VIIT), Pune",
      year: "2022 – Ongoing",
      gpa: "8.26 CGPA",
    },
    {
      degree: "XII (HSC)",
      field: "Higher Secondary Certificate",
      institution: "Aspire International Junior College, Nagpur",
      year: "2022",
      gpa: "86.67%",
    },
    {
      degree: "X (SSC)",
      field: "Secondary School Certificate",
      institution: "St. Paul’s High School, Nagpur",
      year: "2020",
      gpa: "91.40%",
    },
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">
          Education
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-card border border-border hover-lift flex gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {edu.degree}
                </h3>
                <p className="text-primary text-sm mb-1">{edu.field}</p>
                <p className="text-foreground/60 text-sm mb-2">{edu.institution}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-foreground/50">{edu.year}</span>
                  {edu.gpa && (
                    <span className="text-primary font-semibold">{edu.gpa}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
