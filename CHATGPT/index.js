const { GoogleGenAI }  =  require ("@google/genai");

const ai = new GoogleGenAI({apiKey:"AIzaSyCTWcNd86ynd7iwLdpje1hK9aC1G_Mx1_E"});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "Who is ROhit shrma",
  });
  console.log(response.text);
}

 main();