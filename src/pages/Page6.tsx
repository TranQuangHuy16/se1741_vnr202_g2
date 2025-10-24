import { CheckCircle2, XCircle, Award } from 'lucide-react';
import { useState } from 'react';

interface Page6Props {
  onNext: () => void;
  onPrev: () => void;
}

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

export function Page6({ onNext, onPrev }: Page6Props) {
  const [answers, setAnswers] = useState<number[]>(new Array(10).fill(-1));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const questions: Question[] = [
    {
      question: 'Đại hội III của Đảng được tổ chức vào thời gian nào?',
      options: ['Tháng 9/1954', 'Tháng 9/1960', 'Tháng 9/1965', 'Tháng 9/1975'],
      correctAnswer: 1
    },
    {
      question: 'Hai nhiệm vụ chiến lược của Đại hội III là gì?',
      options: [
        'Chống Pháp và xây dựng đất nước',
        'Cách mạng XHCN ở miền Bắc và giải phóng miền Nam',
        'Thống nhất đất nước và xây dựng kinh tế',
        'Đấu tranh chính trị và vũ trang'
      ],
      correctAnswer: 1
    },
    {
      question: 'Vai trò của miền Bắc trong đường lối Đại hội III là gì?',
      options: [
        'Tiền tuyến chiến đấu',
        'Hậu phương lớn và căn cứ địa vững chắc',
        'Trung tâm chính trị',
        'Khu vực đấu tranh chính'
      ],
      correctAnswer: 1
    },
    {
      question: 'Phong trào Đồng Khởi bùng nổ tại đâu và vào thời gian nào?',
      options: [
        'Sài Gòn - 1960',
        'Huế - 1963',
        'Bến Tre - đêm 17/1/1960',
        'Đà Nẵng - 1965'
      ],
      correctAnswer: 2
    },
    {
      question: 'Chiến thắng Ấp Bắc (1963) có ý nghĩa gì?',
      options: [
        'Lần đầu đánh bại chiến thuật trực thăng của Mỹ',
        'Giải phóng hoàn toàn miền Nam',
        'Buộc Mỹ rút quân',
        'Thành lập chính quyền cách mạng'
      ],
      correctAnswer: 0
    },
    {
      question: 'Tổng tiến công Mậu Thân diễn ra vào năm nào?',
      options: ['1965', '1968', '1973', '1975'],
      correctAnswer: 1
    },
    {
      question: 'Hiệp định Paris được ký kết vào thời gian nào?',
      options: ['27/1/1968', '30/4/1975', '27/1/1973', '26/3/1975'],
      correctAnswer: 2
    },
    {
      question: 'Chiến dịch Hồ Chí Minh diễn ra từ ngày nào đến ngày nào?',
      options: [
        '26/3 - 30/4/1975',
        '26/4 - 30/4/1975',
        '1/1 - 30/4/1975',
        '17/1 - 30/4/1975'
      ],
      correctAnswer: 1
    },
    {
      question: 'Ngày giải phóng hoàn toàn miền Nam, thống nhất đất nước là?',
      options: ['27/1/1973', '26/4/1975', '30/4/1975', '2/9/1945'],
      correctAnswer: 2
    },
    {
      question: 'Đường Trường Sơn có vai trò gì trong cuộc kháng chiến?',
      options: [
        'Tuyến phòng thủ chính',
        'Con đường vận chuyển chi viện cho miền Nam',
        'Khu căn cứ địa',
        'Tuyến đường thương mại'
      ],
      correctAnswer: 1
    }
  ];

  const handleAnswer = (questionIndex: number, answerIndex: number) => {
    if (!submitted) {
      const newAnswers = [...answers];
      newAnswers[questionIndex] = answerIndex;
      setAnswers(newAnswers);
    }
  };

  const handleSubmit = () => {
    let correctCount = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        correctCount++;
      }
    });
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
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-green-600 to-blue-600 p-6 rounded-full shadow-2xl">
              <Award size={64} className="text-white" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#0a3d62] mb-4">
            Quiz ôn tập
          </h1>
          <p className="text-xl text-gray-600">Kiểm tra kiến thức về đường lối thống nhất</p>
        </div>

        {submitted && (
          <div className={`mb-8 rounded-2xl p-8 shadow-2xl text-center animate-slide-up ${
            score >= 8 ? 'bg-gradient-to-r from-green-500 to-green-600' :
            score >= 6 ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' :
            'bg-gradient-to-r from-red-500 to-red-600'
          }`}>
            <Award size={64} className="mx-auto mb-4 text-white" />
            <h2 className="text-3xl font-bold text-white mb-2">
              Điểm số: {score}/10
            </h2>
            <p className="text-xl text-white mb-4">
              {score >= 8 ? 'Xuất sắc! Bạn đã nắm vững kiến thức!' :
               score >= 6 ? 'Khá tốt! Hãy xem lại một số câu để hiểu rõ hơn.' :
               'Hãy học lại và cố gắng hơn nhé!'}
            </p>
            <button
              onClick={handleReset}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Làm lại
            </button>
          </div>
        )}

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
                <h3 className="text-lg font-semibold text-gray-800 flex-1">
                  {q.question}
                </h3>
              </div>

              <div className="space-y-3 ml-11">
                {q.options.map((option, oIndex) => {
                  const isSelected = answers[qIndex] === oIndex;
                  const isCorrect = oIndex === q.correctAnswer;
                  const showResult = submitted;

                  let buttonClass = 'bg-gray-50 hover:bg-blue-50 border-gray-300';

                  if (showResult) {
                    if (isCorrect) {
                      buttonClass = 'bg-green-100 border-green-500';
                    } else if (isSelected && !isCorrect) {
                      buttonClass = 'bg-red-100 border-red-500';
                    } else {
                      buttonClass = 'bg-gray-50 border-gray-300';
                    }
                  } else if (isSelected) {
                    buttonClass = 'bg-blue-100 border-blue-500';
                  }

                  return (
                    <button
                      key={oIndex}
                      onClick={() => handleAnswer(qIndex, oIndex)}
                      disabled={submitted}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ${buttonClass} ${
                        !submitted ? 'hover:shadow-md' : ''
                      } flex items-center justify-between`}
                    >
                      <span className="text-gray-800">{option}</span>
                      {showResult && isCorrect && (
                        <CheckCircle2 className="text-green-600 flex-shrink-0" size={24} />
                      )}
                      {showResult && isSelected && !isCorrect && (
                        <XCircle className="text-red-600 flex-shrink-0" size={24} />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {!submitted && (
          <div className="mt-8 text-center">
            <button
              onClick={handleSubmit}
              disabled={answers.includes(-1)}
              className={`px-8 py-4 rounded-lg text-xl font-semibold transition-all duration-300 ${
                answers.includes(-1)
                  ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:shadow-lg hover:scale-105'
              }`}
            >
              Nộp bài
            </button>
          </div>
        )}

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
