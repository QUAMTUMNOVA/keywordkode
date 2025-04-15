import { useParams } from 'react-router-dom';
import { posts } from './posts';

// We'll use marked to render markdown content
import { marked } from 'marked';

export default function PostPage() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) return <div className="text-white p-8">Post not found.</div>;

  return (
    <main className="bg-[#0c0c1d] text-white px-4 py-12 min-h-screen">
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
