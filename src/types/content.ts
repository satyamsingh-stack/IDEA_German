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
 * Browser-compatible version that doesn't rely on Node.js Buffer
 * @param fileContent - Raw file content with frontmatter
 * @returns Parsed frontmatter and content
 */
export const parseFrontmatter = (fileContent: string) => {
  try {
    // Try using gray-matter first (for Node.js environments)
    const { data, content } = matter(fileContent);
    return { frontmatter: data, content };
  } catch (error) {
    // Fallback: Manual parsing for browser environments
    // Matches frontmatter between --- delimiters
    const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
    const match = fileContent.match(frontmatterRegex);
    
    if (!match) {
      // No frontmatter found, treat entire content as markdown
      return { frontmatter: {}, content: fileContent };
    }
    
    const [, frontmatterStr, content] = match;
    const frontmatter: Record<string, any> = {};
    
    // Parse YAML frontmatter line by line
    const lines = frontmatterStr.split('\n');
    for (const line of lines) {
      const colonIndex = line.indexOf(':');
      if (colonIndex === -1) continue;
      
      const key = line.substring(0, colonIndex).trim();
      let value: any = line.substring(colonIndex + 1).trim();
      
      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      // Try to parse as number or boolean
      if (value === 'true') value = true;
      if (value === 'false') value = false;
      if (!isNaN(value) && value !== '') value = Number(value);
      
      frontmatter[key] = value;
    }
    
    return { frontmatter, content };
  }
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
