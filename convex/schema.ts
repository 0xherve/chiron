import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    email: v.string(),
    name: v.string(),
    avatarUrl: v.optional(v.string()),
    createdAt: v.number(),
    updatedAt: v.number(),
  }),

  documents: defineTable({
    threadId: v.id("threads"),
    docRef: v.string(),
    wordCount: v.number(),
    createdAt: v.number(),
  }).index("by_thread", ["threadId"]),

  threads: defineTable({
    userId: v.id("users"),
    rubricId: v.id("rubrics"),
    title: v.optional(v.string()),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_rubric", ["rubricId"]),

  gradings: defineTable({
    rubricId: v.id("rubrics"),
    threadId: v.id("threads"),
    documentId: v.id("documents"),
    status: v.union(
      v.literal("pending"),
      v.literal("completed"),
      v.literal("failed"),
    ),
    overallScore: v.optional(v.number()),
    summary: v.optional(v.string()),
    createdAt: v.number(),
  })
    .index("by_thread", ["threadId"])
    .index("by_document", ["documentId"]),

  messages: defineTable({
    threadId: v.id("threads"),
    role: v.union(
      v.literal("user"),
      v.literal("assistant"),
      v.literal("system"),
    ),
    kind: v.union(
      v.literal("text"),
      v.literal("document_upload"),
      v.literal("system"),
    ),
    content: v.string(),
    createdAt: v.number(),
  }).index("by_thread", ["threadId"]),
});
