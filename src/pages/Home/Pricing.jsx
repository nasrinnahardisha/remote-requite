import premiumIcon from "../../assets/pricing-Icon.png";
import ScrollReveal from "../../Components/ScrollReveal";
import { Link } from "react-router";

const Pricing = () => {
  return (
    <section id="pricing" className="relative bg-white font-sans mb-0 xl:mb-[-385px]">
      <div className="max-w-[1070px] mx-auto px-4  pt-0 md:pt-6 xl:pt-16 pb-6 md:pb-10 xl:pb-40 relative z-20">
        <ScrollReveal>
          <h2 className="text-center text-[#101633] mb-5 md:mb-7 lg:mb-12">
            Help Is One Click Away
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.13}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 items-stretch">
            <div className="bg-white rounded-[32px] shadow-2xl p-5 md:p-8 pb-4 lg:pb-0 flex flex-col  border border-gray-100">
              <div className="flex flex-col mx-auto   md:flex-row gap-8 items-start md:items-center mb-4 md:mb-8">
                <div className="w-[134px] lg:w-[160px] h-[155px] lg:h-[180px] rounded-[24px] bg-[#eef2fa] flex flex-col items-center justify-center shrink-0 mx-auto sm:mx-0">
                  <h3 className="text-[#52b4da] text-2xl lg:text-4xl font-bold mb-1">
                    Free
                  </h3>
                  <p className="text-gray-400 text-lg font-medium">Basic</p>
                </div>

                <ul className="space-y-3 lg:space-y-5 text-[16px] text-[#4a5568] font-medium w-full">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#52B4DA] to-[#1E3E85] flex items-center justify-center shrink-0">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-3 h-3 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="currentColor"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span>1 Active Job</span>
                  </li>

                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#52B4DA] to-[#1E3E85] flex items-center justify-center shrink-0">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-3 h-3 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="currentColor"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span>Basic List Placement</span>
                  </li>

                  <li className="flex items-center gap-3 text-[#808191]">
                    <div className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center shrink-0">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-2.5 h-2.5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 6L6 18M6 6l12 12"
                          stroke="currentColor"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="opacity-80">Unlimited Job Applicants</span>
                  </li>

                  <li className="flex items-center gap-3 text-[#808191]">
                    <div className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center shrink-0">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-2.5 h-2.5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 6L6 18M6 6l12 12"
                          stroke="currentColor"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="opacity-80">
                      Invite Anyone to Apply to Your Jobs
                    </span>
                  </li>
                </ul>
              </div>

              <Link
                to="/signup"
                className=" w-full h-12 lg:h-18 rounded-[20px] border-2 border-[#2456a6] text-[#2456a6] font-bold text-lg hover:bg-[#2456a6] hover:text-white transition-colors duration-300 flex items-center justify-center"
              >
                Get Started
              </Link>
            </div>

            <div className="bg-white rounded-[32px] shadow-2xl p-5 md:p-8 relative flex flex-col  border border-gray-100">
              <div className="flex flex-col mx-auto md:flex-row gap-8 items-start md:items-center mb-4 md:mb-8">
                <div className="relative p-[7px] w-[134px] lg:w-[160px] h-[155px] lg:h-[180px] rounded-[24px] bg-[#eef2fa] flex flex-col items-center justify-center shrink-0 mx-auto sm:mx-0">
                <div className="absolute top-0 xl:top-[-22px] bg-[#cbeaf6] pl-1 py-1 pr-4 rounded-full font-bold text-[#1e3e85] text-xs uppercase tracking-wider flex items-center gap-1 xl:gap-2 shadow-sm select-none w-[calc(100%-14px)]">
                  <div className="w-4 md:w-9 h-4 md:h-9 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <img
                      src={premiumIcon}
                      alt="Premium Icon"
                      className="w-4 md:w-6 h-4 md:h-6 object-contain"
                    />
                  </div>
                  <span>Premium</span>
                </div>
                  <h3 className="text-[#2456a6] text-2xl lg:text-4xl font-bold mb-1">
                    $79.99
                  </h3>
                  <p className="text-gray-400 text-sm font-medium">Per Month</p>
                </div>

                <ul className="space-y-3 lg:space-y-5 text-[16px] text-[#4a5568] font-medium w-full">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#52B4DA] to-[#1E3E85] flex items-center justify-center shrink-0">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-3 h-3 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="currentColor"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span>Unlimited Job Posts</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#52B4DA] to-[#1E3E85] flex items-center justify-center shrink-0">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-3 h-3 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="currentColor"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span>Instant Job Post Approval</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#52B4DA] to-[#1E3E85] flex items-center justify-center shrink-0">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-3 h-3 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="currentColor"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span>Premium List Placement</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#52B4DA] to-[#1E3E85] flex items-center justify-center shrink-0">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-3 h-3 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="currentColor"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span>Unlimited Job Applicants</span>
                  </li>
                </ul>
              </div>

              <Link
                to="/"
                className=" w-full h-12 lg:h-18 rounded-[20px] border-2 border-[#2456a6] text-white   font-bold text-lg bg-[#2456a6] hover:text-white transition-colors duration-300 flex items-center justify-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Pricing;
