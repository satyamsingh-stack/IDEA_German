import { parseFrontmatter, BlogPost, Publication, Newsletter } from '../types/content';

/**
 * Strip CMS artifacts from frontmatter text without
 * destroying multi-line content.
 */
const cleanFrontmatterText = (raw: string): string => {
  return raw
    // Remove accidental JS import leakage from CMS
    .replace(/^import\s+\w+.*$/m, '')
    // Remove ONLY a leading "| " or "> " on the very first line
    // (YAML block scalar indicator left behind by parser)
    .replace(/^[|>]\s+/, '')
    // Remove leading/trailing dash-separator artifacts  |- or >-
    .replace(/^\s*[|>]-\s*/, '')
    .replace(/\s*[|>]-\s*$/, '')
    .trim();
};

/**
 * Load markdown files from a specific directory
 * @param contentType - Type of content (blogs, publications, newsletter)
 * @returns Array of parsed content items
 */
export const loadContent = async (
  contentType: 'blogs' | 'publications' | 'newsletter'
): Promise<any[]> => {
  try {
    const modules = import.meta.glob('../../content/**/*.md', {
      query: '?raw',
      import: 'default',
    }) as Record<string, () => Promise<string>>;

    const contentItems: any[] = [];

    for (const path in modules) {
      if (path.includes(`/content/${contentType}/`)) {
        try {
          const content = await modules[path]();
          const { frontmatter, content: markdown } = parseFrontmatter(content);

          // Populate label_text from title when a legacy markdown file has no label_text
          // Also aggressively strip any stray quote characters the CMS may inject on re-publish
          const label_text = (
            (frontmatter.label_text || frontmatter.title || '')
              .replace(/^"+|"+$/g, '')
              .replace(/^'+|'+$/g, '')
              .trim()
          );

          const slug = path.split('/').pop()?.replace('.md', '') || '';

          const cleanedContent = markdown
            .replace(/^\|\s*-\s*\n?/gm, '')
            .replace(/\n?\|\s*-\s*$/gm, '')
            .replace(/\|\s*-/gm, '')
            .trim();

          const cleanDescription = cleanFrontmatterText(
            (frontmatter.description || '').toString()
          );

          const cleanTitle = (frontmatter.title || '').toString().trim();

          contentItems.push({
            label_text,
            title:           cleanTitle,
            description:     cleanDescription,
            author:          frontmatter.author,
            date:            frontmatter.date || '',
            category:        frontmatter.category || '',
            pdf_file:        frontmatter.pdf_file,
            pdf_link:        frontmatter.pdf_link,
            featured_image:  frontmatter.featured_image || '',
            slug,
            content:         cleanedContent,
          });
        } catch (itemError) {
          console.error(`[ContentLoader] error with ${path}:`, itemError);
        }
      }
    }

    return contentItems;
  } catch (error) {
    console.error(`[ContentLoader] fatal error:`, error);
    return [];
  }
};

/**
 * Load a single blog post by slug
 */
export const loadBlogPost = async (slug: string): Promise<BlogPost | null> => {
  try {
    const modules = import.meta.glob('../../content/blogs/*.md', {
      query: '?raw',
      import: 'default',
    }) as Record<string, () => Promise<string>>;

    for (const path in modules) {
      if (path.includes(`blogs/`) && path.includes(`${slug}.md`)) {
        const content = await modules[path]();
        const { frontmatter, content: markdown } = parseFrontmatter(content);
        const cleanedBody = markdown
          .replace(/^\|\s*-\s*\n?/gm, '')
          .replace(/\n?\|\s*-\s*$/gm, '')
          .replace(/\|\s*-/gm, '')
          .trim();

        const descriptionText = cleanFrontmatterText(
          (frontmatter.description || '').toString()
        );

        return {
          title:       (frontmatter.title       || '').toString().trim(),
          description: descriptionText,
          date:        (frontmatter.date        || new Date().toISOString().split('T')[0]).toString(),
          slug,
          content:     cleanedBody || undefined,
        };
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
    const modules = import.meta.glob('../../content/publications/*.md', {
      query: '?raw',
      import: 'default',
    }) as Record<string, () => Promise<string>>;

    for (const path in modules) {
      if (path.includes(`publications/`) && path.includes(`${slug}.md`)) {
        const content = await modules[path]();
        const { frontmatter } = parseFrontmatter(content);
        console.log("Printing description:",frontmatter.description);
        return {
          label_text:     frontmatter.label_text || frontmatter.title || '',
          category:       frontmatter.category   || '',
          pdf_file:       frontmatter.pdf_file,
          pdf_link:       frontmatter.pdf_link,
          featured_image: frontmatter.featured_image,
          title:          frontmatter.title,
          description:    frontmatter.description,
          date:           frontmatter.date,
          author:         frontmatter.author,
          slug,
        };
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
    const modules = import.meta.glob('../../content/newsletter/*.md', {
      query: '?raw',
      import: 'default',
    }) as Record<string, () => Promise<string>>;

    for (const path in modules) {
      if (path.includes(`newsletter/`) && path.includes(`${slug}.md`)) {
        const content = await modules[path]();
        const { frontmatter } = parseFrontmatter(content);
        return {
          label_text:     frontmatter.label_text || frontmatter.title || '',
          slug,
          featured_image: frontmatter.featured_image || '',
        };
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
  items.forEach(item => {
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
  return items.filter(item => item.category === category);
};

/**
 * Format date for display
 */
export const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return '';
    return date.toLocaleDateString('en-US', {
      year:  'numeric',
      month: 'long',
      day:   'numeric',
    });
  } catch {
    return dateString;
  }
};

/**
 * Get excerpt from markdown content
 */
export const getExcerpt = (content: string, length: number = 150): string => {
  let text = content
    .replace(/^\|\s*-\s*\n?/gm, '')
    .replace(/\n?\|\s*-\s*$/gm, '')
    .replace(/\|\s*-/gm, '')
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