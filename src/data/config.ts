const config = {
  title: "Yaeesh Babar | MERN Stack Developer",
  description: {
    long: "Portfolio of Yaeesh Babar, a MERN Stack Developer at Stewart Pakistan and founder of Black Hole Matrix. Web and app development, UI/UX, backend, AI automation, WordPress, Shopify, e-commerce, SaaS and CRMs for startups, businesses and agencies worldwide. 70+ projects shipped.",
    short:
      "Yaeesh Babar, MERN Stack Developer and founder of Black Hole Matrix, building web apps, SaaS, mobile apps and stores for clients worldwide.",
  },
  keywords: [
    "Yaeesh Babar",
    "Yaeesh",
    "portfolio",
    "MERN stack developer",
    "full-stack developer",
    "Black Hole Matrix",
    "web development",
    "app development",
    "Shopify",
    "WordPress",
    "SaaS",
    "AI automation",
    "React",
    "Next.js",
    "Node.js",
    "Lahore",
    "Pakistan",
  ],
  author: "Yaeesh Babar",
  role: "MERN Stack Developer",
  email: "yaeeshbabar@gmail.com",
  site: "https://www.yaeesh.work",
  agency: { name: "Black Hole Matrix", url: "https://www.blackholepk.com" },

  // for github stars button (empty = hidden)
  githubUsername: "",
  githubRepo: "",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    github: "https://github.com/yaeeshbabar",
    linkedin: "https://www.linkedin.com/in/yaeesh-babar-516bab28a/",
    upwork: "https://www.upwork.com/freelancers/~0175e100f3b0b85788",
    whatsapp:
      "https://wa.me/923100786960?text=" +
      encodeURIComponent(
        "Hi Yaeesh! I found your portfolio and want to discuss a project."
      ),
  },
};
export { config };
