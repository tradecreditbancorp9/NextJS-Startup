import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import Link from "next/link";

const Blog1 = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-24 md:py-20 lg:py-28"
    >
      <div className="container pt-24 md:pt-0">
         <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6"> Industry News</h1>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-1">
            1. U.S.–China Trade Ceasefire Brings Temporary Relief
          </h2>
          <p>
            In a significant development, the United States and China have agreed to a 90-day
            reduction in tariffs, easing tensions between the two economic giants. This temporary
            truce has led to a notable rebound in global markets, with major indices posting their
            biggest gains since April. However, experts caution that while this agreement provides
            short-term relief, substantial gaps remain, and a final trade resolution will be
            challenging.
          </p>
          
          <Link
           href="https://www.ft.com/content/ce68eed1-f81d-40b8-b17b-d89216716675"
            className="text-underline text-blue-900"
            > Link</Link>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-1">
            2. HSBC Launches TradePay to Mitigate Tariff Costs
          </h2>
          <p>
            HSBC has introduced <strong>'TradePay for Import Duties'</strong>, a financial service designed to help
            businesses manage the increased costs resulting from tariffs. This platform allows
            businesses to access credit specifically to cover import duties, offering improved
            visibility and control over working capital. Since its inception, TradePay has facilitated
            $2.3 billion in trade finance globally.
          </p>
         
          <Link
            href ="https://www.businessinsider.com/hsbc-loan-to-help-businesses-deal-cost-of-trump-tariffs-2025-5?"
            className="text-underline"
            > Link</Link>
          
        </div>
      </div>

      <h1 className="text-3xl font-bold mt-10 mb-6">Trade Finance Insights</h1>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-1">
            1. Digital Transformation Accelerates in Trade Finance
          </h2>
          <p>
            The trade finance sector is undergoing a profound transformation, driven by advanced
            technologies such as Artificial Intelligence (AI), integrated platforms, and predictive
            models. These innovations are redefining financial operations and foreign trade,
            enhancing efficiency and competitiveness.
          </p>
          
          <Link
            href ="https://traydstream.com/future-and-trends-for-trade-finance-in-2025-a-new-era-is-coming/?"
            className="text-underline"
            > Link</Link>
          
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-1">
            2. Sustainability Takes Center Stage
          </h2>
          <p>
            ESG (Environmental, Social, and Governance) considerations are gaining prominence in
            trade finance. Institutions are offering sustainability-linked finance with preferential
            rates and incorporating carbon footprint tracking tools to manage environmental
            impacts more effectively.
          </p>
          
          
          <Link
            href ="https://www.linkedin.com/pulse/top-trade-finance-trends-watch-in2025-tobias-pf%C3%BCtze-ioqpe?"
            className="text-underline"
            > Link</Link>
            
        </div>
      </div>

      <h1 className="text-3xl font-bold mt-10 mb-6"> Compliance Updates</h1>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-1">
            1. Navigating New Trade Agreements and Tariff Changes
          </h2>
          <p>
            One of the most impactful trade compliance trends in 2025 is the shifting landscape of
            tariffs and changing trade agreements. Businesses must adapt to new frameworks to
            minimize costs and reduce risk exposure related to duties and tariffs.
          </p>
          <p className="text-sm text-gray-500 mt-1">
           <Link
            href =" https://www.supplychainit.com/5-key-trade-compliance-trends-in-2025/?"
            className="text-underline"
            > Link</Link>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-1">
            2. Emphasis on Ethical Sourcing and Forced Labor Regulations
          </h2>
          <p>
            Global regulatory bodies are intensifying enforcement against forced labor and sanctions
            evasion. Organizations must ensure ethical sourcing and align compliance with business
            strategies to foster agile, resilient supply chains.
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Sources: Visual Compliance, Global Banking | Finance
          </p>
        </div>
      </div>
    </div>
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog1;
