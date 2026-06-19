
import ScrollReveal from "../../Components/ScrollReveal";
import globalImage from "../../assets/globalImg.png";

const GlobalReach = () => { 
  return (
    <section className="pt-3 sm:pt-16 md:pt-20 lg:pt-25 pb-3 sm:pb-16 md:pb-20 lg:pb-43  bg-white overflow-hidden">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8 items-center">
        <ScrollReveal>
          <div className="flex flex-col items-center md:items-start text-center md:text-left z-10">
            <span className="inline-flex w-[127px] h-[36px] items-center justify-center bg-accent text-text text-[12px] leading-[15px] font-semibold rounded-full mb-4 md:mb-10 mt-4 cursor-default tracking-wide uppercase">
              Global Reach
            </span>

            <h2 className="text-primary-dark   max-w-xl">
              The First Fully Global Job Board, Anywhere, Ever
            </h2>

          <div className="text-para max-w-[500px] mt-4 md:mt-10">
          <p>
              RemoteRecruit connects candidates with opportunities around the
              world. With today’s remote-first workforce, you need to be able to
              find the best jobs and the best people for them, wherever they may
              be.
            </p>
          </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} direction="right">
          <div className="">
            <img src={globalImage} className="w-full h-auto object-cover" alt="Global job opportunities map" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default GlobalReach;
