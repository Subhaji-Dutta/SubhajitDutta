import { Code2, Database, Palette,Cloud, Github,Linkedin } from 'lucide-react';


export const tech=["UI/UX","React","TypeScript"];

export const experience = [
  {
    year: "Apr 2025 – Present",
    title: "Freelance Developer & Designer",
    company: "Independent",
    description:   ["• Designed landing pages in Figma and built them as responsive websites for local businesses and institutions, from layout to live deployment.",
                    "• Built an expense tracker and teacher salary management system for a local institution, using Excel as the data layer and Power BI daashboards for management reporting.",
                    "• DBuilt and deployed full stack projects(React, Next.js, Node.js, FastAPI, PostgreSQL, MongoDB) with LLM integration."
                ]
    },
    {
    year: "Sep 2024 – Mar 2025",
    title: "Executive Developer",
    company: "Madhu Jayanti International Pvt. Ltd., Howrah",
    description:   ["• Digitized raw material and finished goods, and sales tracking by building a PHP(CodeIgniter MVC) and MySQL-based inventory management system, giving management consistent, real-time visibility into stock levels, sales transactions, and order fulfillment.",
                    "• Automated weekly management reporting by generating structured summaries and emailing them to management.",
                    "• Designed the MySQL database schema, implemented the backend logic, optimized CRUD operations for dynamic stock updates."
                ]
  },
  {
    year: "Sep 2022 – Aug 2024",
    title: "Web Developer & Technical Trainer",
    company: "Exceed Robtix Solutions Pvt. Ltd., Kolkata",
    description:   ["• Improved content delivery for 100+ learners by building and customizing WordPress LMS portals with custom themes and plugins, integrating payment gateways, and implementing gamification features.",
                    "• Trained and mentored 50+ students in web development, covering HTML, CSS, JavaScript, React, and WordPress, resulting in a 90% course completion rate and successful job placements.",
                    "• Developed and maintained 10+ client websites, ensuring responsive design, cross-browser compatibility, and SEO optimization."
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
