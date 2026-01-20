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
const k72Images = import.meta.glob(
  "../assets/gallery/k72/*.{jpg,jpeg,png,webp}",
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



const gymate = Object.values(gymateImages) as string[];
const zentry = Object.values(zentryImages) as string[];
const dentiva = Object.values(dentivaImages) as string[];
const k72 = Object.values(k72Images) as string[];
const koynce = Object.values(koynceImages) as string[];
const spylt = Object.values(spyltImages) as string[];
const synca = Object.values(syncaImages) as string[];
const tispy = Object.values(tispyImages) as string[];
const tripster = Object.values(tripsterImages) as string[];




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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 6,
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
    id: 7,
    title: "K72-Agency profile",
    description: "A modern Agency profile website for showcasing services and portfolio",
    category: "Frontend",
    image: k72[0],
    tags: ["React", "TypeScript", "GraphQL","Framer"],
    fullDescription: "K72 is a modern agency profile website designed to showcase the company's services, portfolio, and client testimonials in a visually appealing and user-friendly manner. The website features a sleek design, interactive elements, and seamless navigation to provide visitors with an engaging experience while exploring the agency's offerings.",
    challenges: "Creating a visually compelling design that effectively communicates the agency's brand identity, implementing a dynamic portfolio section to highlight various projects, and ensuring optimal performance and responsiveness across different devices and screen sizes.",
    solution: "Developed the website using React and TypeScript for a robust and maintainable codebase. Utilized GraphQL to efficiently fetch and manage data for the portfolio and testimonials sections. Employed Framer Motion to add interactive animations and transitions, enhancing user engagement. Implemented responsive design principles using CSS Grid and Flexbox to ensure a seamless experience on both desktop and mobile devices.",
    results: "Since its launch, the K72 agency profile website has attracted over 15,000 unique visitors, resulting in a 40% increase in client inquiries. The dynamic portfolio section has received positive feedback for its ease of navigation and visual appeal, leading to a 30% boost in project bookings. The website's performance optimization efforts have resulted in a 25% reduction in bounce rates and improved user retention, contributing to the agency's overall growth and brand recognition.",
    technologies: ["NextJS", "TypeScript", "Tailwind CSS","GSAP"],
    link: "https://k72-blush.vercel.app/",
    mockupImages: k72.slice(1),
  },
  {
    id: 8,
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
    id: 9,
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
    link: "https://synca-eight.vercel.app/",
    mockupImages: tispy.slice(1),
  },
   {
    id: 10,
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
];
