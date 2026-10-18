import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { hasFinePointer, prefersReducedMotion } from "./motion";

gsap.registerPlugin(ScrollTrigger);

// Phones hide and show the address bar while scrolling. Without this every
// change re-measures all scroll animations and the page jumps.
ScrollTrigger.config({ ignoreMobileResize: true });

let lenis = null;

// Smooth wheel scrolling on desktop. Touch screens keep native scrolling,
// which is already smooth and feels right under a finger.
export const startSmoothScroll = () => {
  if (lenis || prefersReducedMotion() || !hasFinePointer()) return;

  lenis = new Lenis({ lerp: 0.1, anchors: true });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
};

// Scrolls to a "#section" selector, or to a pixel offset such as 0.
export const scrollToTarget = (target) => {
  if (lenis) {
    lenis.scrollTo(target);
    return;
  }

  const behavior = prefersReducedMotion() ? "auto" : "smooth";

  if (typeof target === "number") {
    window.scrollTo({ top: target, behavior });
  } else {
    document.querySelector(target)?.scrollIntoView({ behavior });
  }
};
