const Testimonials = () => {
  return (
<section className="bg-white py-20 px-4">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
      What Our Clients Say
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Testimonial 1 */}
      <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
        <p className="text-gray-600 italic mb-4">
          "Working with SoftwareHouse was a breeze. Their team delivered our project on time with excellent communication."
        </p>
        <div className="text-left mt-4">
          <h4 className="text-lg font-semibold text-blue-600">Sarah Ali</h4>
          <p className="text-sm text-gray-500">CEO, BrightTech</p>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
        <p className="text-gray-600 italic mb-4">
          "They turned our outdated app into a beautiful, modern platform. Highly recommended for mobile development!"
        </p>
        <div className="text-left mt-4">
          <h4 className="text-lg font-semibold text-blue-600">Ahmed Khan</h4>
          <p className="text-sm text-gray-500">Product Manager, AppX</p>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
        <p className="text-gray-600 italic mb-4">
          "Exceptional UI/UX work and great attention to detail. Their designers really understood our vision."
        </p>
        <div className="text-left mt-4">
          <h4 className="text-lg font-semibold text-blue-600">Maria Zain</h4>
          <p className="text-sm text-gray-500">Founder, DesignPro</p>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Testimonials
