import React from "react";
import { Link } from "react-router-dom";

const jobs = [
  {
    title: "Frontend Developer",
    location: "Remote",
    type: "Full-time",
    description:
      "We are looking for a skilled React developer who can write clean, scalable UI code and work collaboratively with our backend team.",
  },
  {
    title: "Backend Developer",
    location: "Lahore Office",
    type: "Full-time",
    description:
      "Join our Node.js team and help us build robust backend systems, REST APIs, and microservices using MongoDB and Express.",
  },
  {
    title: "UI/UX Designer",
    location: "Hybrid",
    type: "Part-time",
    description:
      "We need a creative designer with a strong eye for detail, wireframing, and prototyping experience using Figma or Adobe XD.",
  },
];

const Career = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
        <p className="text-lg text-gray-600">
          We’re not just building software — we’re shaping the future of tech. Explore open roles and become a part of something meaningful.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-10">Why Work With Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {[
            "Flexible remote & hybrid options",
            "Work with modern tech stacks",
            "Collaborative, inclusive team",
            "Competitive salaries & bonuses",
            "Health benefits & paid leave",
            "Growth & learning opportunities",
          ].map((benefit, index) => (
            <div
              key={index}
              className="p-6 border rounded-xl shadow-sm hover:shadow-md transition"
            >
              <p className="text-blue-600 font-semibold text-lg">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
        <div className="space-y-8">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="border border-gray-200 p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="flex justify-between flex-wrap items-center mb-4">
                <h3 className="text-2xl font-semibold text-blue-700">
                  {job.title}
                </h3>
                <span className="text-sm text-gray-500 italic">
                  {job.type} • {job.location}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <Link
                to="/contact"
                className="inline-block mt-2 text-blue-600 hover:underline"
              >
                Apply Now →
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 py-16 text-center px-4 rounded-xl max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Don’t see your role listed?
        </h2>
        <p className="text-gray-600 mb-6">
          We’re always looking for talented individuals. Drop your resume and
          tell us how you can add value to our team.
        </p>
        <Link
          to="/contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Send Resume
        </Link>
      </div>
    </div>
  );
};

export default Career;
