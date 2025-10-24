import { Volume2, VolumeX } from "lucide-react";
import { useState } from "react";

interface SpeechButtonProps {
  text: string;
  className?: string;
}

export function SpeechButton({ text, className = "" }: SpeechButtonProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const handleSpeak = async () => {
    // Nếu đang phát, dừng lại ngay
    if (isSpeaking && audio) {
      audio.pause();
      audio.currentTime = 0;
      setIsSpeaking(false);
      return;
    }

    try {
      setIsSpeaking(true);

      // Nếu có audio đang chạy, dừng lại trước
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }

      // Gọi API FPT.AI để tạo file âm thanh
      const res = await fetch("https://api.fpt.ai/hmi/tts/v5", {
        method: "POST",
        headers: {
          "api-key": "fQSUt5jG6KLQzQz91gcCiLrJttMiPIDm", // 🔑 API key
          speed: "1.0",
          voice: "banmai", // có thể đổi: banmai, myan, lannhi, leminh, minhquang...
        },
        body: text,
      });

      const data = await res.json();
      const audioUrl = data.async;

      // Chờ FPT xử lý (thường mất 3–5 giây)
      await new Promise((r) => setTimeout(r, 5000));

      // Tạo audio mới
      const newAudio = new Audio(audioUrl);

      newAudio.onended = () => {
        setIsSpeaking(false);
      };

      newAudio.onerror = (err) => {
        console.error("Không phát được audio:", err);
        setIsSpeaking(false);
      };

      // Lưu lại để có thể dừng sau này
      setAudio(newAudio);

      await newAudio.play();
    } catch (error) {
      console.error("Lỗi khi phát audio:", error);
      setIsSpeaking(false);
    }
  };

  return (
    <button
      onClick={handleSpeak}
      className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg ${className}`}
    >
      {isSpeaking ? (
        <>
          <VolumeX size={20} />
          <span>Dừng đọc</span>
        </>
      ) : (
        <>
          <Volume2 size={20} />
          <span>Nghe thuyết trình</span>
        </>
      )}
    </button>
  );
}
