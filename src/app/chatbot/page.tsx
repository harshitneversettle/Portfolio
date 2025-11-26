import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";

const brainPath = path.join(process.cwd(), "brain.txt");
const brain = fs.readFileSync(brainPath, "utf8");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "models/gemini-pro" });

export async function POST(req) {
  const { message } = await req.json();

  const prompt = `
You are Harshit AI, a personal assistant.
Respond ONLY using the data below:

${brain}

User question: ${message}
`;

  try {
    const result = await model.generateContent(prompt);
    const response = result.response.text();
    return Response.json({ reply: response });
  } catch (error) {
    return Response.json({ reply: "AI is currently unavailable." });
  }
}
