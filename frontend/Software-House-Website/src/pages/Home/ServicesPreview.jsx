import { Link } from "react-router-dom";

const ServicesPreview = () => {
  return (
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
  )
}

export default ServicesPreview
