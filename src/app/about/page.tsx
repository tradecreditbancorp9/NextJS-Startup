import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <div className="pt-16 md:pt-20 lg:pt-28">
      <Breadcrumb
        pageName="About Page"
        description="The main ‘thrust’ is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel discussions and roundtables."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </div>
  );
};

export default AboutPage;
