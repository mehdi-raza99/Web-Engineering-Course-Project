import { Link } from "react-router-dom";

const ContactPreview = () => {
  return (
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
  )
}

export default ContactPreview
