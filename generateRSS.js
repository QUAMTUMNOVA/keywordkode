import fs from 'node:fs';
import { posts } from './src/blog/posts.js'; // Correct path

const baseUrl = 'https://keywordkode.com.au';

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toUTCString();
}

function generateRSSItem(post) {
  return `
    <item>
      <title>${post.title}</title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <description>${post.description}</description>
      <pubDate>${formatDate(post.date)}</pubDate>
      <guid>${baseUrl}/blog/${post.slug}</guid>
    </item>
  `;
}

function generateRSSFeed() {
  const itemsXml = posts.map(generateRSSItem).join('\n');

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/rss.xsl"?>
<rss version="2.0">
  <channel>
    <title>KeywordKode Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Daily curated Temu tools, tech, fashion, and AI-powered product drops.</description>
    <language>en-au</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${itemsXml}
  </channel>
</rss>`;

  fs.writeFileSync('./public/rss.xml', rssXml.trim(), 'utf-8');
  console.log('✅ RSS feed generated at /public/rss.xml');
}

generateRSSFeed();
