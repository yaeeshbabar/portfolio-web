import { TiLocationArrow } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";

import AnimatedTitle from "./AnimatedTitle";
import { BentoTilt } from "./Features";
import { profile, projects } from "../data/portfolio";

// Gradient cover used when a repo README has no image.
const Cover = ({ title }) => (
  <div className="flex-center size-full bg-gradient-to-br from-violet-300 via-black to-blue-300 p-6">
    <span className="bento-title special-font text-center text-[#dfdff2]">
      {title}
    </span>
  </div>
);

const ProjectCard = ({ project }) => (
  <BentoTilt className="bento-tilt_2 border-hsla flex flex-col bg-black">
    <div className="aspect-video w-full overflow-hidden">
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="size-full object-cover object-top transition duration-500 hover:scale-105"
        />
      ) : (
        <Cover title={project.title} />
      )}
    </div>

    <div className="flex flex-1 flex-col justify-between gap-4 p-5 text-[#dfdff2]">
      <div>
        <h3 className="font-zentry text-3xl uppercase leading-none">
          {project.title}
        </h3>
        {project.description && (
          <p className="mt-2 font-circular-web text-sm opacity-60">
            {project.description}
          </p>
        )}
      </div>

      {project.tech?.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="border-hsla rounded-full px-3 py-1 font-general text-[10px] uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="flex gap-3 font-general text-xs uppercase">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 rounded-full bg-yellow-300 px-4 py-2 text-black"
          >
            <TiLocationArrow /> live
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border-hsla flex items-center gap-1 rounded-full px-4 py-2"
          >
            <FaGithub /> code
          </a>
        )}
      </div>
    </div>
  </BentoTilt>
);

const Projects = () => (
  <section id="projects" className="overflow-x-clip bg-black pb-32 text-[#dfdff2]">
    <div className="container mx-auto px-3 md:px-10">
      <div className="flex flex-col items-center gap-5 pt-10">
        <p className="font-general text-sm uppercase md:text-[10px]">
          {profile.projectCount} projects shipped
        </p>
        <AnimatedTitle
          title="sel<b>e</b>cted <br /> w<b>o</b>rk"
          containerClass="mt-5 text-center"
        />
      </div>

      {projects.length > 0 ? (
        <div className="mt-20 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      ) : (
        <p className="mt-20 text-center font-circular-web opacity-50">
          Projects from GitHub load here.
        </p>
      )}
    </div>
  </section>
);

export default Projects;
