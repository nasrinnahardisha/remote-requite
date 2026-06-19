import ScrollReveal from "../../Components/ScrollReveal";
import feeFreeImage from "../../assets/fee.png";

const Actually = () => {
  return (
    <section className="pb-3 sm:pb-16 md:pb-20 lg:pb-30 bg-white overflow-hidden">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-12 lg:gap-17 items-center">
        <ScrollReveal direction="left" className="order-last md:order-none">
          <div className="">
            <img src={feeFreeImage} className="w-full h-auto object-cover" alt="Global job opportunities map" />
          </div>

        </ScrollReveal>
        <ScrollReveal delay={0.15} className=" order-first md:order-none">
          <div className="flex flex-col items-center md:items-start text-center md:text-left z-10 mt-2 lg:mt-[-35px]">
            <span className="inline-flex w-[144px] h-[36px] items-center justify-center bg-accent text-text text-[12px] leading-[15px] font-semibold rounded-full mb-4 md:mb-8 cursor-default tracking-wide uppercase">
              Actually Fee Free
            </span>

            <h2 className="text-primary-dark mb-4 md:mb-9  max-w-xl">
              Fee-Free Forever
            </h2>
            <div className="text-para max-w-xl">
              <p>
                We don’t charge you fees and we don’t put up paywalls. We’re the
                bridge that connects job opportunities with the best candidates,
                with no middleman involved.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Actually;
