const gymateImages = import.meta.glob(
  "../assets/gallery/gymate/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);
const zentryImages = import.meta.glob(
  "../assets/gallery/zentry/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);
const dentivaImages = import.meta.glob(
  "../assets/gallery/dentiva/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);
const carImages = import.meta.glob(
  "../assets/gallery/car/*.{jpg,jpeg,png,webp,PNG}",
  { eager: true, import: "default" }
);
const koynceImages = import.meta.glob(
  "../assets/gallery/koynce/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);
const spyltImages = import.meta.glob(
  "../assets/gallery/spylt/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);
const syncaImages = import.meta.glob(
  "../assets/gallery/synca/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);
const tispyImages = import.meta.glob(
  "../assets/gallery/tiispy/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);
const tripsterImages = import.meta.glob(
  "../assets/gallery/tripster/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);
const atlantisImages = import.meta.glob(
  "../assets/gallery/atlantis/*.{jpg,jpeg,png,webp,PNG}",
  { eager: true, import: "default" }
);
const furniImages = import.meta.glob(
  "../assets/gallery/furni/*.{jpg,jpeg,png,webp,PNG}",
  { eager: true, import: "default" }
);
const finebankImages = import.meta.glob(
  "../assets/gallery/Finebank/*.{jpg,jpeg,png,webp,PNG}",
  { eager: true, import: "default" }
);
const hirrdImages = import.meta.glob(
  "../assets/gallery/hirrd/*.{jpg,jpeg,png,webp,PNG}",
  { eager: true, import: "default" }
);
const dwelloImages = import.meta.glob(
  "../assets/gallery/dwello/*.{jpg,jpeg,png,webp,PNG}",
  { eager: true, import: "default" }
);
const k72Images = import.meta.glob(
  "../assets/gallery/k72/*.{jpg,jpeg,png,webp,PNG}",
  { eager: true, import: "default" }
);
const schedulrrImages = import.meta.glob(
  "../assets/gallery/schedulrr/*.{jpg,jpeg,png,webp,PNG}",
  { eager: true, import: "default" }
);
const flexfitImages = import.meta.glob(
  "../assets/gallery/flexfit/*.{jpg,jpeg,png,webp,PNG}",
  { eager: true, import: "default" }
);
const memoWorldImages = import.meta.glob(
  "../assets/gallery/memoworld/*.{jpg,jpeg,png,webp,PNG}",
  { eager: true, import: "default" }
);
const careerHuntImages = import.meta.glob(
  "../assets/gallery/careerHunt/*.{jpg,jpeg,png,webp,PNG}",
  { eager: true, import: "default" }  
);
const credCheckImages = import.meta.glob(
  "../assets/gallery/credCheck/*.{jpg,jpeg,png,webp,PNG}",
  { eager: true, import: "default" }  
);
const tripMindImages = import.meta.glob(
  "../assets/gallery/tripMind/*.{jpg,jpeg,png,webp,PNG}",
  { eager: true, import: "default" }
);
const skillGraph = import.meta.glob(
  "../assets/gallery/skillGraph/*.{jpg,jpeg,png,webp,PNG}",
  { eager: true, import: "default" }
);
const Studyplanner = import.meta.glob(
  "../assets/gallery/studyplanner/*.{jpg,jpeg,png,webp,PNG}",
  { eager: true, import: "default" }
);

const xora = import.meta.glob(
  "../assets/gallery/Xora/*.{jpg,jpeg,png,webp,PNG}",
  { eager: true, import: "default" }
);

const gymate = Object.values(gymateImages) as string[];
const zentry = Object.values(zentryImages) as string[];
const dentiva = Object.values(dentivaImages) as string[];
const car = Object.values(carImages) as string[];
const koynce = Object.values(koynceImages) as string[];
const spylt = Object.values(spyltImages) as string[];
const synca = Object.values(syncaImages) as string[];
const tispy = Object.values(tispyImages) as string[];
const tripster = Object.values(tripsterImages) as string[];
const atlantis = Object.values(atlantisImages) as string[];
const furni = Object.values(furniImages) as string[];
const finebank = Object.values(finebankImages) as string[];
const hirrd = Object.values(hirrdImages) as string[];
const dwello = Object.values(dwelloImages) as string[];
const k72 = Object.values(k72Images) as string[];
const schedulrr = Object.values(schedulrrImages) as string[];
const flexfit = Object.values(flexfitImages) as string[];
const memoWorld = Object.values(memoWorldImages) as string[];
const careerHunt = Object.values(careerHuntImages) as string[];
const credCheck = Object.values(credCheckImages) as string[];
const tripMind = Object.values(tripMindImages) as string[];
const SkillGraph = Object.values(skillGraph) as string[];
const studyplanner = Object.values(Studyplanner) as string[];
const Xora = Object.values(xora) as string[];


export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  fullDescription: string;
  challenges: string;
  solution: string;
  results: string;
  technologies: string[];
  link?: string;
  mockupImages: string[];
}

export const allProjects: Project[] = [
  // Web Development Projects
  {
  id: 1,
  title: "AI Adaptive Study Planner",
  description: "An AI-powered study planning platform that transforms uploaded study materials into structured topics and personalized study schedules based on deadlines, difficulty, and learning progress.",
  category: "Full-Stack",
  image: studyplanner[0],
  tags: ["Next.js", "React", "TypeScript", "PostgreSQL", "Gemini AI"],
  fullDescription: "AI Adaptive Study Planner is a full-stack web application that helps students organize learning materials and prepare for exams more efficiently. Users can upload PDF documents, analyze their content using Google Gemini AI, automatically identify topics and key concepts, and generate personalized study plans based on upcoming deadlines and estimated study durations. The platform includes topic-level progress tracking, study session management, and adaptive plan regeneration to help students prioritize unfinished work. Built with Next.js, TypeScript, Prisma ORM, and PostgreSQL, it integrates secure authentication and private document storage to deliver a personalized learning experience.",
  challenges: "Extracting meaningful learning content from PDF documents, converting AI-generated analysis into structured and usable topics, and creating study schedules that account for deadlines, topic difficulty, and estimated study time. Maintaining consistent relationships between subjects, study materials, deadlines, sessions, and progress records during plan regeneration was another key challenge. The application also required secure user-specific data access and reliable handling of privately stored PDF files.",
  solution: "Integrated PDF text extraction with Google Gemini AI to analyze study materials and identify topics, summaries, key concepts, difficulty levels, and estimated study durations. Implemented Prisma ORM and PostgreSQL to manage application data and relationships between subjects, materials, deadlines, study sessions, and topic progress. Added Clerk authentication and Supabase Storage for secure user access and private PDF storage. Developed API endpoints for study plan generation, topic progress updates, and adaptive replanning based on remaining study requirements and upcoming deadlines.",
  results: "Created an integrated study planning workflow that connects PDF uploads, AI-powered content analysis, deadline-aware scheduling, and topic-level progress tracking. The platform supports dynamically generated subjects and topics rather than relying on a fixed set of predefined subjects. Its adaptive planning workflow helps reorganize study sessions as priorities and completion status change, providing a foundation for personalized and more efficient study management.",
  technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma ORM", "PostgreSQL", "Google Gemini AI", "Clerk", "Supabase", "Node.js"],
  link: "https://ai-study-planner-gray.vercel.app/",
  mockupImages: studyplanner.slice(1),
},
{
  id: 2,
  title: "TripMind — Multi-Agent AI Travel Planner",
  description: "An AI-powered travel planning platform that generates personalized trip options based on destination, budget, travel dates, and user preferences using specialized AI agents.",
  category: "Full-Stack",
  image: tripMind[0],
  tags: ["Python","FastAPI","Streamlit","Groq AI","Redis"],
  fullDescription: "TripMind is a multi-agent AI travel planning application designed to simplify trip research and itinerary creation. Users provide their starting location, destination, travel dates, budget, and preferences. Specialized AI agents generate weather information, transport options, accommodation recommendations, restaurant suggestions, activities, and attractions. Users can review and select their preferred options before generating a personalized packing list, day-by-day itinerary, and budget summary. The application uses Redis to persist trip state, allowing planning results to be recalculated from cached data without repeatedly invoking the recommendation agents.",
  challenges: "Coordinating multiple specialized AI agents while maintaining a consistent data flow, managing trip state across user interactions, avoiding unnecessary repeated LLM calls, and ensuring that budget calculations and selected options remain consistent when users change their preferences. Another challenge was separating generative AI responsibilities from deterministic planning logic and deploying a stateful application using a serverless backend.",
  solution: "Developed a FastAPI backend with specialized Groq-powered agents for transport, accommodation, restaurants, activities, attractions, packing, and itinerary generation, alongside a weather integration using Open-Meteo. Used Pydantic models to structure and validate trip data and Redis/Upstash to persist agent outputs and user selections. Implemented a deterministic Python planning engine to generate feasible trip alternatives and a separate budget calculator to estimate costs. Built a Streamlit frontend for trip configuration, option selection, confirmation, and final plan generation. Deployed the backend on Vercel with Redis-backed state persistence.",
  results: "Built an end-to-end AI travel planning workflow that combines specialized agent recommendations, persistent trip state, budget-aware planning, and user-controlled selection. The application supports recalculating plans from cached agent outputs, generating a packing checklist and day-by-day itinerary after selections are finalized, and displaying a categorized budget breakdown. The project demonstrates practical application of multi-agent AI orchestration, API development, caching, data validation, and deterministic business logic.",
  technologies: ["Python","FastAPI","Streamlit","Groq API","Redis","Upstash","Pydantic","Open-Meteo API","REST APIs","Vercel","Git","GitHub"],
  link: "https://tripmind-7zqhxmvssbaznqxslgjeyc.streamlit.app/",
  mockupImages: tripMind.slice(1),
},
{
  id: 3,
  title: "Skill Graph Explorer",
  description: "A full-stack career and learning exploration platform that connects technical skills, prerequisites, learning roadmaps, job opportunities, and companies through a graph-based data model.",
  category: "Full-Stack",
  image: SkillGraph[0],
  tags: ["React", "TypeScript", "Python", "FastAPI", "Neo4j"],
  fullDescription: "Skill Graph Explorer is a full-stack career and learning platform that helps users discover technical skills, explore prerequisite relationships, identify learning paths, and connect their expertise to relevant job opportunities and companies. Built with a React and TypeScript frontend, a Python FastAPI backend, and Neo4j Aura as its graph database, the platform uses graph-based relationships to organize and retrieve interconnected career and learning information. The application is deployed with Vercel for the frontend and Render for the backend.",
  challenges: "Designing a graph data model that accurately represents relationships between skills, prerequisites, job roles, and companies; writing efficient Cypher queries to retrieve connected data; integrating the React frontend with FastAPI REST endpoints; managing cross-origin requests and environment-specific API configuration; and maintaining reliable connectivity between the deployed backend and Neo4j Aura.",
  solution: "Designed a Neo4j graph model to represent interconnected skills and career-related entities, and developed FastAPI endpoints to retrieve skills, learning roadmaps, job opportunities, company information, and graph statistics. Built a responsive React and TypeScript interface with skill search, interactive exploration, and career dashboard components. Configured API integration and CORS for communication between Vercel and Render, connected the backend to Neo4j Aura, and implemented a GitHub Actions workflow for automated backend health checks.",
  results: "Deployed Skill Graph Explorer with its frontend hosted on Vercel, backend hosted on Render, and graph database powered by Neo4j Aura. The platform brings skill discovery, prerequisite exploration, learning roadmaps, job opportunities, and company connections into a unified interface. Its graph-based architecture supports relationship-oriented queries, while the separated frontend and backend enable independent development and deployment.",
  technologies: ["React", "TypeScript", "Vite", "Python", "FastAPI", "Neo4j Aura", "Cypher", "Axios", "GitHub Actions", "Vercel", "Render"],
  link: "https://skill-graph-virid.vercel.app/",
  mockupImages: SkillGraph.slice(1),
},
{
    id: 4,
    title: "Synca",
    description: "A collaborative project management platform that helps teams organize work, manage tasks, and meet deadlines efficiently.",
    category: "Full-Stack",
    image: synca[0],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Clerk"],
    fullDescription: "Synca is a modern project management web application designed for teams and organizations. Users can create organizations, invite team members, and collaboratively manage projects and tasks. Each task can be assigned to specific members with defined deadlines and priorities, enabling better accountability and workflow transparency across teams.",
    challenges: "Designing a scalable multi-organization architecture, implementing secure authentication and role-based access for team members, managing relational data for projects and tasks, and ensuring real-time usability with a clean and intuitive user interface.",
    solution: "Built Synca using Next.js and TypeScript to ensure performance, scalability, and maintainability. Integrated Clerk for secure authentication and organization management. PostgreSQL with Neon DB was used for reliable and scalable data storage. Tailwind CSS was utilized to create a responsive and intuitive UI, while thoughtful data modeling ensured efficient handling of projects, tasks, and user roles.",
    results: "Synca enables teams to efficiently collaborate by centralizing project and task management within organizations. The platform streamlines task ownership, improves deadline tracking, and enhances overall team productivity through a clear and structured workflow. Its scalable architecture allows seamless onboarding of new organizations and team members.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Clerk", "PostgreSQL", "Neon DB"],
    link: "https://synca-eight.vercel.app/",
    mockupImages: synca.slice(1),
  },
  {
    id: 6,
title: "CredCheck",
description: "A full-stack credential verification platform designed to help users validate and check credentials quickly and reliably.",
category: "Full-Stack",
image: credCheck[0],
tags: ["React", "Vite", "Express", "Node.js"],
fullDescription: "CredCheck is a full-stack credential verification platform that enables users to validate and check credentials with speed and confidence. Built with a Vite-powered React frontend and a dedicated Express.js backend, the platform is deployed as two independent Vercel services — delivering a clean, responsive interface backed by a robust and scalable API.",
challenges: "Handling secure credential data across two separately deployed services, managing CORS between the frontend and backend on different Vercel domains, structuring the Express.js server to function reliably within Vercel's serverless model, and presenting verification results in a clear and user-friendly interface.",
solution: "Decoupled the application into two independently deployed Vercel projects — a Vite React frontend and an Express.js API. Implemented environment-based API URL configuration and proper CORS handling for secure cross-origin requests. Adapted the Express server as a serverless-compatible handler for seamless deployment, and designed a clean UI that surfaces credential check results intuitively.",
results: "CredCheck is live in production on Vercel with both services deployed and ready. The decoupled architecture allows independent updates and scaling of the frontend and backend. The platform delivers a fast, reliable credential verification experience with Vercel's Git integration enabling preview deployments on every push for confident, iterative development.",
technologies: ["React", "Vite", "TypeScript", "Express", "Node.js", "Vercel"],
link: "https://cred-check-4z1e.vercel.app/",
mockupImages: credCheck.slice(1),
  },
  {
id: 7,
title: "CareerHunt",
description: "A full-stack job search platform designed to help users discover and apply for opportunities efficiently.",
category: "Full-Stack",
image: careerHunt[0],
tags: ["React", "Vite", "Express", "Node.js"],
fullDescription: "CareerHunt is a full-stack job search platform that connects job seekers with listings through a fast, responsive interface. Built with a Vite-powered React frontend and a dedicated Express.js backend, the platform is deployed as two independent Vercel services — enabling clean separation of concerns, seamless scalability, and reliable performance.",
challenges: "Adapting a traditional Express.js server to Vercel's serverless functions model, handling CORS across two separately deployed services, delivering fast and accurate job search and filtering without degrading user experience, and maintaining a consistent responsive UI across all device sizes.",
solution: "Decoupled the application into two independently deployed Vercel projects — a Vite React frontend and an Express.js API. Configured environment-based API routing and CORS headers to enable secure cross-origin communication. Leveraged Vite's optimized production builds with code splitting for fast load times, and structured the Express app as a serverless-compatible handler for automatic scaling.",
results: "CareerHunt is live in production on Vercel with both services successfully deployed. The decoupled architecture allows the frontend and backend to be updated, rolled back, and scaled independently. Vercel's Git integration enables preview deployments on every push, supporting rapid iteration and a professional-grade deployment workflow.",
technologies: ["React", "Vite", "TypeScript", "Express", "Node.js", "Vercel"],
link: "https://career-hunt-2cs9.vercel.app/",
mockupImages: careerHunt.slice(1),
  },
  {
    id: 8,
    title: "Dentiva",
    description: "Modern dental care experience with online reservations and AI oral guides",
    category: "Full-Stack",
    image: dentiva[0],
    tags: ["Next.js", "Tailwind", "openAI"],
    fullDescription: "Dentiva is a cutting-edge dental clinic website designed to provide patients with a seamless online experience for booking appointments, accessing dental care information, and utilizing AI-powered oral health guides. The platform features an intuitive interface, a dynamic menu system, and a mobile-optimized design to cater to the needs of modern dental patients.",
    challenges: "Creating a user-friendly interface that simplifies the appointment booking process, integrating AI technology for personalized oral health guidance, and ensuring the website is fully responsive across various devices and screen sizes.",
    solution: "Developed the website using Next.js for server-side rendering and improved performance. Implemented Tailwind CSS for a responsive and visually appealing design. Integrated a headless CMS (Contentful) to manage dynamic content such as services, team members, and blog posts. Leveraged AI APIs to provide users with personalized oral health tips based on their input and browsing behavior.",
    results: "Since its launch, Dentiva has seen a 50% increase in online appointment bookings and a 35% rise in website traffic. Patient engagement with the AI oral health guides has led to a 20% improvement in reported oral hygiene practices. The website received positive feedback for its ease of use and modern design, resulting in a 4.9-star rating on patient review platforms.",
    technologies: ["Next.js", "React", "Tailwind CSS","TypeScript","VAPI"],
    link: "https://dentiva-three.vercel.app/",
    mockupImages: dentiva.slice(1),
  },
  {
    id: 9,
    title: "Schedulrr",
    description: "A modern scheduling platform designed to help users manage their time efficiently.",
    category: "Full-Stack",
    image: schedulrr[0],
    tags: ["React", "Next.js", "TypeScript"],
    fullDescription: "Schedulrr is a modern scheduling platform that helps users manage their time efficiently. The platform features a clean design, intuitive navigation, and easy access to essential scheduling functions.",
    challenges: "Creating an intuitive user interface, ensuring easy access to key scheduling features, and designing a visually appealing layout that enhances user engagement.",
    solution: "Developed the platform using Next.js and TypeScript, focusing on user experience and visual design. Tailwind CSS was utilized to create a responsive layout that adapts to various screen sizes while maintaining a consistent aesthetic.",
    results: "The Schedulrr scheduling platform provides users with an efficient way to manage their time. The intuitive design and easy navigation enhance user satisfaction, making it a preferred choice for scheduling needs.",
    technologies: ["Figma"],
    link: "https://schedulrr-eight-mu.vercel.app/",
    mockupImages: schedulrr.slice(1),
  },
  {

    id: 10,
    title: "Gymate",
    description: "Cut slacks and build muscle with Gymate, your ultimate workout companion.",
    category: "Full-Stack",
    image: gymate[0],
    tags: ["React", "Tailwind CSS", "Firebase","JavaScript"],
    fullDescription: "Gymate is a comprehensive fitness web application designed to help users achieve their workout goals through personalized exercise plans, progress tracking, and community support. The platform offers a variety of features including customizable workout routines, video demonstrations, nutrition tracking, and social sharing to keep users motivated and engaged.",
    challenges: "Designing an intuitive user interface that caters to both beginners and advanced fitness enthusiasts, ensuring real-time data synchronization across devices, and implementing secure user authentication and data privacy measures.",
    solution: "Developed a responsive web application using React and Tailwind CSS for a seamless user experience across devices. Integrated Firebase for real-time database management and authentication, allowing users to securely log in and track their progress. Implemented modular components for workout plans and nutrition tracking, enabling easy updates and scalability.",
    results: "Achieved a user base of over 10,000 active users within the first six months of launch. Users reported a 30% increase in workout consistency and a 25% improvement in overall fitness levels. The platform received positive feedback for its user-friendly design and comprehensive features, leading to a 4.8-star rating on major app review platforms.",
    technologies: ["React", "Node.js", "Express", "Firebase", "Tailwind CSS"],
    link: "https://gymate-nine.vercel.app/",
    mockupImages: gymate.slice(1),
  },
  {
    id: 11,
    title: "Koynce",
    description: "A real-time crypto price tracking web app that displays market data in a clean and intuitive interface.",
    category: "Frontend",
    image: koynce[0],
    tags: ["React", "JavaScript", "Tailwind CSS", "API"],
    fullDescription: "Koynce is a cryptocurrency price tracker that fetches real-time market data using external APIs. The application allows users to view current prices, market trends, and key metrics for various cryptocurrencies through a fast and user-friendly interface.",
    challenges: "Handling real-time API data efficiently, managing loading and error states, presenting complex market data in a readable format, and maintaining performance and responsiveness across devices.",
    solution: "Built the application using React and JavaScript with API integration to fetch live cryptocurrency data. Tailwind CSS was used to design a clean, responsive layout, ensuring clarity and usability while displaying frequently updating market information.",
    results: "The application provides users with quick and accurate access to cryptocurrency price data. Its clean UI and responsive design make it easy to monitor market trends, while efficient data handling ensures smooth performance even with frequent API updates.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "API"],
    link: "https://koynce-six.vercel.app/",
    mockupImages: koynce.slice(1),
  },
  {
    id: 12,
    title: "Spylt",
    description: "A visually immersive protein drink brand website featuring GSAP-powered animations and scroll-based storytelling.",
    category: "Frontend",
    image: spylt[0],
    tags: ["React", "JavaScript", "Tailwind CSS", "GSAP"],
    fullDescription: "Spylt is a promotional website for a protein drink brand designed to showcase the product, its flavors, customer reviews, and health benefits through engaging visuals and smooth animations. The experience focuses on scroll-driven interactions that guide users through the brand story in a dynamic and memorable way.",
    challenges: "Designing fluid scroll-based animations without compromising performance, coordinating multiple animation sequences across sections, maintaining responsiveness on all screen sizes, and ensuring animations enhance storytelling rather than distract from content.",
    solution: "Built the website using React and JavaScript, with GSAP used extensively to create smooth entrance animations, scroll-triggered transitions, and interactive visual effects. Tailwind CSS provided a responsive and scalable layout system, ensuring consistency across devices while keeping animations performant.",
    results: "The animated storytelling approach effectively highlights the product’s flavors, benefits, and reviews, creating a strong brand presence. Smooth scroll interactions increase user engagement and deliver a premium, high-energy browsing experience that aligns with the brand’s identity.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "GSAP"],
    link: "https://spy-it.vercel.app/",
    mockupImages: spylt.slice(1),
  },
  {
    id: 13,
    title: "Zentry",
    description: "A Gaming media platform for experiencing hi quality graphics and visuals",
    category: "Frontend",
    image: zentry[0],
    tags: ["React", "Framer", "Tailwind CSS", "Vite"],
    fullDescription: "Zentry is an innovative social media dashboard tailored for gamers and content creators, providing a unified platform to manage and analyze social media presence across multiple channels. The dashboard features real-time analytics, content scheduling, audience engagement tools, and AI-driven content recommendations to help users optimize their social media strategies and grow their online communities.",
    challenges: "Integrating multiple social media APIs with varying data structures, ensuring real-time data updates and synchronization, and implementing AI algorithms for personalized content recommendations while maintaining user privacy and data security.",
    solution: "Built a modular dashboard using React and Vite for optimal performance and scalability. Leveraged OAuth for secure API integrations with platforms like Twitter, Instagram, and YouTube. Developed custom AI algorithms using TensorFlow.js to analyze user engagement patterns and provide tailored content suggestions. Employed Tailwind CSS for a sleek, responsive design that enhances user experience.",
    results: "Within three months of launch, Zentry attracted over 5,000 active users, with a 40% increase in social media engagement reported by users. The AI-driven recommendations led to a 25% boost in content reach and a 15% growth in follower count on average. User feedback highlighted the dashboard's ease of use and the effectiveness of its analytics tools, resulting in a 4.7-star rating on app review platforms.",
    technologies: ["React", "Vite", "Node.js", "Tailwind CSS", "JavaScript", "GSAP"],
    link: "https://zentry-virid.vercel.app/",
    mockupImages:zentry.slice(1),
  },
  {
    id: 14,
    title: "k72-Agency Portfolio",
    description: "A modern agency portfolio website featuring smooth animations and responsive design.",
    category: "Frontend",
    image: k72[0],
    tags: ["React", "JavaScript","Tailwind CSS","framer"],
    fullDescription: "k72 is a modern agency portfolio website designed to showcase creative projects and services. The site features smooth animations, responsive design, and an intuitive user experience that highlights the agency's work in an engaging way.",
    challenges: "Designing a responsive layout that adapts to all screen sizes while maintaining visual consistency, implementing smooth animations without compromising performance, and ensuring the website is accessible and fast-loading across devices.",
    solution: "Built the website using React and JavaScript, leveraging Framer Motion for smooth animations and transitions. Tailwind CSS was used to create a responsive design that adapts seamlessly to different screen sizes while maintaining a consistent aesthetic. Optimized images and code to ensure fast load times and a smooth user experience.",
    results: "The k72 agency portfolio website successfully showcases the agency's projects with engaging animations and a clean design. The responsive layout ensures a seamless experience across devices, while the smooth transitions enhance user engagement and create a memorable browsing experience.",
    technologies: ["React", "JavaScript", "Framer Motion", "Tailwind CSS"],
    link: "https://k72-blush.vercel.app/",
    mockupImages: k72.slice(1),
  },
  {
    id: 15,
    title: "Xora",
    description: "A modern e-commerce website for a luxury fashion brand featuring smooth animations and a clean design.",
    category: "Frontend",
    image: Xora[0],
    tags: ["React", "JavaScript","Tailwind CSS","framer"],
    fullDescription: "Xora is a modern e-commerce website designed for a luxury fashion brand. The site features smooth animations, a clean design, and an intuitive user experience that highlights the brand's products in an engaging way.",
    challenges: "Designing a responsive layout that adapts to all screen sizes while maintaining visual consistency, implementing smooth animations without compromising performance, and ensuring the website is accessible and fast-loading across devices.",
    solution: "Built the website using React and JavaScript, leveraging Framer Motion for smooth animations and transitions. Tailwind CSS was used to create a responsive design that adapts seamlessly to different screen sizes while maintaining a consistent aesthetic. Optimized images and code to ensure fast load times and a smooth user experience.",
    results: "The Xora e-commerce website successfully showcases the brand's products with engaging animations and a clean design. The responsive layout ensures a seamless experience across devices, while the smooth transitions enhance user engagement and create a memorable browsing experience.",
    technologies: ["React", "JavaScript", "Framer Motion", "Tailwind CSS"],
    link: "https://xora.vercel.app/",
    mockupImages: Xora.slice(1),
  },
  {
    id: 16,
    title: "Tipsy",
    description: "A visually rich mocktail bar and restaurant website featuring smooth GSAP animations and immersive parallax scroll effects.",
    category: "Frontend",
    image: tispy[0],
    tags: ["React", "JavaScript","Tailwind CSS","framer"],
    fullDescription: "Tipsy is a modern mocktail bar and restaurant website designed to deliver an immersive, high-energy browsing experience. The site uses smooth animations, scroll-based interactions, and parallax effects to reflect the vibrant atmosphere of the brand while guiding users through menus, ambiance, and key sections seamlessly.",
    challenges: "Creating fluid scroll-based animations without impacting performance, synchronizing multiple animation timelines across sections, maintaining responsiveness across devices, and ensuring animations enhance usability rather than distract from content.",
    solution: "Built the website using React and JavaScript with GSAP to implement smooth transitions, scroll-triggered animations, and parallax effects. Tailwind CSS was used for responsive layout and rapid styling, ensuring consistent design across screen sizes while keeping animation performance optimized.",
    results: "The animated interactions and parallax effects significantly improved user engagement, creating a memorable brand experience. Smooth scrolling and section transitions enhanced visual storytelling, helping the website stand out while maintaining fast load times and responsive behavior.",
    technologies: ["React", "JavaScript", "GSAP", "Tailwind CSS"],
    link: "https://tipsy-lilac.vercel.app/",
    mockupImages: tispy.slice(1),
  },
  {
    id: 17,
    title: "Tripster",
    description: "A modern tourism and travel landing page designed to inspire exploration through smooth animations and engaging visuals.",
    category: "Full-Stack",
    image: tripster[0],
    tags: ["Next.js", "JavaScript", "Tailwind CSS", "Framer Motion"],
    fullDescription: "Tripster is a visually engaging landing page for a tourism and travel brand. The project focuses on delivering an inspiring first impression using clean layouts, subtle animations, and smooth transitions to highlight destinations, travel experiences, and brand messaging.",
    challenges: "Creating an eye-catching hero section, implementing smooth animations without affecting performance, maintaining visual consistency across devices, and ensuring fast load times for an animation-heavy landing page.",
    solution: "Built the landing page using Next.js for optimized performance and routing. Animations and page transitions were implemented using Framer Motion to enhance user engagement, while Tailwind CSS ensured a responsive and scalable design system across all screen sizes.",
    results: "The final landing page delivers a polished and immersive experience that effectively captures user attention. Smooth animations and clear visual hierarchy improve engagement, making the platform suitable for showcasing travel destinations and driving user interest.",
    technologies: ["Next.js", "JavaScript", "Tailwind CSS", "Framer Motion"],
    link: "https://tripster-topaz.vercel.app/",
    mockupImages: tripster.slice(1),
  },
  {
    id: 18,
    title: "MemoWorld",
    description: "A modern memo management platform designed to help users organize and store their notes efficiently.",
    category: "Frontend",
    image: memoWorld[0],
    tags: ["React","Tailwind","TypeScript"],
    fullDescription: "MemoWorld is a modern memo management platform that helps users organize and store their notes efficiently. The platform features a clean design, intuitive navigation, and easy access to essential memo functions.",
    challenges: "Creating an intuitive user interface, ensuring easy access to key memo features, and designing a visually appealing layout that enhances user engagement.",
    solution: "Developed the platform using Next.js and TypeScript, focusing on user experience and visual design. Tailwind CSS was utilized to create a responsive layout that adapts to various screen sizes while maintaining a consistent aesthetic.",
    results: "The MemoWorld memo management platform provides users with an efficient way to organize and store their notes. The intuitive design and easy navigation enhance user satisfaction, making it a preferred choice for memo management needs.",
    technologies: ["React","Tailwind","TypeScript"],
    link: "https://memo-world.vercel.app/",
    mockupImages: memoWorld.slice(1),
  },
  
  

  
     
  // {
  //   id: 10,
  //   title: "Car Rental",
  //   description: "A car rental website featuring car service at your doorstep",
  //   category: "Frontend",
  //   image: car[0],
  //   tags: ["React", "JavaScript", "SASS"],
  //   fullDescription: "The Car Rental website is a modern, responsive platform that allows users to browse and book car services conveniently. It features a clean design with intuitive navigation and seamless booking functionality.",
  //   challenges: "Creating visually appealing animations that enhance the user experience without overwhelming the content, ensuring responsiveness across different devices, and effectively showcasing detailed vehicle information.",
  //   solution: "Developed the website using React and JavaScript, incorporating Framer Motion for fluid animations and transitions. Tailwind CSS was employed to create a responsive layout that adapts seamlessly to various screen sizes while maintaining visual consistency.",
  //   results: "The Car Showcase website successfully captivates users with its dynamic presentation of vehicles. The combination of smooth animations and interactive features enhances user engagement, making it easier for visitors to explore and appreciate the car models on display.",
  //   technologies: ["React", "JavaScript", "SASS"],
  //   link: "https://subhaji-dutta.github.io/CarService/",
  //   mockupImages: car.slice(1),

  // },
  {
    id: 19,
    title: "Atlantis",
    description: "A visually stunning landing page for a fictional underwater resort, featuring immersive animations and parallax effects.",
    category: "UI Design",
    image: atlantis[0],
    tags: ["Figma"],
    fullDescription: "The Atlantis landing page is designed to captivate visitors with its immersive tourism resort. It features smooth animations and parallax scrolling effects that create a sense of depth and movement, enhancing the overall user experience.",
    challenges: "Designing engaging animations that complement the underwater theme, ensuring smooth performance across devices, and creating a responsive layout that maintains visual appeal on various screen sizes.",
    solution: "Built the landing page using React and JavaScript, leveraging GSAP for advanced animation capabilities. Tailwind CSS was utilized to develop a responsive design that adapts seamlessly to different devices while preserving the thematic elements.",
    results: "The Atlantis landing page effectively draws users into its underwater world through captivating animations and interactive elements. The parallax effects and smooth transitions enhance user engagement, making the landing page a memorable experience for visitors.",
    technologies: ["Figma"],
    link: "https://www.figma.com/proto/oX7MRbLjvjED4ePPFxOJ72/Atlantis?t=TrQXCZS9M1JlQfCX-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=2-2",
    mockupImages: atlantis.slice(1),
  },
  {
    id: 20,
    title: "Furni",
    description: "A modern furniture e-commerce website featuring a clean design and user-friendly navigation.",
    category: "UI Design",
    image: furni[0],
    tags: ["Figma"],
    fullDescription: "Furni is an e-commerce website designed to showcase a wide range of furniture products. The site features a clean and modern design, making it easy for users to browse and find items that suit their needs.",
    challenges: "Creating an intuitive navigation system, designing a visually appealing product layout, and ensuring a seamless user experience across different devices.",
    solution: "Developed the website using React and JavaScript, with a focus on user experience and visual design. Tailwind CSS was employed to create a responsive layout that adapts to various screen sizes while maintaining a consistent aesthetic.",
    results: "The Furni e-commerce website provides users with an enjoyable shopping experience through its clean design and easy-to-use navigation. The visually appealing product displays and responsive layout enhance user engagement, making it a go-to destination for furniture shopping.",
    technologies: ["Figma"],
    link: "https://www.figma.com/proto/WcPZcUXUhK29qcw7d4ruom/Furniture?t=hj0B3U0rDOIgnXcC-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2",
    mockupImages: furni.slice(1),
  },
  {
    id: 21,
    title: "FineBank",
    description: "A sleek and modern banking app interface designed for seamless user experience and financial management.",
    category: "UI Design",
    image: finebank[0],
    tags: ["Figma"],
    fullDescription: "FineBank is a banking app interface designed to provide users with a seamless experience for managing their finances. The app features a modern design, intuitive navigation, and easy access to essential banking functions.",
    challenges: "Designing an intuitive user interface, ensuring easy access to key banking features, and creating a visually appealing layout that enhances user engagement.",
    solution: "Developed the app interface using React and JavaScript, focusing on user experience and visual design. Tailwind CSS was utilized to create a responsive layout that adapts to various screen sizes while maintaining a consistent aesthetic.",
    results: "The FineBank app interface offers users a smooth and efficient way to manage their finances. The intuitive design and easy navigation enhance user satisfaction, making it a preferred choice for banking needs.",
    technologies: ["Figma"],
    link: "https://www.figma.com/proto/JGEu5S5h3EClonbNxdv6Ny/Finebank?node-id=137-7477&starting-point-node-id=137%3A7477&t=w6DhGLEtJk55FBjO-1",
    mockupImages: finebank.slice(1),
  },
  // {
  //   id: 14,
  //   title: "HiRRD",
  //   description: "A modern HR recruitment dashboard designed to streamline hiring processes and improve candidate management.",
  //   category: "Full-Stack",
  //   image: hirrd[0],
  //   tags: ["React", "TypeScript", "Tailwind CSS"],
  //   fullDescription: "HiRRD is an HR recruitment dashboard designed to help HR professionals manage the hiring process more efficiently. The dashboard features a clean design, intuitive navigation, and easy access to essential recruitment functions.",
  //   challenges: "Creating an intuitive user interface, ensuring easy access to key recruitment features, and designing a visually appealing layout that enhances user engagement.",
  //   solution: "Developed the dashboard using React and JavaScript, focusing on user experience and visual design. Tailwind CSS was utilized to create a responsive layout that adapts to various screen sizes while maintaining a consistent aesthetic.",
  //   results: "The HiRRD recruitment dashboard provides HR professionals with an efficient way to manage the hiring process. The intuitive design and easy navigation enhance user satisfaction, making it a preferred choice for recruitment needs.",
  //   technologies: ["React", "TypeScript", "Tailwind CSS","clerk", "mongoDB"],
  //   link: "https://job-portal-lime-ten.vercel.app/",
  //   mockupImages: hirrd.slice(1),
  // },
  {
    id: 22,
    title: "Dwello",
    description: "A modern real estate listing platform designed to connect buyers and sellers with ease.",
    category: "UI Design",
    image: dwello[0],
    tags: ["Figma"],
    fullDescription: "Dwello is a real estate listing platform that connects buyers and sellers through a user-friendly interface. The platform features a clean design, intuitive navigation, and easy access to essential real estate functions.",
    challenges: "Creating an intuitive user interface, ensuring easy access to key real estate features, and designing a visually appealing layout that enhances user engagement.",
    solution: "Developed the platform using Next.js and TypeScript, focusing on user experience and visual design. Tailwind CSS was utilized to create a responsive layout that adapts to various screen sizes while maintaining a consistent aesthetic.",
    results: "The Dwello real estate platform provides users with an efficient way to buy and sell properties. The intuitive design and easy navigation enhance user satisfaction, making it a preferred choice for real estate transactions.",
    technologies: ["Figma"],
    link: "https://www.figma.com/proto/MgLahGtxLF01rsVuS1XHrp/Dwello_estate?node-id=1-2&p=f&t=W2QEXTjawWMRLpWR-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
    mockupImages: dwello.slice(1),
  },
  
  // {
  //   id: 17,
  //   title: "FlexFit",
  //   description: "A modern fitness platform designed to help users track their workouts and progress.",
  //   category: "Frontend",
  //   image: flexfit[0],
  //   tags: ["React", "Tailwind", "JavaScript"],
  //   fullDescription: "FlexFit is a modern fitness platform that helps users track their workouts and progress. The platform features a clean design, intuitive navigation, and easy access to essential fitness functions.",
  //   challenges: "Creating an intuitive user interface, ensuring easy access to key fitness features, and designing a visually appealing layout that enhances user engagement.",
  //   solution: "Developed the platform using Next.js and TypeScript, focusing on user experience and visual design. Tailwind CSS was utilized to create a responsive layout that adapts to various screen sizes while maintaining a consistent aesthetic.",
  //   results: "The FlexFit fitness platform provides users with an efficient way to track their workouts and progress. The intuitive design and easy navigation enhance user satisfaction, making it a preferred choice for fitness tracking needs.",
  //   technologies: ["Figma"],
  //   link: "https://flex-fit-six.vercel.app/",
  //   mockupImages: flexfit.slice(1),
  // },
  
];
