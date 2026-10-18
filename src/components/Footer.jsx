import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { contactLink, profile } from "../data/portfolio";

const socials = [
  { label: "GitHub", href: profile.github, icon: FaGithub },
  { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedin },
  { label: "Upwork", href: profile.upwork, icon: SiUpwork },
  { label: "WhatsApp", href: profile.whatsapp, icon: FaWhatsapp },
].filter((s) => s.href);

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Footer = () => {
  return (
    <div id="contact" className="my-10 min-h-96 w-full overflow-hidden px-3 sm:px-10">
      <div className="relative rounded-lg bg-black py-24 text-[#dfdff2] sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/contact-1.webp"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/img/contact-2.webp"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Let&apos;s work together
          </p>

          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild your <br /> next big pr<b>o</b>duct <br /> t<b>o</b>gether."
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <Button
            title="contact me"
            href={contactLink}
            containerClass="mt-10 cursor-pointer"
          />

          <div className="relative z-10 mt-10 flex gap-6 text-2xl">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="transition hover:text-yellow-300"
              >
                <Icon />
              </a>
            ))}
          </div>

          <p className="mt-6 font-general text-[10px] uppercase opacity-50">
            {profile.email} · {profile.location}
          </p>
        </div>
      </div>

      <p className="py-6 text-center font-general text-[10px] uppercase opacity-60">
        © {new Date().getFullYear()} {profile.name}. Made with ♡ & a lot of caffeine.
      </p>
    </div>
  );
};

export default Footer;