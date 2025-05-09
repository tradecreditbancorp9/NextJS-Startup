const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-3xl font-bold leading-tight! text-black dark:text-white sm:text-4xl md:text-[45px]">
          {title}
        </h2>
        <p className="text-base leading-relaxed! text-body-color md:text-lg">
          Our team of experts is dedicated to providing you with the best
          solutions tailored to your unique needs. We understand the complexities
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
