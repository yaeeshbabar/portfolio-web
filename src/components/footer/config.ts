import { config } from "@/data/config";

const footer: { title: string; href: string }[] = [
  {
    title: config.agency.name,
    href: config.agency.url,
  },
  {
    // theme credit, as asked by the original author
    title: "Theme by Naresh Khatri",
    href: "https://github.com/Naresh-Khatri/3d-portfolio",
  },
];

export { footer };
