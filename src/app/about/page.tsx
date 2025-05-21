import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Testimonials from "@/components/Testimonials";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | TradeCredit Bancorp",
  description: "This is About Page for TradeCredit Bancorp",
  // other metadata
};

const AboutPage = () => {
  return (
    <div className="pt-16 md:pt-20 lg:pt-28">
      <Breadcrumb
        pageName="About Page"
        description="The main ‘thrust’ is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel discussions and roundtables."
      />
       <section className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
      {/* Our Story */}
      <div className="mb-10">
        <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
        <p className="mb-4">
          Founded with the vision of bridging global trade gaps, Trade Credit Bancorp is a forward-thinking financial institution specialising in trade finance solutions. Our journey began with a simple yet powerful mission: to empower businesses by providing secure, fast, and flexible credit instruments that support cross-border trade.
        </p>
        <p>
          Backed by decades of collective experience in banking, international commerce, and financial structuring, we have built a reputation for reliability, transparency, and excellence. Today, we serve clients across multiple industries and regions, helping them unlock working capital and manage trade risk with confidence.
        </p>
      </div>

      {/* Mission & Values */}
      <div className="mb-10">
        <h2 className="text-3xl font-semibold mb-4">Mission & Values</h2>

        <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
        <p className="mb-4">
          To simplify and secure international trade by delivering tailored credit solutions that empower businesses to grow beyond borders.
        </p>

        <h3 className="text-xl font-semibold mb-2">Our Core Values</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Integrity:</strong> We uphold the highest ethical standards in every transaction and interaction.
          </li>
          <li>
            <strong>Client-Centricity:</strong> Your success is our success — we deliver personalised service and long-term support.
          </li>
          <li>
            <strong>Innovation:</strong> We continually evolve our offerings to meet the fast-changing needs of global trade.
          </li>
          <li>
            <strong>Transparency:</strong> Clear communication, straightforward pricing, and no surprises.
          </li>
          <li>
            <strong>Excellence:</strong> Every process, product, and partnership are built for performance and trust.
          </li>
        </ul>
      </div>

      {/* Compliance & Licenses */}
      <div>
        <h2 className="text-3xl font-semibold mb-4">Compliance & Licenses</h2>
        <p className="mb-4">
          At Trade Credit Bancorp, compliance is not just a requirement — it is a cornerstone of our operations.
        </p>
        <p className="mb-4">
          We adhere strictly to international financial regulations, Anti-Money Laundering (AML) standards, and Know Your Customer (KYC) protocols. Our internal compliance framework ensures every transaction meets the highest levels of legal and regulatory integrity.
        </p>
        <h3 className="text-xl font-semibold mb-2">Licensing & Regulatory Status:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Registered and regulated under [Your Jurisdiction, e.g. Dubai Financial Services Authority]</li>
          <li>Compliant with international trade finance protocols and due diligence standards</li>
          <li>Partners with globally recognised correspondent banks and legal advisory firms</li>
        </ul>
        <p className="mt-4">
          We maintain full transparency with clients and partners, and welcome regulatory inquiries as part of our commitment to lawful and ethical trade financing.
        </p>
      </div>
    </section>
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
    </div>
  );
};

export default AboutPage;
