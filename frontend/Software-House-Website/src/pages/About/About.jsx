import { Link } from "react-router-dom";
const About = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Us
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Welcome to <span className="font-semibold text-indigo-600">Nimis Tech</span>, where innovation meets excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Our Story</h2>
            <p className="text-gray-600">
              Founded by a team of passionate tech enthusiasts, Nimis Tech emerged from a simple yet powerful vision: to build software that not only meets the needs of today but also anticipates the demands of tomorrow. Over the years, we've grown into a full-service software house, offering a wide range of services—from custom software development and web design to enterprise solutions and mobile app development.
            </p>
            <p className="text-gray-600">
              Our name, <span className="font-semibold text-indigo-600">Nimis</span>, is derived from the Latin word for "limitless." It reflects our ethos of pushing boundaries, solving complex problems, and creating possibilities without limits. We understand that in the fast-paced world of technology, staying ahead means constantly evolving and innovating, and that’s exactly what we do.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
            <p className="text-gray-600">
              At Nimis Tech, we envision a world where technology connects people, enhances business capabilities, and drives positive change. We aim to empower businesses of all sizes with innovative digital solutions that are not just functional, but transformational.
            </p>

            <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
            <p className="text-gray-600">
              Our mission is to build technology that drives success. We aim to deliver tailored software solutions that help businesses streamline their operations, enhance their digital presence, and achieve their goals. We achieve this by leveraging the latest technologies and methodologies while fostering a culture of collaboration and continuous learning.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800">What We Do</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Custom Software Development</h3>
              <p className="text-gray-600">
                We design and develop software solutions tailored to meet your specific needs, whether it’s for internal business processes, customer-facing applications, or complex enterprise systems.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Web Development & Design</h3>
              <p className="text-gray-600">
                Our team creates beautiful, responsive websites that are user-friendly, fast, and optimized for performance. From e-commerce platforms to corporate sites, we deliver exceptional digital experiences.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Mobile App Development</h3>
              <p className="text-gray-600">
                We specialize in creating mobile applications for both Android and iOS. Whether you're looking for a simple app or a sophisticated platform, we bring your mobile vision to life.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800">Our Values</h2>
          <ul className="list-disc ml-6 mt-6 text-gray-600 space-y-4">
            <li><strong>Innovation:</strong> We believe in the power of creativity and continuous improvement. Innovation is at the core of everything we do.</li>
            <li><strong>Integrity:</strong> We operate with honesty and transparency, building trust with our clients and partners every step of the way.</li>
            <li><strong>Collaboration:</strong> Great things happen when brilliant minds come together. We prioritize teamwork, both internally and with our clients, to achieve exceptional results.</li>
            <li><strong>Customer-Centricity:</strong> Your success is our success. We listen closely to your needs and work alongside you to bring your vision to life.</li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-800">Why Choose Nimis Tech?</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Expert Team</h3>
              <p className="text-gray-600">
                Our developers, designers, and strategists bring years of experience to the table, offering expert solutions that are both creative and technically sound.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">End-to-End Solutions</h3>
              <p className="text-gray-600">
                From ideation to deployment and beyond, we provide full-service solutions tailored to your business needs.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Quality Assurance</h3>
              <p className="text-gray-600">
                We don’t just deliver software—we deliver quality. Every project undergoes rigorous testing to ensure it’s flawless.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-800">Let’s Build the Future Together</h2>
          <p className="mt-4 text-lg text-gray-600">
            At Nimis Tech, we believe that technology has the power to change the world. We are excited to partner with businesses, entrepreneurs, and visionaries who want to shape the future with innovative, world-class software solutions. Whether you’re a startup or an enterprise, Nimis Tech is here to make your digital dreams a reality.
          </p>
          <button className="mt-6 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700">
            <Link to={"/contact"}>Get in Touch</Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
