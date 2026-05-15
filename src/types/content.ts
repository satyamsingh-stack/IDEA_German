import matter from 'gray-matter';

/**
 * Blog post frontmatter interface
 */
export interface BlogPost {
  title: string;
  description: string;
  date: string;
  author?: string;
  category?: string;
  featured_image?: string;
  slug: string;
  content: string;
}

/**
 * Publication frontmatter interface
 */
export interface Publication {
  title: string;
  description: string;
  date: string;
  author?: string;
  category?: string;
  pdf_file?: string;
  featured_image?: string;
  slug: string;
  content: string;
}

/**
 * Newsletter frontmatter interface
 */
export interface Newsletter {
  title: string;
  description: string;
  date: string;
  issue_number: number;
  featured_image?: string;
  slug: string;
  content: string;
}

/**
 * Parse YAML frontmatter and markdown content
 * @param fileContent - Raw file content with frontmatter
 * @returns Parsed frontmatter and content
 */
export const parseFrontmatter = (fileContent: string) => {
  const { data, content } = matter(fileContent);
  return { frontmatter: data, content };
};

/**
 * Type guard for BlogPost
 */
export const isBlogPost = (data: any): data is BlogPost => {
  return (
    data.title &&
    data.description &&
    data.date &&
    data.slug &&
    typeof data.title === 'string' &&
    typeof data.description === 'string' &&
    typeof data.date === 'string'
  );
};

/**
 * Type guard for Publication
 */
export const isPublication = (data: any): data is Publication => {
  return (
    data.title &&
    data.description &&
    data.date &&
    data.slug &&
    typeof data.title === 'string' &&
    typeof data.description === 'string' &&
    typeof data.date === 'string'
  );
};

/**
 * Type guard for Newsletter
 */
export const isNewsletter = (data: any): data is Newsletter => {
  return (
    data.title &&
    data.description &&
    data.date &&
    data.slug &&
    data.issue_number &&
    typeof data.title === 'string' &&
    typeof data.description === 'string' &&
    typeof data.date === 'string' &&
    typeof data.issue_number === 'number'
  );
};
