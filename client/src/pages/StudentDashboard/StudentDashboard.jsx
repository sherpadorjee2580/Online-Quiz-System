import React from "react";

const StudentDashboard = () => {
  return (
    <div className="flex min-h-screen bg-[#0f1724] text-white font-sans">
      {/* SIDEBAR */}
      <aside className="w-64 bg-[#0b1220] border-r border-[#00000014] flex flex-col justify-between">
        <div>
          <div className="px-6 py-5 text-lg font-semibold flex items-center gap-2">
            <span className="w-3 h-3 bg-blue-500 rounded-sm"></span>
            EduQuiz
          </div>

          <nav className="px-4 mt-6 space-y-1 text-sm">
            {[
              "Dashboard",
              "Available Quizzes",
              "My Results",
              "Performance",
            ].map((item, i) => (
              <div
                key={i}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  item === "Dashboard" ? "bg-[#172033]" : "hover:bg-[#172033]"
                }`}
              >
                {item}
              </div>
            ))}
          </nav>
        </div>

        <div className="px-4 py-4 text-sm space-y-2">
          <div className="px-4 py-2 rounded-md hover:bg-[#172033] cursor-pointer">
            Profile
          </div>
          <div className="px-4 py-2 rounded-md hover:bg-[#172033] cursor-pointer">
            Settings
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1 px-8 py-6">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <p className="text-sm text-gray-400">Welcome back, Alex!</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-gray-400">🔔</span>
            <img
              src="https://i.pravatar.cc/40"
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            {
              icon: "📘",
              value: "12",
              label: "Quizzes Completed",
              sub: "+2 this week",
              color: "text-green-400",
            },
            {
              icon: "🏆",
              value: "85%",
              label: "Average Score",
              sub: "+5% vs last month",
              color: "text-green-400",
            },
            {
              icon: "⏱️",
              value: "4.5h",
              label: "Study Time",
              sub: "Same as last week",
              color: "text-gray-400",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-[#0e1624] border border-[#00000014] rounded-xl p-6"
            >
              <div className="text-xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-semibold">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
              <div className={`text-xs mt-2 ${stat.color}`}>{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* MIDDLE GRID */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* WEEKLY PERFORMANCE */}
          <div className="md:col-span-2 bg-[#0e1624] border border-[#00000014] rounded-xl p-6">
            <h2 className="font-semibold mb-6">Weekly Performance</h2>

            <div className="flex justify-between text-xs text-gray-500 mt-24">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                <span key={day}>{day}</span>
              ))}
            </div>
          </div>

          {/* RECOMMENDED */}
          <div className="bg-[#0e1624] border border-[#00000014] rounded-xl p-6">
            <div className="flex justify-between mb-4">
              <h2 className="font-semibold">Recommended</h2>
              <button className="text-xs text-blue-400">View All</button>
            </div>

            {[
              {
                title: "Advanced Physics II",
                meta: "45m • Hard",
                action: "Start",
                primary: true,
              },
              {
                title: "European History",
                meta: "30m • Medium",
                action: "Details",
              },
              {
                title: "Intro to Python",
                meta: "60m • Easy",
                action: "Details",
              },
            ].map((q, i) => (
              <div key={i} className="flex justify-between items-center mb-4">
                <div>
                  <div className="text-sm font-medium">{q.title}</div>
                  <div className="text-xs text-gray-400">{q.meta}</div>
                </div>

                <button
                  className={`text-xs px-3 py-1 rounded-md ${
                    q.primary
                      ? "bg-green-500 text-black"
                      : "border border-[#00000014]"
                  }`}
                >
                  {q.action}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* RECENT RESULTS */}
        <section>
          <h2 className="font-semibold mb-4">Recent Results</h2>

          <div className="bg-[#0e1624] border border-[#00000014] rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-[#172033] text-gray-400">
                <tr>
                  <th className="text-left px-6 py-3">Quiz Title</th>
                  <th>Date Taken</th>
                  <th>Score</th>
                  <th>Status</th>
                  <th className="text-right px-6">Action</th>
                </tr>
              </thead>

              <tbody>
                {[
                  {
                    title: "Linear Algebra Basics",
                    date: "Oct 24, 2023",
                    score: "18/20 (90%)",
                    status: "Passed",
                    color: "bg-green-900 text-green-400",
                  },
                  {
                    title: "Organic Chemistry 101",
                    date: "Oct 22, 2023",
                    score: "32/50 (64%)",
                    status: "Average",
                    color: "bg-yellow-900 text-yellow-400",
                  },
                  {
                    title: "World Literature",
                    date: "Oct 20, 2023",
                    score: "15/15 (100%)",
                    status: "Perfect",
                    color: "bg-green-900 text-green-400",
                  },
                ].map((r, i) => (
                  <tr key={i} className="border-t border-[#00000014]">
                    <td className="px-6 py-4">{r.title}</td>
                    <td>{r.date}</td>
                    <td>{r.score}</td>
                    <td>
                      <span
                        className={`px-3 py-1 rounded-full text-xs ${r.color}`}
                      >
                        {r.status}
                      </span>
                    </td>
                    <td className="px-6 text-right text-blue-400 cursor-pointer">
                      Review
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StudentDashboard;
