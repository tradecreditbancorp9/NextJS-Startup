"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is trade finance, and how can it help my business?",
    answer: "Trade finance provides funding and credit instruments to help businesses import, export, and manage cross-border transactions securely. It reduces risk and improves cash flow.",
  },
  {
    question: "What types of services do you offer?",
    answer: "We specialise in Letters of Credit, Documentary Collections, Invoice Financing, Bank Guarantees, and other trade finance instruments tailored to business needs.",
  },
  {
    question: "Is Trade Credit Bancorp licensed and regulated?",
    answer: "Yes. We operate in full compliance with international financial regulations and AML/KYC protocols. Learn more in our Compliance & Licenses section.",
  },
  {
    question: "How do I apply for a trade finance solution?",
    answer: "You can apply by submitting a request through our online form or contacting our Help Desk. A relationship manager will follow up within 24 hours.",
  },
  {
    question: "How secure is my information?",
    answer: "We use bank-grade encryption and follow strict data privacy policies to ensure the security of all client information and documents.",
  },
  {
    question: "What documents are required to open an account or apply for trade finance services?",
    answer: "Typically, we require business registration documents, financial statements, trade contracts or invoices, and identity verification of key stakeholders. Additional documents may be needed based on jurisdiction and service type.",
  },
  {
    question: "How long does it take to process a Letter of Credit (LC)?",
    answer: "Standard LC issuance typically takes 2–5 business days, depending on the complexity and compliance review. Pre-approved clients may receive faster turnaround times.",
  },
  {
    question: "Do you offer services to startups or SMEs?",
    answer: "Yes. We work with businesses of all sizes. Our team customizes trade finance solutions based on your business model, trading history, and credit profile.",
  },
  {
    question: "Can I apply for services if my business is not based in the UAE?",
    answer: "Yes, we serve international clients across various regions. However, services are subject to local laws and compliance checks.",
  },
  {
    question: "What currencies do you support for transactions?",
    answer: "We support major global currencies including USD, EUR, GBP, AED, and others. Custom arrangements can be made for specific cross-border requirements.",
  },
  {
    question: "How does Trade Credit Bancorp protect against fraud and cyber threats?",
    answer: "We implement multi-factor authentication, bank-grade encryption, and regular compliance audits. Our team is trained in identifying fraud risks and follows international best practices.",
  },
  {
    question: "What are your fees and interest rates?",
    answer: "Fees vary depending on the service, transaction volume, and risk profile. Transparent pricing is provided during the onboarding or quotation process.",
  },
  {
    question: "Is there a minimum transaction size to use your services?",
    answer: "We typically work with transactions starting from $25,000 and above. However, this can vary depending on the service type and client profile.",
  },
  {
    question: "Do you offer consulting or advisory support for trade structuring?",
    answer: "Yes. Our in-house specialists and legal advisors assist clients with end-to-end trade structuring, compliance, and risk mitigation.",
  },
  {
    question: "How do I track the status of my request or transaction?",
    answer: "Once you submit a request, you’ll receive a tracking number. Our team will provide real-time updates via email or your client portal.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-semibold mb-8 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4">
            <button
              onClick={() => toggle(index)}
              className="w-full text-left font-medium text-lg focus:outline-none"
            >
              {faq.question}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      {/* Optional 'View All FAQs' button */}
      <div className="text-center mt-8">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          View All FAQs
        </button>
      </div>
    </section>
  );
};

export default FAQSection;
