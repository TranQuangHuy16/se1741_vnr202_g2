import { Sparkles, Users, FileText } from "lucide-react";
import { useEffect, useState } from "react";

interface Page7Props {
  onPrev: () => void;
}

export function Page7({ onPrev }: Page7Props) {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowText(true), 500);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-12 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animation: `twinkle ${Math.random() * 3 + 2}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-6 rounded-full shadow-2xl">
              <Sparkles size={64} className="text-white" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Cam kết sử dụng AI
          </h1>
          <p className="text-xl text-blue-200">
            Minh bạch và trách nhiệm trong học tập
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 animate-slide-up">
            <div className="flex items-start gap-4 mb-6">
              <FileText className="text-yellow-400 flex-shrink-0" size={32} />
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Tuyên bố về sử dụng công nghệ AI
                </h2>
                <div
                  className={`${
                    showText ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-1000`}
                >
                  <p className="text-lg text-blue-100 leading-relaxed mb-4">
                    Nhóm học sinh chúng em xin cam đoan rằng trong quá trình
                    thực hiện dự án này, chúng em đã sử dụng các công cụ trí tuệ
                    nhân tạo (AI) như{" "}
                    <span className="text-yellow-300 font-semibold">
                      V0.dev
                    </span>
                    ,
                    <span className="text-yellow-300 font-semibold">
                      {" "}
                      ChatGPT
                    </span>
                    , và
                    <span className="text-yellow-300 font-semibold">
                      {" "}
                      FPT.AI
                    </span>{" "}
                    để hỗ trợ trong việc:
                  </p>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <span className="text-yellow-400 font-bold text-xl">
                        •
                      </span>
                      <span className="text-blue-100 text-lg">
                        Thiết kế giao diện và trình bày website một cách sinh
                        động, hiện đại
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-yellow-400 font-bold text-xl">
                        •
                      </span>
                      <span className="text-blue-100 text-lg">
                        Tối ưu hóa trải nghiệm người dùng với hiệu ứng và tính
                        năng tương tác
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-yellow-400 font-bold text-xl">
                        •
                      </span>
                      <span className="text-blue-100 text-lg">
                        Tích hợp các tính năng kỹ thuật như Web Speech API để
                        đọc nội dung
                      </span>
                    </li>
                  </ul>

                  <div className="bg-yellow-400/20 border-l-4 border-yellow-400 rounded-lg p-6 mb-6">
                    <p className="text-lg text-white leading-relaxed font-semibold">
                      Tuy nhiên,{" "}
                      <span className="text-yellow-300">
                        toàn bộ nội dung học thuật
                      </span>{" "}
                      về lịch sử, phân tích đường lối, sự kiện lịch sử, và ý
                      nghĩa được
                      <span className="text-yellow-300">
                        {" "}
                        chúng em tự biên soạn và nghiên cứu
                      </span>{" "}
                      dựa trên:
                    </p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 font-bold text-xl">
                        ✓
                      </span>
                      <span className="text-blue-100 text-lg">
                        Sách giáo khoa Lịch sử (Chương trình Giáo dục phổ thông)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 font-bold text-xl">
                        ✓
                      </span>
                      <span className="text-blue-100 text-lg">
                        Tài liệu tham khảo chính thống về lịch sử Việt Nam
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 font-bold text-xl">
                        ✓
                      </span>
                      <span className="text-blue-100 text-lg">
                        Sự hướng dẫn và gợi ý của giáo viên
                      </span>
                    </li>
                  </ul>

                  <p className="text-lg text-blue-100 leading-relaxed">
                    Chúng em hiểu rằng việc sử dụng công nghệ AI là công cụ hỗ
                    trợ, nhưng
                    <span className="text-yellow-300 font-semibold">
                      {" "}
                      kiến thức và tư duy phản biện
                    </span>{" "}
                    là của bản thân mỗi người. Chúng em cam kết học tập nghiêm
                    túc và chịu trách nhiệm với nội dung đã trình bày.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 animate-slide-up">
            <div className="flex items-center gap-4 mb-4">
              <Users className="text-white" size={32} />
              <h2 className="text-2xl font-bold text-white">
                Nhóm thực hiện{" "}
                <p className="text-white text-lg">
                  <span className="font-semibold text-yellow-300">Nhóm 4</span>
                </p>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-xl p-4">
                <p className="text-white text-lg">
                  Lớp:{" "}
                  <span className="font-semibold text-yellow-300">SE1741</span>
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <p className="text-white text-lg">
                  Môn:{" "}
                  <span className="font-semibold text-yellow-300">VNR202</span>
                </p>
              </div>
            </div>

            {/* <div className="mt-6 text-center">
              <p className="text-blue-200 text-lg mb-2">Với sự hướng dẫn của</p>
              <p className="text-white text-xl font-semibold">Giáo viên bộ môn Lịch sử</p>
            </div> */}
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <div className="inline-block bg-gradient-to-r from-yellow-400 to-red-500 text-white px-8 py-4 rounded-full text-xl font-bold shadow-2xl">
              Cảm ơn quý thầy cô và các bạn đã theo dõi!
            </div>
          </div>
        </div>

        <div className="flex justify-start mt-12">
          <button
            onClick={onPrev}
            className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
          >
            Quay lại
          </button>
        </div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
