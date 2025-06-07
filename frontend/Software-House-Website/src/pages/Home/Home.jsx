import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import { Link } from "react-router-dom";
import Hero_Section from "./Hero_Section";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      <NavBar />

      <Hero_Section />

      {/* About Preview */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We are a team of passionate developers, designers, and innovators who create smart digital solutions tailored to your business needs.
        </p>
        <Link
          to="/about"
          className="mt-4 inline-block text-blue-600 hover:underline"
        >
          Learn More
        </Link>
      </section>

      {/* Services Preview */}
      <section className="bg-gray-100 py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { title: "Web Development", desc: "Modern, fast, and scalable web apps." },
            { title: "Mobile Apps", desc: "Cross-platform mobile app solutions." },
            { title: "UI/UX Design", desc: "User-focused, beautiful interfaces." },
          ].map((service, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
        <Link
          to="/services"
          className="mt-8 inline-block text-blue-600 hover:underline"
        >
          View All Services
        </Link>
      </section>

<Testimonials />

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Start Your Project?</h2>
        <p className="text-gray-600 mb-6">Let's turn your ideas into reality with cutting-edge software solutions.</p>
        <Link
          to="/contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Contact Us
        </Link>
      </section>

      <Footer />
    </>
  );
};

export default Home;
