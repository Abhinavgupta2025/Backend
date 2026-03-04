
const { GoogleGenAI } = require ("@google/genai");

const ai = new GoogleGenAI({apiKey:"AIzaSyAEHrAOrM10jyCqU-VumsP33szuKshvc2w"});

async function main(msg) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: msg,
  });
  return response.text;
}
module.exports = main;