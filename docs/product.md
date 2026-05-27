# Chiron

AI writing feedback tool.

## What it is

Chiron is a chat-first web application for getting structured AI feedback on writing. It combines document analysis with an interactive conversation, allowing users to upload their writing, receive rubric-based grading, and ask follow-up questions for clarification or deeper insight.

## What it does

- Users create threads and upload or paste writing (documents or raw text)
- AI analyzes the submission and returns a structured rubric with scores and feedback
- Users can request additional gradings on new or updated submissions within the same thread
- Follow-up chat allows users to ask for explanations, context, or elaboration on any part of the grading
- All threads, documents, gradings, and messages are persisted and accessible via a left sidebar
- Rubrics are defined per thread and remain immutable for the lifetime of that thread

## Core Experience

- Left sidebar: list of threads + "New thread"
- Main area: chat-first interface (Claude.ai / ChatGPT style)
- Right panel: grading history and details for the current thread
- Every grading is tied to a specific document submission and the thread's rubric

## Constraints & Design Principles

- Threads are the central unit; projects are deferred
- Rubrics cannot be changed after thread creation
- Convex is used strictly as a data layer
- All AI orchestration, R2 uploads, and server logic live in TanStack Start server functions
- No unit tests
