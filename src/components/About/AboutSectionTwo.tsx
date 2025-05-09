import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0 grid grid-rows-2 gap-4"
              data-wow-delay=".15s"
            ><div>
              <Image
                src="/images/logo/2.jpg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/logo/2.jpg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              /></div>
              <div>
               <Image
                src="/images/logo/trade3.png"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/logo/trade3.png"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              /></div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Specialized Financial Solutions for International Trade
                </h3>
                <p className="text-xs font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Trade Credit Bancorp offers Specialized Financial Solutions for International Trade, providing tailored services like Letters of Credit, Bank Guarantees, and more to streamline cross-border transactions and mitigate risks.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Customized Trade Financing Options
                </h3>
                <p className="text-xs font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Trade Credit Bancorp offers Customized Trade Financing Options, providing flexible solutions tailored to meet the unique needs of your international transactions. From Letters of Credit to performance guarantees, we ensure secure and efficient financing to support your global business growth.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Risk Management Solutions
                </h3>
                <p className="text-xs font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Trade Credit Bancorp offers Risk Management Solutions designed to protect your business from financial uncertainties in international trade. Our services, including Letters of Credit, Bank Guarantees, and Performance Guarantees, minimize risks and ensure secure, reliable transactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
