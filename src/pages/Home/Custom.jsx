
import ScrollReveal from "../../Components/ScrollReveal";
import showcaseImage from "../../assets/showcase.png";

const Custom = () => {
  const skills = [
    "Python Dev",
    "Javascript",
    "Front End",
    "Back End",
    "IOS Development",
    "+12",
  ];

  return (
    <section className="pb-4 sm:pb-16 md:pb-20 lg:pb-26 bg-white overflow-hidden">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8 items-center">
        <ScrollReveal>
          <div className="flex flex-col items-center md:items-start text-center md:text-left z-10 mt-0 lg:mt-[-75px]">
            <span className="inline-flex w-[127px] h-[36px] items-center justify-center bg-accent text-text text-[12px] leading-[15px] font-semibold rounded-full mb-4 md:mb-8 cursor-default tracking-wide uppercase">
              Custom Profile
            </span>

            <h2 className="text-primary-dark mb-4 md:mb-9 tracking-tight max-w-xl">
              Showcase Your Talents
            </h2>

            <p className="text-gray-600 max-w-xl">
              Personalize your profile with everything that makes you unique.
              Add an introductory video and other media for a personal touch
              that stands out to employers and candidates.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2} direction="right">
          <div className="">
            <img src={showcaseImage} className="w-full h-auto object-cover" alt="Actually Fee Free" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Custom;
