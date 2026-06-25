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
    // Ensure description is properly stringified if it's an object
    if (data.description && typeof data.description === 'object') {
      data.description = String(data.description);
    }
    return { frontmatter: data, content };
  } catch {
    // Fallback YAML parser for when gray-matter fails
    const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
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

      // Handle YAML folded/literal scalars (>-, |-, >, |)
      if (value.match(/^[>|][-+]?$/) || value === '>' || value === '|') {
        const indicator = value;
        const multilineValue: string[] = [];
        i++;
        
        // Get base indentation from first indented line
        let baseIndent = 0;
        let firstContentLine = true;
        
        // Collect ALL remaining lines that are indented deeper than the key
        // This ensures we get the complete multiline scalar even if it's very long
        while (i < lines.length) {
          const currentLine = lines[i];
          
          // Check if line is indented (belongs to this scalar)
          if (currentLine.length === 0) {
            // Empty line might be part of scalar (paragraph break)
            multilineValue.push('');
            i++;
          } else if (/^\s/.test(currentLine)) {
            if (firstContentLine) {
              // Determine base indentation from first content line
              const match = currentLine.match(/^(\s+)/);
              baseIndent = match ? match[1].length : 0;
              firstContentLine = false;
            }
            
            // Extract content with base indentation removed
            const lineContent = currentLine.substring(baseIndent);
            multilineValue.push(lineContent);
            i++;
          } else {
            // Non-indented line = end of this scalar, don't consume it
            break;
          }
        }
        
        // Join based on indicator type
        if (indicator.includes('>')) {
          // Folded scalar: join lines with spaces, preserve paragraph breaks
          const paragraphs: string[] = [];
          let currentPara: string[] = [];
          
          for (const line of multilineValue) {
            if (line.trim() === '') {
              // Empty line = paragraph break
              if (currentPara.length > 0) {
                paragraphs.push(currentPara.join(' ').trim());
                currentPara = [];
              }
            } else {
              // Add this line to current paragraph
              currentPara.push(line.trim());
            }
          }
          
          // Don't forget the last paragraph
          if (currentPara.length > 0) {
            paragraphs.push(currentPara.join(' ').trim());
          }
          
          value = paragraphs.join('\n');
        } else {
          // Literal scalar: preserve line breaks exactly
          value = multilineValue.join('\n');
        }
        
        // Apply chomping indicator (- = strip, + = keep, default = clip)
        if (indicator.includes('-')) {
          // Strip: remove all trailing newlines
          value = value.trimEnd();
        } else if (!indicator.includes('+')) {
          // Clip (default): keep one trailing newline
          value = value.trimEnd() + '\n';
        }
        // else: keep all trailing newlines (+)
        
        i--;  // Back up one since the loop will increment
      } else if ((value.startsWith('"') && value.endsWith('"')) ||
                 (value.startsWith("'") && value.endsWith("'"))) {
        // Remove quotes from simple quoted strings
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
      i++;
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