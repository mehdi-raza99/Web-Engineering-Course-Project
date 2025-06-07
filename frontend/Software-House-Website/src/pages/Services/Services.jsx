
const servicesList = [
  {
    title: "Web Development",
    description:
      "We build responsive, high-performance web applications using the latest technologies like React, Node.js, and MongoDB.",
    icon: "🌐",
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps built with React Native and Flutter to keep you ahead in the mobile world.",
    icon: "📱",
  },
  {
    title: "UI/UX Design",
    description:
      "Beautiful and user-friendly designs focused on delivering smooth, intuitive digital experiences.",
    icon: "🎨",
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Custom e-commerce platforms with secure payment integration and inventory management.",
    icon: "🛒",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Reliable cloud architecture and CI/CD pipelines to ensure scalable and fast deployment.",
    icon: "☁️",
  },
  {
    title: "SEO & Digital Marketing",
    description:
      "Improve your visibility with modern SEO strategies and online marketing campaigns.",
    icon: "📈",
  },
];

const Services = () => {
  return (
    <section className="min-h-screen bg-white py-20 px-4">
      {/* Hero Title */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
        <p className="text-gray-600 text-lg">
          We offer a wide range of software solutions tailored to your business needs.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {servicesList.map((service, index) => (
          <div
            key={index}
            className="bg-gray-50 border hover:shadow-lg transition rounded-xl p-6 text-center"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
