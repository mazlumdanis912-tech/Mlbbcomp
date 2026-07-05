import { pgTable, serial, text, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const chatbotSolutions = pgTable("chatbot_solutions", {
  id: serial("id").primaryKey(),
  problemKeywords: text("problem_keywords").notNull(),
  problemSummary: text("problem_summary").notNull(),
  solution: text("solution").notNull(),
  helpfulCount: integer("helpful_count").notNull().default(0),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const insertChatbotSolutionSchema = createInsertSchema(chatbotSolutions).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type ChatbotSolution = typeof chatbotSolutions.$inferSelect;
export type InsertChatbotSolution = z.infer<typeof insertChatbotSolutionSchema>;
