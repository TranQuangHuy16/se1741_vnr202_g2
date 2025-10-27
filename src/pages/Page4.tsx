import { Trophy, Calendar } from "lucide-react";
import { useState } from "react";
import { SpeechButton } from "../components/SpeechButton";

interface Page4Props {
  onNext: () => void;
  onPrev: () => void;
}

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  detail: string;
}

export function Page4({ onNext, onPrev }: Page4Props) {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(
    null
  );

  const timelineEvents: TimelineEvent[] = [
    {
      year: "1965",
      title: "Mỹ leo thang chiến tranh",
      description: "Mỹ đưa quân viễn chinh trực tiếp vào miền Nam",
      detail:
        'Tháng 3/1965, Mỹ đưa quân viễn chinh đầu tiên đổ bộ lên Đà Nẵng, đánh dấu bước leo thang nguy hiểm của chiến tranh. Mỹ chuyển sang chiến lược "chiến tranh cục bộ", dùng trực tiếp quân đội Mỹ để đánh chiếm và giữ đất, đồng thời ném bom miền Bắc ác liệt. Miền Bắc vừa chiến đấu vừa sản xuất, kiên cường chống Mỹ cứu nước. Miền Nam mở các chiến dịch lớn, tiêu diệt sinh lực địch, làm thất bại chiến lược "chiến tranh cục bộ" của Mỹ.',
    },
    {
      year: "1968",
      title: "Tổng tiến công Mậu Thân",
      description: "Cuộc tổng tiến công và nổi dậy Tết Mậu Thân",
      detail:
        'Tết Mậu Thân 1968, quân và dân ta đồng loạt tiến công vào các thành phố lớn, trong đó có Sài Gòn. Mặc dù chưa giành được thắng lợi quân sự hoàn toàn, nhưng Tổng tiến công Mậu Thân là bước ngoặt về chính trị và quân sự. Nó làm lung lay ý chí xâm lược của Mỹ, buộc Mỹ phải chuyển sang chiến lược "Việt Nam hóa chiến tranh", đồng thời mở Hội nghị Paris để tìm lối thoát. Đây là thắng lợi to lớn về chiến lược của cách mạng Việt Nam.',
    },
    {
      year: "1969-1972",
      title: "Việt Nam hóa chiến tranh",
      description: "Mỹ rút dần quân, dùng nguỵ quân chiến đấu",
      detail:
        'Giai đoạn này Mỹ thực hiện chiến lược "Việt Nam hóa chiến tranh", rút dần quân Mỹ về nước nhưng tăng cường vũ khí và viện trợ cho chính quyền Sài Gòn. Quân và dân ta tiếp tục chiến đấu kiên cường, giành nhiều thắng lợi trên các mặt trận. Miền Bắc vẫn vững vàng chi viện cho miền Nam. Đường Trường Sơn ngày càng được mở rộng và hiện đại hóa, vận chuyển hàng vạn tấn vũ khí, lương thực vào chiến trường.',
    },
    {
      year: "1973",
      title: "Hiệp định Paris",
      description: "Mỹ ký Hiệp định Paris, cam kết rút quân",
      detail:
        "Ngày 27/1/1973, Hiệp định Paris về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam được ký kết. Đây là thắng lợi vĩ đại của nhân dân ta, buộc Mỹ phải công nhận các quyền dân tộc cơ bản của nhân dân Việt Nam, rút hết quân và cố vấn quân sự Mỹ khỏi miền Nam. Tuy nhiên, chính quyền Sài Gòn vẫn còn tồn tại, nên cuộc đấu tranh vẫn tiếp tục để hoàn thành sự nghiệp giải phóng và thống nhất đất nước.",
    },
    {
      year: "1975",
      title: "Chiến dịch Hồ Chí Minh",
      description: "Giải phóng hoàn toàn miền Nam, thống nhất đất nước",
      detail:
        "Cuối năm 1974 và đầu năm 1975, thế và lực của ta càng mạnh mẽ. Ngày 26/3/1975, Huế được giải phóng, mở đầu cho Tổng tiến công chiến lược. Chiến dịch Hồ Chí Minh được phát động từ ngày 26/4 đến 30/4/1975, giải phóng hoàn toàn Sài Gòn và toàn bộ miền Nam. Đất nước thống nhất, kết thúc hơn 20 năm chia cắt, hoàn thành sự nghiệp giải phóng dân tộc và thống nhất Tổ quốc. Đây là chiến thắng vĩ đại của toàn dân tộc Việt Nam, khẳng định đường lối đúng đắn của Đảng.",
    },
  ];

  const pageContent = `
    Từ năm 1965 đến 1975 là giai đoạn cao trào của cuộc kháng chiến chống Mỹ cứu nước. Sự kết nối logic từ đường lối Đại hội Ba đến thắng lợi năm 1975 thể hiện rõ qua các giai đoạn.

    Giai đoạn 1965 đến 1968: Miền Bắc kiên cường chống chiến tranh phá hoại của Mỹ, vừa chiến đấu vừa sản xuất, vừa chi viện toàn diện cho miền Nam. Miền Nam đánh thắng chiến lược chiến tranh cục bộ của Mỹ, đỉnh cao là Tổng tiến công Mậu Thân 1968.

    Giai đoạn 1969 đến 1973: Quân và dân ta đánh thắng chiến lược Việt Nam hóa chiến tranh, buộc Mỹ phải ký Hiệp định Paris năm 1973, công nhận các quyền dân tộc cơ bản của nhân dân Việt Nam.

    Giai đoạn 1973 đến 1975: Sau khi Mỹ rút quân, ta tiếp tục đấu tranh chống chính quyền Sài Gòn, phát động Tổng tiến công và nổi dậy, đỉnh cao là Chiến dịch Hồ Chí Minh, giải phóng hoàn toàn miền Nam ngày 30 tháng 4 năm 1975, thống nhất đất nước.
  `;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0a3d62] mb-4">
            Từ sáng tạo đến thắng lợi
          </h1>
          <p className="text-xl text-gray-600 mb-2">Giai đoạn 1965-1975</p>
          {/* <p className="text-lg text-gray-500">Kết nối logic: CQ6.1 → CQ6.3 → CQ6.5</p> */}
        </div>

        <div className="mb-8 flex justify-center animate-slide-up">
          <SpeechButton text={pageContent} />
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl mb-8 animate-slide-up">
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="text-yellow-600" size={36} />
            <h2 className="text-2xl font-bold text-[#0a3d62]">
              Hành trình thắng lợi
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600"></div>

            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative pl-20 group">
                  <div className="absolute left-0 top-0">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                      <span className="text-white font-bold text-sm">
                        {event.year}
                      </span>
                    </div>
                  </div>

                  <div
                    onClick={() => setSelectedEvent(event)}
                    className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer glow-hover border-l-4 border-yellow-500"
                  >
                    <h3 className="text-xl font-bold text-[#0a3d62] mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-700 mb-2">{event.description}</p>
                    <div className="flex items-center gap-2 text-blue-600 text-sm font-medium">
                      <Calendar size={16} />
                      <span>Nhấn để xem thuyết trình chi tiết</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-2xl p-8 shadow-xl animate-slide-up">
          <h2 className="text-2xl font-bold text-[#0a3d62] mb-6 text-center">
            Kết nối logic của đường lối thắng lợi
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-red-500">
              <div className="text-center mb-4">
                <div className="inline-block bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-2">
                  1
                </div>
                {/* <h3 className="font-bold text-red-700">CQ6.1</h3> */}
              </div>
              <p className="text-gray-700 text-center">
                <span className="font-bold text-red-600">
                  Đường lối đúng đắn
                </span>{" "}
                từ Đại hội III xác định hai nhiệm vụ chiến lược
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-yellow-500">
              <div className="text-center mb-4">
                <div className="inline-block bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-2">
                  2
                </div>
                {/* <h3 className="font-bold text-yellow-700">CQ6.3</h3> */}
              </div>
              <p className="text-gray-700 text-center">
                <span className="font-bold text-yellow-600">
                  Vận dụng sáng tạo
                </span>{" "}
                trong thực tiễn, hai miền phối hợp chặt chẽ
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-blue-500">
              <div className="text-center mb-4">
                <div className="inline-block bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-2">
                  3
                </div>
                {/* <h3 className="font-bold text-blue-700">CQ6.5</h3> */}
              </div>
              <p className="text-gray-700 text-center">
                Dẫn đến{" "}
                <span className="font-bold text-blue-600">
                  thắng lợi vĩ đại
                </span>{" "}
                năm 1975, thống nhất đất nước
              </p>
            </div>
          </div>
        </div>

        {selectedEvent && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-gradient-to-r from-yellow-400 to-red-400 p-6 rounded-t-2xl">
                <div className="flex items-start gap-3 mb-2">
                  <Calendar
                    className="text-white flex-shrink-0 mt-1"
                    size={28}
                  />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-1">
                      {selectedEvent.title}
                    </h2>
                    <p className="text-white font-semibold">
                      {selectedEvent.year}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="text-white hover:text-gray-200 font-bold text-2xl"
                  >
                    ×
                  </button>
                </div>
                <SpeechButton text={selectedEvent.detail} className="mt-4" />
              </div>

              <div className="p-8">
                <div className="bg-gradient-to-br from-yellow-50 to-blue-50 rounded-xl p-6 border-l-4 border-red-500">
                  <h3 className="text-xl font-bold text-[#0a3d62] mb-4 flex items-center gap-2">
                    <span className="text-2xl">📜</span>
                    Thuyết trình chi tiết
                  </h3>
                  <p className="text-lg text-gray-800 leading-relaxed">
                    {selectedEvent.detail}
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
