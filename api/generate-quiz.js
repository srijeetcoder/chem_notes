/* global process */
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST is allowed" });
  }

  try {
    const { topic, difficulty, count, notes } = req.body || {};

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: "Missing GEMINI_API_KEY in .env.local or Vercel environment variables" });
    }

    if (!topic || !difficulty || !count || !notes) {
      return res.status(400).json({ error: "Missing topic, difficulty, count, or notes" });
    }

    const prompt = `
You are an exam quiz generator for MAKAUT first year chemistry.

Create exactly ${count} unique MCQ questions.

Topic: ${topic}
Difficulty: ${difficulty}

Use only these notes:
${notes}

Rules:
1. Return valid JSON only.
2. Do not use markdown.
3. Do not write text outside JSON.
4. Each question must have exactly 4 options.
5. The answer must exactly match one option.
6. Explanation must be short and exam focused.

JSON format:
{
  "questions": [
    {
      "question": "question text",
      "options": ["option 1", "option 2", "option 3", "option 4"],
      "answer": "correct option text",
      "explanation": "short explanation"
    }
  ]
}
`;

    const geminiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: prompt }]
            }
          ],
          generationConfig: {
            temperature: 0.9,
            responseMimeType: "application/json"
          }
        })
      }
    );

    const rawGeminiText = await geminiResponse.text();

    let geminiData;
    try {
      geminiData = JSON.parse(rawGeminiText);
    } catch {
      return res.status(500).json({
        error: "Gemini returned non JSON response",
        raw: rawGeminiText
      });
    }

    if (!geminiResponse.ok) {
      return res.status(geminiResponse.status).json({
        error: geminiData.error?.message || "Gemini request failed",
        details: geminiData
      });
    }

    const text = geminiData.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      return res.status(500).json({
        error: "Empty Gemini response",
        details: geminiData
      });
    }

    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch {
      return res.status(500).json({
        error: "Gemini response text was not valid JSON",
        raw: text
      });
    }

    if (!Array.isArray(parsed.questions)) {
      return res.status(500).json({
        error: "Invalid quiz format. Missing questions array.",
        raw: parsed
      });
    }

    const cleanedQuestions = parsed.questions
      .filter((q) => {
        return (
          q &&
          typeof q.question === "string" &&
          Array.isArray(q.options) &&
          q.options.length === 4 &&
          typeof q.answer === "string" &&
          typeof q.explanation === "string"
        );
      })
      .map((q) => ({
        question: q.question,
        options: q.options,
        answer: q.answer,
        explanation: q.explanation
      }));

    if (cleanedQuestions.length === 0) {
      return res.status(500).json({
        error: "No valid questions generated",
        raw: parsed
      });
    }

    return res.status(200).json({
      questions: cleanedQuestions
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message || "Server error"
    });
  }
}