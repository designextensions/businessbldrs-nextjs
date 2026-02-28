import { db } from "@/lib/db";
import { eq, desc, asc, and } from "drizzle-orm";
import {
  blogArticles,
  teamMembers,
  portfolioItems,
  marketingVideos,
  downloadableResources,
  events,
  contacts,
  navigationItems,
  forms,
  formSubmissions,
  mediaAssets,
} from "@/lib/db/schema";
import type {
  InsertBlogArticle,
  InsertTeamMember,
  InsertPortfolioItem,
  InsertMarketingVideo,
  InsertDownloadableResource,
  InsertEvent,
  InsertContact,
  InsertNavigationItem,
  NavigationItem,
  InsertForm,
  InsertFormSubmission,
  InsertMediaAsset,
} from "@/lib/db/schema";

// ─── Blog Articles ────────────────────────────────────────────────────────────

export async function getBlogArticles() {
  return db
    .select()
    .from(blogArticles)
    .where(eq(blogArticles.isPublished, true))
    .orderBy(desc(blogArticles.createdAt));
}

export async function getAllBlogArticles() {
  return db.select().from(blogArticles).orderBy(desc(blogArticles.createdAt));
}

export async function getBlogArticleById(id: number) {
  const results = await db
    .select()
    .from(blogArticles)
    .where(eq(blogArticles.id, id));
  return results[0] ?? null;
}

export async function getBlogArticleBySlug(slug: string) {
  const results = await db
    .select()
    .from(blogArticles)
    .where(eq(blogArticles.slug, slug));
  return results[0] ?? null;
}

export async function createBlogArticle(data: InsertBlogArticle) {
  const results = await db.insert(blogArticles).values(data).returning();
  return results[0];
}

export async function updateBlogArticle(id: number, data: Partial<InsertBlogArticle>) {
  const results = await db
    .update(blogArticles)
    .set({ ...data, updatedAt: new Date() })
    .where(eq(blogArticles.id, id))
    .returning();
  return results[0] ?? null;
}

export async function deleteBlogArticle(id: number) {
  const results = await db
    .delete(blogArticles)
    .where(eq(blogArticles.id, id))
    .returning();
  return results[0] ?? null;
}

// ─── Portfolio Items ───────────────────────────────────────────────────────────

export async function getPortfolioItems() {
  return db
    .select()
    .from(portfolioItems)
    .where(eq(portfolioItems.isActive, true))
    .orderBy(asc(portfolioItems.orderIndex));
}

export async function getAllPortfolioItems() {
  return db.select().from(portfolioItems).orderBy(asc(portfolioItems.orderIndex));
}

export async function getPortfolioItemById(id: number) {
  const results = await db
    .select()
    .from(portfolioItems)
    .where(eq(portfolioItems.id, id));
  return results[0] ?? null;
}

export async function createPortfolioItem(data: InsertPortfolioItem) {
  const results = await db.insert(portfolioItems).values(data).returning();
  return results[0];
}

export async function updatePortfolioItem(id: number, data: Partial<InsertPortfolioItem>) {
  const results = await db
    .update(portfolioItems)
    .set({ ...data, updatedAt: new Date() })
    .where(eq(portfolioItems.id, id))
    .returning();
  return results[0] ?? null;
}

export async function deletePortfolioItem(id: number) {
  const results = await db
    .delete(portfolioItems)
    .where(eq(portfolioItems.id, id))
    .returning();
  return results[0] ?? null;
}

// ─── Team Members ─────────────────────────────────────────────────────────────

export async function getTeamMembers() {
  return db
    .select()
    .from(teamMembers)
    .where(eq(teamMembers.isActive, true))
    .orderBy(asc(teamMembers.displayOrder));
}

export async function getAllTeamMembers() {
  return db.select().from(teamMembers).orderBy(asc(teamMembers.displayOrder));
}

export async function getTeamMemberBySlug(slug: string) {
  const results = await db
    .select()
    .from(teamMembers)
    .where(eq(teamMembers.slug, slug));
  return results[0] ?? null;
}

export async function createTeamMember(data: InsertTeamMember) {
  const results = await db.insert(teamMembers).values(data).returning();
  return results[0];
}

export async function updateTeamMember(id: number, data: Partial<InsertTeamMember>) {
  const results = await db
    .update(teamMembers)
    .set({ ...data, updatedAt: new Date() })
    .where(eq(teamMembers.id, id))
    .returning();
  return results[0] ?? null;
}

export async function deleteTeamMember(id: number) {
  const results = await db
    .delete(teamMembers)
    .where(eq(teamMembers.id, id))
    .returning();
  return results[0] ?? null;
}

// ─── Events ───────────────────────────────────────────────────────────────────

export async function getEvents() {
  return db
    .select()
    .from(events)
    .where(eq(events.isActive, true))
    .orderBy(asc(events.startDate));
}

export async function getAllEvents() {
  return db.select().from(events).orderBy(asc(events.startDate));
}

export async function getEventById(id: number) {
  const results = await db
    .select()
    .from(events)
    .where(eq(events.id, id));
  return results[0] ?? null;
}

export async function createEvent(data: InsertEvent) {
  const results = await db.insert(events).values(data).returning();
  return results[0];
}

export async function updateEvent(id: number, data: Partial<InsertEvent>) {
  const results = await db
    .update(events)
    .set({ ...data, updatedAt: new Date() })
    .where(eq(events.id, id))
    .returning();
  return results[0] ?? null;
}

export async function deleteEvent(id: number) {
  const results = await db
    .delete(events)
    .where(eq(events.id, id))
    .returning();
  return results[0] ?? null;
}

// ─── Marketing Videos ─────────────────────────────────────────────────────────

export async function getMarketingVideos() {
  return db
    .select()
    .from(marketingVideos)
    .where(eq(marketingVideos.isActive, true))
    .orderBy(desc(marketingVideos.createdAt));
}

export async function getAllMarketingVideos() {
  return db.select().from(marketingVideos).orderBy(desc(marketingVideos.createdAt));
}

export async function getMarketingVideoById(id: number) {
  const results = await db
    .select()
    .from(marketingVideos)
    .where(eq(marketingVideos.id, id));
  return results[0] ?? null;
}

export async function createMarketingVideo(data: InsertMarketingVideo) {
  const results = await db.insert(marketingVideos).values(data).returning();
  return results[0];
}

export async function updateMarketingVideo(id: number, data: Partial<InsertMarketingVideo>) {
  const results = await db
    .update(marketingVideos)
    .set({ ...data, updatedAt: new Date() })
    .where(eq(marketingVideos.id, id))
    .returning();
  return results[0] ?? null;
}

export async function deleteMarketingVideo(id: number) {
  const results = await db
    .delete(marketingVideos)
    .where(eq(marketingVideos.id, id))
    .returning();
  return results[0] ?? null;
}

// ─── Downloadable Resources ───────────────────────────────────────────────────

export async function getDownloadableResources() {
  return db
    .select()
    .from(downloadableResources)
    .where(eq(downloadableResources.isActive, true))
    .orderBy(desc(downloadableResources.createdAt));
}

export async function getAllDownloadableResources() {
  return db
    .select()
    .from(downloadableResources)
    .orderBy(desc(downloadableResources.createdAt));
}

export async function getDownloadableResourceById(id: number) {
  const results = await db
    .select()
    .from(downloadableResources)
    .where(eq(downloadableResources.id, id));
  return results[0] ?? null;
}

export async function createDownloadableResource(data: InsertDownloadableResource) {
  const results = await db.insert(downloadableResources).values(data).returning();
  return results[0];
}

export async function updateDownloadableResource(id: number, data: Partial<InsertDownloadableResource>) {
  const results = await db
    .update(downloadableResources)
    .set({ ...data, updatedAt: new Date() })
    .where(eq(downloadableResources.id, id))
    .returning();
  return results[0] ?? null;
}

export async function deleteDownloadableResource(id: number) {
  const results = await db
    .delete(downloadableResources)
    .where(eq(downloadableResources.id, id))
    .returning();
  return results[0] ?? null;
}

// ─── Navigation Items ─────────────────────────────────────────────────────────

export async function getNavigationItems() {
  return db
    .select()
    .from(navigationItems)
    .where(eq(navigationItems.isVisible, true))
    .orderBy(asc(navigationItems.order));
}

export async function getAllNavigationItems() {
  return db.select().from(navigationItems).orderBy(asc(navigationItems.order));
}

export async function getNavigationItemById(id: number) {
  const results = await db
    .select()
    .from(navigationItems)
    .where(eq(navigationItems.id, id));
  return results[0] ?? null;
}

export async function createNavigationItem(data: InsertNavigationItem) {
  const results = (await db.insert(navigationItems).values(data).returning()) as NavigationItem[];
  return results[0];
}

export async function updateNavigationItem(id: number, data: Partial<InsertNavigationItem>) {
  const results = (await db
    .update(navigationItems)
    .set({ ...data, updatedAt: new Date() })
    .where(eq(navigationItems.id, id))
    .returning()) as NavigationItem[];
  return results[0] ?? null;
}

export async function deleteNavigationItem(id: number) {
  const results = (await db
    .delete(navigationItems)
    .where(eq(navigationItems.id, id))
    .returning()) as NavigationItem[];
  return results[0] ?? null;
}

// ─── Media Assets ─────────────────────────────────────────────────────────────

export async function getMediaAssets() {
  return db
    .select()
    .from(mediaAssets)
    .where(eq(mediaAssets.isActive, true))
    .orderBy(desc(mediaAssets.createdAt));
}

export async function getMediaAssetById(id: number) {
  const results = await db
    .select()
    .from(mediaAssets)
    .where(eq(mediaAssets.id, id));
  return results[0] ?? null;
}

export async function createMediaAsset(data: InsertMediaAsset) {
  const results = await db.insert(mediaAssets).values(data).returning();
  return results[0];
}

export async function deleteMediaAsset(id: number) {
  const results = await db
    .delete(mediaAssets)
    .where(eq(mediaAssets.id, id))
    .returning();
  return results[0] ?? null;
}

// ─── Contacts ─────────────────────────────────────────────────────────────────

export async function getContacts() {
  return db.select().from(contacts).orderBy(desc(contacts.createdAt));
}

export async function createContact(data: InsertContact) {
  const results = await db.insert(contacts).values(data).returning();
  return results[0];
}

// ─── Forms ────────────────────────────────────────────────────────────────────

export async function getForms() {
  return db
    .select()
    .from(forms)
    .where(eq(forms.isActive, true))
    .orderBy(asc(forms.name));
}

export async function getAllForms() {
  return db.select().from(forms).orderBy(asc(forms.name));
}

export async function getFormBySlug(slug: string) {
  const results = await db
    .select()
    .from(forms)
    .where(and(eq(forms.slug, slug), eq(forms.isActive, true)));
  return results[0] ?? null;
}

export async function createForm(data: InsertForm) {
  const results = await db.insert(forms).values(data).returning();
  return results[0];
}

export async function updateForm(id: number, data: Partial<InsertForm>) {
  const results = await db
    .update(forms)
    .set({ ...data, updatedAt: new Date() })
    .where(eq(forms.id, id))
    .returning();
  return results[0] ?? null;
}

export async function deleteForm(id: number) {
  const results = await db
    .delete(forms)
    .where(eq(forms.id, id))
    .returning();
  return results[0] ?? null;
}

// ─── Form Submissions ─────────────────────────────────────────────────────────

export async function getFormSubmissions() {
  return db
    .select()
    .from(formSubmissions)
    .orderBy(desc(formSubmissions.createdAt));
}

export async function getFormSubmissionsByFormId(formId: number) {
  return db
    .select()
    .from(formSubmissions)
    .where(eq(formSubmissions.formId, formId))
    .orderBy(desc(formSubmissions.createdAt));
}

export async function createFormSubmission(data: InsertFormSubmission) {
  const results = await db.insert(formSubmissions).values(data).returning();
  return results[0];
}
