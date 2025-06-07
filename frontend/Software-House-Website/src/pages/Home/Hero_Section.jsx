import { Link } from "react-router-dom";

const Hero_Section = () => {
  return (
    <section className="min-h-[calc(100vh-60px)] flex flex-col justify-center items-center gap-9 p-7 bg-[#25a9e0]">
      <h1 className="text-2xl md:text-4xl font-extrabold">
        Transforming Your Business with a Leading Software Development Company
      </h1>
      <h3 className="font-bold text-xl md:text-2xl">
        Innovative and advanced software development services that enable
        visionary businesses to thrive in the digital age.
      </h3>
      <Link to={"/contact"}><button className="bg-blue-950 py-4 px-6 rounded-xl text-white font-semibold cursor-pointer">Let's  build</button></Link>
    </section>
  );
};

export default Hero_Section;
