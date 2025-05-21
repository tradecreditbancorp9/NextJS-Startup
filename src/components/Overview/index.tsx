"use client";

import React from "react";

const Overview: React.FC = () => {
  const caseStudies = [
  {
    icon: "🏢",
    title: "Exporter in Asia Secures Global Deal Using SBLC",
    client: "Textile Exporter, India",
    challenge:
      "Faced challenges in securing international buyers due to lack of collateral and credibility.",
    solution:
      "Trade Credit Bancorp issued a Standby Letter of Credit (SBLC) backed by reputable international banking partners.",
    results: [
      "Successfully closed a $2.5 million export deal with a European buyer.",
      "Secured two additional long-term contracts within six months.",
    ],
    testimonial:
      "Your SBLC solution opened doors we couldn’t imagine. It changed the trajectory of our business.",
    author: "CEO, XYZ Textiles",
  },
  {
    icon: "💼",
    title: "Real Estate Firm Closes Multi-Million Deal with Bank Guarantee",
    client: "Real Estate Development Firm, UAE",
    challenge:
      "Needed to provide a Bank Guarantee to meet tender requirements for a government infrastructure contract.",
    solution:
      "Trade Credit Bancorp structured and delivered a tailored Bank Guarantee within 72 hours.",
    results: [
      "Secured a $10 million government-backed land development project.",
      "Gained long-term credibility with public sector partners.",
    ],
    testimonial:
      "The speed and professionalism were unmatched. We’re now on a fast track to expand further.",
    author: "Managing Director, Alpha Developers",
  },
  {
    icon: "🧾",
    title: "Cross-Border M&A Secured with Escrow Services",
    client: "Private Equity Firm, Singapore",
    challenge:
      "Required a trusted third-party escrow arrangement to manage an $8 million acquisition involving cross-border assets.",
    solution:
      "Trade Credit Bancorp served as Paymaster and Escrow provider, ensuring transparent and milestone-based fund release.",
    results: [
      "Successfully closed the transaction with zero disputes.",
      "Built investor confidence for future M&A activity.",
    ],
    testimonial:
      "Your escrow solution gave both sides the confidence to move forward. Truly professional.",
    author: "M&A Consultant, Finovate Partners",
  },
  {
    icon: "🌐",
    title: "Startup Gains Investor Trust Through Due Diligence Support",
    client: "FinTech Startup, Nigeria",
    challenge:
      "Struggled to raise funding due to lack of formal business documentation and due diligence reporting.",
    solution:
      "Trade Credit Bancorp delivered a comprehensive due diligence package including KYC, financials, and market verification.",
    results: [
      "Raised $1.2 million in seed funding.",
      "Attracted two international institutional investors.",
    ],
    testimonial:
      "Your team’s due diligence package helped us build the trust we needed to scale.",
    author: "Founder, CredItUp Africa",
  },
  {
    icon: "🏭",
    title: "Manufacturer Optimizes Trade Cycle with SBLC Facility",
    client: "Heavy Machinery Manufacturer, Brazil",
    challenge:
      "Experienced delays in receiving payments from international buyers, impacting cash flow and operations.",
    solution:
      "A revolving Standby Letter of Credit (SBLC) facility was provided to secure payment cycles.",
    results: [
      "Reduced payment delays by 45%.",
      "Improved production scheduling and inventory turnover.",
    ],
    testimonial:
      "Your trade finance tools gave us the liquidity we needed to compete globally.",
    author: "CFO, MacroMec Industries",
  },
];
const partnerships = [
  {
    title: "Banking Partners",
    description:
      "We collaborate with a select network of internationally recognized banks and financial institutions to deliver secure and credible instruments such as:",
    points: [
      "Standby Letters of Credit (SBLC)",
      "Bank Guarantees (BG)",
      "Documentary Letters of Credit (DLC)",
    ],
    footer:
      "These partnerships enable us to serve clients across Europe, Asia, Africa, and the Middle East with speed and confidence.",
  },
  {
    title: "Legal & Compliance Partners",
    description:
      "To ensure that all transactions meet global regulatory and compliance standards, we work closely with:",
    points: [
      "Top-tier law firms across jurisdictions",
      "Independent compliance officers",
      "AML/KYC verification partners",
    ],
    footer:
      "This ensures due diligence, risk mitigation, and full legal clarity in every service we provide.",
  },
  {
    title: "Escrow & Paymaster Partners",
    description:
      "Our escrow services are backed by verified and regulated paymasters who operate under strict fiduciary responsibility. These partnerships help facilitate:",
    points: [
      "Cross-border M&A transactions",
      "Real estate deals",
      "Import/export settlements",
    ],
  },
  {
    title: "Technology Partners",
    description:
      "To enhance digital onboarding, document verification, and client data security, we partner with:",
    points: [
      "Fintech solution providers",
      "Cloud infrastructure firms",
      "API integration experts",
    ],
    footer:
      "These partnerships allow us to scale securely while delivering a seamless client experience.",
  },
  {
    title: "Global Trade Advisors & Consultants",
    description:
      "Our network of experienced trade consultants and advisory partners supports our clients in:",
    points: [
      "Structuring international deals",
      "Negotiating with foreign buyers/sellers",
      "Meeting country-specific trade requirements",
    ],
  },
];
  return (
    <>
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Procedure</h1>

      <p className="mb-4">
        At <strong>Trade Credit Bancorp</strong>, we facilitate the issuance of financial instruments including Standby
        Letters of Credit (SBLC), Documentary Letters of Credit (DLC/LC), and Bank Guarantees (BG)
        for import-export, project finance, and commodity transactions. Our process is swift, secure, and
        structured to protect all parties involved.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Required Documents for Letter of Credit (LC) Issuance
      </h2>
      <ul className="list-disc list-inside space-y-1 mb-6">
        <li>Completed Application Form</li>
        <li>Completed CIS (Client Information Sheet)</li>
        <li>
          KYC Documents:
          <ul className="list-disc list-inside ml-5">
            <li>Copy of passport</li>
            <li>Certificate of Incorporation / Company Registration</li>
          </ul>
        </li>
        <li>Pro-forma Invoice (especially for imports, must state payment terms)</li>
        <li>Sales/Purchase Contract (SPA) – for commodity transactions</li>
        <li>
          Type of Delivery Required:
          <ul className="list-disc list-inside ml-5">
            <li>SWIFT</li>
            <li>Email</li>
            <li>Hard Copy</li>
            <li>Courier</li>
          </ul>
        </li>
        <li>
          Transaction Quotation Details:
          <ul className="list-disc list-inside ml-5">
            <li>Transaction amount</li>
            <li>Name of the receiving/beneficiary bank</li>
          </ul>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Our Step-by-Step Issuance Procedure</h2>
      <ol className="list-decimal list-inside space-y-4 mb-6">
        <li>
          <strong>Application Review & Initial Meeting</strong><br />
          Our compliance team reviews your complete application. If accepted, we schedule a meeting.
        </li>
        <li>
          <strong>Offer Letter Issued</strong><br />
          We issue a formal Offer Letter with outlined terms and service structure.
        </li>
        <li>
          <strong>Draft Instrument Preparation</strong><br />
          We prepare a draft instrument for your review and third-party verification.
        </li>
        <li>
          <strong>Draft Confirmation</strong><br />
          The signed and stamped draft must be returned to us.
        </li>
        <li>
          <strong>Service Contract & Fee Invoice</strong><br />
          Includes:
          <ul className="list-disc list-inside ml-5">
            <li>Pre-issuance invoice</li>
            <li>Post-issuance invoice</li>
            <li>Counter-indemnity document</li>
          </ul>
        </li>
        <li>
          <strong>Payment & Indemnity Submission</strong><br />
          On receipt, we proceed with the issuance.
        </li>
        <li>
          <strong>Instrument Issuance via SWIFT</strong><br />
          We issue to the beneficiary’s bank within 72 hours.
        </li>
        <li>
          <strong>Confirmation Copy Sent to Client</strong><br />
          A relay copy is sent via email.
        </li>
        <li>
          <strong>Goods Clearance & Payment</strong><br />
          Client clears goods and makes payment.
        </li>
        <li>
          <strong>End of Transaction</strong>
        </li>
      </ol>

      <h2 className="text-2xl font-semibold mb-2">Timeline</h2>
      <p className="mb-2">
        <strong>Estimated Completion:</strong> 5–10 business days
      </p>
      <p>This includes document processing, compliance checks, drafting, and final issuance.</p>
    </div>
     <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-10">
        🌟 Success Stories
      </h1>

      <div className="space-y-10">
        {caseStudies.map((story, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-6 rounded-2xl border border-gray-200"
          >
            <h2 className="text-2xl font-semibold mb-2">
              {story.icon} {story.title}
            </h2>
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Client:</span> {story.client}
            </p>
            <p className="mb-2">
              <span className="font-semibold text-gray-800">Challenge:</span>{" "}
              {story.challenge}
            </p>
            <p className="mb-2">
              <span className="font-semibold text-gray-800">Solution:</span>{" "}
              {story.solution}
            </p>
            <div className="mb-2">
              <span className="font-semibold text-gray-800">Result:</span>
              <ul className="list-disc list-inside ml-4 mt-1 text-gray-700">
                {story.results.map((result, i) => (
                  <li key={i}>{result}</li>
                ))}
              </ul>
            </div>
            <div className="border-l-4 border-blue-600 pl-4 mt-4 italic text-gray-700">
              “{story.testimonial}”
              <div className="not-italic font-semibold mt-1 text-sm text-blue-700">
                – {story.author}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        🤝 Our Strategic Partnerships
      </h1>
      <p className="text-lg text-gray-700 mb-10">
        At Trade Credit Bancorp, we believe that strong partnerships drive
        global impact. Our success is built on a foundation of trusted alliances
        with institutions that share our commitment to innovation, financial
        transparency, and client empowerment.
      </p>

      <div className="space-y-10">
        {partnerships.map((section, index) => (
          <div key={index} className="bg-white border rounded-2xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
              {section.title}
            </h2>
            <p className="text-gray-700 mb-3">{section.description}</p>
            <ul className="list-disc list-inside text-gray-800 space-y-1 mb-3">
              {section.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            {section.footer && (
              <p className="text-gray-600 mt-2 italic">{section.footer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Overview;







