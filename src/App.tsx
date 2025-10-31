import { useState } from "react";
import { HomePage } from "./pages/HomePage";
import { Page2 } from "./pages/Page2";
import { Page3 } from "./pages/Page3";
import { Page4 } from "./pages/Page4";
import { Page5 } from "./pages/Page5";
import { Page6 } from "./pages/Page6";
import { Page7 } from "./pages/Page7";
import { Page8 } from "./pages/Page8";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    <HomePage key="home" onNext={() => setCurrentPage(1)} />,
    <Page2
      key="page2"
      onNext={() => setCurrentPage(2)}
      onPrev={() => setCurrentPage(0)}
    />,
    <Page3
      key="page3"
      onNext={() => setCurrentPage(3)}
      onPrev={() => setCurrentPage(1)}
    />,
    <Page4
      key="page4"
      onNext={() => setCurrentPage(4)}
      onPrev={() => setCurrentPage(2)}
    />,
    <Page5
      key="page5"
      onNext={() => setCurrentPage(5)}
      onPrev={() => setCurrentPage(3)}
    />,
    <Page6
      key="page6"
      onNext={() => setCurrentPage(6)}
      onPrev={() => setCurrentPage(4)}
    />,
    <Page8
      key="page7"
      onNext={() => setCurrentPage(7)}
      onPrev={() => setCurrentPage(5)}
    />,
    <Page7 key="page8" onPrev={() => setCurrentPage(6)} />,
  ];

  return (
    <div className="relative">
      {pages[currentPage]}

      {currentPage > 0 && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-2xl px-6 py-3 flex items-center gap-4 border border-gray-200">
            <button
              onClick={() => setCurrentPage(0)}
              className="p-2 hover:bg-blue-100 rounded-full transition-colors"
              title="Về trang chủ"
            >
              <Home size={20} className="text-[#0a3d62]" />
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  currentPage > 0 && setCurrentPage(currentPage - 1)
                }
                disabled={currentPage === 0}
                className={`p-2 rounded-full transition-colors ${
                  currentPage === 0
                    ? "text-gray-400 cursor-not-allowed"
                    : "hover:bg-blue-100 text-[#0a3d62]"
                }`}
                title="Trang trước"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex items-center gap-2">
                {pages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentPage
                        ? "bg-[#0a3d62] w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    title={`Trang ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() =>
                  currentPage < pages.length - 1 &&
                  setCurrentPage(currentPage + 1)
                }
                disabled={currentPage === pages.length - 1}
                className={`p-2 rounded-full transition-colors ${
                  currentPage === pages.length - 1
                    ? "text-gray-400 cursor-not-allowed"
                    : "hover:bg-blue-100 text-[#0a3d62]"
                }`}
                title="Trang sau"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <span className="text-sm font-semibold text-gray-600">
              {currentPage + 1} / {pages.length}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
