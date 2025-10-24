import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.text({ type: "*/*" }));

app.post("/api/tts", async (req, res) => {
  try {
    const response = await fetch("https://api.fpt.ai/hmi/tts/v5", {
      method: "POST",
      headers: {
        "api-key": "vnr_g2", // 🔑 API key của bạn
        speed: "1.0",
        voice: "banmai",
      },
      body: req.body,
    });

    const data = await response.json();
    const audioUrl = data.async;

    // Chờ 5 giây cho FPT tạo file xong
    await new Promise((r) => setTimeout(r, 5000));

    res.json({ audioUrl });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3001, () =>
  console.log("Proxy server chạy ở http://localhost:3001")
);
