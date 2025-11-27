"use client";
import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";

interface Message {
  sender: "user" | "bot";
  text: string;
}

const linkifyText = (text: string) => {
  const hasMarkdownLinks = /\[([^\]]+)\]\(([^)]+)\)/g.test(text);
  
  if (hasMarkdownLinks) {
    return text;
  }
  
  
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, (url) => `[${url}](${url})`);
};



export default function ChatApp() {
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Hi! I'm Harshit AI. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesRef = useRef<HTMLDivElement>(null);

  const quickSearches = [
    { label: "Resume", query: "Show me your resume", icon: "" },
    { label: "Tech Stack", query: "What technologies do you work with?", icon: "" },
    { label: "Skills", query: "What are your skills?", icon: "" },
    { label: "Projects", query: "Tell me about your projects", icon: "" },
    { label: "Connections", query: "How to connect with you", icon: "" },
    { label: "Tree on main page ? ", query: "Why Bargad tree on main nav section ??", icon: "" },

  ];

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async (messageText?: string) => {
    const textToSend = messageText || input.trim();
    if (!textToSend || loading) return;

    if (!messageText) {
      setInput("");
    }
    
    setMessages(prev => [...prev, { sender: "user", text: textToSend }]);
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: textToSend }),
      });

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        console.error("Non-JSON response received:", text.substring(0, 200));
        throw new Error("Server returned an invalid response format");
      }

      const data = await response.json();

      if (data.success) {
        setMessages(prev => [...prev, { sender: "bot", text: data.response }]);
      } else {
        setMessages(prev => [...prev, { 
          sender: "bot", 
          text: data.error || "Sorry, I couldn't process that request. Please try again." 
        }]);
      }
    } catch (error: any) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { 
        sender: "bot", 
        text: `Connection error: ${error.message || "Unable to reach the server. Please check your connection."}` 
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleQuickSearch = (query: string) => {
    sendMessage(query);
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-8 bg-zinc-950">
      <div className="flex h-[85vh] max-w-5xl w-full gap-4">
        
        <div className="w-64 bg-zinc-900 rounded-2xl border border-zinc-800/50 p-4 flex flex-col gap-3">
          <div className="mb-2">
            <h2 className="text-xl font-semibold text-white mb-1">Quick Access</h2>
            <p className="text-md text-zinc-400">Explore key information</p>
          </div>
          
          <div className="flex flex-col gap-2">
            {quickSearches.map((search, idx) => (
              <button
                key={idx}
                onClick={() => handleQuickSearch(search.query)}
                disabled={loading}
                className="flex items-center gap-3 px-4 py-3 text-left bg-zinc-800/60 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700/50 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:border-[#0eac78]/30 group"
              >
                <span className="text-2xl">{search.icon}</span>
                <span className="text-md font-medium">{search.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden border border-zinc-800/50">
          
          <header className="flex items-center justify-between px-6 py-5 bg-gradient-to-r from-zinc-900 to-zinc-900/95 border-b border-zinc-800/50 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0eac78] to-[#0c8f63] flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-[#0eac78]/20">
                HA
              </div>
              <div>
                <h1 className="text-2xl font-semibold tracking-tight text-white">
                  Harshit AI
                </h1>
                <p className="text-sm text-zinc-400 font-normal">
                  Always here to help
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#0eac78] animate-pulse"></div>
              <span className="text-sm text-zinc-400 font-normal">Online</span>
            </div>
          </header>
          
          <div
            ref={messagesRef}
            className="flex-1 px-6 py-6 space-y-4 overflow-y-auto bg-zinc-950 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent"
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[75%] px-5 py-3.5 rounded-2xl text-base leading-relaxed shadow-sm ${
                    message.sender === "user"
                      ? "bg-[#0eac78] text-white rounded-br-md font-normal"
                      : "bg-zinc-800/80 text-zinc-100 rounded-bl-md font-normal border border-zinc-700/50"
                  }`}
                >
                  {message.sender === "bot" ? (
                    <ReactMarkdown
  components={{
    h1: ({ children }) => (
      <h1 className="text-xl font-bold mt-4 mb-3 text-white first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-lg font-semibold mt-4 mb-2 text-white first:mt-0">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-base font-semibold mt-3 mb-1.5 text-white first:mt-0">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="mb-2 last:mb-0 text-zinc-100 leading-relaxed whitespace-pre-line">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-outside mb-3 space-y-2 text-zinc-100 ml-5">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-outside mb-3 space-y-2 text-zinc-100 ml-5">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-zinc-100 leading-relaxed mb-2">
        {children}
      </li>
    ),
    code: ({ className, children, ...props }: any) => {
      const isInline = !className;
      return isInline ? (
        <code className="bg-zinc-900/60 text-[#0eac78] px-2 py-1 rounded text-sm font-mono">
          {children}
        </code>
      ) : (
        <pre className="bg-zinc-900/60 p-4 rounded-lg my-3 overflow-x-auto">
          <code className="text-zinc-200 text-sm font-mono block">
            {children}
          </code>
        </pre>
      );
    },
    strong: ({ children }) => (
      <strong className="font-semibold text-white">
        {children}
      </strong>
    ),
    em: ({ children }) => (
      <em className="italic text-zinc-200">
        {children}
      </em>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#0eac78] pl-4 py-2 my-3 text-zinc-300 italic">
        {children}
      </blockquote>
    ),
    a: ({ children, href }) => (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-[#0eac78] hover:text-[#0c8f63] underline decoration-2 underline-offset-2 transition-colors break-all"
      >
        {children || href}
      </a>
    ),
    br: () => <br className="block my-1" />,
  }}
>
  {linkifyText(message.text)}
</ReactMarkdown>

                  ) : (
                    <span>{message.text}</span>
                  )}
                </div>
              </div>
            ))}
            
            {loading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800/80 border border-zinc-700/50 text-zinc-100 px-5 py-3.5 rounded-2xl rounded-bl-md shadow-sm">
                  <div className="flex gap-1.5 items-center">
                    <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
                    <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></span>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="px-6 py-5 bg-zinc-900 border-t border-zinc-800/50">
            <div className="flex gap-3 items-end">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                className="flex-1 resize-none px-4 py-3.5 rounded-xl text-base font-normal text-white bg-zinc-800/80 border border-zinc-700/50 focus:outline-none focus:ring-2 focus:ring-[#0eac78]/50 focus:border-[#0eac78]/50 transition-all placeholder:text-zinc-500 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Type your message here..."
                rows={1}
                disabled={loading}
                maxLength={500}
              />
              <button
                onClick={() => sendMessage()}
                className="px-7 py-3.5 rounded-xl text-base font-medium bg-[#0eac78] text-white hover:bg-[#0c8f63] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#0eac78] disabled:active:scale-100 min-w-[90px] shadow-lg shadow-[#0eac78]/20"
                disabled={loading || !input.trim()}
                aria-label="Send message"
              >
                {loading ? "Sending" : "Send"}
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
