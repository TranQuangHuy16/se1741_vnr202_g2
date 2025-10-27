import { useState, useEffect } from "react";
import { database } from "../firebase/config";
import { ref, push, onValue } from "firebase/database";

interface Page8Props {
  onNext: () => void;
  onPrev: () => void;
}

interface QuestionEntry {
  id: number;
  groupName: string;
  content: string;
  date: string;
}

async function saveQuestion(question: QuestionEntry) {
  try {
    const questionRef = ref(database, "questions");
    await push(questionRef, question);
    console.log("✅ Question saved:", question);
  } catch (error) {
    console.error("Error saving question:", error);
  }
}

export function Page8({ onNext, onPrev }: Page8Props) {
  const [groupName, setGroupName] = useState("");
  const [content, setContent] = useState("");
  const [questions, setQuestions] = useState<QuestionEntry[]>([]);

  // 🔄 Lấy dữ liệu realtime từ Firebase
  useEffect(() => {
    const questionRef = ref(database, "questions");
    const unsubscribe = onValue(questionRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const list = Object.values(data) as QuestionEntry[];
        // Sắp xếp theo thời gian cũ nhất lên trên đầu
        const sorted = list.sort((a, b) => a.id - b.id);
        setQuestions(sorted);
      } else {
        setQuestions([]);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async () => {
    if (!groupName.trim() || !content.trim()) {
      alert("Vui lòng nhập đầy đủ tên nhóm và nội dung câu hỏi!");
      return;
    }

    const newQuestion: QuestionEntry = {
      id: Date.now(),
      groupName,
      content,
      date: new Date().toLocaleString(),
    };

    await saveQuestion(newQuestion);
    setGroupName("");
    setContent("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#0a3d62] mb-8">
          Gửi câu hỏi
        </h1>

        {/* Form nhập câu hỏi */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-8 space-y-4">
          <input
            type="text"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            placeholder="Tên nhóm"
            className="w-full px-4 py-2 border-2 border-blue-300 rounded-lg focus:border-blue-500 focus:outline-none"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Nội dung câu hỏi"
            className="w-full px-4 py-2 border-2 border-blue-300 rounded-lg focus:border-blue-500 focus:outline-none resize-none h-24"
          />
          <button
            onClick={handleSubmit}
            className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            Gửi câu hỏi
          </button>
        </div>

        {/* Danh sách câu hỏi realtime */}
        <div className="space-y-6">
          {questions.length === 0 ? (
            <p className="text-center text-gray-500 italic">
              Chưa có câu hỏi nào!
            </p>
          ) : (
            questions.map((q) => (
              <div
                key={q.id}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border-l-4 border-blue-500 transition-all duration-300"
              >
                <div className="flex justify-between items-start">
                  <p className="font-bold text-blue-700 text-lg">
                    {q.groupName}
                  </p>
                  <span className="text-gray-400 text-sm">{q.date}</span>
                </div>
                <p className="mt-3 text-gray-800 leading-relaxed">
                  {q.content}
                </p>
              </div>
            ))
          )}
        </div>

        {/* Nút điều hướng */}
        <div className="flex justify-between mt-12">
          <button
            onClick={onPrev}
            className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-300"
          >
            Quay lại
          </button>
          <button
            onClick={onNext}
            className="px-6 py-3 bg-gradient-to-r from-[#0a3d62] to-blue-700 text-white rounded-lg hover:shadow-lg transition-all duration-300"
          >
            Tiếp theo
          </button>
        </div>
      </div>
    </div>
  );
}
