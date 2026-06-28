# LaunchIQ — AI Startup Validator 🚀

> Validate your startup idea in seconds using Claude AI.

**Live Demo:** [your-netlify-link.netlify.app](https://your-netlify-link.netlify.app)

---

## What is LaunchIQ?

LaunchIQ is an AI-powered startup validation tool that gives founders and students instant, structured feedback on their business ideas. Enter your idea, target audience, and the problem you're solving — and Claude AI generates a full strategic analysis report in seconds.

## Features

- **Viability Score** — 0–100 AI-scored assessment of your idea's potential
- **Problem–Solution Fit** — Analysis of how well your solution addresses the problem
- **Customer Persona** — Ideal customer profile with pain points and goals
- **Competitive Landscape** — Competition level, top competitors, and your potential edge
- **Revenue Models** — 3 tailored monetization strategies with potential ratings
- **Go-to-Market Strategy** — Step-by-step launch plan
- **Risk Analysis** — Key risks and actionable mitigations
- **Next Steps** — Concrete actions to take right now

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Vanilla HTML, CSS, JavaScript |
| AI Engine | Groq API (`llama-3.3-70b-versatile`) |
| Fonts | Google Fonts (Space Grotesk, Inter) |
| Deployment | Netlify / Vercel |

## How to Use

1. Clone or download this repository
2. Open `index.html` in your browser (or deploy to Netlify/Vercel)
3. Get a **free** Gemini API key at [aistudio.google.com](https://aistudio.google.com/) → **Get API key**
4. Fill in your idea details
5. Click **Analyze My Idea →** and get your full report

> Your API key is stored locally in your browser and never sent anywhere except the Anthropic API.

## Deployment (Netlify)

1. Push this repository to GitHub
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import from GitHub**
3. Select this repo — Netlify auto-detects the `netlify.toml` config
4. Click **Deploy**
5. Go to **Site settings → Environment variables → Add variable**
   - Key: `GROQ_API_KEY`
   - Value: your free key from [console.groq.com](https://console.groq.com)
6. Trigger a redeploy — done ✅

> The API key lives only in Netlify's environment. It is never sent to the browser.

## Project Structure

```
launchiq/
├── index.html                  # Frontend (HTML + CSS + JS)
├── netlify.toml                # Netlify build config
├── netlify/
│   └── functions/
│       └── analyze.js          # Serverless proxy — keeps API key secret
└── README.md
```

## AI Agent Integration

This project is paired with an **n8n workflow** that automates competitive research — scraping web data and enriching LaunchIQ reports with live market intelligence.

→ See the [AI Agent documentation](./agent/README.md) for setup instructions.

## Screenshots

> *(Add screenshots of the landing page and results dashboard here)*

## Built With

- [Groq API](https://console.groq.com/) — AI analysis engine (free, no billing required)
- [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) — Display typography
- [Inter](https://fonts.google.com/specimen/Inter) — Body typography

## License

MIT — free to use, modify, and distribute.

---

Built as a final project for the **AI & Digital Tools** course at BTU (Business and Technology University), Georgia, 2026.
