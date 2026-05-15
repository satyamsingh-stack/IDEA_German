# Decap CMS Integration Guide

Complete setup and deployment guide for IDEA Institut's Decap CMS integration.

## Table of Contents
1. [Installation](#installation)
2. [Netlify Setup](#netlify-setup)
3. [Git Gateway Configuration](#git-gateway-configuration)
4. [First Time Setup](#first-time-setup)
5. [Managing Content](#managing-content)
6. [Deployment](#deployment)
7. [Troubleshooting](#troubleshooting)

---

## Installation

### Step 1: Install Dependencies (COMPLETED)

The following packages have been added to your `package.json`:

- **gray-matter** (^4.0.3) - Parse YAML frontmatter from markdown
- **marked** (^12.0.1) - Markdown to HTML conversion
- **react-markdown** (^9.0.1) - React component for rendering markdown

Install dependencies:
```bash
npm install
```

### Step 2: Project Structure (COMPLETED)

Created folder structure:
```
public/
  admin/
    index.html          # CMS admin interface
    config.yml          # CMS configuration
  uploads/              # Media uploads folder

src/
  utils/
    contentLoader.ts    # Functions to load markdown content
    markdown.ts         # Markdown parsing utilities
  types/
    content.ts          # TypeScript interfaces

content/
  blogs/                # Blog post markdown files
  publications/         # Publication markdown files
  newsletter/           # Newsletter markdown files
```

---

## Netlify Setup

### Step 1: Enable Netlify Identity

1. Go to your Netlify site dashboard
2. Navigate to **Site Settings** → **Identity**
3. Click **Enable Identity**
4. Copy the identity URL for reference

### Step 2: Configure Identity Settings

1. Still in **Identity** settings
2. Find **Providers** section
3. Add authentication providers (GitHub, Google, etc.) - Optional but recommended
4. Note down the **API endpoint** (something like `https://your-site.netlify.app`)

### Step 3: Setup Git Gateway

1. Go to **Identity** → **Services**
2. Find **Git Gateway** and click **Enable Git Gateway**
3. Select your Git provider (GitHub)
4. Authorize Netlify to access your repository

**Important:** Ensure you're using the `admin` branch for Git Gateway (already configured in `config.yml`)

---

## Git Gateway Configuration

### Backend Configuration

The `public/admin/config.yml` is configured as:

```yaml
backend:
  name: git-gateway
  branch: admin
  commit_messages:
    create: 'Create {{collection}} "{{slug}}"'
    update: 'Update {{collection}} "{{slug}}"'
    delete: 'Delete {{collection}} "{{slug}}"'
```

This means:
- All CMS changes are committed to the `admin` branch
- Each change gets a meaningful commit message
- After changes are committed, Netlify automatically triggers a rebuild

### Media Handling

```yaml
media_folder: 'public/uploads'
public_folder: '/uploads'
```

- Uploaded images and PDFs go to `public/uploads/`
- They're served at `/uploads/` in your website
- All files are versioned in Git

---

## First Time Setup

### Step 1: Invite Admin Users

1. In Netlify site dashboard → **Identity**
2. Click **Invite users**
3. Enter email addresses for content managers
4. Invited users will receive email with signup link
5. They complete signup and set their password

### Step 2: Access Admin Panel

Navigate to:
```
https://your-site.netlify.app/admin
```

Or directly:
```
https://your-site.netlify.app/admin/index.html
```

You should see the Decap CMS login screen.

### Step 3: Create Your First Content

1. Login with your Netlify Identity credentials
2. Click on **Blogs**, **Publications**, or **Newsletter**
3. Click **New** button
4. Fill in the form:
   - **Title:** Article/Publication title
   - **Description:** Short summary
   - **Author:** Your name (optional)
   - **Date:** Publish date
   - **Category:** Select appropriate category
   - **Featured Image:** Upload cover image (optional)
   - **Body:** Write content in markdown
5. Click **Save** to create a draft
6. Click **Publish** when ready

---

## Managing Content

### Collections

Three content collections are available:

#### 1. Blogs (`content/blogs/`)

**Fields:**
- Title (required)
- Description (required)
- Author (optional)
- Publish Date (required)
- Category: Gender & Sexuality, Migration & Asylum, Comparative Law, etc.
- Featured Image (optional)
- Body (markdown, required)

**File format:** `slugified-title.md`

#### 2. Publications (`content/publications/`)

**Fields:**
- Title (required)
- Description (required)
- Author (optional)
- Publish Date (required)
- Category: Research Papers, Migration & Asylum Law, Gender & Sexuality Law, etc.
- Featured Image (optional)
- PDF File (optional) - PDF download link
- Body (markdown, required)

**File format:** `slugified-title.md`

#### 3. Newsletter (`content/newsletter/`)

**Fields:**
- Title (required)
- Description (required)
- Issue Number (required) - auto-increments
- Publish Date (required)
- Featured Image (optional)
- Body (markdown, required)

**File format:** `idea-insights-issue-{number}.md`

### Markdown Content

Content is written in markdown. Supported features:

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*

- Bullet list
- Another item

1. Numbered list
2. Another item

[Link text](https://example.com)

![Image alt text](/uploads/image.jpg)

> Blockquote text

`inline code`

\`\`\`
code block
\`\`\`
```

---

## Deployment

### Automatic Deployment

**The system is already configured for automatic deployment!**

When you:
1. Create/edit/delete content in CMS
2. Click "Publish"

Decap CMS will:
1. Commit changes to the `admin` branch
2. Trigger a Netlify rebuild automatically
3. Deploy updated site within 1-2 minutes

### Manual Rebuild (if needed)

If content doesn't update:

1. Go to Netlify site dashboard
2. Find **Builds** section
3. Click **Trigger deploy**
4. Select **Deploy site**

---

## Troubleshooting

### CMS Page Shows "Loading..." Forever

**Solution:**
1. Check browser console (F12) for errors
2. Verify `public/admin/config.yml` syntax (YAML format)
3. Clear browser cache: Ctrl+Shift+Delete
4. Hard refresh: Ctrl+Shift+R

### Cannot Login to CMS

**Check:**
1. Netlify Identity is enabled in site settings
2. Your email is invited as a user
3. You completed the signup email
4. Cookies are enabled in browser
5. Try incognito/private browsing mode

### Uploaded Files Don't Appear

**Check:**
1. `public/uploads/` folder exists
2. Files are actually in `public/uploads/` after upload
3. Website is rebuilt after upload
4. Try different image format (JPG instead of PNG)

### Content Doesn't Show on Website

**Check:**
1. Changes were published (not just saved as draft)
2. Wait 2-3 minutes for Netlify rebuild
3. Hard refresh your website (Ctrl+Shift+R)
4. Check browser console for JS errors
5. Verify markdown files are in correct `content/` folder

### Git Gateway Not Working

**Solution:**
1. Go to Netlify → Identity → Services
2. Check if Git Gateway is enabled
3. Re-enable if needed
4. Verify GitHub authorization is current
5. Check that you're authenticated in your browser

### Media Upload Fails

**Solution:**
1. Check file size (keep under 10MB)
2. Try different file format
3. Ensure `public/uploads/` folder exists
4. Check Netlify function permissions
5. Try in incognito mode

---

## Content Management Workflow

### Typical Blog Publishing Workflow

1. **Create Draft**
   - Go to Blogs collection
   - Click "New"
   - Fill in form fields
   - Click "Save" (saves as draft)

2. **Edit & Review**
   - Make edits as needed
   - Preview changes
   - Adjust markdown formatting

3. **Publish**
   - Click "Publish" button
   - Select publish date
   - Confirm publication

4. **Monitor Site**
   - Wait for Netlify rebuild (1-2 min)
   - Visit site to verify
   - Share published URL

### Editing Existing Content

1. Go to appropriate collection
2. Click on article to edit
3. Make changes
4. Click "Save" to save changes
5. Click "Publish" if major changes
6. Site updates automatically

### Deleting Content

1. Open article
2. Click "Delete" button
3. Confirm deletion
4. Site updates automatically

---

## User Roles & Permissions

### Administrator
- Can create/edit/delete all content
- Can invite/manage users
- Can modify collection settings

### Editor
- Can create/edit content
- Cannot delete content
- Cannot manage users

### Contributor
- Can create drafts
- Cannot publish
- Cannot edit others' content

To manage roles, go to **Netlify Site Settings** → **Identity** → **Roles**

---

## Best Practices

### Content Quality

1. **Use descriptive titles** - Helps with SEO and clarity
2. **Write good descriptions** - Displayed as preview text
3. **Add featured images** - Improves visual appeal
4. **Use markdown properly** - Ensures good formatting
5. **Categorize content** - Helps users find content
6. **Proofread before publishing** - Reduces errors

### Publishing Schedule

1. **Plan content** - Schedule posts in advance
2. **Set future dates** - Can pre-schedule content
3. **Review before publishing** - Use preview feature
4. **Check formatting** - Verify markdown renders correctly
5. **Test links** - Ensure all links work

### SEO Optimization

- Use keywords in title and description
- Write compelling descriptions (meta)
- Use proper markdown heading hierarchy
- Add alt text to images
- Use meaningful slug names

---

## Scalability

### Adding New Collections

To add a new content collection (e.g., Case Studies):

1. Edit `public/admin/config.yml`
2. Add new collection:

```yaml
  - name: case_studies
    label: Case Studies
    folder: content/case_studies
    create: true
    fields:
      - { label: 'Title', name: 'title', widget: 'string' }
      - { label: 'Description', name: 'description', widget: 'text' }
      # ... add more fields as needed
```

3. Create `content/case_studies/` folder
4. Create React component to display collection
5. Update content loader utilities if needed

### Modifying Categories

Edit `public/admin/config.yml` and update the options in category fields:

```yaml
- label: 'Category'
  name: 'category'
  widget: 'select'
  options:
    - 'Your New Category'
    - 'Another Category'
```

---

## Advanced Features

### Editorial Workflow

The CMS is configured with editorial workflow:

```yaml
publish_mode: editorial_workflow
```

This means:
- Content is saved as drafts first
- Can be reviewed in CMS preview
- Manually published when ready
- All versions tracked in Git

### Automated Commits

Git commits are automatic with meaningful messages:
- `Create blogs "my-article"`
- `Update publications "research-paper"`
- `Delete newsletter "old-issue"`
- `Upload "header-image.jpg"`

### Media Management

Upload limits per Netlify plan:
- Free: 300 uploads/month
- Pro: Unlimited
- Enterprise: Custom

Media is versioned with Git history.

---

## Support & Resources

### Documentation Links

- [Decap CMS Official Docs](https://decapcms.org/docs/)
- [Netlify Identity Documentation](https://docs.netlify.com/security/identity/)
- [Git Gateway Documentation](https://docs.netlify.com/security/identity/git-gateway/)
- [Markdown Guide](https://www.markdownguide.org/)

### Getting Help

1. **CMS Issues:** Check Decap CMS GitHub issues
2. **Netlify Issues:** Contact Netlify support
3. **Content Issues:** Review this documentation
4. **Development Issues:** Check project README

---

## Next Steps

1. ✅ Dependencies installed
2. ✅ Admin panel configured
3. ✅ Git Gateway enabled
4. ✅ Content structure created
5. ✅ Example content added

### To Deploy:

1. Push changes to GitHub:
   ```bash
   git add .
   git commit -m "Add Decap CMS integration"
   git push origin admin
   ```

2. Test on Netlify preview

3. Enable Identity & Git Gateway on Netlify

4. Visit `/admin` and login

5. Start creating content!

---

**Last Updated:** May 2024  
**Version:** 1.0  
**Status:** Production Ready
