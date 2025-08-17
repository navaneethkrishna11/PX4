import {  pgTable, serial , varchar, boolean } from "drizzle-orm/pg-core";

export const Users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: varchar("email").notNull().unique(),
  name: varchar("name").notNull(),
  image : varchar("image").default("https://i.imgur.com/4eHh1b6.png"),
  subscription : boolean('subscription').default(false)

});
