import { marked } from 'marked';

/**
 * Parse markdown content to HTML
 * @param markdown - Markdown string content
 * @returns HTML string
 */
export const markdownToHtml = (markdown: string): string => {
  return marked(markdown) as string;
};

/**
 * Strip markdown formatting and HTML tags for preview text
 * @param text - Markdown or HTML text
 * @param maxLength - Maximum length of preview text
 * @returns Plain text preview
 */
export const getPreviewText = (text: string, maxLength: number = 150): string => {
  // Remove markdown syntax
  let cleaned = text
    .replace(/#{1,6}\s/g, '') // Remove headings
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Extract link text
    .replace(/\*\*([^*]+)\*\*/g, '$1') // Remove bold
    .replace(/\*([^*]+)\*/g, '$1') // Remove italic
    .replace(/`([^`]+)`/g, '$1') // Remove inline code
    .replace(/\n/g, ' ') // Replace newlines with spaces
    .trim();

  // Truncate if needed
  if (cleaned.length > maxLength) {
    return cleaned.substring(0, maxLength).trim() + '...';
  }

  return cleaned;
};

/**
 * Extract first image from markdown content
 * @param markdown - Markdown string
 * @returns Image URL or null
 */
export const getFirstImage = (markdown: string): string | null => {
  const imageMatch = markdown.match(/!\[([^\]]*)\]\(([^)]+)\)/);
  return imageMatch ? imageMatch[2] : null;
};
