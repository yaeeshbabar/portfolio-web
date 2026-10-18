import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

import AnimatedTitle from "./AnimatedTitle";
import { contactLink, profile } from "../data/portfolio";
import { hasFinePointer } from "../lib/motion";

gsap.registerPlugin(ScrollTrigger);

// Colour scheme of the card: "light", "dark" or "violet" (see index.css).
const THEME = "light";

// App and website mockups scattered around the photo at slight angles.
// `depth` sets how far a card drifts with the mouse, `behind` tucks it
// under the photo, `mobile` cards also show on phones and `wide` ones only
// on large screens.
const shots = [
  { src: "travel", label: "Travel app", portrait: false, className: "left-[-12%] top-[64%] w-[44%] md:left-[3%] md:top-[30%] md:w-[23%]", rotate: -4, depth: 26, mobile: true, behind: true },
  { src: "chat", label: "AI assistant", portrait: true, className: "right-[-7%] top-[58%] w-[28%] md:right-[27%] md:top-[56%] md:w-[8%]", rotate: 4, depth: 18, mobile: true, behind: true },
  { src: "sprint", label: "Project board", portrait: true, className: "left-[5%] top-[60%] w-[13%]", rotate: 4, depth: 34 },
  { src: "dashboard", label: "SaaS dashboard", portrait: false, className: "left-[20%] top-[66%] w-[19%]", rotate: -2, depth: 14, behind: true },
  { src: "finance", label: "Finance app", portrait: false, className: "right-[4%] top-[27%] w-[20%]", rotate: 2, depth: 22 },
  { src: "books", label: "Reading app", portrait: false, className: "right-[3%] top-[58%] w-[21%]", rotate: -3, depth: 30 },
  { src: "realestate", label: "Real estate", portrait: false, className: "right-[23%] top-[77%] w-[13%]", rotate: 3, depth: 12, behind: true },
  { src: "fitness", label: "Fitness tracker", portrait: true, className: "left-[19%] top-[7%] w-[7%]", rotate: -4, depth: 30, wide: true },
  { src: "grocery", label: "Grocery delivery", portrait: false, className: "left-[2%] top-[6%] w-[14%]", rotate: 3, depth: 36, wide: true },
  { src: "store", label: "Online store", portrait: false, className: "right-[2%] top-[6%] w-[14%]", rotate: -3, depth: 36, wide: true },
];

const visibilityFor = (shot) => {
  if (shot.wide) return "hidden xl:block";
  if (shot.mobile) return "block";
  return "hidden md:block";
};

const ProfileCard = () => {
  const cardRef = useRef(null);

  useGSAP(
    () => {
      const trigger = { trigger: cardRef.current, start: "top 75%" };

      gsap.from(".profile-dev", {
        opacity: 0,
        scale: 0.85,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: trigger,
      });

      gsap.from(".shot-pop", {
        opacity: 0,
        y: 60,
        scale: 0.9,
        stagger: 0.06,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { ...trigger, start: "top 70%" },
      });

      gsap.from(".profile-photo", {
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { ...trigger, start: "top 65%" },
      });
    },
    { scope: cardRef }
  );

  // Pause the gentle float while the card is off screen.
  useEffect(() => {
    const card = cardRef.current;
    const observer = new IntersectionObserver(([entry]) => {
      card.dataset.active = entry.isIntersecting ? "true" : "false";
    });
    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  // Mouse users get a calm parallax: nearer cards drift further. Touch
  // screens keep the layout still apart from the float.
  useEffect(() => {
    const card = cardRef.current;
    if (!hasFinePointer()) return undefined;

    const layers = gsap.utils.toArray(".profile-layer", card).map((el) => ({
      depth: Number(el.dataset.depth),
      x: gsap.quickTo(el, "x", { duration: 1, ease: "power3.out" }),
      y: gsap.quickTo(el, "y", { duration: 1, ease: "power3.out" }),
    }));

    const handleMove = (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      layers.forEach((layer) => {
        layer.x(x * layer.depth);
        layer.y(y * layer.depth);
      });
    };

    const handleLeave = () => {
      layers.forEach((layer) => {
        layer.x(0);
        layer.y(0);
      });
    };

    card.addEventListener("pointermove", handleMove);
    card.addEventListener("pointerleave", handleLeave);
    return () => {
      card.removeEventListener("pointermove", handleMove);
      card.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return (
    <div
      id="about-me"
      ref={cardRef}
      data-theme={THEME}
      data-active="false"
      className="profile-card relative mt-32 h-[40rem] w-full overflow-hidden rounded-3xl sm:h-[46rem] lg:h-[52rem]"
    >
      <div className="relative z-30 flex flex-col items-center px-3 pt-12 md:pt-16">
        <p className="profile-label font-general text-[10px] uppercase">
          Hi, I&apos;m {profile.name}
        </p>
        <AnimatedTitle
          title="creating digital <br /> experiences that <br /> quietly sl<b>a</b>y"
          containerClass="profile-headline mt-5 text-center !text-4xl sm:!text-5xl md:!text-[4.2rem] !px-0"
        />
      </div>

      {/* The big DEV behind the photo, in the same letters as the hero title */}
      <div
        aria-hidden="true"
        className="profile-layer absolute inset-x-0 top-[33%] z-0 flex justify-center md:top-[33%]"
        data-depth="-10"
      >
        <span className="profile-dev special-font font-zentry uppercase leading-none">
          D<b>E</b>V
        </span>
      </div>

      {shots.map((shot) => (
        <div
          key={shot.src}
          data-depth={shot.depth}
          className={`profile-layer absolute ${shot.behind ? "z-10" : "z-20"} ${shot.className} ${visibilityFor(shot)}`}
        >
          <div className="shot-pop">
            <div
              className="shot-float"
              style={{
                "--rotate": `${shot.rotate}deg`,
                "--float-duration": `${4 + (shot.depth % 5) * 0.6}s`,
                "--float-delay": `${-shot.depth / 10}s`,
              }}
            >
              <img
                src={`/profile-card/${shot.src}.webp`}
                alt={shot.label}
                loading="lazy"
                decoding="async"
                className={`shot-img block w-full object-cover ${
                  shot.portrait ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              />
            </div>
          </div>
        </div>
      ))}

      <div
        className="profile-layer pointer-events-none absolute inset-x-0 bottom-0 z-[15] mx-auto w-[84%] max-w-[30rem] sm:w-[54%] md:w-[34%]"
        data-depth="-6"
      >
        <img
          src="/img/yaeesh-cutout.webp"
          alt={profile.name}
          decoding="async"
          className="profile-photo block w-full"
        />
      </div>

      <a
        href={contactLink}
        target="_blank"
        rel="noopener noreferrer"
        className="profile-hire absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full px-5 py-3 font-general text-[10px] uppercase md:bottom-8 md:left-8 md:translate-x-0"
      >
        <span aria-hidden="true" className="profile-dot size-2 animate-pulse rounded-full" />
        Available for new projects
      </a>
    </div>
  );
};

export default ProfileCard;
