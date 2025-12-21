import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Landing = () => {
  return (
    <div className="bg-[#0f1724] text-white min-h-screen font-sans">
      <Navbar />

      {/* HERO */}
      <section className="text-center px-6 pt-20">
        <span className="inline-block mb-4 px-4 py-1 text-xs rounded-full bg-[#172033] text-[#2b8af6]">
          New AI Question Generator
        </span>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Master any subject with <br />
          <span className="text-[#2b8af6]">smart quizzes</span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto mt-6">
          The ultimate platform for students to test their knowledge and
          teachers to create engaging assessments. Scalable, secure, and
          insightful.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <button className="bg-[#2b8af6] px-6 py-3 rounded-md font-medium">
            Start as Student →
          </button>
          <button className="bg-[#172033] px-6 py-3 rounded-md border border-[#00000014]">
            For Teachers
          </button>
        </div>

        {/* MAP PLACEHOLDER */}
        <div className="mt-14 mx-auto max-w-5xl h-[420px] bg-[#172033] rounded-xl border border-[#00000014] overflow-hidden opacity-80">
          {/* image / map goes here */}
        </div>
      </section>

      {/* BUILT FOR EVERYONE */}
      <section className="px-8 py-20">
        <h2 className="text-2xl font-semibold text-center">
          Built for everyone
        </h2>
        <p className="text-gray-400 text-center mt-2">
          Comprehensive tools whether you're learning or teaching.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            {
              title: "For Students",
              desc: "Track your progress with detailed analytics. Take quizzes in a distraction-free environment.",
            },
            {
              title: "For Teachers",
              desc: "Create rich quizzes with multiple question types. Monitor performance in real-time.",
            },
            {
              title: "For Admins",
              desc: "Manage users, roles, and content across the organization securely.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#0e1624] border border-[#00000014] rounded-xl p-6"
            >
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="px-8 py-20 bg-[#172033]">
        <h2 className="text-2xl font-semibold text-center">
          Simple, yet powerful workflow
        </h2>
        <p className="text-gray-400 text-center mt-2">
          Get started in minutes, not hours.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-12 text-center">
          {["Create Account", "Join or Create", "Analyze Results"].map(
            (step, i) => (
              <div key={i}>
                <div className="w-10 h-10 mx-auto rounded-full bg-[#2b8af6] text-white flex items-center justify-center mb-4">
                  {i + 1}
                </div>
                <h4 className="font-medium">{step}</h4>
                <p className="text-sm text-gray-400 mt-2">
                  Quick and intuitive setup process.
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-8 py-20">
        <h2 className="text-2xl font-semibold text-center">
          Trusted by educators
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            "This platform transformed how I evaluate my students.",
            "Finally, a quiz tool that doesn’t feel cluttered.",
            "The focus mode really helps during exams.",
          ].map((text, i) => (
            <div
              key={i}
              className="bg-[#0e1624] border border-[#00000014] rounded-xl p-6 text-sm text-gray-300"
            >
              “{text}”
              <div className="mt-4 text-xs text-gray-500">— Verified User</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-20 bg-[#172033] text-center">
        <h2 className="text-2xl font-semibold">Ready to get started?</h2>
        <p className="text-gray-400 mt-2">
          No credit card required for the free tier.
        </p>

        <button className="mt-6 bg-[#2b8af6] px-6 py-3 rounded-md font-medium">
          Create Free Account
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
