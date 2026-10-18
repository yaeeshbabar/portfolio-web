import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

import AnimatedTitle from "./AnimatedTitle";
import { contactLink, profile } from "../data/portfolio";

gsap.registerPlugin(ScrollTrigger);

// Floating app and website mockups around the photo. `depth` sets how far a
// card drifts with the mouse; `mobile` cards also show on phones and `wide`
// ones only on large screens.
const shots = [
  { src: "travel", label: "Travel app", portrait: false, className: "left-[-6%] top-[46%] w-[44%] md:left-[2%] md:top-[30%] md:w-[22%]", rotate: -6, depth: 34, mobile: true },
  { src: "chat", label: "AI chat assistant", portrait: true, className: "right-[-4%] top-[40%] w-[30%] md:right-[20%] md:top-[44%] md:w-[11%]", rotate: 5, depth: 16, mobile: true },
  { src: "finance", label: "Finance app", portrait: false, className: "right-[2%] top-[28%] w-[22%]", rotate: 6, depth: 30 },
  { src: "sprint", label: "Project management", portrait: true, className: "left-[3%] top-[62%] w-[13%]", rotate: 4, depth: 22 },
  { src: "dashboard", label: "SaaS dashboard", portrait: false, className: "left-[17%] top-[70%] w-[19%]", rotate: -3, depth: 18 },
  { src: "books", label: "Reading app", portrait: false, className: "right-[2%] top-[60%] w-[20%]", rotate: -4, depth: 26 },
  { src: "fitness", label: "Fitness tracker", portrait: true, className: "left-[21%] top-[42%] w-[10%]", rotate: -5, depth: 12 },
  { src: "realestate", label: "Real estate listing", portrait: false, className: "right-[19%] top-[72%] w-[15%]", rotate: 3, depth: 14 },
  { src: "grocery", label: "Grocery delivery", portrait: false, className: "left-[1%] top-[5%] w-[15%] xl:block", rotate: 7, depth: 40, wide: true },
  { src: "store", label: "Online store", portrait: false, className: "right-[1%] top-[5%] w-[15%] xl:block", rotate: -7, depth: 38, wide: true },
];

const ProfileCard = () => {
  const cardRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".float-layer", {
        opacity: 0,
        y: 80,
        scale: 0.8,
        stagger: 0.08,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: cardRef.current, start: "top 75%" },
      });

      gsap.from(".profile-photo", {
        opacity: 0,
        y: 120,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: cardRef.current, start: "top 70%" },
      });

      // Gentle idle float, each card on its own rhythm.
      gsap.utils.toArray(".float-inner").forEach((el, index) => {
        gsap.to(el, {
          y: index % 2 ? 14 : -14,
          duration: 2.6 + (index % 4) * 0.45,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });
    },
    { scope: cardRef }
  );

  const handleMouseMove = (event) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    gsap.utils.toArray(".float-layer", cardRef.current).forEach((el) => {
      const depth = Number(el.dataset.depth);
      gsap.to(el, { x: x * depth, y: y * depth, duration: 0.8, ease: "power2.out" });
    });
    gsap.to(".profile-photo", { x: x * -12, duration: 0.8, ease: "power2.out" });
  };

  const handleMouseLeave = () => {
    gsap.to([...gsap.utils.toArray(".float-layer", cardRef.current), ".profile-photo"], {
      x: 0,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
    });
  };

  return (
    <div
      id="about-me"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative mt-32 h-[40rem] w-full overflow-hidden rounded-3xl bg-[#dfdff2] sm:h-[46rem] lg:h-[52rem]"
    >
      <div className="relative z-30 flex flex-col items-center pt-14 md:pt-16">
        <p className="font-general text-[10px] uppercase text-black">
          Hi, I&apos;m {profile.name}
        </p>
        <AnimatedTitle
          title="creating digital <br /> experiences that <br /> quietly sl<b>a</b>y"
          containerClass="mt-5 !text-black text-center !text-4xl sm:!text-5xl md:!text-[4.2rem] !px-4"
        />
      </div>

      {shots.map((shot) => (
        <div
          key={shot.src}
          data-depth={shot.depth}
          className={`float-layer absolute z-10 ${shot.className} ${
            shot.mobile ? "" : "hidden"
          } ${shot.wide ? "" : "md:block"}`}
        >
          <div
            className="float-inner overflow-hidden rounded-xl border border-black/10 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
            style={{ rotate: `${shot.rotate}deg` }}
          >
            <img
              src={`/profile-card/${shot.src}.webp`}
              alt={shot.label}
              loading="lazy"
              className={`w-full object-cover ${
                shot.portrait ? "aspect-[3/4]" : "aspect-[4/3]"
              }`}
            />
          </div>
        </div>
      ))}

      <img
        src="/img/yaeesh-cutout.webp"
        alt={profile.name}
        className="profile-photo pointer-events-none absolute bottom-0 left-1/2 z-20 w-[78%] max-w-[34rem] -translate-x-1/2 sm:w-[56%] md:w-[38%]"
      />

      <a
        href={contactLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-5 left-5 z-30 flex items-center gap-2 rounded-full bg-black px-4 py-2 font-general text-[10px] uppercase text-[#dfdff2]"
      >
        <span className="size-2 animate-pulse rounded-full bg-green-400" />
        Available for new projects
      </a>
    </div>
  );
};

export default ProfileCard;
