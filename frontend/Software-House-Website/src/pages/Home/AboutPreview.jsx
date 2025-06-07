import { Link } from "react-router-dom";


const AboutPreview = () => {
  return (
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
  )
}

export default AboutPreview
