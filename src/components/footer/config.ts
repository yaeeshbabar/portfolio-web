import { config } from "@/data/config";

const footer: { title: string; href: string }[] = [
  {
    title: config.agency.name,
    href: config.agency.url,
  },
];

export { footer };
