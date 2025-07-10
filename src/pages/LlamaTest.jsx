import { useState } from "react";

export default function LlamaTest() {
  const [text, setText] = useState("");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleAsk() {
    if (!input.trim()) return;
    setLoading(true);
    setText("");

    try {
      const res = await fetch(import.meta.env.VITE_URL_API_ASKK_TO_LLAMA, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await res.json();
      setText(data.response);
      console.log("LLM response:", data.response);
    } catch (error) {
      console.error("Gagal mengakses API:", error.message || error);
      setText("Gagal menghubungi server.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-lg font-bold mb-2">Tanya ke Llama!</h2>

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

      <div className="mt-4 bg-gray-100 p-4 rounded min-h-[100px]">
        <p className="text-sm whitespace-pre-wrap">{text}</p>
      </div>
    </div>
  );
}
