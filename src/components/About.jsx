import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";
import { profile } from "../data/portfolio";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-full overflow-hidden">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          For startups, businesses & agencies
        </p>

        <AnimatedTitle
          title="Y<b>o</b>ur idea, <br /> built end t<b>o</b> end"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>
            {profile.role} at {profile.currentJob.company} and founder of{" "}
            {profile.agency.name}
          </p>
          <p className="text-gray-500">
            {profile.projectCount} projects shipped. {profile.summary}
          </p>
        </div>
      </div>

      <div className="h-svh w-full" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;