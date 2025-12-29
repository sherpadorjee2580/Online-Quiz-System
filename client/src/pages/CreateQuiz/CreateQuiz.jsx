import React, { useState } from "react";

const CreateQuiz = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: "What is the capital of Nepal?",
      options: ["Kathmandu", "Pokhara", "Lalitpur", "Biratnagar"],
      correctIndex: 0,
    },
  ]);

  const [activeQuestionId, setActiveQuestionId] = useState(1);
  const [editingQuestion, setEditingQuestion] = useState(questions[0]);
  const [tab, setTab] = useState("edit");
  const [saved, setSaved] = useState(true);
  const [status, setStatus] = useState("draft"); // draft | published

  /* ---------- Handlers ---------- */

  const selectQuestion = (question) => {
    setActiveQuestionId(question.id);
    setEditingQuestion({
      ...question,
      options: [...question.options],
    });
    setSaved(true);
  };

  const saveDraft = () => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === editingQuestion.id ? editingQuestion : q))
    );
    setSaved(true);
    setStatus("draft");
  };

  const publishQuiz = () => {
    saveDraft();
    setStatus("published");
  };

  const addQuestion = () => {
    const newQ = {
      id: Date.now(),
      text: "New Question",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      correctIndex: 0,
    };

    setQuestions((prev) => [...prev, newQ]);
    setActiveQuestionId(newQ.id);
    setEditingQuestion(newQ);
    setSaved(true);
    setStatus("draft");
  };

  const deleteQuestion = () => {
    if (questions.length === 1) return;

    const filtered = questions.filter((q) => q.id !== activeQuestionId);
    setQuestions(filtered);
    setActiveQuestionId(filtered[0].id);
    setEditingQuestion(filtered[0]);
    setSaved(true);
    setStatus("draft");
  };

  /* ---------- UI ---------- */

  return (
    <div className="min-h-screen bg-[#0e1628] text-white p-6 flex gap-6">
      {/* LEFT PANEL */}
      <div className="w-1/4 bg-[#121d35] p-4 rounded-lg">
        <div className="flex justify-between mb-4">
          <h3>Questions</h3>
          <button onClick={addQuestion} className="text-green-400">
            +
          </button>
        </div>

        {questions.map((q, i) => (
          <div
            key={q.id}
            onClick={() => selectQuestion(q)}
            className={`p-2 rounded cursor-pointer text-sm mb-2 ${
              q.id === activeQuestionId ? "bg-green-900" : "hover:bg-[#1a2a4a]"
            }`}
          >
            Q{i + 1}
          </div>
        ))}
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 bg-[#121d35] p-6 rounded-lg">
        {/* TOP BAR */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-6">
            <button
              onClick={() => setTab("edit")}
              className={tab === "edit" ? "text-green-400" : "text-gray-400"}
            >
              Edit
            </button>
            <button
              onClick={() => setTab("preview")}
              className={tab === "preview" ? "text-green-400" : "text-gray-400"}
            >
              Preview
            </button>
          </div>

          {/* SAVE / PUBLISH */}
          <div className="flex items-center gap-3">
            {status === "published" && (
              <span className="text-green-400 text-sm">● Published</span>
            )}

            <button
              onClick={saveDraft}
              disabled={saved}
              className={`px-3 py-2 rounded text-sm ${
                saved
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-yellow-600 hover:bg-yellow-500"
              }`}
            >
              Save Draft
            </button>

            <button
              onClick={publishQuiz}
              className="px-4 py-2 rounded text-sm bg-green-600 hover:bg-green-500"
            >
              Publish
            </button>
          </div>
        </div>

        {/* EDIT TAB */}
        {tab === "edit" && (
          <>
            <textarea
              value={editingQuestion.text}
              onChange={(e) => {
                setEditingQuestion({
                  ...editingQuestion,
                  text: e.target.value,
                });
                setSaved(false);
                setStatus("draft");
              }}
              className="w-full bg-[#0e1628] p-4 rounded mb-6"
            />

            {editingQuestion.options.map((opt, idx) => (
              <div key={idx} className="flex gap-3 mb-3">
                <input
                  type="radio"
                  checked={editingQuestion.correctIndex === idx}
                  onChange={() => {
                    setEditingQuestion({
                      ...editingQuestion,
                      correctIndex: idx,
                    });
                    setSaved(false);
                    setStatus("draft");
                  }}
                />
                <input
                  value={opt}
                  onChange={(e) => {
                    const newOpts = [...editingQuestion.options];
                    newOpts[idx] = e.target.value;
                    setEditingQuestion({
                      ...editingQuestion,
                      options: newOpts,
                    });
                    setSaved(false);
                    setStatus("draft");
                  }}
                  className="flex-1 bg-[#0e1628] p-2 rounded"
                />
              </div>
            ))}

            <button
              onClick={deleteQuestion}
              className="mt-6 text-red-400 text-sm"
            >
              Delete Question
            </button>
          </>
        )}

        {/* PREVIEW TAB */}
        {tab === "preview" && (
          <div>
            <h3 className="mb-4">{editingQuestion.text}</h3>
            {editingQuestion.options.map((opt, i) => (
              <div
                key={i}
                className={`p-2 mb-2 rounded ${
                  i === editingQuestion.correctIndex
                    ? "bg-green-800"
                    : "bg-[#0e1628]"
                }`}
              >
                {opt}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateQuiz;
