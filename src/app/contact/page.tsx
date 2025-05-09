import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <div className="pt-16 md:pt-20 lg:pt-28">
      <Breadcrumb
        pageName="Contact Page"
        description="TCB"
      />

      <Contact />
    </div>
  );
};

export default ContactPage;
