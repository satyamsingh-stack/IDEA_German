# CMS Developer Guide

Technical documentation for developers working with the Decap CMS integration.

## Architecture Overview

```
┌─────────────────────────────────────────┐
│         Decap CMS Admin Panel           │
│        (public/admin/index.html)        │
└──────────────┬──────────────────────────┘
               │
        Git Gateway / GitHub
               │
┌──────────────▼──────────────────────────┐
│    GitHub Repository (admin branch)     │
│  - content/blogs/*.md                   │
│  - content/publications/*.md            │
│  - content/newsletter/*.md              │
│  - public/uploads/*                     │
└──────────────┬──────────────────────────┘
               │
        Netlify Build
               │
┌──────────────▼──────────────────────────┐
│    React Application (dist folder)      │
│  - Loads markdown files                 │
│  - Renders dynamic pages                │
│  - Deployed to CDN                      │
└─────────────────────────────────────────┘
```

## Content Structure

### File Organization

```
content/
├── blogs/
│   ├── gender-identity-europe.md
│   ├── migration-lgbtq-rights.md
│   └── [more blogs...]
│
├── publications/
│   ├── gender-recognition-comparative-2024.md
│   ├── lgbtq-asylum-jurisprudence.md
│   └── [more publications...]
│
└── newsletter/
    ├── idea-insights-issue-1.md
    ├── idea-insights-issue-2.md
    └── [more newsletters...]
```

### Frontmatter Format

All markdown files use YAML frontmatter:

```markdown
---
title: "Article Title"
description: "Short description"
author: "Author Name"
date: 2024-05-15
category: "Category Name"
featured_image: "/uploads/image.jpg"
pdf_file: "/uploads/document.pdf"
issue_number: 1
slug: auto-generated-from-filename
---

# Markdown Content Here

Content goes below the closing `---`
```

### Slug Generation

Slugs are automatically generated from filenames:
- `my-blog-post.md` → slug: `my-blog-post`
- `research-paper-2024.md` → slug: `research-paper-2024`

Never include the `.md` extension in slug.

## Content Loading System

### Utility Functions

#### `contentLoader.ts`

Main functions for loading and processing content:

```typescript
// Load all items from a collection
loadContent(type: 'blogs' | 'publications' | 'newsletter'): Promise<any[]>

// Load single item by slug
loadBlogPost(slug: string): Promise<BlogPost | null>
loadPublication(slug: string): Promise<Publication | null>
loadNewsletter(slug: string): Promise<Newsletter | null>

// Utility functions
getCategories(items: any[]): string[]
filterByCategory(items: any[], category: string): any[]
formatDate(dateString: string): string
getExcerpt(content: string, length?: number): string
```

#### `markdown.ts`

Markdown processing utilities:

```typescript
// Convert markdown to HTML
markdownToHtml(markdown: string): string

// Get plain text preview
getPreviewText(text: string, maxLength?: number): string

// Extract first image URL
getFirstImage(markdown: string): string | null
```

### Type Definitions

#### `types/content.ts`

```typescript
interface BlogPost {
  title: string;
  description: string;
  date: string;
  author?: string;
  category?: string;
  featured_image?: string;
  slug: string;
  content: string;  // Raw markdown
}

interface Publication {
  title: string;
  description: string;
  date: string;
  author?: string;
  category?: string;
  featured_image?: string;
  pdf_file?: string;
  slug: string;
  content: string;  // Raw markdown
}

interface Newsletter {
  title: string;
  description: string;
  date: string;
  issue_number: number;
  featured_image?: string;
  slug: string;
  content: string;  // Raw markdown
}
```

## Using Content in Components

### Example: Display List of Blog Posts

```typescript
import { useEffect, useState } from 'react';
import { loadContent, formatDate } from '../utils/contentLoader';
import ReactMarkdown from 'react-markdown';

export const BlogListComponent = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const data = await loadContent('blogs');
        setPosts(data);
      } catch (error) {
        console.error('Error loading blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (posts.length === 0) return <div>No posts found</div>;

  return (
    <div>
      {posts.map(post => (
        <div key={post.slug}>
          <h2>{post.title}</h2>
          <p>{formatDate(post.date)} • By {post.author}</p>
          <p>{post.description}</p>
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      ))}
    </div>
  );
};
```

### Example: Filter by Category

```typescript
import { loadContent, getCategories, filterByCategory } from '../utils/contentLoader';

const FilteredBlogs = () => {
  const [category, setCategory] = useState('');
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await loadContent('blogs');
      setPosts(data);
      setCategories(getCategories(data));
    };
    load();
  }, []);

  const filtered = filterByCategory(posts, category);

  return (
    <>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      {filtered.map(post => (
        <div key={post.slug}>{post.title}</div>
      ))}
    </>
  );
};
```

### Example: Display Single Post

```typescript
import { useParams } from 'react-router-dom';
import { loadBlogPost } from '../utils/contentLoader';

export const BlogPostDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const data = await loadBlogPost(slug);
      setPost(data);
      setLoading(false);
    };
    load();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <img src={post.featured_image} alt={post.title} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
};
```

## Adding New Collections

### Step 1: Update CMS Config

Edit `public/admin/config.yml`:

```yaml
  - name: case_studies
    label: Case Studies
    folder: content/case_studies
    create: true
    slug: '{{slug}}'
    fields:
      - { label: 'Title', name: 'title', widget: 'string', required: true }
      - { label: 'Description', name: 'description', widget: 'text', required: true }
      - { label: 'Published', name: 'date', widget: 'datetime', format: 'YYYY-MM-DD' }
      - { label: 'Body', name: 'body', widget: 'markdown', required: true }
```

### Step 2: Create Type Definition

Add to `src/types/content.ts`:

```typescript
export interface CaseStudy {
  title: string;
  description: string;
  date: string;
  slug: string;
  content: string;
}
```

### Step 3: Update Content Loader

Add to `src/utils/contentLoader.ts`:

```typescript
export const loadCaseStudies = async (): Promise<CaseStudy[]> => {
  try {
    const modules = import.meta.glob('/content/case_studies/*.md', { as: 'raw' });
    const items: CaseStudy[] = [];

    for (const path in modules) {
      const content = await modules[path]();
      const { frontmatter, content: markdown } = parseFrontmatter(content);
      const slug = path.split('/').pop()?.replace('.md', '') || '';

      items.push({
        ...frontmatter,
        slug,
        content: markdown,
      } as CaseStudy);
    }

    // Sort by date (newest first)
    items.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });

    return items;
  } catch (error) {
    console.error('Error loading case studies:', error);
    return [];
  }
};
```

### Step 4: Create Content Folder

```bash
mkdir -p content/case_studies
```

### Step 5: Create Component

Create `src/pages/CaseStudiesPage.tsx` following the same pattern as BlogPage.tsx

### Step 6: Add to Router

Update `src/App.tsx` to include the new route.

## Markdown Best Practices

### Recommended Structure

```markdown
---
title: "Your Title Here"
description: "Brief description for preview"
author: "Author Name"
date: 2024-05-15
category: "Category"
featured_image: "/uploads/hero-image.jpg"
---

## Introduction

Start with an introduction section.

## Main Section 1

Content organized with clear headings.

## Main Section 2

More organized content.

## Conclusion

Wrap up with conclusion or next steps.

---

**Author Information**
Additional metadata or author bio.
```

### Formatting Guidelines

- Use proper markdown syntax
- Limit heading levels to h2 and h3 (h1 reserved for title)
- Use code blocks for technical content
- Include links with meaningful text
- Add images with alt text
- Use lists for multiple items
- Blockquotes for important statements

### Character Limits

- Title: ≤100 characters (for SEO)
- Description: ≤160 characters (preview text)
- Category: Keep short, ≤30 characters

## Performance Optimization

### Static Generation

Content is loaded at build time and included in JavaScript bundles. This means:

**Advantages:**
- No server requests needed
- Fast content loading
- Works offline
- SEO friendly

**Considerations:**
- Bundle size increases with content
- Full rebuild needed for new content (automatic with Netlify)
- Limited to static content (no dynamic queries)

### Image Optimization

```typescript
// Optimize large images
// Use formats: JPG, PNG, WebP
// Recommended sizes:
// - Featured images: 1200x600px
// - Thumbnails: 400x300px
// - Keep file size under 500KB

// Use in markdown:
![Description](/uploads/image.jpg)
```

### Lazy Loading

Content is already lazy-loaded:

```typescript
const [posts, setPosts] = useState([]);

useEffect(() => {
  // This only loads when component mounts
  loadContent('blogs').then(setPosts);
}, []);
```

## Troubleshooting

### Content Not Loading

**Check:**
1. Files exist in `content/[type]/` folder
2. Filename matches pattern: `slug.md`
3. Frontmatter is valid YAML
4. Content is below closing `---`
5. Browser console has no errors

### Markdown Not Rendering

**Check:**
1. Markdown syntax is valid
2. Using proper heading levels (h2, h3)
3. Code blocks use triple backticks
4. Links have proper format: `[text](url)`
5. Images are in `public/uploads/`

### Build Errors

**Check:**
1. No TypeScript errors: `npm run build`
2. All imports resolve correctly
3. Markdown files have required fields
4. No circular imports
5. Check `dist/` folder after build

## Testing Content

### Local Testing

```bash
# Run dev server
npm run dev

# Content loads from Vite glob imports
# Mock data works immediately
# Test in browser at localhost:5173
```

### Build Testing

```bash
# Build for production
npm run build

# Preview built site
npm run preview

# Verify at localhost:4173
```

## Deployment Checklist

- [ ] Dependencies installed (`npm install`)
- [ ] `content/` folder created with examples
- [ ] `public/admin/` files created
- [ ] `netlify.toml` updated
- [ ] Git changes pushed to `admin` branch
- [ ] Netlify site connected to GitHub
- [ ] Netlify Identity enabled
- [ ] Git Gateway enabled
- [ ] Test CMS at `/admin`
- [ ] Create test content
- [ ] Verify site rebuilds automatically
- [ ] All pages rendering correctly

## Security Considerations

### Access Control

- Only invited users can access CMS
- Netlify Identity handles authentication
- Passwords stored securely with Netlify
- Sessions managed automatically

### Data Protection

- Content stored in GitHub repository
- Encrypted transmission via HTTPS
- Media files in `public/uploads/` (public)
- No sensitive data in markdown

### Git Security

- All changes tracked in Git
- Commit history is permanent
- Can revert unwanted changes
- Branch protection available on main

## Monitoring

### Track Deployments

Netlify dashboard shows:
- Deployment status
- Build logs
- Error messages
- Performance metrics

### Monitor Content

- Check `content/` folder for new files
- Review Git commit history
- Monitor `public/uploads/` size
- Track build times

## Support

For issues with:
- **Decap CMS:** [GitHub Issues](https://github.com/decaporg/decap-cms)
- **Netlify:** Contact Netlify support
- **React:** [React Docs](https://react.dev)
- **Markdown:** [Markdown Guide](https://www.markdownguide.org/)

---

**Version:** 1.0  
**Last Updated:** May 2024  
**Status:** Production Ready
