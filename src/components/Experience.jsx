import AnimatedTitle from "./AnimatedTitle";
import { BentoTilt } from "./Features";
import { education, experience, skills } from "../data/portfolio";

const Experience = () => (
  <section id="experience" className="min-h-dvh w-full py-32">
    <div className="container mx-auto px-3 md:px-10">
      <div className="flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Experience
        </p>
        <AnimatedTitle
          title="the j<b>o</b>urney <br /> s<b>o</b> far"
          containerClass="mt-5 !text-black text-center"
        />
      </div>

      <div className="mt-20 grid gap-7 md:grid-cols-3">
        {experience.map((item) => (
          <BentoTilt
            key={item.company}
            className="relative overflow-hidden rounded-md bg-black p-7 text-[#dfdff2] transition-transform duration-300 ease-out"
          >
            <p className="font-general text-[10px] uppercase text-yellow-300">
              {item.period}
            </p>
            <h3 className="mt-4 font-zentry text-4xl uppercase leading-none">
              {item.role}
            </h3>
            {item.url ? (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block font-robert-medium text-blue-300 underline-offset-4 hover:underline"
              >
                {item.company}
              </a>
            ) : (
              <p className="mt-2 font-robert-medium text-blue-300">
                {item.company}
              </p>
            )}
            <p className="mt-4 font-circular-web text-sm opacity-60">
              {item.description}
            </p>
          </BentoTilt>
        ))}
      </div>

      <div className="mt-24 flex flex-col items-center">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Education & certifications
        </p>
        <div className="mt-8 grid w-full gap-x-10 md:grid-cols-2">
          {education.map((item) => (
            <div
              key={item.title}
              className="flex items-baseline justify-between gap-4 border-b border-black/10 py-4"
            >
              <div>
                <h4 className="font-zentry text-2xl uppercase leading-none">
                  {item.title}
                </h4>
                <p className="mt-1 font-circular-web text-sm opacity-60">
                  {item.place}
                </p>
              </div>
              <span className="shrink-0 font-general text-[10px] uppercase">
                {item.period}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-[#dfdff2] px-5 py-2 font-general text-xs uppercase text-black ring-1 ring-black/10"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
