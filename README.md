# Chiron

AI writing feedback tool. Upload or paste text, get structured rubric grading, and iterate with follow-up questions in a chat-first interface.

## Tech Stack

- **TanStack Start** — React SSR + file-based routing + server functions
- **Convex** — Database (queries + mutations only)
- **WorkOS** — Authentication
- **Cloudflare R2** — Document storage
- **Vercel AI SDK** — AI calls + streaming
- **Tailwind CSS** — Styling

## Getting Started

```bash
bun install
bun dev
```

## Building for Production

```bash
bun run build
```

## Project Structure

- `src/routes/` — File-based routes (TanStack Router)
- `src/server/` — Server functions (AI, R2, orchestration)
- `convex/` — Database schema and functions
- `docs/` — Architecture and schema documentation

## Notes

- No unit tests (by design)
- Convex is used strictly as a data layer
- All AI logic, R2 uploads, and orchestration live in TanStack Start server functions
