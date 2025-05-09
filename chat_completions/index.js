import readline from "readline/promises";
import { stdin as input, stdout as output } from "node:process";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const rl = readline.createInterface({ input, output });

const userInput = await rl.question("Enter your prompt: ");
rl.close();

const openai = new OpenAI();

const completion = await openai.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [
    { role: "system", content: "You are a helpful assistant." },
    { role: "user", content: userInput },
  ],
});

console.log("\nAI Response:\n", completion.choices[0].message.content);
