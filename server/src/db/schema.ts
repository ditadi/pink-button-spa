
import { serial, text, pgTable, timestamp } from 'drizzle-orm/pg-core';

// Minimal table for future extensibility
export const appConfigTable = pgTable('app_config', {
  id: serial('id').primaryKey(),
  key: text('key').notNull(),
  value: text('value').notNull(),
  created_at: timestamp('created_at').defaultNow().notNull(),
});

export type AppConfig = typeof appConfigTable.$inferSelect;
export type NewAppConfig = typeof appConfigTable.$inferInsert;

export const tables = { appConfig: appConfigTable };
