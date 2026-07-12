// Blog posts are loaded from Markdown files in `src/content/blog/`.
// Each `.md` file is one article: YAML frontmatter (metadata) + Markdown/HTML body.
// The slug is the filename (without `.md`). Posts are sorted newest-first by `date`.
//
// To add an article you only create ONE file — see `blog-post.md` at the repo root.
import { formatIndonesianDate } from '../lib/dateUtils';

// Eagerly import every Markdown file in the content folder at build time.
const context = require.context('../content/blog', false, /\.md$/);

const toPost = (key) => {
  const mod = context(key);
  const m = mod.default || mod; // loader exports CommonJS { attributes, html }
  const attr = m.attributes || {};
  const slug = key.replace(/^\.\//, '').replace(/\.md$/, '');

  return {
    slug,
    title: attr.title || slug,
    excerpt: attr.excerpt || '',
    image: attr.image || '',
    category: (attr.category || 'uncategorized').toLowerCase(),
    author: attr.author || 'Tim openSUSE Indonesia',
    date: attr.date || '',                     // ISO string, used for sorting
    dateLabel: formatIndonesianDate(attr.date), // Indonesian display date
    html: m.html || '',                        // rendered article body
  };
};

export const allBlogPosts = context
  .keys()
  .filter((key) => !key.replace(/^\.\//, '').startsWith('_')) // skip _TEMPLATE.md etc.
  .map(toPost)
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

export const getPostBySlug = (slug) =>
  allBlogPosts.find((p) => p.slug === slug);
