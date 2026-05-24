import { Code2, Database, Palette,Cloud, Github,Linkedin } from 'lucide-react';


export const tech=["UI/UX","React","TypeScript"];

export const experience = [
  {
    year: "Apr 2025 – Present",
    title: "Freelance Developer & Designer",
    company: "Independent",
    description:   ["• Designed and built 15+ full-stack projects spanning SaaS dashboards, e-commerce platforms, fintech interfaces, and animation-heavy landing pages — using React, Next.js, TypeScript, Tailwind, GSAP, and Zustand, with AI-assisted development workflows (Cursor, Claude) to accelerate delivery.",
                    "• Applied end-to-end UI/UX process on every project — user research, competitor analysis, Figma wireframes and interactive prototypes, through to pixel-perfect, WCAG-accessible implementation with live deployments and detailed case studies."
                ]
    },
    {
    year: "Sep 2024 – Mar 2025",
    title: "Executive Developer",
    company: "Madhu Jayanti International Pvt. Ltd., Howrah",
    description:   ["• Designed and developed a PHP (CodeIgniter MVC) + MySQL inventory management system from scratch, digitizing end-to-end stock tracking for a 50+ employee operation and eliminating manual reporting processes — reducing reporting time significantly.",
                    "• Automated weekly management reporting via email and improved operational visibility across raw materials, finished goods, and sales transactions."
                ]
  },
  {
    year: "Mar 2022 – Aug 2024",
    title: "Web Developer & Technical Trainer",
    company: "Exceed Robtix Solutions Pvt. Ltd., Kolkata",
    description:   ["• Developed and customized LMS portals using WordPress, improving content delivery for 100+ active learners; built responsive, accessible web pages using HTML, CSS, and JavaScript — ensuring cross-browser compatibility and mobile-first design",
                    "• Conducted structured frontend training sessions for student cohorts and collaborated with clients to troubleshoot and ship web solutions on deadline."
                ]
  }
];

export const technologies = [
  {
    category: "Frontend",
    icon: Palette,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Motion/Framer","UI/UX Design"]
  },
  {
    category: "Backend",
    icon: Database,
    items: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "SpringBoot"]
  },
  {
    category: "DevOps",
    icon: Cloud,
    items: ["Firebase", "AWS", "Vercel", "GitHub Actions", "Azure", "Supabase"]
  },
  {
    category: "Tools",
    icon: Code2,
    items: ["Git", "VS Code", "Figma", "Postman", "Coral Draw", "Clerk"]
  }
];
export const socialLinks = [
  { href: "https://www.linkedin.com/in/duttasubhajit956/", Label: "LinkedIn", icon: Linkedin },
  { href: "https://github.com/Subhaji-Dutta", Label: "GitHub", icon: Github }
];

export const ResumeLink =[
  { href: "https://drive.google.com/file/d/1-VWku3Uhn9XXXrjDX_vpIkN4F5jboC_J/view"}
];
