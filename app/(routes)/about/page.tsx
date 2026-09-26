// app/(routes)/about/page.tsx
"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { education } from "@/data/education";
import { skills, SkillCategory } from "@/data/skills";
import { MapPin, Calendar, Trophy, Users, Coins, Medal, Crown, Server, Wrench, Layout } from "lucide-react";

const categoryConfig: Record<string, { icon: React.ReactNode; badgeClass: string; labelClass: string }> = {
  Frontend: {
    icon: <Layout size={15} />,
    badgeClass: "bg-violet-50 text-violet-800 border border-violet-200 hover:bg-violet-100",
    labelClass: "text-violet-700",
  },
  Backend: {
    icon: <Server size={15} />,
    badgeClass: "bg-teal-50 text-teal-800 border border-teal-200 hover:bg-teal-100",
    labelClass: "text-teal-700",
  },
  "Tools & Others": {
    icon: <Wrench size={15} />,
    badgeClass: "bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100",
    labelClass: "text-amber-700",
  },
  "DSA & Problem Solving": {
    icon: <span className="text-sm font-bold">∑</span>,
    badgeClass: "bg-blue-50 text-blue-800 border border-blue-200 hover:bg-blue-100",
    labelClass: "text-blue-700",
  },
  "System Design": {
    icon: <span className="text-sm">⬡</span>,
    badgeClass: "bg-rose-50 text-rose-800 border border-rose-200 hover:bg-rose-100",
    labelClass: "text-rose-700",
  },
};

const achievements = [
  {
    icon: <Crown size={14} />,
    iconBg: "bg-amber-50 text-amber-700",
    text: (
      <>
        Arthasya Communication's Technical Team as Convener, decreasing bugs and errors by{" "}
        <strong className="text-foreground">20%</strong> through committee formation and industry-aligned website redesigns.
      </>
    ),
  },
  {
    icon: <Users size={14} />,
    iconBg: "bg-violet-50 text-violet-700",
    text: (
      <>
        Served as a Board Member of the APP Design and Development Club, mentoring newcomers and improving skills by{" "}
        <strong className="text-foreground">60%</strong>.
      </>
    ),
  },
  {
    icon: <Trophy size={14} />,
    iconBg: "bg-teal-50 text-teal-700",
    text: <>Won Nestlé Competition in Virtual Medium.</>,
  },
  {
    icon: <Coins size={14} />,
    iconBg: "bg-green-50 text-green-700",
    text: (
      <>
        Awarded <strong className="text-foreground">$100</strong> at Move it with Aptos event.
      </>
    ),
  },
  {
    icon: <Coins size={14} />,
    iconBg: "bg-green-50 text-green-700",
    text: (
      <>
        Received <strong className="text-foreground">$50</strong> Marbelism Track Prize at HACKSRM 2.0 2025.
      </>
    ),
  },
  {
    icon: <Medal size={14} />,
    iconBg: "bg-amber-50 text-amber-700",
    text: <>Runner Up at Hack-o-shop.</>,
  },
];

export default function AboutPage() {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Me
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Get to know more about my background and skills
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-2xl font-bold mb-1 pb-2 border-b border-border">Who I Am</h2>
            <div className="space-y-4 text-muted-foreground mt-4">
              <p>
                I&apos;m Harsh Kumar, a passionate Frontend Developer and aspiring Full-Stack Developer,
                currently pursuing B.Tech in Computer Science Engineering. I enjoy building clean,
                responsive, and user-friendly web applications while continuously improving my
                problem-solving skills.
              </p>
              <p>
                I primarily work with React.js, JavaScript, HTML, CSS, and Tailwind CSS, and I&apos;m
                expanding into backend development and API integration to build complete, scalable web
                solutions. My interest in UI/UX design helps me focus not just on functionality, but
                also on creating smooth and engaging user experiences.
              </p>
              <p>
                Alongside development, I&apos;m actively strengthening my foundation in Data Structures
                &amp; Algorithms using Java, which enables me to write efficient, maintainable code and
                think systematically while solving real-world problems.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-1 pb-2 border-b border-border">Education</h2>
            <div className="space-y-4 mt-4">
              {education.map((edu) => (
                <Card key={edu.id} className="transition-shadow hover:shadow-sm">
                  <CardHeader className="p-4 pb-2">
                    <CardTitle>
                      <h3 className="text-base font-semibold leading-snug">{edu.degree}</h3>
                      <p className="text-sm text-muted-foreground font-normal mt-0.5">{edu.institution}</p>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex flex-wrap justify-between items-center gap-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar size={13} />
                        {edu.startDate} – {edu.endDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={13} />
                        {edu.location}
                      </span>
                    </div>
                    {edu.gpa && (
                      <span className="inline-block mt-2 text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                        CGPA: {edu.gpa}
                      </span>
                    )}
                    {edu.description && (
                      <p className="mt-2 text-sm text-muted-foreground">{edu.description}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-1 pb-2 border-b border-border">Skills</h2>
            <div className="mt-4">
              {Object.keys(skills).map((category) => {
                const config = categoryConfig[category];
                return (
                  <div key={category} className="mb-6">
                    <div className={`flex items-center gap-1.5 text-sm font-medium mb-2.5 ${config?.labelClass ?? "text-muted-foreground"}`}>
                      {config?.icon}
                      {category}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skills[category as SkillCategory].map((skill) => (
                        <span
                          key={skill.name}
                          className={`text-xs px-2.5 py-1 rounded-full transition-colors cursor-default ${config?.badgeClass ?? "bg-secondary text-secondary-foreground border"}`}
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-1 pb-2 border-b border-border">Achievements</h2>
            <Card className="mt-4">
              <CardContent className="p-4">
                <ul className="space-y-0 divide-y divide-border">
                  {achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
                      <span className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center mt-0.5 ${item.iconBg}`}>
                        {item.icon}
                      </span>
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}