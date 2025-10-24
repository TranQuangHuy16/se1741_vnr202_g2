import { ChevronRight, Map } from 'lucide-react';

interface HomePageProps {
  onNext: () => void;
}

export function HomePage({ onNext }: HomePageProps) {
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

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 mb-8 animate-slide-up">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            Sau Hiệp định Genève 1954, đất nước ta tạm thời bị chia cắt làm hai miền,
            một vấn đề lịch sử đau thương nhưng cũng tạo nên bước ngoặt quan trọng trong
            cuộc đấu tranh giải phóng dân tộc.
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            <span className="highlight-yellow font-semibold">Làm thế nào để hai miền Nam - Bắc cùng một trái tim,
            cùng hướng tới mục tiêu thống nhất đất nước?</span>
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            <span className="highlight-red font-semibold">Đường lối nào đã dẫn dắt dân tộc ta vượt qua
            những thử thách khốc liệt để giành thắng lợi vào năm 1975?</span>
          </p>
        </div>

        <button
          onClick={onNext}
          className="group bg-gradient-to-r from-[#0a3d62] to-blue-700 text-white px-8 py-4 rounded-full text-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto"
        >
          Bắt đầu tìm hiểu
          <ChevronRight className="group-hover:translate-x-1 transition-transform" size={24} />
        </button>
      </div>
    </div>
  );
}
