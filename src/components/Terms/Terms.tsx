"use client";

import React from "react";

const Term: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">📜 Terms and Conditions</h1>
      
      <p className="text-sm mb-2">Effective Date: 01/05/2025</p>
      <p className="text-sm mb-6">Last Updated: 01/05/2025</p>

      <p className="mb-4">
        Welcome to <strong>TradeCredit Bancorp</strong> . By accessing or using our website (the
        “Site”) and our services, you agree to be bound by the following Terms and Conditions. If you do
        not agree with any part of these terms, please do not use our Site or services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Eligibility</h2>
      <p className="mb-4">
        You must be at least 18 years of age and have the legal authority to enter into binding contracts
        in order to use our services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Services</h2>
      <p className="mb-2">
        We provide trade finance solutions including but not limited to:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Letters of Credit</li>
        <li>Invoice Financing</li>
        <li>Export/Import Trade Support</li>
        <li>Risk Mitigation Tools</li>
      </ul>
      <p>
        We reserve the right to modify or discontinue our services at any time without prior notice.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. User Obligations</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Provide accurate, current, and complete information.</li>
        <li>Not use the Site for any illegal or unauthorized purpose.</li>
        <li>Maintain the confidentiality of your account information.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Intellectual Property</h2>
      <p className="mb-4">
        All content on this Site, including text, graphics, logos, and software, is the property of <strong>TradeCredit Bancorp</strong> or its licensors and is protected by intellectual property laws.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Disclaimers</h2>
      <p className="mb-4">
        Our services are provided on an “as is” and “as available” basis. We do not guarantee that the
        Site or any content will be error-free or uninterrupted.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Limitation of Liability</h2>
      <p className="mb-4">
        To the maximum extent permitted by law, <strong>TradeCredit Bancorp</strong> shall not be liable for any
        indirect, incidental, or consequential damages arising out of or in connection with the use of our
        Site or services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Governing Law</h2>
      <p className="mb-4">
        These Terms shall be governed by the laws of <strong>[Insert Jurisdiction]</strong>, without regard to its conflict
        of law principles.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Contact</h2>
      <p className="mb-4">
        For any questions regarding these Terms, please contact us at:<br />
        📧 <strong>Emailhere</strong>
      </p>
    </div>
  );
};

export default Term;

