import React from "react";

const TeacherDashboard = () => {
  return (
    <div className="flex min-h-screen bg-[#0f1724] text-white font-sans">
      {/* SIDEBAR */}
      <aside className="w-64 bg-[#0b1220] border-r border-[#00000014] flex flex-col justify-between">
        <div>
          <div className="px-6 py-5 text-lg font-semibold flex items-center gap-2">
            <span className="w-3 h-3 bg-green-500 rounded-sm"></span>
            QuizMaster
          </div>

          <nav className="px-4 mt-6 space-y-1 text-sm">
            {["Dashboard", "My Quizzes", "Analytics", "Students"].map(
              (item, i) => (
                <div
                  key={i}
                  className={`px-4 py-2 rounded-md cursor-pointer ${
                    item === "Dashboard" ? "bg-[#172033]" : "hover:bg-[#172033]"
                  }`}
                >
                  {item}
                </div>
              )
            )}
          </nav>
        </div>

        <div className="px-4 py-4 text-sm space-y-2">
          <div className="px-4 py-2 rounded-md hover:bg-[#172033] cursor-pointer">
            Settings
          </div>
          <div className="px-4 py-2 rounded-md hover:bg-[#172033] cursor-pointer text-red-400">
            Log Out
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 px-8 py-6">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-2xl font-semibold">Teacher Dashboard</h1>

          <div className="flex items-center gap-3 text-sm">
            <div className="text-right">
              <div className="font-medium">Prof. Sarah Connor</div>
              <div className="text-gray-400 text-xs">Physics Dept.</div>
            </div>
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
            { value: "12", label: "Active Quizzes" },
            { value: "148", label: "Total Students" },
            { value: "76%", label: "Avg. Completion Rate" },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-[#0e1624] border border-[#00000014] rounded-xl p-6"
            >
              <div className="text-3xl font-semibold">{card.value}</div>
              <div className="text-gray-400 text-sm mt-1">{card.label}</div>
            </div>
          ))}
        </div>

        {/* RECENT QUIZZES */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg">Recent Quizzes</h2>
            <button className="bg-[#2b8af6] px-4 py-2 rounded-md text-sm font-medium">
              + Create New Quiz
            </button>
          </div>

          <div className="bg-[#0e1624] border border-[#00000014] rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-[#172033] text-gray-400">
                <tr>
                  <th className="text-left px-6 py-3">Quiz Title</th>
                  <th>Status</th>
                  <th>Submissions</th>
                  <th>Avg. Score</th>
                  <th className="text-right px-6">Actions</th>
                </tr>
              </thead>

              <tbody>
                {[
                  {
                    title: "Thermodynamics Advanced",
                    status: "Published",
                    submissions: "42 / 50",
                    score: "85%",
                  },
                  {
                    title: "Fluid Mechanics Intro",
                    status: "Published",
                    submissions: "18 / 50",
                    score: "72%",
                  },
                  {
                    title: "Mid-Term Quantum Physics",
                    status: "Draft",
                    submissions: "-",
                    score: "-",
                  },
                ].map((quiz, i) => (
                  <tr key={i} className="border-t border-[#00000014]">
                    <td className="px-6 py-4">{quiz.title}</td>
                    <td>
                      <span
                        className={`px-3 py-1 rounded-full text-xs ${
                          quiz.status === "Published"
                            ? "bg-green-900 text-green-400"
                            : "bg-gray-700 text-gray-300"
                        }`}
                      >
                        {quiz.status}
                      </span>
                    </td>
                    <td>{quiz.submissions}</td>
                    <td>{quiz.score}</td>
                    <td className="px-6 text-right text-gray-400">✏️ 📊</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* RECENT SUBMISSIONS */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg">
              Recent Student Submissions
            </h2>
            <button className="text-sm text-gray-400 hover:text-white">
              View All
            </button>
          </div>

          <div className="bg-[#0e1624] border border-[#00000014] rounded-xl p-6 space-y-4 text-sm">
            {[
              {
                name: "Alex Chen",
                quiz: "Thermodynamics Advanced",
                time: "2 mins ago",
                score: "92%",
                color: "text-green-400",
              },
              {
                name: "Maria Rodriguez",
                quiz: "Fluid Mechanics Intro",
                time: "15 mins ago",
                score: "68%",
                color: "text-yellow-400",
              },
              {
                name: "James Wilson",
                quiz: "Thermodynamics Advanced",
                time: "1 hour ago",
                score: "88%",
                color: "text-green-400",
              },
            ].map((s, i) => (
              <div key={i} className="flex justify-between items-center">
                <div>
                  <div className="font-medium">{s.name}</div>
                  <div className="text-gray-400 text-xs">{s.quiz}</div>
                </div>

                <div className="text-right">
                  <div className="text-xs text-gray-400">{s.time}</div>
                  <div className={`font-semibold ${s.color}`}>{s.score}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default TeacherDashboard;
