import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import nodemailer from "nodemailer";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT || 3000);

  app.use(express.json({ limit: "16kb" }));

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

  const gmailUser = process.env.GMAIL_USER?.trim();
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");
  const mailer = gmailUser && gmailAppPassword
    ? nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: gmailUser,
          pass: gmailAppPassword
        },
        connectionTimeout: 10000,
        greetingTimeout: 10000,
        socketTimeout: 20000
      })
    : null;

  app.post("/api/contact", async (req, res) => {
    const body: unknown = req.body;
    if (typeof body !== "object" || body === null || Array.isArray(body)) {
      res.status(400).json({ success: false, error: "Please review the enquiry details and try again." });
      return;
    }

    const values = body as Record<string, unknown>;
    const readField = (key: string, maxLength: number, required = false): string | null => {
      const rawValue = values[key];
      if (rawValue === undefined && !required) return "";
      if (typeof rawValue !== "string") return null;

      const value = rawValue.trim();
      if (value.length > maxLength || (required && !value)) return null;
      return value;
    };

    const name = readField("name", 120, true);
    const company = readField("company", 160, true);
    const email = readField("email", 254, true);
    const phone = readField("phone", 40);
    const location = readField("location", 120);
    const selectedService = readField("selectedService", 160, true);
    const currentUrl = readField("currentUrl", 500);
    const projectDescription = readField("projectDescription", 5000, true);
    const selectedGoal = readField("selectedGoal", 200, true);
    const selectedBudget = readField("selectedBudget", 100, true);
    const selectedTimeline = readField("selectedTimeline", 100, true);
    const website = readField("website", 300);

    if (
      !name || !company || !email || phone === null || location === null ||
      !selectedService || currentUrl === null || !projectDescription ||
      !selectedGoal || !selectedBudget || !selectedTimeline || website === null ||
      website || projectDescription.length < 15 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      res.status(400).json({ success: false, error: "Please review the required enquiry details and try again." });
      return;
    }

    if (currentUrl) {
      try {
        const parsedUrl = new URL(currentUrl);
        if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") {
          throw new Error("Unsupported website URL protocol.");
        }
      } catch {
        res.status(400).json({ success: false, error: "Please enter a valid website URL." });
        return;
      }
    }

    if (!mailer || !gmailUser) {
      res.status(503).json({
        success: false,
        error: "Email delivery is not configured yet. Please email trievolteam@gmail.com directly."
      });
      return;
    }

    const message = [
      "New Trievol website enquiry",
      "",
      `Name: ${name}`,
      `Organisation: ${company}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Location: ${location || "Not provided"}`,
      `Service: ${selectedService}`,
      `Current website: ${currentUrl || "Not provided"}`,
      `Goal: ${selectedGoal}`,
      `Budget: ${selectedBudget}`,
      `Timeline: ${selectedTimeline}`,
      "",
      "Project details:",
      projectDescription
    ].join("\n");

    try {
      await mailer.sendMail({
        from: gmailUser,
        to: "trievolteam@gmail.com",
        replyTo: email,
        subject: "New Trievol website enquiry",
        text: message
      });
      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Contact email delivery failed:", error);
      res.status(502).json({
        success: false,
        error: "The enquiry could not be sent. Please try again or email trievolteam@gmail.com directly."
      });
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