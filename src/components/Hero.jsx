import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { useEffect, useRef, useState } from "react";

import Button from "./Button";
import LoopVideo from "./LoopVideo";
import VideoPreview from "./VideoPreview";
import { isPortraitScreen, posterFor } from "../lib/motion";
import { contactLink, profile } from "../data/portfolio";

const heroServices = ["Web", "Apps", "UI/UX", "AI", "E-Commerce"];

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  // Phones get portrait crops of the hero videos: a third of the size and
  // far less work to decode.
  const [portrait] = useState(isPortraitScreen);

  const totalVideos = 4;
  const nextVdRef = useRef(null);

  // Don't keep visitors on the loader if a video is slow or can't decode.
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleMiniVdClick = () => {
    setHasClicked(true);

    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
  };

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVdRef.current?.play()?.catch(() => {}),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const getVideoSrc = (index) =>
    `videos/hero-${index}${portrait ? "-m" : ""}.mp4`;

  return (
    <div className="relative h-svh w-full overflow-x-clip">
      <div
        aria-hidden="true"
        className={`flex-center absolute z-[100] h-svh w-full overflow-hidden bg-violet-50 transition-opacity duration-700 ${
          loading ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {/* https://uiverse.io/G4b413l/tidy-walrus-92 */}
        <div className="three-body">
          <div className="three-body__dot"></div>
          <div className="three-body__dot"></div>
          <div className="three-body__dot"></div>
        </div>
      </div>

      <div
        id="video-frame"
        className="relative z-10 h-svh w-full overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <VideoPreview>
              <div
                onClick={handleMiniVdClick}
                className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
              >
                <LoopVideo
                  src={getVideoSrc((currentIndex % totalVideos) + 1)}
                  poster={posterFor(getVideoSrc((currentIndex % totalVideos) + 1))}
                  autoPlay={false}
                  id="current-video"
                  className="pointer-events-none size-64 origin-center scale-150 object-cover object-center"
                />
              </div>
            </VideoPreview>
          </div>

          <LoopVideo
            ref={nextVdRef}
            src={getVideoSrc(currentIndex)}
            poster={posterFor(getVideoSrc(currentIndex))}
            autoPlay={false}
            id="next-video"
            className="absolute-center pointer-events-none invisible absolute z-20 size-64 object-cover object-center"
          />
          <LoopVideo
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
            poster={posterFor(
              getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)
            )}
            eager
            className="pointer-events-none absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={() => setLoading(false)}
          />
        </div>

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-[#dfdff2]">
          D<b>E</b>V
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-[#dfdff2]">
              yae<b>e</b>sh
            </h1>

            <p className="mb-5 max-w-sm font-robert-regular text-[#dfdff2]">
              {profile.role}
              <br />
              {heroServices.map((item, index) => (
                // Each item stays on one line; wrapping only happens between items.
                <span key={item} className="inline-block whitespace-nowrap">
                  {index > 0 && <span className="px-1.5">·</span>}
                  {item}
                </span>
              ))}
            </p>

            <Button
              id="watch-trailer"
              title="Start a project"
              href={contactLink}
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>

      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
        D<b>E</b>V
      </h1>
    </div>
  );
};

export default Hero;