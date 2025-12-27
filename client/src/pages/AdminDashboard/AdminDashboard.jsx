import React from "react";

const AdminDashboard = () => {
  return (
    <div className="bg-[#0f1724] text-white min-h-screen flex font-sans">
      {/* SIDEBAR */}
      <aside className="w-64 bg-[#0e1624] border-r border-[#00000014] p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-lg bg-[#2b8af6] flex items-center justify-center font-bold">
              🛡️
            </div>
            <h2 className="font-semibold text-lg">Admin Panel</h2>
          </div>

          <nav className="space-y-2 text-sm">
            {[
              "Overview",
              "User Management",
              "Quiz Moderation",
              "Reports & Logs",
            ].map((item, i) => (
              <div
                key={i}
                className={`px-4 py-2 rounded-md cursor-pointer ${
                  i === 0 ? "bg-[#172033]" : "hover:bg-[#172033]"
                }`}
              >
                {item}
              </div>
            ))}
          </nav>
        </div>

        <div className="text-sm text-gray-400">⚙️ System Settings</div>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-8">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-xl font-semibold">System Overview</h1>

          <div className="flex items-center gap-4">
            🔔
            <img
              src="https://i.pravatar.cc/40"
              className="w-9 h-9 rounded-full"
              alt="admin"
            />
          </div>
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            {
              title: "Total Users",
              value: "2,845",
              info: "+12% this month",
            },
            {
              title: "Active Quizzes",
              value: "142",
              info: "+5% this week",
            },
            {
              title: "System Load",
              value: "98.2%",
              info: "Uptime status normal",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-[#0e1624] border border-[#00000014] rounded-xl p-6"
            >
              <p className="text-gray-400 text-sm">{card.title}</p>
              <h2 className="text-3xl font-semibold mt-2">{card.value}</h2>
              <p className="text-sm text-green-400 mt-2">{card.info}</p>
            </div>
          ))}
        </div>

        {/* CONTENT GRID */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* RECENT USERS */}
          <div className="lg:col-span-2 bg-[#0e1624] border border-[#00000014] rounded-xl p-6">
            <div className="flex justify-between mb-4">
              <h3 className="font-semibold">Recent Users</h3>
              <span className="text-sm text-[#2b8af6] cursor-pointer">
                View All
              </span>
            </div>

            <div className="space-y-4 text-sm">
              {[
                {
                  name: "Sarah Connor",
                  role: "Teacher",
                  status: "Active",
                  time: "2 mins ago",
                },
                {
                  name: "John Smith",
                  role: "Student",
                  status: "Active",
                  time: "2 hrs ago",
                },
                {
                  name: "Emily Clarke",
                  role: "Teacher",
                  status: "Pending",
                  time: "1 day ago",
                },
                {
                  name: "Michael Wong",
                  role: "Student",
                  status: "Active",
                  time: "3 days ago",
                },
              ].map((user, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center bg-[#172033] rounded-lg px-4 py-3"
                >
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-xs text-gray-400">{user.role}</p>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      user.status === "Active"
                        ? "bg-green-600/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {user.status}
                  </span>

                  <span className="text-gray-400">{user.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="space-y-6">
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-5">
              <h4 className="font-semibold text-red-400">
                ⚠ Inappropriate Quiz Title
              </h4>
              <p className="text-sm text-gray-400 mt-2">
                Reported by 3 students
              </p>
              <button className="mt-4 bg-red-500 px-4 py-2 rounded-md text-sm">
                Review
              </button>
            </div>

            <div className="bg-[#2b8af6] rounded-xl p-6">
              <h4 className="font-semibold">System Update</h4>
              <p className="text-sm opacity-90 mt-2">
                Version 2.4.0 is available for deployment.
              </p>
              <button className="mt-4 bg-white text-[#2b8af6] px-4 py-2 rounded-md text-sm font-medium">
                View Changelog
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
