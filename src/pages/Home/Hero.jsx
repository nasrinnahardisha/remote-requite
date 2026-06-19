import ScrollReveal from "../../Components/ScrollReveal";

const Hero = () => {
  return (
    <div className="relative w-full min-h-[783px] flex flex-col justify-center -mt-[130px] md:-mt-[80px] h-[570px] text-white pt-[50px] md:pt-[32px] z-30 overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(133deg,#52B4DA_5.63%,#3E87BA_43.82%,#1E3E85_106.18%)] [clip-path:path('M_0_10_L_1973_0_L_1797_434_Q_1235_339,_853_618_T_0_707_Z')] z-0" />

      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(132deg,_#1E3E85_6.87%,_#336DA6_106.04%)] [clip-path:path('M_0_10_L_1904_0_L_1985_832_Q_1372_445,_943_703_T_0_423_Z')] z-10 overflow-hidden">
        <div className="absolute left-[864px] -bottom-48 w-[524px] h-[524px] rounded-full bg-[#fff] opacity-[0.05] pointer-events-none"></div>
      </div>

      <div className="absolute left-[230px] top-[-286px] w-[524px] h-[524px] rounded-full bg-[#fff] opacity-[0.05] z-20 pointer-events-none"></div>

      <div className="container relative z-30 flex-1 flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-6 py-12 md:py-20">
        <ScrollReveal delay={0.1}>
          <h1 className="text-3xl sm:text-4xl md:text-[53px] font-bold mb-4 md:leading-[68px] leading-tight">
            RemoteRecruit’s Difference
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.25} className="opacity-[0.8029] text-white text-base sm:text-lg md:text-xl font-medium max-w-[800px]">
          <p>
            RemoteRecruit is connecting the world with an easy-to-use platform
            that lets full-time, part-time, and freelance workers showcase their
            talents to businesses that need them. With no paywalls, no fees, and
            no barriers, there’s nothing but you, your talents, and the next
            step in your career.
          </p>
        </ScrollReveal>
      </div>

      <div className="absolute clip-hero z-30"></div>
    </div>
  );
};

export default Hero;
