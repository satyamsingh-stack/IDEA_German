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

    // gray-matter sometimes returns description as a single truncated
    // line when the CMS writes multi-line values without proper indentation.
    // Detect that and re-parse manually in that case.
    if (data.description && typeof data.description === 'string') {
      return { frontmatter: data, content };
    }

    return { frontmatter: data, content };
  } catch {
    // gray-matter failed (e.g. unquoted colon in description) — use fallback
    return parseFrontmatterFallback(fileContent);
  }
};

/**
 * Fallback YAML parser for when gray-matter throws.
 * Handles literal (|, |-) and folded (>, >-) block scalars correctly,
 * including multi-paragraph values separated by blank lines.
 */
const parseFrontmatterFallback = (fileContent: string) => {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;
  const match = fileContent.match(frontmatterRegex);
  if (!match) return { frontmatter: {} as Record<string, any>, content: fileContent };

  const [, frontmatterStr, content] = match;
  const frontmatter: Record<string, any> = {};
  const lines = frontmatterStr.split('\n');

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) {
      i++;
      continue;
    }

    const key = line.substring(0, colonIndex).trim();
    let value = line.substring(colonIndex + 1).trim();

    // Handle YAML folded/literal block scalars (>-, |-, >, |)
    if (value === '|-' || value === '>-' || value === '|' || value === '>') {
      const indicator = value;
      const multilineValue: string[] = [];
      i++;

      // Determine the base indentation from the first non-empty line
      let baseIndent = -1;
      while (i < lines.length) {
        const currentLine = lines[i];

        // Find base indentation from first non-empty line
        if (baseIndent === -1 && currentLine.trim().length > 0) {
          const match = currentLine.match(/^(\s+)/);
          baseIndent = match ? match[1].length : 0;
        }

        // Stop when we hit a line that is non-empty AND less indented
        // than our base indent — that means a new YAML key has started
        if (
          currentLine.trim().length > 0 &&
          baseIndent !== -1 &&
          !currentLine.startsWith(' '.repeat(Math.max(1, baseIndent)))
        ) {
          break;
        }

        // Preserve empty lines (paragraph breaks) and trim base indentation
        if (currentLine.trim().length === 0) {
          multilineValue.push('');
        } else {
          multilineValue.push(currentLine.slice(baseIndent));
        }

        i++;
      }

      // Remove leading/trailing empty lines from the collected block
      while (multilineValue.length > 0 && multilineValue[0] === '') {
        multilineValue.shift();
      }
      while (multilineValue.length > 0 && multilineValue[multilineValue.length - 1] === '') {
        multilineValue.pop();
      }

      if (indicator === '>' || indicator === '>-') {
        // Folded scalar: single newlines become spaces, double newlines stay
        value = multilineValue.join('\n').replace(/([^\n])\n([^\n])/g, '$1 $2');
        if (indicator === '>-') value = value.trim();
      } else {
        // Literal scalar: preserve all line breaks as-is
        value = multilineValue.join('\n');
        if (indicator === '|-') value = value.trim();
      }

      // i is already pointing at the next key — skip the i++ at the bottom
      i--;
    } else if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    // Cast booleans and numbers
    let castValue: any = value;
    if (value === 'true') castValue = true;
    else if (value === 'false') castValue = false;
    else if (value !== '' && value === String(Number(value))) {
      castValue = Number(value);
    }

    frontmatter[key] = castValue;
    i++;
  }

  return { frontmatter, content };
};

/* ── Type guards ────────────────────────────────────────────── */

export const isBlogPost = (data: any): data is BlogPost =>
  !!data.title && !!data.description && !!data.date && !!data.slug
  && typeof data.title === 'string' && typeof data.description === 'string'
  && typeof data.date === 'string';

/**
 * Publication entry fields check
 */
export const isPublication = (data: any): data is Publication =>
  typeof data.label_text === 'string' && !!data.label_text.trim()
  && typeof data.category   === 'string';

/**
 * Newsletter entry check – required fields
 */
export const isNewsletter = (data: any): data is Newsletter =>
  typeof data.label_text === 'string' && !!data.label_text.trim()
  && typeof data.slug === 'string';