// src/chatbot/config.js
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "Energo chatbot",
  initialMessages: [
    createChatBotMessage(` Salut ! Je suis ici pour vous aider à découvrir nos nouvelles solutions innovantes.



! `)
  ],
};

export default config;
