import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import {
  FaCode,
  FaCloud,
  FaMobileAlt,
  FaShopify,
  FaWordpress,
  FaUsersCog,
  FaShoppingCart,
  FaRobot,
  FaServer,
  FaPencilRuler,
  FaRocket,
  FaTools,
} from "react-icons/fa";

import LoopVideo from "./LoopVideo";
import ProfileCard from "./ProfileCard";
import { hasFinePointer, posterFor } from "../lib/motion";
import { profile, services } from "../data/portfolio";

export const BentoTilt = ({ children, className = "" }) => {
  const itemRef = useRef(null);

  // Writes the tilt straight to the element so moving the mouse doesn't
  // re-render the card. Touch screens skip the tilt.
  const handleMouseMove = (event) => {
    const element = itemRef.current;
    if (!element || !hasFinePointer()) return;

    const { left, top, width, height } = element.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    element.style.transform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
  };

  const handleMouseLeave = () => {
    if (itemRef.current) itemRef.current.style.transform = "";
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({
  src,
  title,
  description,
  isComingSoon,
  ctaLabel = "let\u2019s talk",
}) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <LoopVideo
        src={src}
        poster={posterFor(src)}
        className="pointer-events-none absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-[#dfdff2]">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">{ctaLabel}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Title = ({ html, className = "" }) => (
  <span className={className} dangerouslySetInnerHTML={{ __html: html }} />
);

const serviceIcons = {
  web: FaCode,
  saas: FaCloud,
  mobile: FaMobileAlt,
  shopify: FaShopify,
  wordpress: FaWordpress,
  crm: FaUsersCog,
  store: FaShoppingCart,
  ai: FaRobot,
  api: FaServer,
  design: FaPencilRuler,
  landing: FaRocket,
  support: FaTools,
};

const ServiceCard = ({ service }) => {
  const Icon = serviceIcons[service.icon] ?? FaCode;

  return (
    <BentoTilt className="border-hsla group relative overflow-hidden rounded-md bg-black p-6 text-[#dfdff2] transition-transform duration-300 ease-out">
      <Icon className="text-3xl text-yellow-300 transition duration-300 group-hover:scale-110" />
      <h3 className="bento-title special-font mt-6 !text-3xl md:!text-4xl">
        <Title html={service.title} />
      </h3>
      <p className="mt-3 font-circular-web text-sm opacity-60">
        {service.description}
      </p>
    </BentoTilt>
  );
};

const Features = () => {
  const [first, ...rest] = services;

  return (
    <section id="services" className="overflow-x-clip bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-[#dfdff2]">
            What I build for you
          </p>
          <p className="max-w-md font-circular-web text-lg text-[#dfdff2] opacity-50">
            Startup, store, agency or enterprise, I take your idea from design
            to launch. {profile.projectCount} projects delivered as a{" "}
            {profile.role}, across web and app development, UI/UX, backend,
            AI, WordPress and e-commerce.
          </p>
        </div>

        <BentoTilt className="bento-tilt_1 relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src={first.video}
            title={<Title html={first.title} />}
            description={first.description}
            isComingSoon
          />
        </BentoTilt>

        <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src={rest[0].video}
              title={<Title html={rest[0].title} />}
              description={rest[0].description}
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src={rest[1].video}
              title={<Title html={rest[1].title} />}
              description={rest[1].description}
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src={rest[2].video}
              title={<Title html={rest[2].title} />}
              description={rest[2].description}
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <a
              href="#projects"
              className="flex size-full flex-col justify-between bg-violet-300 p-5"
            >
              <h1 className="bento-title special-font max-w-56 text-black">
                <Title html={`${profile.projectCount} pr<b>o</b>jects`} />
              </h1>

              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </a>
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <LoopVideo
              src="videos/feature-5.mp4"
              poster={posterFor("videos/feature-5.mp4")}
              className="pointer-events-none size-full object-cover object-center"
            />
          </BentoTilt>
        </div>

        <ProfileCard />

        <div className="px-5 pb-10 pt-32">
          <p className="font-circular-web text-lg text-[#dfdff2]">
            Every service, one developer
          </p>
          <p className="max-w-md font-circular-web text-lg text-[#dfdff2] opacity-50">
            Whatever your business needs, you can reach me for it.
          </p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.icon} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
