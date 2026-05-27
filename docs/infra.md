# Infrastructure & Tech Stack

## Overview

Chiron uses a hybrid architecture with TanStack Start as the primary framework and Convex limited strictly to data storage.

## Core Technologies

| Layer              | Technology                  | Role                                      |
|--------------------|-----------------------------|-------------------------------------------|
| Framework          | TanStack Start              | Routing, SSR, server functions            |
| Database           | Convex                      | Queries + mutations only (no logic)       |
| Authentication     | WorkOS                      | Sole identity provider                    |
| AI                 | Vercel AI SDK               | LLM calls + streaming (in server functions) |
| Storage            | Cloudflare R2               | Single source of truth for all documents  |
| Styling            | Tailwind CSS                | UI styling                                |
| State / Real-time  | TanStack Query + Convex     | Client state + subscriptions on persisted data |

## Architecture Rules

- **Convex** is used **only** for database operations (queries and mutations). It holds no AI logic, no file handling, and no auth.
- **TanStack Start server functions** own all orchestration:
  - AI calls (Vercel AI SDK)
  - R2 uploads and presigned URLs
  - WorkOS session handling
  - Prompt construction, result validation, retry logic
- **AI streaming** is done via SSE directly from TanStack Start to the client. The final result is written to Convex afterward (eventual consistency).
- **Real-time updates** are provided by Convex subscriptions on data that server functions eventually persist.
- **Documents** (including pasted text) are always stored in R2. Convex only stores the `docRef` + metadata.
- **Rubrics** are immutable per thread. Changing a rubric requires creating a new thread.

## Data Flow (Grading Example)

1. Client triggers grading in a thread.
2. TanStack Start server function:
   - Calls Vercel AI SDK (with streaming via SSE to client)
   - Uploads document to R2 if needed
3. On completion, server function calls Convex mutation to persist:
   - New `Document` (if applicable)
   - New `Grading` record
   - New `Message` (if needed)
4. Convex broadcasts the new data via subscriptions to connected clients.

## Constraints

- No unit tests.
- No Convex Auth — WorkOS is the only auth source.
- Rubrics cannot be modified after thread creation.
- AI provider keys never leave TanStack Start server functions.
