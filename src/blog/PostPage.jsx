import { useParams } from 'react-router-dom';
import { posts } from './posts';
import { marked } from 'marked';
import { Helmet } from 'react-helmet';

export default function PostPage() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <main className="text-white p-8 bg-[#0c0c1d] min-h-screen">
        <h1 className="text-3xl font-bold text-red-500">Post not found</h1>
        <p className="text-gray-400 mt-2">The blog post you’re looking for doesn’t exist.</p>
      </main>
    );
  }

  return (
    <main className="bg-[#0c0c1d] text-white px-4 py-12 min-h-screen">
      <Helmet>
        <title>{post.title} – KeywordKode Blog</title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content={`https://keywordkode.com.au/blog/${post.slug}`} />
        <meta property="og:image" content="https://keywordkode.com.au/og-banner.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-1">{post.title}</h1>
          <p className="text-sm text-gray-400">{post.date} • {post.author}</p>
        </div>
        <div
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: marked.parse(post.content) }}
        />
      </div>
    </main>
  );
}
