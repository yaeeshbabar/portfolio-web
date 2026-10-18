import clsx from "clsx";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";

import Button from "./Button";
import { contactLink, navItems, profile } from "../data/portfolio";
import { scrollToTarget } from "../lib/smoothScroll";

const NavBar = () => {
  // State for toggling audio and visual indicator
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Refs for audio and navigation container
  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);
  const menuRef = useRef(null);

  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isFloating, setIsFloating] = useState(false);

  // Toggle audio and visual indicator
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  // Manage audio playback
  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play()?.catch(() => {});
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  // Hide the bar while scrolling down, bring it back when scrolling up.
  // Reads the scroll once per frame and ignores tiny moves, so the iOS
  // bounce at the top of the page doesn't make it flicker.
  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;

      if (y <= 10) {
        setIsNavVisible(true);
        setIsFloating(false);
      } else if (Math.abs(y - lastY) > 6) {
        setIsNavVisible(y < lastY);
        setIsFloating(true);
      } else {
        return;
      }

      lastY = y;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const visible = isNavVisible || isMenuOpen;
    gsap.to(navContainerRef.current, {
      y: visible ? 0 : -100,
      opacity: visible ? 1 : 0,
      duration: 0.25,
      ease: "power2.out",
    });
  }, [isNavVisible, isMenuOpen]);

  // Phone menu: a full-screen panel that wipes open from the top corner.
  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

    if (isMenuOpen) {
      gsap.set(menu, { visibility: "visible" });
      gsap.fromTo(
        menu,
        { clipPath: "circle(0% at 100% 0%)" },
        { clipPath: "circle(150% at 100% 0%)", duration: 0.6, ease: "power3.inOut" }
      );
      gsap.fromTo(
        menu.querySelectorAll(".menu-item"),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.05, delay: 0.2, ease: "power3.out" }
      );
    } else {
      gsap.to(menu, {
        clipPath: "circle(0% at 100% 0%)",
        duration: 0.45,
        ease: "power3.inOut",
        onComplete: () => gsap.set(menu, { visibility: "hidden" }),
      });
    }
  }, [isMenuOpen]);

  // Stop the page from scrolling behind the open menu.
  useEffect(() => {
    document.documentElement.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  const handleNavClick = (event, href) => {
    event.preventDefault();
    setIsMenuOpen(false);
    scrollToTarget(href);
  };

  return (
    <>
      <div
        ref={navContainerRef}
        className={clsx(
          "fixed inset-x-3 top-3 z-50 h-14 border-none transition-[background-color,border-color] duration-500 sm:inset-x-6 sm:top-4 sm:h-16",
          isFloating && !isMenuOpen && "floating-nav"
        )}
      >
        <header className="absolute top-1/2 w-full -translate-y-1/2">
          <nav className="flex size-full items-center justify-between p-3 sm:p-4">
            {/* Logo and Product button */}
            <div className="flex items-center gap-7">
              <a
                href="#"
                aria-label={profile.name}
                onClick={(event) => {
                  event.preventDefault();
                  setIsMenuOpen(false);
                  scrollToTarget(0);
                }}
                className="flex-center size-10 rounded-full bg-[#dfdff2] font-zentry text-xl text-black special-font"
              >
                Y<b>b</b>
              </a>

              <Button
                id="product-button"
                title={profile.agency.name}
                href={profile.agency.url}
                rightIcon={<TiLocationArrow />}
                containerClass="bg-[#dfdff2] md:flex hidden items-center justify-center gap-1"
              />
            </div>

            {/* Navigation Links and Audio Button */}
            <div className="flex h-full items-center">
              <div className="hidden md:block">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(event) => handleNavClick(event, item.href)}
                    className="nav-hover-btn"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <button
                onClick={toggleAudioIndicator}
                aria-label={isAudioPlaying ? "Mute music" : "Play music"}
                className="ml-6 flex h-10 items-center space-x-0.5 px-2 md:ml-10"
              >
                <audio
                  ref={audioElementRef}
                  className="hidden"
                  src="/audio/loop.mp3"
                  loop
                  preload="none"
                />
                {[1, 2, 3, 4].map((bar) => (
                  <div
                    key={bar}
                    className={clsx("indicator-line", {
                      active: isIndicatorActive,
                    })}
                    style={{
                      animationDelay: `${bar * 0.1}s`,
                    }}
                  />
                ))}
              </button>

              <button
                onClick={() => setIsMenuOpen((open) => !open)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
                className="flex-center ml-3 size-10 rounded-full bg-[#dfdff2] md:hidden"
              >
                <span className="relative block h-3 w-4">
                  <span
                    className={clsx(
                      "absolute left-0 h-0.5 w-4 rounded-full bg-black transition-all duration-300",
                      isMenuOpen ? "top-[5px] rotate-45" : "top-0"
                    )}
                  />
                  <span
                    className={clsx(
                      "absolute left-0 h-0.5 w-4 rounded-full bg-black transition-all duration-300",
                      isMenuOpen ? "top-[5px] -rotate-45" : "top-2.5"
                    )}
                  />
                </span>
              </button>
            </div>
          </nav>
        </header>
      </div>

      <div
        ref={menuRef}
        id="mobile-menu"
        className="invisible fixed inset-0 z-40 flex flex-col justify-between overflow-y-auto bg-black px-6 pb-10 pt-28 text-[#dfdff2] md:hidden"
        style={{ clipPath: "circle(0% at 100% 0%)" }}
      >
        <div className="flex flex-col gap-2">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => handleNavClick(event, item.href)}
              className="menu-item special-font flex items-baseline gap-4 font-zentry text-6xl uppercase leading-none"
            >
              <span className="font-general text-[10px] text-yellow-300">
                0{index + 1}
              </span>
              {item.label}
            </a>
          ))}
        </div>

        <div className="menu-item mt-10 flex flex-col gap-3">
          <a
            href={contactLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-yellow-300 px-6 py-3 font-general text-xs uppercase text-black"
          >
            <FaWhatsapp /> Start a project
          </a>
          <a
            href={profile.agency.url}
            target="_blank"
            rel="noopener noreferrer"
            className="border-hsla flex items-center justify-center gap-1 rounded-full px-6 py-3 font-general text-xs uppercase"
          >
            {profile.agency.name} <TiLocationArrow />
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
