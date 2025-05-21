"use-client";
import { Metadata } from "next";
import FAQSection from "@/components/support/support";
import Contact from "@/components/Contact";
export const metadata: Metadata = {
  title: "TermsandCondition | TradeCredit Bancorp",
  description: "This is TermsandCondition for  TradeCredit Bancorp",
  // other metadata
};

const AboutPage = () => {
  return (
    <div className="pt-16 md:pt-20 lg:pt-28">
      <FAQSection/>
      <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Customer Help Desk</h1>

      <div className="bg-white rounded-2xl shadow p-6 mb-10">
        <p className="text-lg text-gray-700 mb-4">
          Need assistance with your account or a specific transaction?
          <br />
          Our support team is available <strong>Monday to Friday, 9:00 AM – 6:00 PM (GMT+4)</strong>.
        </p>
        <ul className="text-gray-800 space-y-2">
          <li>• <strong>Phone:</strong> +44-7453747965</li>
          <li>• <strong>Email:</strong> <a className="text-blue-600 underline" href="mailto:support@tradecreditbancorp.com">support@tradecreditbancorp.com</a></li>
          <li>• <strong>Live Chat:</strong> Available on the bottom right of this page </li>
          <li>• <strong>WhatsApp Support:</strong> +44- 7453747965</li>
        </ul>
        <p className="mt-4 text-sm text-gray-600">We aim to respond to all queries within 1 business day.</p>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-4"> Contact Us</h2>
      <div className="bg-white rounded-2xl shadow p-6 mb-10">
        <p className="text-lg text-gray-700 mb-4">
          Have questions or want to speak with a specialist? We’d love to hear from you.
        </p>
        <div className="space-y-2 text-gray-800 mb-4">
          <p><strong>Head Office:</strong><br />Trade Credit Bancorp<br />01-118, 5
 MARCHANT SQUARE,
 PADDINGTON, LONDON, W2
 1AY , LONDON, UNITED
 KINGDOM.</p>
 <strong>And under licensing & regulatory status. Registered Under - United Kingdom</strong>
          <p><strong>Email:</strong> <a className="text-blue-600 underline" href="mailto:contact@tradecreditbancorp.com">contact@tradecreditbancorp.com</a></p>
          <p><strong>Phone:</strong>+44- 7453747965</p>
          <p><strong>Business Hours:</strong> Monday–Friday, 9:00 AM to 6:00 PM</p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Subject"
            className="md:col-span-2 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="md:col-span-2 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
      <Contact />
    </div>
  );
};

export default AboutPage;
