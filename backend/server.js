
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();
const PORT = process.env.PORT || 4000;

if (!process.env.OPENAI_API_KEY) {
  console.error("Missing OPENAI_API_KEY in backend/.env");
  process.exit(1);
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN || "http://localhost:5173",
  })
);

app.use(express.json({ limit: "20kb" }));

const instructions = `
You are CampusKhoj AI, a friendly college counselling assistant for students
exploring colleges in Greater Noida and NCR.

Rules:
- Reply in the language the student uses, including Hindi or Hinglish.
- Ask useful follow-up questions about course, budget, marks and preferred location.
- Help compare colleges and explain the admission process.
- No college database has been connected yet. Never invent college fees,
  rankings, placements, cutoffs, eligibility, admission deadlines or availability.
- Clearly say when a fact needs verification from the college's official website.
- Do not guarantee admission or placement.
- Never ask for passwords, OTPs, bank details or unnecessary sensitive data.
- Keep answers friendly, clear and concise.
- If the student wants a human counsellor, suggest the website's counselling
  form or WhatsApp contact.
`;

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "CampusKhoj AI" });
});

app.post("/api/chat", async (req, res) => {
  try {
    const { messages, profile } = req.body || {};

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({
        error: "Please send a message.",
      });
    }

    if (messages.length > 12) {
      return res.status(400).json({
        error: "Please start a new chat to continue.",
      });
    }

    const allowedRoles = new Set(["user", "assistant"]);

    const safeMessages = messages.map((message) => {
      if (
        !message ||
        !allowedRoles.has(message.role) ||
        typeof message.content !== "string" ||
        message.content.trim().length === 0 ||
        message.content.length > 2000
      ) {
        throw new Error("Invalid message format.");
      }

      return {
        role: message.role,
        content: message.content.trim(),
      };
    });

    const safeProfile =
      profile && typeof profile === "object"
        ? {
            course:
              typeof profile.course === "string"
                ? profile.course.slice(0, 100)
                : "",
            budget:
              typeof profile.budget === "string"
                ? profile.budget.slice(0, 100)
                : "",
            location:
              typeof profile.location === "string"
                ? profile.location.slice(0, 100)
                : "",
            marks:
              typeof profile.marks === "string"
                ? profile.marks.slice(0, 50)
                : "",
          }
        : {};

    const profileContext = `
Student preferences, if provided:
Course: ${safeProfile.course || "Not provided"}
Budget: ${safeProfile.budget || "Not provided"}
Preferred location: ${safeProfile.location || "Not provided"}
Marks/percentage: ${safeProfile.marks || "Not provided"}

These preferences are user-provided and are not verified academic records.
`;

    const response = await openai.responses.create({
      model: "gpt-5-mini",
      instructions: `${instructions}\n${profileContext}`,
      input: safeMessages,
      max_output_tokens: 600,
    });

    res.json({
      reply:
        response.output_text ||
        "Sorry, abhi answer nahi mil paya. Please dobara try karein.",
    });
  } catch (error) {
    console.error("CampusKhoj AI error:", error.message);

    if (error.message === "Invalid message format.") {
      return res.status(400).json({
        error: "Message format sahi nahi hai.",
      });
    }

    res.status(500).json({
      error: "AI abhi respond nahi kar pa raha. Thodi der baad try karein.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`CampusKhoj AI backend running at http://localhost:${PORT}`);
});
