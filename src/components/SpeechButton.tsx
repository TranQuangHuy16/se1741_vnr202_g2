// import { Volume2, VolumeX } from "lucide-react";
// import { useState, useEffect } from "react";

// interface SpeechButtonProps {
//   text: string;
//   className?: string;
// }

// export function SpeechButton({ text, className = "" }: SpeechButtonProps) {
//   const [isSpeaking, setIsSpeaking] = useState(false);
//   const [synthesis, setSynthesis] = useState<SpeechSynthesis | null>(null);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       setSynthesis(window.speechSynthesis);
//     }
//   }, []);

//   const handleSpeak = () => {
//     if (!synthesis) return;

//     if (isSpeaking) {
//       synthesis.cancel();
//       setIsSpeaking(false);
//       return;
//     }

//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = "vi-VN";
//     utterance.rate = 1.0;
//     utterance.pitch = 1;

//     // Try to find and set Vietnamese voice
//     const voices = synthesis.getVoices();
//     const vietnameseVoice = voices.find(
//       (voice) => voice.lang.includes("vi-VN") || voice.lang.includes("vi")
//     );
//     if (vietnameseVoice) {
//       utterance.voice = vietnameseVoice;
//     }

//     utterance.onstart = () => setIsSpeaking(true);
//     utterance.onend = () => setIsSpeaking(false);
//     utterance.onerror = () => setIsSpeaking(false);

//     synthesis.speak(utterance);
//   };

//   return (
//     <button
//       onClick={handleSpeak}
//       className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg ${className}`}
//     >
//       {isSpeaking ? (
//         <>
//           <VolumeX size={20} />
//           <span>Dừng đọc</span>
//         </>
//       ) : (
//         <>
//           <Volume2 size={20} />
//           <span>Nghe thuyết trình</span>
//         </>
//       )}
//     </button>
//   );
// }
import { Volume2, VolumeX } from "lucide-react";
import { useState } from "react";

interface SpeechButtonProps {
  text: string;
  className?: string;
}

export function SpeechButton({ text, className = "" }: SpeechButtonProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  // Hàm chờ file audio sẵn sàng từ FPT
  const waitForAudioReady = async (url: string, timeout = 15000) => {
    const start = Date.now();
    while (Date.now() - start < timeout) {
      try {
        const res = await fetch(url, { method: "HEAD" });
        if (res.ok) return true;
      } catch (_) {
        // chưa sẵn sàng, thử lại
      }
      await new Promise((r) => setTimeout(r, 1000));
    }
    return false;
  };

  const handleSpeak = async () => {
    // Nếu đang phát → dừng
    if (isSpeaking && audio) {
      audio.pause();
      audio.currentTime = 0;
      setIsSpeaking(false);
      return;
    }

    try {
      setIsSpeaking(true);

      // Nếu có audio đang chạy → dừng lại
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }

      // Gọi FPT API
      const res = await fetch("https://api.fpt.ai/hmi/tts/v5", {
        method: "POST",
        headers: {
          "api-key": "fQSUt5jG6KLQzQz91gcCiLrJttMiPIDm",
          speed: "1.0",
          voice: "banmai", // banmai, lannhi, myan, leminh, minhquang
        },
        body: text,
      });

      const data = await res.json();
      const audioUrl = data.async;
      console.log("🔗 FPT audio link:", audioUrl);

      // Chờ file sẵn sàng (polling HEAD)
      const ready = await waitForAudioReady(audioUrl);
      if (!ready) {
        console.error("⛔ File chưa sẵn sàng hoặc bị lỗi.");
        setIsSpeaking(false);
        return;
      }

      // Phát âm thanh
      const newAudio = new Audio(audioUrl);
      setAudio(newAudio);

      newAudio.onended = () => setIsSpeaking(false);
      newAudio.onerror = (err) => {
        console.error("Lỗi phát audio:", err);
        setIsSpeaking(false);
      };

      await newAudio.play();
    } catch (err) {
      console.error("Lỗi khi gọi FPT.AI:", err);
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
