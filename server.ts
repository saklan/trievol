import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini Client
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY must be configured in the environment.");
  }
  const ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });

  // API Route for AI Consultations
  app.post("/api/advisor/consult", async (req, res) => {
    try {
      const { industry, currentPainPoints, customQuestion } = req.body;

      const systemInstruction = `You are the lead CEO Advisor, Brand Strategist, Marketing Strategist, and UX Consultant for Trievol.
Trievol is a high-end digital agency offering custom website design, development, strategic SEO, SLA maintenance, and interactive customer portals.
Your task is to provide an elite, deeply professional, and highly strategic consultative response that demonstrates how Trievol can solve the prospect's exact problems and unlock multi-million dollar business results.

Adopt an authoritative, highly confident, and advisory tone. Avoid generic hand-waving or template speak. Focus heavily on business metrics, trust multipliers, conversion mechanics, and commercial alignment.

Format your output in professional Markdown with clean headers, bullet points, and actionable takeaways. Use bold formatting and clean separation between sections.
Do NOT use sales-pitchy fluff, generic slogans, or cheesy emojis. Provide a highly precise strategic roadmap containing:
1. DIAGNOSIS: Specific insights on why their current setup (based on their industry and pain points) is bleeding high-ticket leads and destroying trust.
2. RE-POSITIONING STRATEGY: How to frame their brand credibility, visual authority, and business value.
3. TRIEVOL SOLUTION MAP: Concrete solutions that Trievol provides (e.g. Speed optimization, custom interactive customer portals, SLA maintenance, intent-driven SEO) specifically mapped to their problem.
4. MEASURABLE OUTCOMES: Est. impact on client lifetime value (LTV), conversion rate lift, and project milestones.

Prospect details:
- Industry Segment: ${industry || "Professional Services / B2B"}
- Current Psychological & Operational Pain Points: ${currentPainPoints || "Low credibility, outdated styling, unresponsive partners"}
- Prospect's Direct Question / Objective: ${customQuestion || "How can we design a high-converting website to attract larger clients?"}
`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: "Please analyze my business parameters and generate our custom high-ticket strategic roadmap.",
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        }
      });

      res.json({ success: true, advice: response.text });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      res.status(500).json({ success: false, error: error.message || "An error occurred while generating strategy." });
    }
  });

  // Serve Vite or Static files
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();