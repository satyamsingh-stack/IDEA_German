import matter from 'gray-matter';

/* ── Interfaces ─────────────────────────────────────────────── */

export interface BlogPost {
  title:       string;
  description: string;
  date:        string;
  author?:     string;
  category?:   string;
  featured_image?: string;
  slug:        string;
  body?:       string;
  content?:    string;
}

/**
 * Minimal publication frontmatter schema used by the CMS.
 * Required:  label_text  – the text shown as the bullet-point link on the listing page
 * Required:  category    – filters publications into a category section
 * Optional:  pdf_file    – file upload of the publication
 * Optional:  pdf_link    – direct URL to the publication PDF
 * Optional:  slug        – derived automatically from the markdown filename
 *
 * Legacy/backward-compat fields are kept as optional so that previously
 * saved CMS entries (which used the earlier richer schema) also parse fine.
 */
export interface Publication {
  label_text:  string;
  category:    string;
  pdf_file?:   string;
  pdf_link?:   string;
  slug:        string;
  content?:    string;
  title?:      string;
  description?: string;
  date?:        string;
  author?:      string;
  featured_image?: string;
}

export interface Newsletter {
  label_text:       string;
  slug:             string;
  featured_image:   string;
}

/* ── Frontmatter parsing ────────────────────────────────────── */

export const parseFrontmatter = (fileContent: string) => {
  try {
    const { data, content } = matter(fileContent);
    return { frontmatter: data, content };
  } catch {
    const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
    const match = fileContent.match(frontmatterRegex);
    if (!match) return { frontmatter: {} as Record<string, any>, content: fileContent };

    const [, frontmatterStr, content] = match;
    const frontmatter: Record<string, any> = {};
    const lines = frontmatterStr.split('\n');
    for (const line of lines) {
      const colonIndex = line.indexOf(':');
      if (colonIndex === -1) continue;
      const key   = line.substring(0, colonIndex).trim();
      let   value = line.substring(colonIndex + 1).trim();
      if ((value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let castValue: any = value;
      if (value === 'true') castValue = true;
      else if (value === 'false') castValue = false;
      else if (value !== '' && value === String(Number(value))) {
        castValue = Number(value);
      }
      frontmatter[key] = castValue;
    }
    return { frontmatter, content };
  }
};

/* ── Type guards ────────────────────────────────────────────── */

export const isBlogPost = (data: any): data is BlogPost =>
  !!data.title && !!data.description && !!data.date && !!data.slug
  && typeof data.title === 'string' && typeof data.description === 'string'
  && typeof data.date === 'string';

/**
 * Publication entry fields it
 */
export const isPublication = (data: any): data is Publication =>
  typeof data.label_text === 'string' && !!data.label_text.trim()
  && typeof data.category   === 'string';

/**
 * Newsletter entry check – required fields it
 */
export const isNewsletter = (data: any): data is Newsletter =>
  typeof data.label_text === 'string' && !!data.label_text.trim()
  && typeof data.slug === 'string';