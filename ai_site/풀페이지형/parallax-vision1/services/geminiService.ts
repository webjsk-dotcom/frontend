import { GoogleGenAI, Type } from "@google/genai";
import { VisionResponse } from "../types";

const apiKey = process.env.API_KEY || '';

// Initialize Gemini
const ai = new GoogleGenAI({ apiKey });

export const generateCompanyVision = async (theme: string): Promise<VisionResponse> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Generate a futuristic, poetic, and inspiring brand vision statement for a company specializing in "${theme}". 
      Also provide 3 key adjectives related to this vision.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            statement: { type: Type.STRING, description: "A poetic vision statement max 40 words." },
            keywords: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "3 single-word adjectives" 
            }
          },
          required: ["statement", "keywords"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as VisionResponse;
  } catch (error) {
    console.error("Gemini Error:", error);
    return {
      statement: "Empowering the digital frontier through creative synthesis and human imagination.",
      keywords: ["Innovation", "Clarity", "Future"]
    };
  }
};
