import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

// A muted, looping background video that plays inline. It never shows
// native controls or picture-in-picture, and with `autoPlay` it only plays
// while it is on screen, so phones decode one video at a time.
const LoopVideo = forwardRef(
  ({ src, poster, className = "", autoPlay = true, eager = false, ...rest }, ref) => {
    const videoRef = useRef(null);
    useImperativeHandle(ref, () => videoRef.current);

    useEffect(() => {
      const video = videoRef.current;
      if (!video) return undefined;

      // iOS only autoplays when these are real attributes on the element.
      video.muted = true;
      video.defaultMuted = true;
      video.setAttribute("muted", "");
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "");
      video.setAttribute("disablepictureinpicture", "");
      video.setAttribute("disableremoteplayback", "");

      if (!autoPlay) return undefined;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            video.play()?.catch(() => {});
          } else {
            video.pause();
          }
        },
        { rootMargin: "200px 0px" }
      );
      observer.observe(video);

      return () => observer.disconnect();
    }, [autoPlay, src]);

    return (
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        controls={false}
        preload={eager ? "auto" : "none"}
        tabIndex={-1}
        className={className}
        {...rest}
      />
    );
  }
);

LoopVideo.displayName = "LoopVideo";

export default LoopVideo;
