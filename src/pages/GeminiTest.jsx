import { useEffect, useState } from "react";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export default function GeminiTest() {
  const [text, setText] = useState("");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const pertanyaan = "Seberapa banyak kamu bisa membuat text?";

  async function handleAsk() {
    setLoading(true);
    setText("");

    try {
      const response = await ai.models.generateContent({
        model: "gemini-1.5-flash",
        contents: input,
      });
      const responseChat = response.text;
      setText(responseChat);
      console.log(responseChat);
    } catch (error) {
      console.error(
        "Terjadi error saat mengakses Gemini:",
        error.message || error,
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-lg font-bold mb-2">Tanya ke Gemini!</h2>

      <input
        type="text"
        className="border p-2 w-full rounded mb-2"
        placeholder="Tulis pertanyaan kamu..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={handleAsk}
        disabled={loading}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? "Mengambil..." : "Tanyakan"}
      </button>

      <div className="mt-4 bg-gray-100 p-4 rounded">
        <p className="text-sm whitespace-pre-wrap">{text}</p>
      </div>
    </div>
  );
}
