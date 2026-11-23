# trievol

Trievol is an independent digital services business operated by MD Ajharul Islam.

## Development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Before starting the server, copy `.env.example` to `.env` and configure `GEMINI_API_KEY`, `GMAIL_USER` and `GMAIL_APP_PASSWORD`. The contact form uses Gmail SMTP to send enquiries to `trievolteam@gmail.com`. Create a Google App Password for the sending account and keep real credentials in the hosting environment, never in Git.

Run the TypeScript check and production build:

```bash
npm run lint
npm run build
```
