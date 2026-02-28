import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, integer, boolean, jsonb, index, serial, AnyPgColumn } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Session storage table.
export const sessions = pgTable(
  "sessions",
  {
    sid: varchar("sid").primaryKey(),
    sess: jsonb("sess").notNull(),
    expire: timestamp("expire").notNull(),
  },
  (table) => [index("IDX_session_expire").on(table.expire)],
);

// User storage table.
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: varchar("email").unique(),
  firstName: varchar("first_name"),
  lastName: varchar("last_name"),
  profileImageUrl: varchar("profile_image_url"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export type UpsertUser = typeof users.$inferInsert;
export type User = typeof users.$inferSelect;

// Events storage table
export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  shortDescription: varchar("short_description", { length: 500 }),
  eventType: varchar("event_type", { length: 50 }).notNull(),
  location: varchar("location", { length: 255 }),
  virtualLink: varchar("virtual_link", { length: 500 }),
  startDate: timestamp("start_date").notNull(),
  endDate: timestamp("end_date"),
  startTime: varchar("start_time", { length: 50 }),
  endTime: varchar("end_time", { length: 50 }),
  timezone: varchar("timezone", { length: 50 }).default("EST"),
  image: varchar("image", { length: 500 }),
  featured: boolean("featured").default(false),
  isActive: boolean("is_active").default(true),
  registrationUrl: varchar("registration_url", { length: 500 }),
  price: varchar("price", { length: 100 }),
  tags: text("tags").array(),
  maxAttendees: integer("max_attendees"),
  currentAttendees: integer("current_attendees").default(0),
  organizer: varchar("organizer", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
}, (table) => [
  index("idx_events_is_active").on(table.isActive),
  index("idx_events_featured").on(table.featured),
  index("idx_events_start_date").on(table.startDate),
  index("idx_events_event_type").on(table.eventType),
  index("idx_events_active_featured").on(table.isActive, table.featured),
  index("idx_events_active_type").on(table.isActive, table.eventType),
  index("idx_events_active_date").on(table.isActive, table.startDate),
]);

export type Event = typeof events.$inferSelect;
export type InsertEvent = typeof events.$inferInsert;

export const insertEventSchema = createInsertSchema(events).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type InsertEventType = z.infer<typeof insertEventSchema>;

export const contacts = pgTable("contacts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  company: text("company"),
  message: text("message").notNull(),
  service: text("service"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertContactSchema = createInsertSchema(contacts).pick({
  name: true,
  email: true,
  phone: true,
  company: true,
  message: true,
  service: true,
}).extend({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  message: z.string().min(20, "Please provide more details about your project (at least 20 characters)"),
});

export type InsertContact = z.infer<typeof insertContactSchema>;

// Spam prevention schema for form submissions
export const spamPreventionSchema = z.object({
  honeypot: z.string().max(0, "Spam detected").optional(),
  formLoadedAt: z.number().optional(),
  spamToken: z.string().optional(),
});

// Combined contact schema with spam prevention
export const contactSubmissionSchema = insertContactSchema.merge(spamPreventionSchema);
export type Contact = typeof contacts.$inferSelect;

// Marketing Videos Table
export const marketingVideos = pgTable("marketing_videos", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  thumbnail: text("thumbnail").notNull(),
  duration: text("duration").notNull(),
  category: text("category").notNull(),
  videoUrl: text("video_url"),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
}, (table) => [
  index("idx_marketing_videos_is_active").on(table.isActive),
  index("idx_marketing_videos_category").on(table.category),
]);

export const insertMarketingVideoSchema = createInsertSchema(marketingVideos).pick({
  title: true,
  description: true,
  thumbnail: true,
  duration: true,
  category: true,
  videoUrl: true,
  isActive: true,
});

export type InsertMarketingVideo = z.infer<typeof insertMarketingVideoSchema>;
export type MarketingVideo = typeof marketingVideos.$inferSelect;

// Blog Articles Table
export const blogArticles = pgTable("blog_articles", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  title: text("title").notNull(),
  excerpt: text("excerpt").notNull(),
  author: text("author").notNull(),
  date: text("date").notNull(),
  readTime: text("read_time").notNull(),
  category: text("category").notNull(),
  image: text("image").notNull(),
  content: text("content"),
  slug: text("slug").unique().notNull(),
  isPublished: boolean("is_published").default(true),
  isFeatured: boolean("is_featured").default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
}, (table) => [
  index("idx_blog_articles_is_published").on(table.isPublished),
  index("idx_blog_articles_slug").on(table.slug),
  index("idx_blog_articles_published_date").on(table.isPublished, table.date),
]);

export const insertBlogArticleSchema = createInsertSchema(blogArticles).pick({
  title: true,
  excerpt: true,
  author: true,
  date: true,
  readTime: true,
  category: true,
  image: true,
  content: true,
  slug: true,
  isPublished: true,
  isFeatured: true,
});

export type InsertBlogArticle = z.infer<typeof insertBlogArticleSchema>;
export type BlogArticle = typeof blogArticles.$inferSelect;

// Downloadable Resources Table
export const downloadableResources = pgTable("downloadable_resources", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  type: text("type").notNull(),
  size: text("size").notNull(),
  category: text("category").notNull(),
  downloadUrl: text("download_url"),
  icon: text("icon").notNull(),
  fileUrl: text("file_url"),
  fileType: text("file_type"),
  featured: boolean("featured").default(false),
  requiresEmail: boolean("requires_email").default(false),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
}, (table) => [
  index("idx_downloadable_resources_is_active").on(table.isActive),
  index("idx_downloadable_resources_category").on(table.category),
]);

export const insertDownloadableResourceSchema = createInsertSchema(downloadableResources).pick({
  title: true,
  description: true,
  type: true,
  size: true,
  category: true,
  downloadUrl: true,
  icon: true,
  fileUrl: true,
  fileType: true,
  featured: true,
  requiresEmail: true,
  isActive: true,
});

export type InsertDownloadableResource = z.infer<typeof insertDownloadableResourceSchema>;
export type DownloadableResource = typeof downloadableResources.$inferSelect;

// Portfolio Items Table
export const portfolioItems = pgTable("portfolio_items", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  title: text("title").notNull(),
  description: text("description"),
  image: text("image").notNull(),
  url: text("url"),
  categories: text("categories").array().notNull(),
  serviceType: text("service_type").notNull(),
  clientName: text("client_name"),
  featured: boolean("featured").default(false),
  orderIndex: integer("order_index").default(0),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
}, (table) => [
  index("idx_portfolio_items_service_type").on(table.serviceType),
  index("idx_portfolio_items_is_active").on(table.isActive),
  index("idx_portfolio_items_active_order").on(table.isActive, table.orderIndex),
]);

export const insertPortfolioItemSchema = createInsertSchema(portfolioItems).pick({
  title: true,
  description: true,
  image: true,
  url: true,
  categories: true,
  serviceType: true,
  clientName: true,
  featured: true,
  orderIndex: true,
  isActive: true,
});

export type InsertPortfolioItem = z.infer<typeof insertPortfolioItemSchema>;
export type PortfolioItem = typeof portfolioItems.$inferSelect;

// Team Members Table
export const teamMembers = pgTable("team_members", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: text("name").notNull(),
  title: text("title").notNull(),
  email: text("email").notNull(),
  image: text("image").notNull(),
  description: text("description").notNull(),
  fullBio: text("full_bio"),
  quote: text("quote"),
  quoteAuthor: text("quote_author"),
  outsideWork: text("outside_work"),
  additionalPhotos: text("additional_photos").array().default([]),
  funTitle: text("fun_title"),
  slug: text("slug").unique().notNull(),
  displayOrder: integer("display_order").default(0),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
}, (table) => [
  index("idx_team_members_active_display_order").on(table.isActive, table.displayOrder),
  index("idx_team_members_slug").on(table.slug),
]);

export const insertTeamMemberSchema = createInsertSchema(teamMembers).pick({
  name: true,
  title: true,
  email: true,
  image: true,
  description: true,
  fullBio: true,
  quote: true,
  quoteAuthor: true,
  outsideWork: true,
  additionalPhotos: true,
  funTitle: true,
  slug: true,
  displayOrder: true,
  isActive: true,
});

export type InsertTeamMember = z.infer<typeof insertTeamMemberSchema>;
export type TeamMember = typeof teamMembers.$inferSelect;

// Access Tools storage table
export const accessTools = pgTable("access_tools", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  link: varchar("link", { length: 500 }).notNull(),
  image: varchar("image", { length: 500 }),
  category: varchar("category", { length: 100 }).notNull(),
  featured: boolean("featured").default(false),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export type AccessTool = typeof accessTools.$inferSelect;
export type InsertAccessTool = typeof accessTools.$inferInsert;

export const insertAccessToolSchema = createInsertSchema(accessTools).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type InsertAccessToolType = z.infer<typeof insertAccessToolSchema>;

// Media management table
export const mediaAssets = pgTable("media_assets", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  filename: text("filename").notNull().unique(),
  title: text("title"),
  slug: text("slug").unique(),
  altText: text("alt_text"),
  description: text("description"),
  category: text("category").default("general"),
  fileSize: integer("file_size"),
  mimeType: text("mime_type"),
  width: integer("width"),
  height: integer("height"),
  tags: text("tags").array().default([]),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
}, (table) => [
  index("idx_media_assets_active").on(table.isActive),
  index("idx_media_assets_category").on(table.category),
  index("idx_media_assets_slug").on(table.slug),
  index("idx_media_assets_filename").on(table.filename),
]);

export const insertMediaAssetSchema = createInsertSchema(mediaAssets).pick({
  filename: true,
  title: true,
  slug: true,
  altText: true,
  description: true,
  category: true,
  fileSize: true,
  mimeType: true,
  width: true,
  height: true,
  tags: true,
  isActive: true,
});

export type InsertMediaAsset = z.infer<typeof insertMediaAssetSchema>;
export type MediaAsset = typeof mediaAssets.$inferSelect;

// Forms management tables
export const forms = pgTable("forms", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  description: text("description"),
  notificationEmail: varchar("notification_email", { length: 255 }).notNull(),
  isActive: boolean("is_active").default(true),
  settings: jsonb("settings").default({}),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
}, (table) => [
  index("forms_slug_idx").on(table.slug),
  index("forms_active_idx").on(table.isActive),
]);

export const formSubmissions = pgTable("form_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  formId: integer("form_id").notNull().references(() => forms.id),
  formSlug: varchar("form_slug", { length: 255 }).notNull(),
  submissionData: jsonb("submission_data").notNull(),
  submitterEmail: varchar("submitter_email", { length: 255 }),
  submitterName: varchar("submitter_name", { length: 255 }),
  ipAddress: varchar("ip_address", { length: 45 }),
  userAgent: text("user_agent"),
  hubspotContactId: varchar("hubspot_contact_id", { length: 50 }),
  isProcessed: boolean("is_processed").default(false),
  createdAt: timestamp("created_at").defaultNow(),
}, (table) => [
  index("form_submissions_form_id_idx").on(table.formId),
  index("form_submissions_form_slug_idx").on(table.formSlug),
  index("form_submissions_email_idx").on(table.submitterEmail),
  index("form_submissions_created_at_idx").on(table.createdAt),
]);

export type Form = typeof forms.$inferSelect;
export type InsertForm = typeof forms.$inferInsert;
export type FormSubmission = typeof formSubmissions.$inferSelect;
export type InsertFormSubmission = typeof formSubmissions.$inferInsert;

export const insertFormSchema = createInsertSchema(forms).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertFormSubmissionSchema = createInsertSchema(formSubmissions).omit({
  id: true,
  createdAt: true,
});

export type InsertFormType = z.infer<typeof insertFormSchema>;
export type InsertFormSubmissionType = z.infer<typeof insertFormSubmissionSchema>;

// Navigation management table
export const navigationItems = pgTable("navigation_items", {
  id: serial("id").primaryKey(),
  label: varchar("label", { length: 255 }).notNull(),
  href: varchar("href", { length: 500 }).notNull(),
  icon: varchar("icon", { length: 50 }),
  parentId: integer("parent_id").references((): AnyPgColumn => navigationItems.id),
  order: integer("order").default(0),
  isVisible: boolean("is_visible").default(true),
  isDropdown: boolean("is_dropdown").default(false),
  target: varchar("target", { length: 20 }).default("_self"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
}, (table) => [
  index("navigation_items_parent_id_idx").on(table.parentId),
  index("navigation_items_order_idx").on(table.order),
  index("navigation_items_visible_idx").on(table.isVisible),
]);

export type NavigationItem = typeof navigationItems.$inferSelect;
export type InsertNavigationItem = typeof navigationItems.$inferInsert;

export const insertNavigationItemSchema = createInsertSchema(navigationItems).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type InsertNavigationItemType = z.infer<typeof insertNavigationItemSchema>;
