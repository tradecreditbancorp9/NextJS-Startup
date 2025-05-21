
import { Metadata } from "next";
import Term from "@/components/Terms/Terms";
import Privacypolicy from "@/components/Privacypolicy/Privacypolicy";
export const metadata: Metadata = {
  title: "TermsandCondition | TradeCredit Bancorp",
  description: "This is TermsandCondition for  TradeCredit Bancorp",
  // other metadata
};

const AboutPage = () => {
  return (
    <div className="pt-16 md:pt-20 lg:pt-28">
      <Privacypolicy/>
    </div>
  );
};

export default AboutPage;
