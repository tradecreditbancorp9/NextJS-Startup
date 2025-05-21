import { Metadata } from "next";
import Overview from "@/components/Overview";
export const metadata: Metadata = {
  title: "TermsandCondition | TradeCredit Bancorp",
  description: "This is TermsandCondition for  TradeCredit Bancorp",
  // other metadata
};

const AboutPage = () => {
  return (
    <div className="pt-16 md:pt-20 lg:pt-28">
      <Overview/>
    </div>
  );
};

export default AboutPage;
