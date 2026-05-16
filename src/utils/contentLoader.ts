import { parseFrontmatter, BlogPost, Publication, Newsletter } from '../types/content';

/**
 * Load markdown files from a specific directory
 * Falls back to empty array if directory doesn't exist or CMS hasn't created content yet
 * @param contentType - Type of content (blogs, publications, newsletter)
 * @returns Array of parsed content items
 */
export const loadContent = async (
  contentType: 'blogs' | 'publications' | 'newsletter'
): Promise<any[]> => {
  try {
    // Use relative paths - Vite's import.meta.glob needs relative paths from the current file
    const modules = import.meta.glob('../../content/**/*.md', { query: '?raw', import: 'default' }) as Record<string, () => Promise<string>>;
    const contentItems: any[] = [];

    const allPaths = Object.keys(modules);
    console.log(`[ContentLoader] Total markdown files found: ${allPaths.length}`);
    console.log(`[ContentLoader] Looking for contentType: "${contentType}"`);

    for (const path in modules) {
      // Check if path contains the content type directory
      if (path.includes(`/content/${contentType}/`)) {
        try {
          console.log(`[ContentLoader] Loading: ${path}`);
          const content = await modules[path]();
          console.log(`[ContentLoader] Content fetched, parsing...`);
          
          const { frontmatter, content: markdown } = parseFrontmatter(content);
          
          // Extract slug from filename
          const slug = path.split('/').pop()?.replace('.md', '') || '';
          
          console.log(`[ContentLoader] ✓ Loaded: ${slug}`);
          
          contentItems.push({
            ...frontmatter,
            slug,
            content: markdown,
          });
        } catch (itemError) {
          console.error(`[ContentLoader] ✗ Error with ${path}:`, itemError);
        }
      }
    }

    console.log(`[ContentLoader] ✓ Loaded ${contentItems.length} items for "${contentType}"`);

    // Sort by date (newest first); items without a date sort last
    contentItems.sort((a, b) => {
      const timeA = new Date(a.date || '').getTime();
      const timeB = new Date(b.date || '').getTime();
      return timeB - timeA;
    });

    return contentItems;
  } catch (error) {
    console.error(`[ContentLoader] ✗ Fatal error loading ${contentType}:`, error);
    return [];
  }
};

/**
 * Load a single blog post by slug
 */
export const loadBlogPost = async (slug: string): Promise<BlogPost | null> => {
  try {
    const modules = import.meta.glob('../../content/blogs/*.md', { query: '?raw', import: 'default' }) as Record<string, () => Promise<string>>;
    
    for (const path in modules) {
      if (path.includes(`blogs/`) && path.includes(`${slug}.md`)) {
        const content = await modules[path]();
        const { frontmatter, content: markdown } = parseFrontmatter(content);
        
        return {
          ...frontmatter,
          slug,
          content: markdown,
        } as BlogPost;
      }
    }
    
    return null;
  } catch (error) {
    console.error(`Error loading blog post ${slug}:`, error);
    return null;
  }
};

/**
 * Load a single publication by slug
 */
export const loadPublication = async (slug: string): Promise<Publication | null> => {
  try {
    const modules = import.meta.glob('../../content/publications/*.md', { query: '?raw', import: 'default' }) as Record<string, () => Promise<string>>;
    
    for (const path in modules) {
      if (path.includes(`publications/`) && path.includes(`${slug}.md`)) {
        const content = await modules[path]();
        const { frontmatter, content: markdown } = parseFrontmatter(content);
        
        return {
          ...frontmatter,
          slug,
          content: markdown,
        } as Publication;
      }
    }
    
    return null;
  } catch (error) {
    console.error(`Error loading publication ${slug}:`, error);
    return null;
  }
};

/**
 * Load a single newsletter by slug
 */
export const loadNewsletter = async (slug: string): Promise<Newsletter | null> => {
  try {
    const modules = import.meta.glob('../../content/newsletter/*.md', { query: '?raw', import: 'default' }) as Record<string, () => Promise<string>>;
    
    for (const path in modules) {
      if (path.includes(`newsletter/`) && path.includes(`${slug}.md`)) {
        const content = await modules[path]();
        const { frontmatter, content: markdown } = parseFrontmatter(content);
        
        return {
          ...frontmatter,
          slug,
          content: markdown,
        } as Newsletter;
      }
    }
    
    return null;
  } catch (error) {
    console.error(`Error loading newsletter ${slug}:`, error);
    return null;
  }
};

/**
 * Get unique categories from content items
 */
export const getCategories = (items: any[]): string[] => {
  const categories = new Set<string>();
  items.forEach((item) => {
    if (item.category) {
      categories.add(item.category);
    }
  });
  return Array.from(categories).sort();
};

/**
 * Filter content by category
 */
export const filterByCategory = (items: any[], category: string): any[] => {
  if (!category) return items;
  return items.filter((item) => item.category === category);
};

/**
 * Format date for display
 */
export const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return dateString;
  }
};

/**
 * Get excerpt from markdown content
 */
export const getExcerpt = (content: string, length: number = 150): string => {
  // Remove markdown syntax
  let text = content
    .replace(/#{1,6}\s/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\n/g, ' ')
    .trim();

  if (text.length > length) {
    return text.substring(0, length).trim() + '...';
  }

  return text;
};
