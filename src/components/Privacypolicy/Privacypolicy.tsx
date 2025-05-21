"use client";

import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">🔐 Privacy Policy</h1>

      <p className="text-sm mb-2">Effective Date: 01/05/2025</p>
      <p className="text-sm mb-6">Last Updated: 01/05/2025</p>

      <p className="mb-4">
        <strong>TradeCredit Bancorp</strong> respects your privacy and is committed to protecting your personal data.
        This Privacy Policy outlines how we collect, use, and safeguard your information.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Personal Information:</strong> Name, contact details, identification documents, and financial
          information.
        </li>
        <li>
          <strong>Usage Data:</strong> IP address, browser type, operating system, and pages visited.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <p className="mb-2">We use your information to:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Provide and maintain our services</li>
        <li>Comply with regulatory requirements (e.g., KYC/AML)</li>
        <li>Improve our platform and user experience</li>
        <li>Communicate with you regarding updates or promotions</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Sharing of Information</h2>
      <p className="mb-2">We do not sell your personal information. We may share data with:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Financial partners and institutions for trade processing</li>
        <li>Regulatory bodies, when legally required</li>
        <li>Third-party service providers under strict data processing agreements</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Security</h2>
      <p className="mb-4">
        We implement advanced security protocols and encryption to protect your information. However,
        no method of transmission over the internet is 100% secure.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Your Rights</h2>
      <p className="mb-2">Depending on your jurisdiction, you may have the right to:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Access, correct, or delete your personal data</li>
        <li>Withdraw consent for data processing</li>
        <li>File a complaint with a data protection authority</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Cookies</h2>
      <p className="mb-4">
        We use cookies to improve site performance and analyze traffic. You can manage cookie
        preferences in your browser settings.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Third-Party Links</h2>
      <p className="mb-4">
        Our Site may contain links to third-party websites. We are not responsible for the privacy
        practices of those websites.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Contact Us</h2>
      <p className="mb-4">
        For any questions or concerns about this Privacy Policy, please contact us at:<br />
        📧 <strong> Email</strong>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
