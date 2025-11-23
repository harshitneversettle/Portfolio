"use client";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

export default function ChatApp() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I'm Harshit AI. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesRef.current?.scrollTo({
      top: messagesRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setMessages((m) => [...m, { sender: "user", text: input }]);
    
    try {
      const res = await axios.post("/api/chat", { message: input });
      setMessages((m) => [...m, { sender: "bot", text: res.data.reply }]);
    } catch (error) {
      console.error(error);
      setMessages((m) => [...m, { sender: "bot", text: "Server Error" }]);
    }
    
    setInput("");
    setLoading(false);
  };

  return (
    <div className="mt-15 text-wrap rounded-2lg">
      <div className="flex flex-col h-[75vh] max-w-md w-full mx-auto bg-zinc-900 rounded-lg text-white shadow-lg">
        <div className="flex items-center px-4 py-2 border-b border-zinc-800">
          <h2 className="text-3xl font-bold flex-1 font-['Fredoka']">
            Harshit's AI 🤖
          </h2>
        </div>
        
        <div
          ref={messagesRef}
          className="flex-1 p-4 space-y-2 overflow-y-auto bg-zinc-950"
        >
          {messages.map((m, i) => (
            <div
              key={i}
              className={`max-w-[80%] px-4 py-2 rounded-lg text-wrap ${
                m.sender === "user"
                  ? "ml-auto bg-[#0eac78] text-white"
                  : "mr-auto bg-zinc-800 text-zinc-100"
              }`}
            >
              {m.text}
            </div>
          ))}
        </div>
        
        <div className="p-4 flex gap-2 border-t border-zinc-800 bg-zinc-900">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 resize-none p-2 rounded text-white bg-zinc-800"
            placeholder="Type your message..."
            rows={1}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
          />
          <button
            onClick={sendMessage}
            className="bg-[#0EAC78] px-4 py-2 rounded font-bold"
            disabled={loading}
          >
            {loading ? "..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
}
