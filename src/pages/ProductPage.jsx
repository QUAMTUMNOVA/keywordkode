// src/pages/ProductPage.jsx

import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { products } from '../products';

export default function ProductPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <div className="p-8 text-center text-2xl">Product not found.</div>;
  }

  return (
    <>
      <Helmet>
        <title>{product.title} | KeywordKode</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={product.title} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.image.startsWith('/') ? `https://keywordkode.com.au${product.image}` : product.image} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={`https://keywordkode.com.au/products/${product.slug}`} />
      </Helmet>

      <div className="p-8 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
        {product.image && (
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto rounded shadow mb-6"
          />
        )}
        <p className="text-xl mb-2">Price: {product.price}</p>
        <p className="text-lg mb-4">{product.description}</p>
        <a
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 hover:scale-105 transform transition-transform duration-300 text-white font-bold py-3 px-6 rounded shadow-md hover:shadow-lg"
         >
  View Deal on Temu
      </a>

      </div>
    </>
  );
}
