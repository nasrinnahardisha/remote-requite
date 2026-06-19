import ScrollToTopButton from "../../Components/ScrollToTopButton";
import Actually from "./Actually";
import Custom from "./Custom";
import Faq from "./Faq";
import GlobalReach from "./GlobalReach";
import Hero from "./Hero";
import Pricing from "./Pricing";
import ReadyHelp from "./ReadyHelp";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen">
        <Hero />
        <GlobalReach />
        <Actually />
        <Custom />
        <ReadyHelp />
        <Faq />
        <Pricing />
        <ScrollToTopButton />
      </div>
    </div>
  );
}
