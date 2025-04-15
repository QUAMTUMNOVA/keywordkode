import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { posts } from './posts';

export default function BlogPage() {
  return (
    <main className="bg-[#0c0c1d] text-white px-4 py-12 min-h-screen">
      <Helmet>
        <title>KeywordKode Blog – Temu Picks & Product Roundups</title>
        <meta name="description" content="Insights, guides, and best Temu finds for savvy shoppers." />
        <meta property="og:title" content="KeywordKode Blog" />
        <meta property="og:url" content="https://keywordkode.com.au/blog" />
        <meta property="og:image" content="https://keywordkode.com.au/og-banner.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center">KeywordKode Blog</h1>
        <p className="text-center text-sm text-gray-400">
          <a href="/rss.xml" className="text-teal-300 hover:underline">
            Subscribe via RSS
          </a>
        </p>

        {posts.map(post => (
          <div key={post.slug} className="border-b border-gray-700 pb-4">
            <h2 className="text-xl font-bold">
              <Link to={`/blog/${post.slug}`} className="text-teal-300 hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-400 text-sm">{post.date} — {post.author}</p>
            <p className="mt-2 text-gray-300">{post.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
