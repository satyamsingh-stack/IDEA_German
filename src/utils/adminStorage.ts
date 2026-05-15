export type PublicationCategory =
  | 'Comparative Legal Analysis'
  | 'Migration, Asylum & Transnational Law'
  | 'Law & Lived Experience'
  | 'Violence, Protection & Legal Gaps'
  | 'Policy & Commentary'
  | 'German Publications'

export interface AdminPublication {
  id: string
  title: string
  category: PublicationCategory
  dataUrl: string
  fileName: string
  addedAt: string
}

export interface AdminNewsletter {
  id: string
  title: string
  dataUrl: string
  fileName: string
  addedAt: string
}

export interface AdminBlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  createdAt: string
  updatedAt: string
}

const PUBLICATIONS_KEY = 'admin_publications'
const NEWSLETTERS_KEY = 'admin_newsletters'
const BLOG_KEY = 'admin_blog_posts'

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 9)
}

function readStorage<T>(key: string): T[] {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function writeStorage<T>(key: string, data: T[]): void {
  localStorage.setItem(key, JSON.stringify(data))
}

// ─── Publications ───

export function getAdminPublications(): AdminPublication[] {
  return readStorage<AdminPublication>(PUBLICATIONS_KEY)
}

export function addAdminPublication(pub: Omit<AdminPublication, 'id' | 'addedAt'>): AdminPublication {
  const newPub: AdminPublication = {
    ...pub,
    id: generateId(),
    addedAt: new Date().toISOString(),
  }
  const list = getAdminPublications()
  list.push(newPub)
  writeStorage(PUBLICATIONS_KEY, list)
  return newPub
}

export function deleteAdminPublication(id: string): void {
  const list = getAdminPublications().filter(p => p.id !== id)
  writeStorage(PUBLICATIONS_KEY, list)
}

// ─── Newsletters ───

export function getAdminNewsletters(): AdminNewsletter[] {
  return readStorage<AdminNewsletter>(NEWSLETTERS_KEY)
}

export function addAdminNewsletter(nl: Omit<AdminNewsletter, 'id' | 'addedAt'>): AdminNewsletter {
  const newNL: AdminNewsletter = {
    ...nl,
    id: generateId(),
    addedAt: new Date().toISOString(),
  }
  const list = getAdminNewsletters()
  list.push(newNL)
  writeStorage(NEWSLETTERS_KEY, list)
  return newNL
}

export function deleteAdminNewsletter(id: string): void {
  const list = getAdminNewsletters().filter(n => n.id !== id)
  writeStorage(NEWSLETTERS_KEY, list)
}

// ─── Blog Posts ───

export function getAdminBlogPosts(): AdminBlogPost[] {
  return readStorage<AdminBlogPost>(BLOG_KEY)
}

export function addAdminBlogPost(post: Omit<AdminBlogPost, 'id' | 'createdAt' | 'updatedAt'>): AdminBlogPost {
  const now = new Date().toISOString()
  const newPost: AdminBlogPost = {
    ...post,
    id: generateId(),
    createdAt: now,
    updatedAt: now,
  }
  const list = getAdminBlogPosts()
  list.push(newPost)
  writeStorage(BLOG_KEY, list)
  return newPost
}

export function updateAdminBlogPost(id: string, updates: Partial<Omit<AdminBlogPost, 'id' | 'createdAt'>>): AdminBlogPost | null {
  const list = getAdminBlogPosts()
  const idx = list.findIndex(p => p.id === id)
  if (idx === -1) return null
  list[idx] = { ...list[idx], ...updates, updatedAt: new Date().toISOString() }
  writeStorage(BLOG_KEY, list)
  return list[idx]
}

export function deleteAdminBlogPost(id: string): void {
  const list = getAdminBlogPosts().filter(p => p.id !== id)
  writeStorage(BLOG_KEY, list)
}