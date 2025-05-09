# simple_mind


A browser-based character simulation that:

Shows the character’s current thought (via OpenAI)

Has a stylish visual layer (bold white text + background image)

Pulls dynamic output from a local Node.js server

🛠️ Tech Stack (Minimal Viable)
Layer	Tech Used	Notes
Frontend	HTML + CSS (vanilla)	You can add Tailwind or React later
Server	Node.js + Express	Already familiar from current repo
AI Backend	OpenAI API (gpt-4o-mini)	Character’s stream of consciousness
Env Config	dotenv	For keeping API keys secret
Optional Later	Tailwind, Vite, or React	Once you're ready to expand

📈 Milestones (x5)
Milestone 1: Static Web Page
✅ Create an index.html with:

White bold text in center of page

Fullscreen background image (e.g. Berkeley campus or sorority house)

✅ Hosted with Node.js + Express

Milestone 2: First AI Thought
⚡ Add a GET /thought route in Express that:

Calls OpenAI with a system prompt like:

“You are a 21-year-old sorority girl at Berkeley. You are self-absorbed, funny, distracted, and obsessed with social dynamics. Think out loud about your day.”

Returns a single string: the character’s latest thought

⚡ Connect frontend with a basic fetch to /thought and display result

Milestone 3: Auto-Refresh & Stylization
🌀 Add JavaScript to refresh the thought every 15–30 seconds

✨ Add better font sizing, positioning, transitions (e.g., fade in/out)

Milestone 4: Character Mood System
🌤️ Add a small mood indicator (based on time of day, weather, etc.)

🎯 Pass that as context to the AI system prompt

Milestone 5: Deployment & Expansion
🚀 Deploy using Vercel or Netlify

💡 Optional: Expand to more characters or allow toggling between them

