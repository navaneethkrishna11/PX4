const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const ai = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

const config = {
  generationConfig: {  
    responseMimeType: 'application/json',
    temperature: 0.7,
  },
  thinkingConfig: {
    thinkingBudget: -1,
  },
};

const modelName = 'gemini-2.5-pro';
const model = ai.getGenerativeModel({ model: modelName, ...config });

// Create and export the chat session
const chatSession = model.startChat({
  history: [],
});

module.exports = { chatSession };