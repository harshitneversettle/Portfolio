import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json({ reply: "Message is required" });
    }

    console.log("📩 Message:", message);

    // Try your custom model first
    const models = [
      {
        url: "https://api-inference.huggingface.co/models/Harshit110/harshit-ai-v2",
        format: "legacy"
      },
      {
        url: "https://api-inference.huggingface.co/models/Harshit110/harshit-ai",
        format: "legacy"
      },
      {
        url: "https://api-inference.huggingface.co/models/microsoft/DialoGPT-small",
        format: "legacy"
      }
    ];

    for (const modelConfig of models) {
      try {
        console.log(`🔄 Trying: ${modelConfig.url}`);
        
        const response = await fetch(modelConfig.url, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.HUGGING_FACE_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            inputs: `User: ${message}\nHarshit:`,
            parameters: {
              max_new_tokens: 100,
              temperature: 0.8,
              top_p: 0.9,
              return_full_text: false
            },
            options: {
              wait_for_model: true,
              use_cache: false
            }
          }),
        });

        const raw = await response.text();
        console.log(`📥 Status: ${response.status}`);

        if (!response.ok) {
          console.error(`❌ Error from ${modelConfig.url}:`, raw);
          
          // Skip to next model
          if (response.status === 503) {
            console.log("⏳ Model loading, trying next...");
            continue;
          }
          
          if (response.status === 404 || response.status === 410) {
            console.log("🚫 Model not available, trying next...");
            continue;
          }
          
          continue;
        }

        const data = JSON.parse(raw);
        let reply = Array.isArray(data) ? data[0]?.generated_text : data?.generated_text;

        if (reply) {
          // Clean the response
          reply = reply
            .replace(`User: ${message}`, '')
            .replace('Harshit:', '')
            .replace('User:', '')
            .trim();
          
          // Take first meaningful line
          const lines = reply.split('\n').filter(line => line.trim().length > 0);
          reply = lines[0] || reply;

          console.log("✅ Reply:", reply);
          return NextResponse.json({ reply });
        }

      } catch (err) {
        console.error(`❌ Exception with model:`, err.message);
        continue;
      }
    }

    // All models failed - use personality-based fallback
    const personalityResponses = {
      "hi": "Hey! I'm Harshit, a Solana developer building DeFi protocols. What brings you here?",
      "hello": "Hello! I'm Harshit Yadav - BTech student and blockchain enthusiast. Ask me anything!",
      "who are you": "I'm Harshit! BTech IT student at MITS Gwalior, Solana Turbine graduate, building decentralized apps with Rust and Anchor.",
      "what do you do": "I'm a full-stack dev specializing in Web3. Building a DeFi lending protocol on Solana right now!",
      "tell me about": "I've built Mentors Connect (AI chatbot), a DeFi lending protocol on Solana, and various Web2 apps. I code late nights and love blockchain!",
      "projects": "My projects include: Mentors Connect with AI chatbot, DeFi lending/borrowing protocol on Solana, Restaurant Ecommerce site, and automation tools.",
      "skills": "JavaScript, TypeScript, Python, Rust, React, Node.js, Solana, Anchor framework, MongoDB, Tailwind CSS - I'm full-stack + Web3!",
      "solana": "Solana is amazing! I'm a Turbine graduate building DeFi protocols with Rust and Anchor. The speed and low fees make it perfect for real-world apps.",
      "blockchain": "I'm deep into blockchain, especially Solana. Building a decentralized lending protocol with smart contracts in Rust. Web3 is the future!"
    };

    // Check for keyword matches
    const lowerMessage = message.toLowerCase();
    for (const [keyword, response] of Object.entries(personalityResponses)) {
      if (lowerMessage.includes(keyword)) {
        return NextResponse.json({ reply: response });
      }
    }

    // Default fallback
    return NextResponse.json({
      reply: "I'm Harshit - a Web3 developer and Solana enthusiast! Ask me about my projects, blockchain development, or tech skills. What would you like to know?"
    });

  } catch (err) {
    console.error("❌ SERVER ERROR:", err);
    return NextResponse.json({
      reply: "Oops! Something went wrong. But hey, I'm Harshit - ask me about Solana, DeFi, or my projects!"
    });
  }
}
