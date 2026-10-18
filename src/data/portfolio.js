// All portfolio content lives here. Words wrapped in <b> render in the
// Zentry display font, the same trick the original template uses.

export const profile = {
  name: "Yaeesh Babar",
  role: "MERN Stack Developer",
  tagline: "MERN Stack Developer & Founder of Black Hole Matrix",
  summary:
    "Web and app development, UI/UX, backend, AI automation, WordPress, e-commerce, Shopify, SaaS and CRMs for startups, businesses and agencies worldwide.",
  location: "Lahore, Pakistan",
  projectCount: "70+",
  agency: {
    name: "Black Hole Matrix",
    url: "https://www.blackholepk.com",
  },
  currentJob: {
    company: "Stewart Pakistan",
    role: "MERN Stack Developer",
  },
  email: "yaeeshbabar@gmail.com",
  github: "https://github.com/yaeeshbabar",
  linkedin: "https://www.linkedin.com/in/yaeesh-babar-516bab28a/",
  upwork: "https://www.upwork.com/freelancers/~0175e100f3b0b85788",
  whatsapp: "https://wa.me/923100786960",
};

// "Contact me" and "Start a project" open a WhatsApp chat with a ready message.
export const contactLink = `${profile.whatsapp}?text=${encodeURIComponent(
  "Hi Yaeesh! I found your portfolio and want to discuss a project."
)}`;

export const navItems = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Agency", href: "#story" },
  { label: "Contact", href: "#contact" },
];

// The first four get the animated video cards; every entry also shows in
// the full services grid.
export const services = [
  {
    title: "web devel<b>o</b>pment",
    description:
      "Websites, web apps and dashboards built on the MERN stack, fast, secure and ready to scale.",
    video: "videos/feature-1.mp4",
    icon: "web",
  },
  {
    title: "ui/ux & fr<b>o</b>ntend",
    description:
      "Modern interfaces, smooth animations and responsive design that looks great on every screen.",
    video: "videos/feature-2.mp4",
    icon: "design",
  },
  {
    title: "app devel<b>o</b>pment",
    description:
      "Android, iOS and cross-platform apps with React Native, sharing one backend with your web app.",
    video: "videos/feature-3.mp4",
    icon: "mobile",
  },
  {
    title: "sh<b>o</b>pify",
    description:
      "Shopify stores with custom themes, apps and checkout flows that turn visitors into buyers.",
    video: "videos/feature-4.mp4",
    icon: "shopify",
  },
  {
    title: "backend devel<b>o</b>pment",
    description:
      "APIs, databases, authentication and server-side systems with Node.js, MongoDB, PostgreSQL and Firebase.",
    icon: "api",
  },
  {
    title: "a<b>i</b> & automation",
    description:
      "AI integration, chatbots, n8n automation and AI-powered apps that save you hours of work.",
    icon: "ai",
  },
  {
    title: "w<b>o</b>rdpress & cms",
    description:
      "WordPress websites, custom themes and plugins, WooCommerce and CMS solutions you can edit yourself.",
    icon: "wordpress",
  },
  {
    title: "e-co<b>m</b>merce",
    description:
      "Online stores with product systems, carts, payment integration, inventory and order tracking.",
    icon: "store",
  },
  {
    title: "s<b>a</b>as",
    description:
      "SaaS products from MVP to launch: auth, subscriptions, Stripe billing, dashboards and multi-tenant backends.",
    icon: "saas",
  },
  {
    title: "c<b>r</b>ms",
    description:
      "Custom CRMs, admin panels and internal tools to manage leads, clients, sales and teams.",
    icon: "crm",
  },
  {
    title: "landing pa<b>g</b>es",
    description:
      "Business websites and landing pages with SEO, analytics and lead-capture forms.",
    icon: "landing",
  },
  {
    title: "supp<b>o</b>rt & hosting",
    description:
      "Deployment, hosting, speed and SEO fixes, bug fixes and ongoing maintenance.",
    icon: "support",
  },
];

export const skills = [
  "MongoDB",
  "Express.js",
  "React",
  "Node.js",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Redux",
  "REST APIs",
  "React Native",
  "Firebase",
  "Cloudinary",
  "JWT",
  "Shopify",
  "WordPress",
  "WooCommerce",
  "n8n",
  "OpenAI",
  "Figma",
  "Git & GitHub",
];

export const experience = [
  {
    role: "MERN Stack Developer",
    company: "Stewart Pakistan",
    image: "experience/stewart.webp",
    period: "Present",
    description:
      "Building and maintaining full-stack MERN applications for production clients.",
  },
  {
    role: "Founder & CEO",
    company: "Black Hole Matrix",
    image: "experience/blackhole.webp",
    period: "2024 – Present",
    url: "https://www.blackholepk.com",
    description:
      "Leading a Lahore-based agency that ships web apps, SaaS, mobile apps, Shopify and WordPress sites for clients worldwide.",
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Upwork & Fiverr",
    image: "experience/upwork.webp",
    period: "2023 – Present",
    url: "https://www.upwork.com/freelancers/~0175e100f3b0b85788",
    description:
      "Delivering MERN stack projects end to end for international clients.",
  },
  {
    role: "Frontend Intern",
    company: "Speridian Technologies",
    image: "experience/speridian.webp",
    period: "2023",
    description: "Built frontend features for production web products.",
  },
  {
    role: "DSA Intern",
    company: "Speridian Technologies",
    image: "experience/speridian.webp",
    period: "2022",
    description: "Worked on data structures and algorithms problem solving.",
  },
  {
    role: ".NET Intern",
    company: "NetSol Technologies",
    image: "experience/netsol.webp",
    period: "2022",
    description: "First industry internship, working with the .NET stack.",
  },
];

export const education = [
  { title: "BSCS", place: "University of Central Punjab (UCP)", period: "2023 – Present" },
  { title: "ADP IT · 4.0 GPA", place: "University of Management & Technology (UMT)", period: "2021 – 2023" },
  { title: "MERN Stack Bootcamp", place: "UpScale 2.0 @ UCP", period: "2025" },
  { title: "PHP Laravel & Advanced Web Dev", place: "BOSTON / Singularity Pro", period: "2025" },
  { title: "MERN Stack Development", place: "Knowledge Streams", period: "2024" },
  { title: "Frontend Development", place: "PNY Trainings", period: "2021" },
];

// One entry per project. `image` is the thumbnail from the repo README, a
// screenshot of the running repo, or a generated cover (public/projects/).
const gh = (repo) => `https://github.com/yaeeshbabar/${repo}`;

export const projects = [
  {
    title: "Billin Solutions",
    description:
      "Medical billing company website with lead-capture forms and an admin dashboard for blogs, demo requests and pop-ups.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    image: "projects/billin.webp",
    live: "https://billinsolutions.com",
    github: gh("Billin-Solutions"),
  },
  {
    title: "AgentForge",
    description:
      "Multi-agent AI programming simulator where Junior, Senior and Lead agents plan, code, review and debug together.",
    tech: ["AI Agents", "TypeScript", "React", "Node.js"],
    image: "projects/agentforge.webp",
    github: gh("AgentForge-Multi-Agent-AI-Programming-Simulator"),
  },
  {
    title: "FreshMart / Kitchen Cuisinia",
    description:
      "Full-stack food and grocery ordering platform with menu management, cart, order tracking, Stripe payments and an admin panel.",
    tech: ["MERN", "Stripe", "Admin Panel"],
    image: "projects/kitchen-cuisinia.webp",
    github: gh("kitchen-cuisinia"),
  },
  {
    title: "Streamify",
    description:
      "Netflix-style movie discovery app with TMDB data, authentication, watchlists, search and trailers.",
    tech: ["MERN", "TMDB API", "Tailwind"],
    image: "projects/streamify.webp",
    github: gh("stream-main"),
  },
  {
    title: "Custom Crave Meal Planner",
    description:
      "AI meal planner that builds weekly plans from goals and allergies, with calorie tracking, recipes and a support chatbot.",
    tech: ["MERN", "OpenAI", "Tailwind"],
    image: "projects/planner.webp",
    github: gh("planner-main"),
  },
  {
    title: "Kicks",
    description:
      "Sneaker e-commerce store with product pages, size selection, cart and checkout.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "projects/kicks.webp",
    github: gh("ecommerce-kicks-main"),
  },
  {
    title: "Ride Booking API",
    description:
      "Backend for a ride-hailing platform: rider and driver auth, ride requests, driver status, fares and trip history.",
    tech: ["Node.js", "Express", "TypeScript", "PostgreSQL", "JWT"],
    image: "projects/ride-booking.webp",
    github: gh("ride-booking"),
  },
  {
    title: "Task Management App",
    description:
      "Kanban-style project management tool with drag-and-drop boards, team assignment, priorities, deadlines and roles.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "projects/task-management.webp",
  },
  {
    title: "Awesome n8n Templates",
    description:
      "Curated library of n8n automation templates for email, CRM, social media, data pipelines and AI workflows.",
    tech: ["n8n", "Automation", "AI"],
    image: "projects/n8n.webp",
    github: gh("awesome-n8n-templates-main"),
  },
];
