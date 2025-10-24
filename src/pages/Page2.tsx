import { MapPin, Target, Flag } from 'lucide-react';
import { SpeechButton } from '../components/SpeechButton';

interface Page2Props {
  onNext: () => void;
  onPrev: () => void;
}

export function Page2({ onNext, onPrev }: Page2Props) {
  const content = `
    Đại hội đại biểu toàn quốc lần thứ III của Đảng (tháng 9/1960) là mốc son quan trọng trong lịch sử cách mạng Việt Nam.

    Bối cảnh lịch sử từ 1954 đến 1960: Sau Hiệp định Genève, đất nước tạm thời bị chia cắt làm hai miền. Miền Bắc được hoàn toàn giải phóng, bước vào thời kỳ quá độ lên chủ nghĩa xã hội. Miền Nam vẫn nằm dưới ách thống trị của đế quốc Mỹ và chính quyền Ngô Đình Diệm, nhân dân chịu áp bức nặng nề.

    Nội dung cốt lõi của đường lối Đại hội Ba bao gồm hai nhiệm vụ chiến lược: Thứ nhất, tiến hành cách mạng xã hội chủ nghĩa ở miền Bắc, xây dựng miền Bắc thành căn cứ địa vững chắc cho cách mạng cả nước. Thứ hai, giải phóng miền Nam, thống nhất đất nước, hoàn thành độc lập dân tộc và thống nhất đất nước.

    Vai trò của mỗi miền: Miền Bắc là trung tâm của cách mạng xã hội chủ nghĩa, là hậu phương lớn, là căn cứ địa vững chắc cho cách mạng cả nước. Miền Nam là tiền tuyến của cách mạng dân tộc dân chủ nhân dân, đấu tranh trực tiếp chống đế quốc Mỹ và tay sai Ngô Đình Diệm.
  `;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0a3d62] mb-4">
            Đường lối Đại hội III (1960)
          </h1>
          <p className="text-xl text-gray-600">CQ6.1: Phân tích nội dung cốt lõi</p>
        </div>

        <div className="mb-8 flex justify-center animate-slide-up">
          <SpeechButton text={content} />
        </div>

        <div className="space-y-8 animate-slide-up">
          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl p-8 shadow-lg border-l-8 border-yellow-500">
            <div className="flex items-start gap-4">
              <MapPin className="text-yellow-700 flex-shrink-0 mt-1" size={32} />
              <div>
                <h2 className="text-2xl font-bold text-[#0a3d62] mb-4">
                  1. Bối cảnh lịch sử (1954-1960)
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  Sau <span className="highlight-yellow font-semibold">Hiệp định Genève (1954)</span>,
                  đất nước tạm thời bị chia cắt làm hai miền theo vĩ tuyến 17.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  <span className="font-semibold">Miền Bắc:</span> Được hoàn toàn giải phóng,
                  bước vào thời kỳ quá độ lên chủ nghĩa xã hội.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="font-semibold">Miền Nam:</span> Vẫn nằm dưới ách thống trị
                  của đế quốc Mỹ và chính quyền Ngô Đình Diệm, nhân dân chịu áp bức nặng nề.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <Target className="text-red-600 flex-shrink-0 mt-1" size={32} />
              <h2 className="text-2xl font-bold text-[#0a3d62]">
                2. Nội dung đường lối: Hai nhiệm vụ chiến lược
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border-l-4 border-red-600 glow-hover transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-red-800">Nhiệm vụ miền Bắc</h3>
                </div>
                <p className="text-lg text-gray-800 leading-relaxed">
                  <span className="highlight-red font-semibold">Tiến hành cách mạng xã hội chủ nghĩa</span>,
                  xây dựng miền Bắc thành <span className="font-semibold">căn cứ địa vững chắc</span> cho
                  cách mạng cả nước
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-600 glow-hover transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-blue-800">Nhiệm vụ miền Nam</h3>
                </div>
                <p className="text-lg text-gray-800 leading-relaxed">
                  <span className="highlight-yellow font-semibold">Giải phóng miền Nam</span>,
                  thống nhất đất nước, hoàn thành <span className="font-semibold">độc lập dân tộc
                  và thống nhất đất nước</span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <Flag className="text-blue-800 flex-shrink-0 mt-1" size={32} />
              <h2 className="text-2xl font-bold text-[#0a3d62]">
                3. Vai trò của mỗi miền
              </h2>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-red-700 mb-3">Miền Bắc</h3>
                <ul className="space-y-2 text-lg text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold mt-1">•</span>
                    <span><span className="highlight-red font-semibold">Trung tâm cách mạng xã hội chủ nghĩa</span></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold mt-1">•</span>
                    <span>Hậu phương lớn của cách mạng cả nước</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold mt-1">•</span>
                    <span>Căn cứ địa vững chắc về kinh tế, chính trị, quân sự</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-blue-700 mb-3">Miền Nam</h3>
                <ul className="space-y-2 text-lg text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span><span className="highlight-yellow font-semibold">Tiền tuyến cách mạng dân tộc dân chủ nhân dân</span></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>Đấu tranh trực tiếp chống đế quốc Mỹ và tay sai</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>Kết hợp đấu tranh chính trị và vũ trang</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
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
  );
}
