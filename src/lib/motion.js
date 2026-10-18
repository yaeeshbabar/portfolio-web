// Shared checks for how much motion a device should get.
const matches = (query) =>
  typeof window !== "undefined" && window.matchMedia(query).matches;

export const prefersReducedMotion = () =>
  matches("(prefers-reduced-motion: reduce)");

// Mouse and trackpad users get hover tilts; phones and tablets skip them.
export const hasFinePointer = () => matches("(hover: hover) and (pointer: fine)");

// Portrait screens load the phone-sized hero videos.
export const isPortraitScreen = () => matches("(max-aspect-ratio: 1/1)");

// Turns "videos/hero-1.mp4" into "videos/posters/hero-1.webp".
export const posterFor = (src) =>
  src.replace(/([^/]+)\.mp4$/, "posters/$1.webp");
