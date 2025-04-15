// App.jsx
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

const temuProducts = [
  // [... Insert all 17 products including new additions ...]
];

const categories = ['All', 'Tech', 'Home', 'Fashion'];

function ProductGrid({ filterCategory }) {
  const [sortOrder, setSortOrder] = useState('asc');

  const filteredProducts = temuProducts
    .filter(p => filterCategory === 'All' || p.category === filterCategory)
    .sort((a, b) => {
      const priceA = parseFloat(a.price.replace('AU$', ''));
      const priceB = parseFloat(b.price.replace('AU$', ''));
      return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
    });

  return (
    <div className="space-y-6">
      <div className="flex justify-end gap-3">
        <span className="text-sm text-gray-400">Sort by price:</span>
        <button onClick={() => setSortOrder('asc')} className="text-sm text-teal-300 hover:underline">Low to High</button>
        <button onClick={() => setSortOrder('desc')} className="text-sm text-teal-300 hover:underline">High to Low</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-[#161628] rounded-xl p-4 shadow-md hover:shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-3" />
            <h3 className="text-lg font-bold mb-1">{product.name}</h3>
            <p className="text-yellow-400 font-semibold">{product.price}</p>
            <a href={product.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-teal-300 font-semibold hover:underline">View Deal</a>
          </div>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="text-sm text-gray-400 text-center pt-8 border-t border-gray-700 space-y-1 mt-10">
      <p>© 2025 KeywordKode. All rights reserved.</p>
      <p>
        Powered by{' '}
        <a
          href="https://quantumnova.com.au"
          className="text-teal-300 font-semibold hover:underline"
        >
          QUANTUMNOVA
        </a>
      </p>
      <p>© 2025 QUANTUMNOVA PTY LTD — All rights reserved.</p>
      <p>Registered in Australia | ABN 43686016526</p>
      <p>
        <a
          href="mailto:admin@quantumnova.com.au"
          className="text-teal-300 hover:underline"
        >
          admin@quantumnova.com.au
        </a>
      </p>
      <p className="pt-2 text-gray-500 italic">
        Disclaimer: As an affiliate, we may earn commissions from qualifying purchases made through links on this site.
      </p>
      <p className="pt-2 text-gray-500">
        <a href="/privacy.html" className="hover:underline text-teal-300">Privacy Policy</a> |
        <a href="/refund.html" className="hover:underline text-teal-300">Refund Policy</a> |
        <a href="/terms.html" className="hover:underline text-teal-300">Terms & Conditions</a>
      </p>
    </footer>
  );
}

function CategoryPage() {
  const { category } = useParams();
  const pageCategory = category.charAt(0).toUpperCase() + category.slice(1);
  return (
    <main className="min-h-screen bg-[#0c0c1d] text-white px-4 py-10">
      <div className="w-full max-w-6xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold mb-2">{pageCategory} Deals</h1>
          <p className="text-gray-400">Explore trending items in {pageCategory}</p>
        </header>
        <ProductGrid filterCategory={pageCategory} />
        <Footer />
      </div>
    </main>
  );
}

function HomePage() {
  return (
    <main className="min-h-screen bg-[#0c0c1d] text-white px-4 py-10">
      <div className="w-full max-w-6xl mx-auto space-y-10">
        <header className="text-center">
          <h1 className="text-4xl font-bold mb-2">KeywordKode</h1>
          <p className="text-lg text-gray-300">Discover trending tools, deals & keyword-powered recommendations</p>
        </header>

        <div className="bg-gradient-to-r from-pink-500 to-yellow-500 text-black px-4 py-3 rounded-xl text-center font-semibold shadow-lg">
          🎉 New Temu Deals Just Dropped – Up to 90% Off! Free Shipping on Select Items!
        </div>

        <div className="flex justify-center flex-wrap gap-3 pt-2">
          {categories.map(cat => (
            <Link key={cat} to={`/${cat.toLowerCase()}`} className="px-4 py-2 rounded-full font-medium border bg-[#1a1a2e] text-white border-gray-600 hover:bg-teal-400 hover:text-black">
              {cat}
            </Link>
          ))}
        </div>

        <ProductGrid filterCategory="All" />
        <Footer />
      </div>
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:category" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
}
