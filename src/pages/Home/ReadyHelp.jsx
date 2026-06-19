import readyImage from "../../assets/ready2.png";
import bgImage from "../../assets/ready-bg.png";
import ScrollReveal from "../../Components/ScrollReveal";
import { Link } from "react-router";

const ReadyHelp = () => {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat pt-12 lg:pt-0  pb-10 lg:pb-0"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full flex flex-col md:flex-row items-center gap-5 md:gap-7 lg:gap-[41px]">
        <div className="w-full md:w-1/2 flex justify-end items-end pt-0 lg:pt-27">
          <ScrollReveal direction="left" className="w-full xl:w-[66vw]">
            <img
              src={readyImage}
              alt="Remote Recruit Dashboard Mockup"
              className="w-full h-full"
            />
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.15} direction="right">
          <div className="max-w-full lg:max-w-[390px] flex flex-col items-start text-left px-6 md:px-0  z-10 mt-0 lg:mt-[13px]">
            <p className="text-[#1E3E85] text-[16px] font-semibold tracking-wide">
              Are you ready?
            </p>

            <h2 className="text-slate-900 text-2xl md:text-3xl lg:text-[44px] font-semibold leading-normal lg:leading-[57px] tracking-tight max-w-xl mt-0 lg:mt-[10px]">
              Help is only a few clicks away!
            </h2>
            <div className="text-[#767784] max-w-full lg:max-w-[330px] text-base md:text-lg mt-4 md:mt-[24px] mb-[15px] lg:mb-[34px]">
              <p>
                Click Below to get set up super quickly and find help now!
              </p>
            </div>


            <Link
              to="/signup"
              className="group flex items-center gap-3 bg-[#52B4DA]/20 hover:bg-blue-200 text-blue-700 font-medium lg:pl-2.5 py-2 pr-5 lg:py-3 rounded-full transition-all duration-300 shadow-sm"
            >
              <span className="flex items-center justify-center bg-[#52B4DA] text-[#FFFFFF] rounded-full w-8 h-8 transform group-hover:translate-x-1 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-4 h-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.18)]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5l6 6m0 0l-6 6m6-6H3"
                  />
                </svg>
              </span>
              Get Started
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ReadyHelp;
