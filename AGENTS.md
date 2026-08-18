# AGENTS.md

## Cursor Cloud specific instructions

This is a single Next.js 16 app (Vercel Portfolio Starter Kit fork) — a personal
portfolio/blog site with MDX content and an optional AI chat "digital twin".
There is no database; content lives in `app/blog/posts/*.mdx` and
`app/portfolio/projects/*.mdx`.

Standard commands are in `package.json` scripts (`dev`, `build`, `start`, `test`).
Dependencies are managed with pnpm (see `pnpm-lock.yaml`). The startup update
script already runs `pnpm install`, so you normally only need to start services.

Non-obvious notes:
- There is no `lint` script. Type checking runs as part of `pnpm build` (Next.js
  runs TypeScript during the build), so use `pnpm build` to catch type errors.
- pnpm reports "Ignored build scripts: sharp" on install. This is expected and
  harmless — `sharp` ships prebuilt binaries, and both `pnpm build` and `pnpm dev`
  work without approving its build script. Do not run the interactive
  `pnpm approve-builds`.
- The core site (home, `/blog`, `/portfolio`, RSS, sitemap, OG images) needs no
  API keys. Only the optional AI features require secrets:
  - `/api/chat` needs `OPENAI_API_KEY` (model `gpt-4.1`).
  - `/api/tts` needs `ELEVENLABS_API_KEY` and `VOICE_ID`.
  Without these, chat message replies / audio playback fail but the rest of the
  site is fully functional. Set them in `.env.local` (gitignored) if testing chat.
- `pnpm test` (Vitest) mocks the AI SDK, so tests and the build pass with no API
  keys set.
