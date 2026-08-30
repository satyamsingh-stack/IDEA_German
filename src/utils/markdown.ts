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

/**
 * Split description into paragraphs for proper rendering
 * Splits on double newlines to preserve paragraph breaks
 * @param description - Description text (may contain newlines)
 * @returns Array of paragraph strings
 */
export const getDescriptionParagraphs = (description: string): string[] => {
  return description
    .split(/\n\s*\n/)  // Split on double newlines (paragraph breaks)
    .map(para => para.replace(/\n/g, ' ').trim())  // Replace single newlines with spaces
    .filter(para => para.length > 0);  // Remove empty paragraphs
};

/**
 * Get a preview excerpt of the description (first 1-2 sentences)
 * @param description - Full description text
 * @param maxLength - Maximum length of excerpt (default 250 chars)
 * @returns Limited description preview
 */
export const getDescriptionPreview = (description: string, maxLength: number = 250): string => {
  // Get first paragraph
  const firstParagraph = description.split(/\n\s*\n/)[0] || '';
  
  // If first paragraph is short enough, return it with ellipsis if there's more content
  if (firstParagraph.length <= maxLength) {
    const hasMoreContent = description.length > firstParagraph.length;
    return hasMoreContent ? firstParagraph + '...' : firstParagraph;
  }
  
  // Otherwise truncate at word boundary
  let truncated = firstParagraph.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  if (lastSpace > 0) {
    truncated = truncated.substring(0, lastSpace);
  }
  
  return truncated + '...';
};
