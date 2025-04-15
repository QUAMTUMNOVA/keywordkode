import { useState } from 'react';

const temuProducts = [
  {
    id: 1,
    name: 'Geevon Weather Station',
    price: 'AU$34.63',
    link: 'https://temu.to/k/uo4zp3xk1nm',
    image: '/public/geevon-weather-station.jpg',
    category: 'Home'
  },
  {
    id: 2,
    name: 'Non-Stick Burger Press + 100 Papers',
    price: 'AU$7.09',
    link: 'https://temu.to/k/ummn9y2forq',
    image: '/public/non-stick-burger-press.jpg',
    category: 'Home'
  },
  {
    id: 3,
    name: 'Dual Dash Cam - Night Vision + Parking Mode',
    price: 'AU$3.36',
    link: 'https://temu.to/k/uq5mp7evlsv',
    image: '/public/dual-dash-cam.jpg',
    category: 'Tech'
  },
  {
    id: 4,
    name: 'Men’s Color Block Half-Zip Sweater',
    price: 'AU$1.39',
    link: 'https://temu.to/k/upte1fp8ove',
    image: '/public/mens-color-block.jpg',
    category: 'Fashion'
  },
  {
    id: 5,
    name: 'Cordless Engraving Rotary Tool',
    price: 'AU$3.69',
    link: 'https://temu.to/k/uh15ulei996',
    image: '/public/cordless-engraving-rotary.jpg',
    category: 'Tech'
  },
  {
    id: 6,
    name: 'Men’s Vintage Crossbody Satchel',
    price: 'AU$1.39',
    link: 'https://temu.to/k/u9893t7qoor',
    image: '/public/mens-vintage-crossbody.jpg',
    category: 'Fashion'
  }
];


export default function App() {
  const [category, setCategory] = useState('All');

  const filteredProducts = category === 'All'
    ? temuProducts
    : temuProducts.filter((p) => p.category === category);

  const categories = ['All', 'Tech', 'Home', 'Fashion'];

  return (
    <main className="min-h-screen bg-[#0c0c1d] text-white px-4 py-10">
      <div className="w-full max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold mb-2">KeywordKode</h1>
          <p className="text-lg text-gray-300">
            Discover trending tools, deals & keyword-powered recommendations
          </p>
        </header>

        {/* Promo Banner */}
        <div className="bg-gradient-to-r from-pink-500 to-yellow-500 text-black px-4 py-3 rounded-xl text-center font-semibold shadow-lg">
          🎉 New Temu Deals Just Dropped – Up to 90% Off! Free Shipping on Select Items!
        </div>

        {/* Category Filters */}
        <div className="flex justify-center flex-wrap gap-3 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full font-medium border ${
                category === cat ? 'bg-teal-400 text-black' : 'bg-[#1a1a2e] text-white border-gray-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#161628] rounded-xl overflow-hidden shadow-md p-4 hover:shadow-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-3"
              />
              <h3 className="text-lg font-bold mb-1">{product.name}</h3>
              <p className="text-yellow-400 font-semibold">{product.price}</p>
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-teal-300 font-semibold hover:underline"
              >
                View Deal
              </a>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="text-sm text-gray-400 text-center pt-8 border-t border-gray-700 space-y-1">
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
        </footer>
      </div>
    </main>
  );
}
