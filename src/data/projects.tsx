import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
const BASE_PATH = "/assets/projects-screenshots";

// Renders a brand SVG from /public as a monochrome glyph that inherits the
// surrounding text color (the skill dock styles every icon via currentColor),
// so full-color marks like Mistral flatten to match the rest of the set.
const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
// Brand chips sourced from thesvg CLI mono SVGs in /public/assets/logos,
// rendered via MaskIcon so each one inherits the dock's currentColor.
const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});
const PROJECT_SKILLS = {
  next: brand("Next.js", "nextdotjs-mono.svg"),
  chakra: brand("Chakra UI", "chakra-ui-mono.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  python: brand("Python", "python-mono.svg"),
  prisma: brand("Prisma", "prisma-mono.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  mongo: brand("MongoDB", "mongodb-mono.svg"),
  express: brand("Express", "express-mono.svg"),
  reactQuery: brand("React Query", "react-query-mono.svg"),
  shadcn: brand("shadcn/ui", "shadcn-ui-mono.svg"),
  // Not in the thesvg registry — keep the existing custom logo.
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: brand("Tailwind", "tailwind-css-mono.svg"),
  docker: brand("Docker", "docker-mono.svg"),
  // Not in the thesvg registry — keep the text mark.
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: brand("Firebase", "firebase-mono.svg"),
  sockerio: brand("Socket.io", "socketdotio-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  vue: brand("Vue.js", "vuedotjs-mono.svg"),
  react: brand("React.js", "react-mono.svg"),
  sanity: brand("Sanity", "sanity-mono.svg"),
  gsap: brand("GSAP", "gsap-mono.svg"),
  motion: brand("Motion", "motion.svg"),
  supabase: brand("Supabase", "supabase-mono.svg"),
  trpc: brand("tRPC", "trpc-mono.svg"),
  drizzle: brand("Drizzle ORM", "drizzle-mono.svg"),
  hono: brand("Hono", "hono-mono.svg"),
  redis: brand("Redis / BullMQ", "redis-mono.svg"),
  cloudflare: brand("Cloudflare", "cloudflare-mono.svg"),
  // React Native reuses the React mark.
  reactNative: brand("React Native", "react-mono.svg"),
  betterAuth: brand("Better Auth", "better-auth-mono.svg"),
  // Not in the thesvg registry — keep the text marks.
  zustand: {
    title: "Zustand",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Zu</span>,
  },
  partykit: {
    title: "PartyKit",
    bg: "black",
    fg: "white",
    icon: <span className="text-base">🎈</span>,
  },
  hocuspocus: {
    title: "Hocuspocus",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Hp</span>,
  },
  // React Flow ships under the xyflow brand.
  reactFlow: brand("React Flow", "xyflow-mono.svg"),
  codemirror: brand("CodeMirror", "codemirror-mono.svg"),
  // "Satori / sharp" — uses the sharp mark.
  satori: brand("Satori / sharp", "sharp-mono.svg"),
  turborepo: brand("Turborepo", "turborepo-mono.svg"),
  // Vercel AI SDK uses the Vercel mark.
  aiSDK: brand("Vercel AI SDK", "vercel-mono.svg"),
  anthropic: brand("Anthropic Claude", "anthropic-mono.svg"),
  mistral: brand("Mistral AI", "mistral-ai-mono.svg"),
  // Not in the thesvg registry — keep the text mark.
  nextIntl: {
    title: "next-intl",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">i18n</span>,
  },
  // Not in the thesvg registry — keep the text marks.
  expo: {
    title: "Expo",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Expo</span>,
  },
  stripe: brand("Stripe", "skills/stripe.svg"),
  openai: brand("OpenAI", "skills/openai.svg"),
  n8n: brand("n8n", "skills/n8n.svg"),
  // Not in the thesvg registry — keep the text marks.
  jwt: {
    title: "JWT",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">JWT</span>,
  },
  tmdb: {
    title: "TMDB API",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">TMDB</span>,
  },
  agents: {
    title: "AI Agents",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">AI</span>,
  },
  mcp: {
    title: "MCP",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">MCP</span>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "billin",
    category: "Business website + admin",
    title: "Billin Solutions",
    src: `${BASE_PATH}/billin/landing.webp`,
    screenshots: ["landing.webp"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.mongo],
    },
    live: "https://billinsolutions.com",
    github: "https://github.com/yaeeshbabar/Billin-Solutions",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A medical billing company website that turns visitors into leads.
          </TypographyP>
          <TypographyP className="font-mono ">
            Built end to end on the MERN stack: a fast marketing site with lead-capture and demo-request forms, plus an admin dashboard where the team manages blogs, demo requests and pop-ups without touching code.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/billin/landing.webp`]} />
          <TypographyH3 className="my-4 mt-8">Admin dashboard</TypographyH3>
          <p className="font-mono mb-2">Blog editor, demo request inbox and pop-up manager behind authentication, so the client runs the site day to day on their own.</p>
        </div>
      );
    },
  },
  {
    id: "agentforge",
    category: "AI multi-agent system",
    title: "AgentForge",
    src: `${BASE_PATH}/agentforge/landing.webp`,
    screenshots: ["landing.webp"],
    skills: {
      frontend: [PROJECT_SKILLS.ts, PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.agents, PROJECT_SKILLS.openai],
    },
    live: "",
    github: "https://github.com/yaeeshbabar/AgentForge-Multi-Agent-AI-Programming-Simulator",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A multi-agent AI programming simulator.
          </TypographyP>
          <TypographyP className="font-mono ">
            Junior, Senior and Lead AI agents collaborate like a real dev team: they plan the work, write code, review each other and debug together. Built for developers exploring autonomous agent workflows.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/agentforge/landing.webp`]} />
          <TypographyH3 className="my-4 mt-8">How it works</TypographyH3>
          <p className="font-mono mb-2">Each agent has its own role and prompt. Tasks move from planning to coding to review, and the Lead agent decides when the work is done.</p>
        </div>
      );
    },
  },
  {
    id: "kitchen-cuisinia",
    category: "Food ordering platform",
    title: "FreshMart / Kitchen Cuisinia",
    src: `${BASE_PATH}/kitchen-cuisinia/landing.webp`,
    screenshots: ["landing.webp"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.mongo, PROJECT_SKILLS.stripe],
    },
    live: "",
    github: "https://github.com/yaeeshbabar/kitchen-cuisinia",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A full-stack food and grocery ordering platform.
          </TypographyP>
          <TypographyP className="font-mono ">
            Customers browse the menu, fill a cart and pay with Stripe, then track their order in real time. Restaurant owners get an admin panel to manage menus, orders and stock.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/kitchen-cuisinia/landing.webp`]} />
        </div>
      );
    },
  },
  {
    id: "streamify",
    category: "Movie discovery app",
    title: "Streamify",
    src: `${BASE_PATH}/streamify/landing.webp`,
    screenshots: ["landing.webp"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.mongo, PROJECT_SKILLS.jwt, PROJECT_SKILLS.tmdb],
    },
    live: "",
    github: "https://github.com/yaeeshbabar/stream-main",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A Netflix-style movie discovery app.
          </TypographyP>
          <TypographyP className="font-mono ">
            Live data from the TMDB API with authentication, personal watchlists, search, filters and trailers, wrapped in a clean Netflix-inspired UI.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/streamify/landing.webp`]} />
        </div>
      );
    },
  },
  {
    id: "planner",
    category: "AI meal planner",
    title: "Custom Crave Meal Planner",
    src: `${BASE_PATH}/planner/landing.webp`,
    screenshots: ["landing.webp"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.mongo, PROJECT_SKILLS.openai],
    },
    live: "",
    github: "https://github.com/yaeeshbabar/planner-main",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            An AI meal planner that builds your week for you.
          </TypographyP>
          <TypographyP className="font-mono ">
            Generates weekly meal plans from your goals, allergies and preferences with OpenAI, then adds calorie tracking, recipe suggestions, grocery lists and a support chatbot.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/planner/landing.webp`]} />
        </div>
      );
    },
  },
  {
    id: "kicks",
    category: "E-commerce store",
    title: "Kicks",
    src: `${BASE_PATH}/kicks/landing.webp`,
    screenshots: ["landing.webp"],
    skills: {
      frontend: [PROJECT_SKILLS.ts, PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.mongo, PROJECT_SKILLS.stripe],
    },
    live: "",
    github: "https://github.com/yaeeshbabar/ecommerce-kicks-main",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A sneaker e-commerce store.
          </TypographyP>
          <TypographyP className="font-mono ">
            Product pages, size selection, shopping cart and checkout for a sneaker brand, built with Next.js, TypeScript and Tailwind CSS.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/kicks/landing.webp`]} />
        </div>
      );
    },
  },
  {
    id: "ride-booking",
    category: "Backend API",
    title: "Ride Booking API",
    src: `${BASE_PATH}/ride-booking/landing.webp`,
    screenshots: ["landing.webp"],
    skills: {
      frontend: [PROJECT_SKILLS.ts],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.postgres, PROJECT_SKILLS.jwt],
    },
    live: "",
    github: "https://github.com/yaeeshbabar/ride-booking",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            The backend for a ride-hailing platform.
          </TypographyP>
          <TypographyP className="font-mono ">
            Rider and driver authentication, ride requests and matching, driver status, fare calculation and trip history, built as a production-ready REST API.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/ride-booking/landing.webp`]} />
        </div>
      );
    },
  },
  {
    id: "task-management",
    category: "Project management tool",
    title: "Task Management App",
    src: `${BASE_PATH}/task-management/landing.webp`,
    screenshots: ["landing.webp"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.mongo],
    },
    live: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A Kanban-style project management tool.
          </TypographyP>
          <TypographyP className="font-mono ">
            Drag-and-drop boards, team assignment, priority levels, deadlines and role-based access control so teams always know who is doing what.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/task-management/landing.webp`]} />
        </div>
      );
    },
  },
  {
    id: "n8n",
    category: "Automation library",
    title: "Awesome n8n Templates",
    src: `${BASE_PATH}/n8n/landing.webp`,
    screenshots: ["landing.webp"],
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.n8n, PROJECT_SKILLS.openai],
    },
    live: "",
    github: "https://github.com/yaeeshbabar/awesome-n8n-templates-main",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A curated library of n8n automation templates.
          </TypographyP>
          <TypographyP className="font-mono ">
            Ready-to-use workflows for email, CRM, social media, data pipelines, webhooks and AI, so businesses can automate the boring stuff in minutes.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/n8n/landing.webp`]} />
        </div>
      );
    },
  },
];
export default projects;
