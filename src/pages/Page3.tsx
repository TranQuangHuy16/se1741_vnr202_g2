import { Swords, Factory, BookOpen } from "lucide-react";
import { useState } from "react";
import { SpeechButton } from "../components/SpeechButton";

interface Page3Props {
  onNext: () => void;
  onPrev: () => void;
}

interface EventDetail {
  title: string;
  year: string;
  description: string;
  analysis: string;
}

export function Page3({ onNext, onPrev }: Page3Props) {
  const [selectedEvent, setSelectedEvent] = useState<EventDetail | null>(null);

  const northEvents: EventDetail[] = [
    {
      title: "Xây dựng Chủ nghĩa Xã hội",
      year: "1961-1965",
      description: "Phát triển kinh tế, công nghiệp hóa miền Bắc",
      analysis:
        "Miền Bắc tập trung xây dựng cơ sở vật chất kỹ thuật của chủ nghĩa xã hội, phát triển công nghiệp và nông nghiệp. Thực hiện kế hoạch 5 năm lần thứ nhất (1961-1965), xây dựng các cơ sở công nghiệp nặng, phát triển giao thông vận tải. Đây là nền tảng vững chắc để miền Bắc trở thành hậu phương lớn, cung cấp sức mạnh vật chất và tinh thần cho cuộc kháng chiến chống Mỹ cứu nước.",
    },
    {
      title: "Chi viện cho miền Nam",
      year: "1961-1965",
      description: "Vận chuyển vũ khí, lương thực, cán bộ",
      analysis:
        "Miền Bắc mở đường Trường Sơn huyền thoại, vận chuyển vũ khí, lương thực, trang bị và cán bộ vào miền Nam qua đường biển và đường bộ. Đào tạo hàng chục vạn cán bộ quân sự và chính trị để hỗ trợ chiến trường miền Nam. Sự chi viện này thể hiện tinh thần đại đoàn kết dân tộc, hai miền một nhà, cùng chung mục tiêu giải phóng và thống nhất Tổ quốc.",
    },
    {
      title: "Đào tạo cán bộ",
      year: "1961-1965",
      description: "Đào tạo quân sự, chính trị cho cán bộ miền Nam",
      analysis:
        "Các trường quân sự, chính trị ở miền Bắc đào tạo hàng vạn cán bộ có trình độ cao về quân sự và chính trị. Họ được trang bị kiến thức về chiến thuật du kích, công tác vận động quần chúng, xây dựng chính quyền cách mạng. Những cán bộ này sau khi vào Nam đã trở thành xương sống của các phong trào đấu tranh, góp phần quan trọng vào thắng lợi cuối cùng.",
    },
  ];

  const southEvents: EventDetail[] = [
    {
      title: "Phong trào Đồng Khởi",
      year: "1960",
      description: "Khởi nghĩa vũ trang, thiết lập chính quyền cách mạng",
      analysis:
        "Phong trào Đồng Khởi bùng nổ tại Bến Tre vào đêm 17/1/1960 đánh dấu bước ngoặt trong cuộc đấu tranh của nhân dân miền Nam. Quần chúng nổi dậy đập tan bộ máy cai trị của địch, thiết lập chính quyền cách mạng ở cơ sở. Phong trào nhanh chóng lan rộng ra các tỉnh đồng bằng sông Cửu Long và Nam Bộ, tạo thế và lực mới cho cách mạng miền Nam.",
    },
    {
      title: "Thành lập Mặt trận Dân tộc Giải phóng",
      year: "1960",
      description: "Thống nhất các lực lượng yêu nước",
      analysis:
        "Ngày 20/12/1960, Mặt trận Dân tộc Giải phóng miền Nam Việt Nam được thành lập, tập hợp mọi tầng lớp nhân dân, các đảng phái yêu nước. Đây là tổ chức chính trị rộng rãi, thống nhất mọi lực lượng đấu tranh chống Mỹ - Diệm. Mặt trận đã lãnh đạo cuộc đấu tranh kết hợp chính trị và vũ trang, tạo nên sức mạnh tổng hợp của nhân dân miền Nam.",
    },
    {
      title: "Chiến thắng Ấp Bắc",
      year: "1963",
      description: "Lần đầu đánh bại chiến thuật trực thăng",
      analysis:
        'Ngày 2/1/1963, quân và dân ta giành thắng lợi vang dội tại Ấp Bắc (Mỹ Tho), tiêu diệt và bắt sống nhiều tên địch, bắn rơi nhiều máy bay trực thăng Mỹ. Đây là lần đầu tiên bộ đội và dân quân du kích miền Nam đánh bại chiến thuật "vận động chiến bằng trực thăng" của Mỹ. Thắng lợi Ấp Bắc chứng minh sự sáng tạo trong nghệ thuật quân sự, khẳng định tinh thần chiến đấu dũng cảm của quân dân miền Nam.',
    },
  ];

  const pageContent = `
    Giai đoạn chiến tranh đặc biệt từ 1961 đến 1965 là thời kỳ Mỹ đưa quân cố vấn và vũ khí hiện đại vào miền Nam để thực hiện "chiến lược chiến tranh đặc biệt", dùng người Việt đánh người Việt.

    Miền Bắc đã sáng tạo vận dụng đường lối Đại hội Ba bằng cách tập trung xây dựng chủ nghĩa xã hội, phát triển kinh tế công nghiệp, đồng thời mở đường Trường Sơn chi viện sức người sức của cho miền Nam. Công cuộc xây dựng miền Bắc tạo ra nguồn lực vật chất và tinh thần hùng hậu.

    Miền Nam đã kết hợp đấu tranh chính trị và vũ trang, phát động phong trào Đồng Khởi năm 1960, thành lập Mặt trận Dân tộc Giải phóng miền Nam, và giành thắng lợi quan trọng tại Ấp Bắc năm 1963. Những chiến thắng này chứng tỏ sự sáng tạo trong vận dụng đường lối, kết hợp sức mạnh của hai miền.
  `;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0a3d62] mb-4">
            Sự sáng tạo trong kháng chiến
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Chiến tranh đặc biệt (1961-1965)
          </p>
          <p className="text-lg text-gray-500">
            CQ6.3: Vận dụng sáng tạo đường lối trong thực tiễn
          </p>
        </div>

        <div className="mb-8 flex justify-center animate-slide-up">
          <SpeechButton text={pageContent} />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 shadow-xl border-t-4 border-red-600">
            <div className="flex items-center gap-3 mb-6">
              <Factory className="text-red-700" size={36} />
              <h2 className="text-2xl font-bold text-red-800">
                Miền Bắc - Hậu phương
              </h2>
            </div>

            <div className="space-y-4">
              {northEvents.map((event, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedEvent(event)}
                  className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl hover:bg-yellow-50 transition-all duration-300 cursor-pointer glow-hover"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {event.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    {event.title}
                  </h3>
                  <p className="text-gray-600">{event.description}</p>
                  <p className="text-blue-600 text-sm mt-2 font-medium">
                    Nhấn để xem phân tích chi tiết
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 shadow-xl border-t-4 border-blue-600">
            <div className="flex items-center gap-3 mb-6">
              <Swords className="text-blue-700" size={36} />
              <h2 className="text-2xl font-bold text-blue-800">
                Miền Nam - Tiền tuyến
              </h2>
            </div>

            <div className="space-y-4">
              {southEvents.map((event, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedEvent(event)}
                  className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl hover:bg-yellow-50 transition-all duration-300 cursor-pointer glow-hover"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {event.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    {event.title}
                  </h3>
                  <p className="text-gray-600">{event.description}</p>
                  <p className="text-blue-600 text-sm mt-2 font-medium">
                    Nhấn để xem phân tích chi tiết
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {selectedEvent && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-gradient-to-r from-yellow-400 to-yellow-500 p-6 rounded-t-2xl">
                <div className="flex items-start gap-3 mb-2">
                  <BookOpen
                    className="text-yellow-900 flex-shrink-0 mt-1"
                    size={28}
                  />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-yellow-900 mb-1">
                      {selectedEvent.title}
                    </h2>
                    <p className="text-yellow-800 font-semibold">
                      {selectedEvent.year}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="text-yellow-900 hover:text-yellow-950 font-bold text-2xl"
                  >
                    ×
                  </button>
                </div>
                <SpeechButton text={selectedEvent.analysis} className="mt-4" />
              </div>

              <div className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  <span className="font-semibold text-[#0a3d62]">Tóm tắt:</span>{" "}
                  {selectedEvent.description}
                </p>
                <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-xl p-6 border-l-4 border-yellow-500">
                  <h3 className="text-xl font-bold text-[#0a3d62] mb-4 flex items-center gap-2">
                    <span className="text-2xl">📖</span>
                    Phân tích chi tiết
                  </h3>
                  <p className="text-lg text-gray-800 leading-relaxed">
                    {selectedEvent.analysis}
                  </p>
                </div>
              </div>
            </div>
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
