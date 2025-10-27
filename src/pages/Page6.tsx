import {
  CheckCircle2,
  XCircle,
  Award,
  ClipboardList,
  Trophy,
} from "lucide-react";
import { useState, useEffect } from "react";
import { database } from "../firebase/config";
import { ref, push, onValue } from "firebase/database";

interface Page6Props {
  onNext: () => void;
  onPrev: () => void;
}

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

interface QuizResult {
  id: number;
  name: string;
  score: number;
  timeSpent: string;
  date: string;
}

async function saveResult(result: QuizResult) {
  try {
    const quizRef = ref(database, "quizResults");
    await push(quizRef, result);
    console.log("✅ Data saved:", result);
  } catch (error) {
    console.error("Error saving result:", error);
  }
}

export function Page6({ onNext, onPrev }: Page6Props) {
  const [answers, setAnswers] = useState<number[]>(new Array(10).fill(-1));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [studentName, setStudentName] = useState("");
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [quizResults, setQuizResults] = useState<QuizResult[]>([]);

  // 🔄 Lấy dữ liệu realtime từ Firebase
  useEffect(() => {
    const quizRef = ref(database, "quizResults");
    const unsubscribe = onValue(quizRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const resultsArray = Object.values(data) as QuizResult[];
        // Sắp xếp theo điểm giảm dần, nếu bằng điểm thì theo thời gian sớm hơn
        const sortedResults = resultsArray.sort(
          (a, b) => b.score - a.score || a.timeSpent.localeCompare(b.timeSpent)
        );
        setQuizResults(sortedResults);
      } else {
        setQuizResults([]);
      }
    });
    return () => unsubscribe();
  }, []);

  const questions: Question[] = [
    {
      question: "Đại hội III của Đảng được tổ chức vào thời gian nào?",
      options: ["Tháng 9/1954", "Tháng 9/1960", "Tháng 9/1965", "Tháng 9/1975"],
      correctAnswer: 1,
    },
    {
      question: "Hai nhiệm vụ chiến lược của Đại hội III là gì?",
      options: [
        "Chống Pháp và xây dựng đất nước",
        "Cách mạng XHCN ở miền Bắc và giải phóng miền Nam",
        "Thống nhất đất nước và xây dựng kinh tế",
        "Đấu tranh chính trị và vũ trang",
      ],
      correctAnswer: 1,
    },
    {
      question: "Vai trò của miền Bắc trong đường lối Đại hội III là gì?",
      options: [
        "Tiền tuyến chiến đấu",
        "Hậu phương lớn và căn cứ địa vững chắc",
        "Trung tâm chính trị",
        "Khu vực đấu tranh chính",
      ],
      correctAnswer: 1,
    },
    {
      question: "Phong trào Đồng Khởi bùng nổ tại đâu và vào thời gian nào?",
      options: [
        "Sài Gòn - 1960",
        "Huế - 1963",
        "Bến Tre - đêm 17/1/1960",
        "Đà Nẵng - 1965",
      ],
      correctAnswer: 2,
    },
    {
      question: "Chiến thắng Ấp Bắc (1963) có ý nghĩa gì?",
      options: [
        "Lần đầu đánh bại chiến thuật trực thăng của Mỹ",
        "Giải phóng hoàn toàn miền Nam",
        "Buộc Mỹ rút quân",
        "Thành lập chính quyền cách mạng",
      ],
      correctAnswer: 0,
    },
    {
      question: "Tổng tiến công Mậu Thân diễn ra vào năm nào?",
      options: ["1965", "1968", "1973", "1975"],
      correctAnswer: 1,
    },
    {
      question: "Hiệp định Paris được ký kết vào thời gian nào?",
      options: ["27/1/1968", "30/4/1975", "27/1/1973", "26/3/1975"],
      correctAnswer: 2,
    },
    {
      question: "Chiến dịch Hồ Chí Minh diễn ra từ ngày nào đến ngày nào?",
      options: [
        "26/3 - 30/4/1975",
        "26/4 - 30/4/1975",
        "1/1 - 30/4/1975",
        "17/1 - 30/4/1975",
      ],
      correctAnswer: 1,
    },
    {
      question: "Ngày giải phóng hoàn toàn miền Nam, thống nhất đất nước là?",
      options: ["27/1/1973", "26/4/1975", "30/4/1975", "2/9/1945"],
      correctAnswer: 2,
    },
    {
      question: "Đường Trường Sơn có vai trò gì trong cuộc kháng chiến?",
      options: [
        "Tuyến phòng thủ chính",
        "Con đường vận chuyển chi viện cho miền Nam",
        "Khu căn cứ địa",
        "Tuyến đường thương mại",
      ],
      correctAnswer: 1,
    },
  ];

  const handleAnswer = (questionIndex: number, answerIndex: number) => {
    if (!submitted) {
      const newAnswers = [...answers];
      newAnswers[questionIndex] = answerIndex;
      setAnswers(newAnswers);

      if (startTime === null) setStartTime(new Date());
    }
  };

  const handleSubmit = async () => {
    if (!studentName.trim()) {
      alert("Vui lòng nhập tên của bạn!");
      return;
    }

    if (answers.includes(-1)) {
      const confirmSubmit = confirm(
        "Bạn chưa trả lời hết các câu hỏi. Bạn có chắc muốn nộp bài?"
      );
      if (!confirmSubmit) return;
    }

    let correctCount = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) correctCount++;
    });

    const endTime = new Date();
    const timeSpent = startTime
      ? Math.floor((endTime.getTime() - startTime.getTime()) / 1000)
      : 0;

    const timeString = `${Math.floor(timeSpent / 60)}:${(timeSpent % 60)
      .toString()
      .padStart(2, "0")}`;

    const result: QuizResult = {
      id: Date.now(),
      name: studentName,
      score: correctCount,
      timeSpent: timeString,
      date: new Date().toLocaleString(),
    };

    await saveResult(result);
    setScore(correctCount);
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers(new Array(10).fill(-1));
    setSubmitted(false);
    setScore(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-green-600 to-blue-600 p-6 rounded-full shadow-2xl">
              <Award size={64} className="text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0a3d62] mb-4">
            Quiz ôn tập
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Kiểm tra kiến thức về đường lối thống nhất
          </p>

          {!submitted && (
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="Nhập tên của bạn"
              className="w-full max-w-md px-4 py-2 border-2 border-blue-300 rounded-lg focus:border-blue-500 focus:outline-none"
              required
            />
          )}
        </div>

        {/* 🌟 Realtime Results Modal */}
        {showResults && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-3xl mx-4 animate-fade-in relative">
              <h2 className="text-3xl font-bold text-center text-[#0a3d62] mb-6 flex items-center justify-center gap-2">
                <Trophy className="text-yellow-500" /> Bảng xếp hạng
              </h2>

              {quizResults.length === 0 ? (
                <p className="text-center text-gray-600">Chưa có ai làm bài!</p>
              ) : (
                <div className="overflow-y-auto max-h-[60vh]">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-blue-100 text-[#0a3d62]">
                        <th className="py-3 px-4 rounded-tl-xl">#</th>
                        <th className="py-3 px-4">Họ tên</th>
                        <th className="py-3 px-4">Điểm</th>
                        <th className="py-3 px-4">Thời gian</th>
                        <th className="py-3 px-4 rounded-tr-xl">Ngày làm</th>
                      </tr>
                    </thead>
                    <tbody>
                      {quizResults.map((r, index) => (
                        <tr
                          key={r.id}
                          className={`border-b hover:bg-blue-50 transition ${
                            index < 3 ? "font-semibold text-blue-700" : ""
                          }`}
                        >
                          <td className="py-3 px-4">{index + 1}</td>
                          <td className="py-3 px-4">{r.name}</td>
                          <td className="py-3 px-4">{r.score}/10</td>
                          <td className="py-3 px-4">{r.timeSpent}</td>
                          <td className="py-3 px-4">{r.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              <button
                onClick={() => setShowResults(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-lg font-bold"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Kết quả cá nhân */}
        {submitted && (
          <div
            className={`mb-8 rounded-2xl p-8 shadow-2xl text-center animate-slide-up ${
              score >= 8
                ? "bg-gradient-to-r from-green-500 to-green-600"
                : score >= 6
                ? "bg-gradient-to-r from-yellow-500 to-yellow-600"
                : "bg-gradient-to-r from-red-500 to-red-600"
            }`}
          >
            <Award size={64} className="mx-auto mb-4 text-white" />
            <h2 className="text-3xl font-bold text-white mb-2">
              Điểm số: {score}/10
            </h2>
            <p className="text-xl text-white mb-4">
              {score >= 8
                ? "Xuất sắc! Bạn đã nắm vững kiến thức!"
                : score >= 6
                ? "Khá tốt! Hãy xem lại một số câu để hiểu rõ hơn."
                : "Hãy học lại và cố gắng hơn nhé!"}
            </p>
            <button
              onClick={handleReset}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Làm lại
            </button>
          </div>
        )}

        {/* Câu hỏi */}
        <div className="space-y-6 animate-slide-up">
          {questions.map((q, qIndex) => (
            <div
              key={qIndex}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  {qIndex + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 flex-1 select-none">
                  {q.question}
                </h3>
              </div>

              <div className="space-y-3 ml-11">
                {q.options.map((option, oIndex) => {
                  const isSelected = answers[qIndex] === oIndex;
                  const isCorrect = oIndex === q.correctAnswer;

                  let buttonClass =
                    "bg-gray-50 hover:bg-blue-50 border-gray-300";
                  if (submitted) {
                    if (isCorrect)
                      buttonClass = "bg-green-100 border-green-500";
                    else if (isSelected && !isCorrect)
                      buttonClass = "bg-red-100 border-red-500";
                  } else if (isSelected) {
                    buttonClass = "bg-blue-100 border-blue-500";
                  }

                  return (
                    <button
                      key={oIndex}
                      onClick={() => handleAnswer(qIndex, oIndex)}
                      disabled={submitted}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ${buttonClass}`}
                    >
                      <span>{option}</span>
                      {submitted && isCorrect && (
                        <CheckCircle2 className="text-green-600 float-right" />
                      )}
                      {submitted && isSelected && !isCorrect && (
                        <XCircle className="text-red-600 float-right" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Nút Nộp bài */}
        {!submitted && (
          <div className="mt-8 text-center">
            <button
              onClick={handleSubmit}
              disabled={answers.includes(-1) || !studentName.trim()}
              className={`px-8 py-4 rounded-lg text-xl font-semibold transition-all duration-300 ${
                answers.includes(-1) || !studentName.trim()
                  ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-green-600 to-green-700 text-white hover:shadow-lg hover:scale-105"
              }`}
            >
              Nộp bài
            </button>
          </div>
        )}

        {/* Nút hành động */}
        <div className="flex justify-between mt-12">
          <button
            onClick={onPrev}
            className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-300"
          >
            Quay lại
          </button>
          <div className="flex gap-4">
            <button
              onClick={() => setShowResults(true)}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 flex items-center gap-2"
            >
              <ClipboardList size={20} />
              Xem kết quả
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
    </div>
  );
}
