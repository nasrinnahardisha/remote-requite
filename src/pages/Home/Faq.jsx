import ScrollReveal from "../../Components/ScrollReveal";
import { Link } from "react-router";

const FAQ_ITEMS = [
  {
    question: "Do I have to sign a long-term contract?",
    answer:
      "No. RemoteRecruit plans are month-to-month. You can upgrade, downgrade, or cancel at any time with no long-term commitment required.",
  },
  {
    question: "Can I pay for a whole year?",
    answer:
      "Yes. Annual billing is available on Premium plans and offers savings compared to paying monthly. Contact support if you need help switching to yearly billing.",
  },
  {
    question: "What if I need help?",
    answer:
      "Our support team is available by email at support@remoterecruit.com. Premium members receive priority assistance for account and posting questions.",
  },
];

const Faq = () => {
  return (
    <section
      id="faq"
      className="bg-white text-slate-950 py-3 sm:py-6 md:py-8 lg:py-12 xl:py-37"
    >
      <div className="container">
        <div className="px-4 flex flex-col items-center lg:items-start lg:text-start text-center">
          <ScrollReveal>
            <h2 className="mb-4 md:mb-7 lg:mb-15  lg:text-start text-center">
              Common Questions
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="space-y-2 md:space-y-8 lg:space-y-10">
              {FAQ_ITEMS.map((item) => (
                <div key={item.question}>
                  <h3 className="text-[16px] md:text-[19px] font-medium leading-normal md:leading-8.75 text-slate-900 mb-2 md:mb-3">
                    {item.question}
                  </h3>
                  <div className="text-[#6D6E7A] text-sm md:text-base leading-relaxed">
                    <p>
                      {item.answer}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="mt-6 md:mt-8 lg:mt-15 text-left">
              <Link
                to="mailto:support@remoterecruit.com"
                className="inline-block border-2 border-cyan text-btn font-semibold text-[16px] leading-5.25 px-4 md:px-7 py-4 md:py-5.5 rounded-xl hover:bg-cyan hover:text-white transition-colors duration-200"
              >
                More Questions
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Faq;
