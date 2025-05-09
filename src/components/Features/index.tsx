import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Expert Trade Finance Services"
            paragraph="TradeCreditBancorp is a premier global trade company renowned for its expertise in banking services and securities."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3 hover:zoom-in transition-all duration-300 ease-in-out border border-[#E5E7EB] rounded-lg p-8 md:p-10 lg:p-12">
            
            {featuresData.map((feature, id) => (
              <div key={id} className=" hover:zoom-in transition-all duration-300 ease-in-out border border-[#E5E7EB] rounded-lg p-8 md:p-10 lg:p-12 box-shadow-2"><SingleFeature key={feature.id} feature={feature} />
            </div> ))}
            
          </div>
         
        </div>
      </section>
    </>
  );
};

export default Features;
