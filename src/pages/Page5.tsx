import { Heart, Star, Flag } from 'lucide-react';
import { SpeechButton } from '../components/SpeechButton';

interface Page5Props {
  onNext: () => void;
  onPrev: () => void;
}

export function Page5({ onNext, onPrev }: Page5Props) {
  const content = `
    Ý nghĩa lịch sử của đường lối thống nhất và chiến thắng năm 1975.

    Thứ nhất, vai trò của đường lối đúng đắn. Đường lối được Đại hội Ba của Đảng đề ra đã khẳng định vai trò quyết định của yếu tố con người và ý chí thống nhất đất nước. Đường lối này xác định đúng đắn nhiệm vụ của mỗi miền, tạo nên sự phối hợp nhịp nhàng giữa hậu phương và tiền tuyến, giữa xây dựng chủ nghĩa xã hội ở miền Bắc và đấu tranh giải phóng miền Nam.

    Thứ hai, sự thống nhất hai miền một trái tim. Mặc dù tạm thời bị chia cắt về mặt lãnh thổ, nhưng hai miền Nam Bắc luôn gắn bó máu thịt, cùng chung một mục tiêu là giải phóng và thống nhất Tổ quốc. Miền Bắc xây dựng hậu phương vững chắc, chi viện sức người sức của cho miền Nam. Miền Nam kiên cường đấu tranh, góp phần quan trọng vào thắng lợi chung.

    Thứ ba, ý nghĩa lịch sử sâu sắc. Chiến thắng năm 1975 đã hoàn thành sự nghiệp giải phóng dân tộc, thống nhất đất nước, chấm dứt hơn hai mươi năm chia cắt đau thương. Đất nước bước vào kỷ nguyên mới, kỷ nguyên độc lập dân tộc và chủ nghĩa xã hội. Thắng lợi này khẳng định sức mạnh to lớn của dân tộc Việt Nam, tinh thần yêu nước và ý chí quyết tâm thống nhất Tổ quốc.

    Thứ tư, bài học lịch sử. Đường lối đúng đắn, sự đoàn kết thống nhất của toàn dân tộc, sự lãnh đạo sáng suốt của Đảng là những nhân tố quyết định đến thắng lợi. Đây là bài học quý báu cho công cuộc xây dựng và bảo vệ Tổ quốc ngày nay.
  `;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-12 px-4 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5 bg-center bg-cover"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Cpath d='M0 0h60v15H0z' fill='%23da251d'/%3E%3Cpath d='M0 15h60v15H0z' fill='%23ffff00'/%3E%3Cpath d='M27 15l-5.4 3.9 2.1-6.3L18.3 9h6.6L27 2.7 29.1 9h6.6l-5.4 3.6 2.1 6.3z' fill='%23ffff00'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-red-600 to-yellow-500 p-6 rounded-full shadow-2xl">
                <Star size={64} className="text-white" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-[#0a3d62] mb-4">
              Ý nghĩa lịch sử
            </h1>
            <p className="text-xl text-gray-600">Giá trị bất hủ của đường lối thống nhất</p>
          </div>

          <div className="mb-8 flex justify-center animate-slide-up">
            <SpeechButton text={content} />
          </div>

          <div className="space-y-6 animate-slide-up">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-l-8 border-red-600">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#0a3d62] mb-4">
                    Vai trò của đường lối đúng đắn
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-3">
                    Đường lối được Đại hội III của Đảng đề ra đã khẳng định vai trò quyết định của
                    <span className="highlight-yellow font-semibold"> yếu tố con người và ý chí thống nhất đất nước</span>.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Đường lối này xác định đúng đắn nhiệm vụ của mỗi miền, tạo nên sự phối hợp nhịp nhàng
                    giữa <span className="highlight-red font-semibold">hậu phương và tiền tuyến</span>,
                    giữa xây dựng CNXH ở miền Bắc và đấu tranh giải phóng miền Nam.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-l-8 border-yellow-500">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#0a3d62] mb-4 flex items-center gap-2">
                    <Heart className="text-red-500" size={28} />
                    Sự thống nhất hai miền một trái tim
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-3">
                    Mặc dù tạm thời bị chia cắt về mặt lãnh thổ, nhưng hai miền Nam - Bắc luôn
                    <span className="highlight-yellow font-semibold"> gắn bó máu thịt</span>,
                    cùng chung một mục tiêu là giải phóng và thống nhất Tổ quốc.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold">Miền Bắc</span> xây dựng hậu phương vững chắc, chi viện sức người sức của cho miền Nam.
                    <span className="font-semibold"> Miền Nam</span> kiên cường đấu tranh, góp phần quan trọng vào thắng lợi chung.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-red-100 rounded-2xl p-8 shadow-2xl border-l-8 border-blue-700">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#0a3d62] mb-4 flex items-center gap-2">
                    <Flag className="text-red-600" size={28} />
                    Ý nghĩa lịch sử sâu sắc
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-3">
                    Chiến thắng năm 1975 đã hoàn thành sự nghiệp
                    <span className="highlight-red font-semibold"> giải phóng dân tộc, thống nhất đất nước</span>,
                    chấm dứt hơn 20 năm chia cắt đau thương.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-3">
                    Đất nước bước vào <span className="highlight-yellow font-semibold">kỷ nguyên mới</span>,
                    kỷ nguyên độc lập dân tộc và chủ nghĩa xã hội.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Thắng lợi này khẳng định sức mạnh to lớn của dân tộc Việt Nam, tinh thần yêu nước
                    và ý chí quyết tâm thống nhất Tổ quốc.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-l-8 border-green-600">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  4
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#0a3d62] mb-4">
                    Bài học lịch sử quý báu
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-3">
                    <span className="highlight-yellow font-semibold">Đường lối đúng đắn</span>,
                    <span className="highlight-red font-semibold"> sự đoàn kết thống nhất của toàn dân tộc</span>,
                    sự lãnh đạo sáng suốt của Đảng là những nhân tố quyết định đến thắng lợi.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Đây là bài học quý báu cho công cuộc <span className="font-semibold">xây dựng và bảo vệ Tổ quốc</span> ngày nay.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-red-600 to-yellow-500 rounded-2xl p-8 shadow-2xl text-center animate-slide-up">
            <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
              "Không có gì quý hơn độc lập, tự do"
            </p>
            <p className="text-xl text-white mt-4 font-semibold">
              - Chủ tịch Hồ Chí Minh
            </p>
          </div>

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
    </div>
  );
}
