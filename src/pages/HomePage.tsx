import { useState } from "react";
import { ChevronRight, Map } from "lucide-react";

interface HomePageProps {
  onNext: () => void;
}

export function HomePage({ onNext }: HomePageProps) {
  const [showFullContent, setShowFullContent] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center animate-fade-in">
        <div className="mb-8 flex justify-center">
          <div className="bg-blue-900 p-6 rounded-full shadow-2xl">
            <Map size={64} className="text-yellow-400" />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-[#0a3d62] mb-6 leading-tight animate-slide-up">
          Hai miền một trái tim
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-8 animate-slide-up">
          Đường lối thống nhất (1954–1975)
        </h2>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 mb-6 animate-slide-up text-left">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
            Sau Hiệp định Genève 1954, đất nước ta tạm thời bị chia cắt làm hai
            miền, một vấn đề lịch sử đau thương nhưng cũng tạo nên bước ngoặt
            quan trọng trong cuộc đấu tranh giải phóng dân tộc.
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
            <span className="font-bold text-yellow-600">
              Làm thế nào để hai miền Nam - Bắc cùng một trái tim, cùng hướng
              tới mục tiêu thống nhất đất nước?
            </span>
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
            <span className="font-bold text-red-600">
              Đường lối nào đã dẫn dắt dân tộc ta vượt qua những thử thách khốc
              liệt để giành thắng lợi vào năm 1975?
            </span>
          </p>

          {/* Nội dung đầy đủ hiển thị khi nhấn "Đọc thêm" */}
          {showFullContent && (
            <div className="mt-4 text-gray-700 space-y-4">
              <p>
                Hiệp định Genève 1954 đã chia cắt đất nước Việt Nam thành hai
                phần: Miền Bắc dưới sự lãnh đạo của Đảng Lao động Việt Nam và
                Miền Nam dưới sự kiểm soát của chính quyền Sài Gòn được Mỹ hỗ
                trợ. Sự chia cắt này không chỉ là một ranh giới địa lý mà còn là
                một nỗi đau sâu sắc trong lòng dân tộc Việt Nam.
              </p>
              <p>
                Bối cảnh quốc tế lúc bấy giờ bị chi phối bởi Chiến tranh Lạnh
                giữa Liên Xô và Hoa Kỳ. Mỹ, với mục đích ngăn chặn sự lan rộng
                của chủ nghĩa cộng sản, đã can thiệp sâu vào công việc nội bộ
                của Miền Nam, hỗ trợ chính quyền Sài Gòn bằng quân sự và kinh
                tế.
              </p>
              <p>
                Nỗi đau chia cắt Bắc – Nam không chỉ là vấn đề chính trị mà còn
                là vấn đề nhân văn. Hàng triệu gia đình bị tách rời, hàng triệu
                người phải rời bỏ quê hương. Tuy nhiên, khát vọng thống nhất đất
                nước vẫn cháy bỏng trong lòng nhân dân.
              </p>
              <p>
                Các phong trào cách mạng ở Miền Nam tiếp tục phát triển, mặc dù
                gặp phải sự đàn áp khốc liệt từ chính quyền Sài Gòn. Những chiến
                sĩ cách mạng vẫn kiên trì đấu tranh, tin tưởng vào sự lãnh đạo
                của Đảng Lao động Việt Nam và sự hỗ trợ từ Miền Bắc.
              </p>
              <p>
                Đại hội III của Đảng Lao động Việt Nam, diễn ra vào năm 1960, đã
                đề ra một đường lối chiến lược mới: tiến hành đồng thời hai
                nhiệm vụ cách mạng ở hai miền, với mục tiêu cuối cùng là thống
                nhất đất nước dưới chủ nghĩa xã hội.
              </p>
            </div>
          )}

          <button
            onClick={() => setShowFullContent(!showFullContent)}
            className="mt-4 text-blue-600 font-semibold hover:underline transition-all duration-300"
          >
            {showFullContent ? "Thu gọn" : "Đọc thêm"}
          </button>
        </div>

        <button
          onClick={onNext}
          className="group bg-gradient-to-r from-[#0a3d62] to-blue-700 text-white px-8 py-4 rounded-full text-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto"
        >
          Bắt đầu tìm hiểu
          <ChevronRight
            className="group-hover:translate-x-1 transition-transform"
            size={24}
          />
        </button>
      </div>
    </div>
  );
}
