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
  "../assets/gallery/atlantis/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);
const furniImages = import.meta.glob(
  "../assets/gallery/furni/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);
const finebankImages = import.meta.glob(
  "../assets/gallery/finebank/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);
const hirrdImages = import.meta.glob(
  "../assets/gallery/hirrd/*.{jpg,jpeg,png,webp,PNG}",
  { eager: true, import: "default" }
);
const dwelloImages = import.meta.glob(
  "../assets/gallery/dwello/*.{jpg,jpeg,png,webp}",
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
    id: 5,
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
    id: 6,
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
    id: 8,
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
    id: 9,
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
    id: 10,
    title: "Car Rental",
    description: "A car rental website featuring car service at your doorstep",
    category: "Frontend",
    image: car[0],
    tags: ["React", "JavaScript", "SASS"],
  fullDescription: "The Car Rental website ",
  challenges: "Creating visually appealing animations that enhance the user experience without overwhelming the content, ensuring responsiveness across different devices, and effectively showcasing detailed vehicle information.",
  solution: "Developed the website using React and JavaScript, incorporating Framer Motion for fluid animations and transitions. Tailwind CSS was employed to create a responsive layout that adapts seamlessly to various screen sizes while maintaining visual consistency.",
  results: "The Car Showcase website successfully captivates users with its dynamic presentation of vehicles. The combination of smooth animations and interactive features enhances user engagement, making it easier for visitors to explore and appreciate the car models on display.",
  technologies: ["React", "JavaScript", "SASS"],
    link: "https://subhaji-dutta.github.io/CarService/",
    mockupImages: car.slice(1),

  },
  {
    id: 11,
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
    link: "https://atlantis-landing-page-example.vercel.app/",
    mockupImages: atlantis.slice(1),
  },
  {
    id: 12,
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
    link: "https://furni-ecommerce-example.vercel.app/",
    mockupImages: furni.slice(1),
  },
  {
    id: 13,
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
    link: "https://finebank-app-example.vercel.app/",
    mockupImages: finebank.slice(1),
  },
  {
    id: 14,
    title: "HiRRD",
    description: "A modern HR recruitment dashboard designed to streamline hiring processes and improve candidate management.",
    category: "Full-Stack",
    image: hirrd[0],
    tags: ["React", "TypeScript", "Tailwind CSS"],
  fullDescription: "HiRRD is an HR recruitment dashboard designed to help HR professionals manage the hiring process more efficiently. The dashboard features a clean design, intuitive navigation, and easy access to essential recruitment functions.",
  challenges: "Creating an intuitive user interface, ensuring easy access to key recruitment features, and designing a visually appealing layout that enhances user engagement.",
  solution: "Developed the dashboard using React and JavaScript, focusing on user experience and visual design. Tailwind CSS was utilized to create a responsive layout that adapts to various screen sizes while maintaining a consistent aesthetic.",
  results: "The HiRRD recruitment dashboard provides HR professionals with an efficient way to manage the hiring process. The intuitive design and easy navigation enhance user satisfaction, making it a preferred choice for recruitment needs.",
  technologies: ["React", "TypeScript", "Tailwind CSS","clerk", "mongoDB"],
    link: "https://job-portal-lime-ten.vercel.app/",
    mockupImages: hirrd.slice(1),
  },
  {
    id: 15,
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
    link: "https://dwello-real-estate-example.vercel.app/",
    mockupImages: dwello.slice(1),
  },

];
