import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useSearchParams,
  useNavigate
} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import BlogPage from './blog/BlogPage';
import PostPage from './blog/PostPage';

const categories = ['All', 'Tech', 'Home', 'Fashion', 'Tools'];
const ITEMS_PER_PAGE = 9;

function SiteHeader() {
  return (
    <header className="text-center space-y-2">
      <Link to="/" className="text-4xl font-bold mb-2 block">
        <span className="text-teal-400">Keyword</span>
        <span className="text-yellow-300">Kode</span>
      </Link>
      <p className="text-lg text-gray-300">
        Discover trending tools, deals & keyword-powered recommendations
      </p>

      {/* Navigation Links */}
      <div className="pt-2 flex justify-center gap-6 text-sm font-medium">
        <Link to="/" className="text-teal-300 hover:underline">Home</Link>
        <Link to="/blog" className="text-teal-300 hover:underline">Blog</Link>
      </div>

      {/* Social Links (separate row) */}
      <div className="pt-1 flex justify-center gap-6 text-sm font-medium">
        <a href="https://facebook.com/quantumnovaHQ" target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:underline">Facebook</a>
        <a href="https://instagram.com/quantumnova_hq" target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:underline">Instagram</a>
        <a href="https://x.com/quantumnovaHQ" target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:underline">X</a>
      </div>
    </header>
  );
}


const temuProducts = [
  { id: 1, name: 'Geevon Weather Station', price: 'AU$34.63', link: 'https://temu.to/k/uo4zp3xk1nm', image: '/geevon-weather-station.jpg', category: 'Home' },
  { id: 2, name: 'Non-Stick Burger Press + 100 Papers', price: 'AU$7.09', link: 'https://temu.to/k/ummn9y2forq', image: '/non-stick-burger-press.jpg', category: 'Home' },
  { id: 3, name: 'Dual Dash Cam - Night Vision + Parking Mode', price: 'AU$3.36', link: 'https://temu.to/k/uq5mp7evlsv', image: '/dual-dash-cam.jpg', category: 'Tech' },
  { id: 4, name: 'Men’s Color Block Half-Zip Sweater', price: 'AU$1.39', link: 'https://temu.to/k/upte1fp8ove', image: '/mens-color-block.jpg', category: 'Fashion' },
  { id: 5, name: 'Cordless Engraving Rotary Tool', price: 'AU$3.69', link: 'https://temu.to/k/uh15ulei996', image: '/cordless-engraving-rotary.jpg', category: 'Tech' },
  { id: 6, name: 'Men’s Vintage Crossbody Satchel', price: 'AU$1.39', link: 'https://temu.to/k/u9893t7qoor', image: '/mens-vintage-crossbody.jpg', category: 'Fashion' },
  { id: 7, name: "Men's Breathable Hiking Sandals", price: 'AU$3.55', link: 'https://temu.to/k/uooojb1zw9m', image: '/mens-breathable-hiking.jpg', category: 'Fashion' },
  { id: 8, name: "Men's Vintage Ankle Boots with Zipper", price: 'AU$10.16', link: 'https://temu.to/k/ujbvh940bsi', image: '/mens-ankle-boots.jpg', category: 'Fashion' },
  { id: 9, name: 'Xbox Series X Cooling Stand + Charging Hub', price: 'AU$25.96', link: 'https://temu.to/k/uxer7hwfz7n', image: '/xbox-cooling-stand.jpg', category: 'Tech' },
  { id: 10, name: 'Professional Multi-Tool Car Repair Kit', price: 'AU$32.54', link: 'https://temu.to/k/ujqucf79px2', image: '/car-repair.jpg', category: 'Tech' },
  { id: 11, name: '1:18 High-Speed Off-Road RC Car – 15KM/H', price: 'AU$3.59', link: 'https://temu.to/k/uj0j50zjdxu', image: '/high-speed.jpg', category: 'Tech' },
  { id: 12, name: "Men's Thickened Hooded Winter Jacket", price: 'AU$54.17', link: 'https://temu.to/k/ucyn4ps414o', image: '/thickened-hooded.jpg', category: 'Fashion' },
  { id: 13, name: 'PU Leather Car Seat Cover - Red & Black', price: 'AU$2.84', link: 'https://temu.to/k/unwqat63smh', image: '/car-seat-covers.jpg', category: 'Home' },
  { id: 14, name: '2024 Model Wireless Earbuds with LED Display', price: 'AU$0.64', link: 'https://temu.to/k/uucesycdmsm', image: '/2024-wireless-headphone.jpg', category: 'Tech' },
  { id: 15, name: 'Large Capacity Outdoor Travel Backpack', price: 'AU$3.44', link: 'https://temu.to/k/uhb1drhcwix', image: '/outdoor-travel-bag.jpg', category: 'Fashion' },
  { id: 16, name: "Men's Blade Sneakers – Shock Absorption", price: 'AU$0.99', link: 'https://temu.to/k/usir8cs190v', image: '/mens-blade-sneakers.jpg', category: 'Fashion' },
  { id: 17, name: '2.4G Remote Control Excavator – 11 Channels', price: 'AU$11.69', link: 'https://temu.to/k/u7pu9742j4l', image: '/rc-excavator.jpg', category: 'Tech' },
  { id: 18, name: "Men's Blade Type Shoes – Lightweight Running Sneakers", price: 'AU$25.94', link: 'https://temu.to/k/u2c711xtg9g', image: '/ultralight-blade.jpg', category: 'Fashion' },
  { id: 19, name: "Large Casual Men's Travel Duffel Bag – Multi-Compartment", price: 'AU$12.59', link: 'https://temu.to/k/ualoj6fgl80', image: '/leather-travel-bag.jpg', category: 'Fashion' },
  { id: 20, name: "Kinglucky Wireless Boombox Speaker – Subwoofer & Disco Light", price: 'AU$35.54', link: 'https://temu.to/k/uwczkgu3d7c', image: '/wireless-boombox.jpg', category: 'Tech' },
  { id: 21, name: "TG534 Portable Wireless Stereo Speaker – Dual Speakers", price: 'AU$2.87', link: 'https://temu.to/k/ukcqw17ukvy', image: '/portable-speaker.jpg', category: 'Tech' },
  { id: 22, name: "LIGE 2023 Smart Watch – Touch Screen, Fitness, Steel Band", price: 'AU$33.24', link: 'https://temu.to/k/uwzqs17gf3x', image: '/lige-smart-watch.jpg', category: 'Tech' },
  { id: 23, name: "Stainless Steel Manual Citrus Juicer – Lemon/Orange Squeezer", price: 'AU$11.69', link: 'https://temu.to/k/uhyd3clg50p', image: '/orange-juicer.jpg', category: 'Home' },
  { id: 24, name: "Compact Stainless Steel Deep Fryer Pan – Lid & Thermometer", price: 'AU$16.58', link: 'https://temu.to/k/u0b0rbvs8sx', image: '/compact-deep-fryer.jpg', category: 'Home' },
  { id: 25, name: "Mini Wireless Car Vacuum Cleaner – Wet/Dry, Suction + Blower", price: 'AU$5.04', link: 'https://temu.to/k/utm5suzp5dq', image: '/car-vacuum.jpg', category: 'Tech' },
  { id: 26, name: "HOTU Sand Blaster – Anti-Rust Manual Blasting Gun", price: 'AU$19.10', link: 'https://temu.to/k/u7ui9clvucs', image: '/handheld-sandblaster.jpg', category: 'Tech' },
  { id: 27, name: "Lightweight Men's Outdoor Jacket – Hooded Navy Windbreaker", price: 'AU$2.97', link: 'https://temu.to/k/uisu1huuy8j', image: '/mens-windbreaker.jpg', category: 'Fashion' },
  { id: 28, name: "Industrial Endoscope Camera – 4.3\" LCD, Plumbing/Repair", price: 'AU$33.36', link: 'https://temu.to/k/uamtwsafx3g', image: '/endoscope.jpg', category: 'Tech' }
];

function EbayDeals() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-10">
      <a href="https://www.ebay.com/e/home-garden/certified-refurbished-outdoor-power-equipment?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339107807&toolid=20014&customid=&mkevt=1" target="_blank" rel="noopener noreferrer" className="bg-[#161628] p-4 rounded-xl text-center hover:shadow-lg">
        <h3 className="text-lg font-bold mb-2">Refurbished Outdoor Power</h3>
        <p className="text-yellow-400">Up to 60% Off</p>
      </a>
      <a href="https://www.ebay.com/e/fashion/ag-mens-wallets-042722?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339107807&toolid=20014&customid=&mkevt=1" target="_blank" rel="noopener noreferrer" className="bg-[#161628] p-4 rounded-xl text-center hover:shadow-lg">
        <h3 className="text-lg font-bold mb-2">Men's Wallets</h3>
        <p className="text-yellow-400">Genuine Luxury</p>
      </a>
      <a href="https://www.ebay.com/e/fashion/ag-handbags-tom-ford-100322?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339107807&toolid=20014&customid=&mkevt=1" target="_blank" rel="noopener noreferrer" className="bg-[#161628] p-4 rounded-xl text-center hover:shadow-lg">
        <h3 className="text-lg font-bold mb-2">Tom Ford Bags</h3>
        <p className="text-yellow-400">Authenticity Guarantee</p>
      </a>
    </div>
  );
}

function ProductGrid({ filterCategory }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1');
  const [sortOrder, setSortOrder] = useState('asc');

  const filteredProducts = temuProducts
    .filter(p => filterCategory === 'All' || p.category === filterCategory)
    .sort((a, b) => {
      const priceA = parseFloat(a.price.replace('AU$', ''));
      const priceB = parseFloat(b.price.replace('AU$', ''));
      return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
    });

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const currentPageProducts = filteredProducts.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const goToPage = (newPage) => {
    setSearchParams({ page: newPage });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between flex-wrap items-center gap-4">
        <div className="flex gap-3 items-center">
          <span className="text-sm text-gray-400">Sort by price:</span>
          <button onClick={() => setSortOrder('asc')} className="text-sm text-teal-300 hover:underline">Low to High</button>
          <button onClick={() => setSortOrder('desc')} className="text-sm text-teal-300 hover:underline">High to Low</button>
        </div>
        <div className="text-sm text-gray-400">Page {page} of {totalPages}</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentPageProducts.map(product => (
          <div key={product.id} className="bg-[#161628] rounded-xl p-4 shadow-md hover:shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-3" />
            <h3 className="text-lg font-bold mb-1">{product.name}</h3>
            <p className="text-yellow-400 font-semibold">{product.price}</p>
            <a href={product.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-teal-300 font-semibold hover:underline">View Deal</a>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-3 pt-6">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => goToPage(i + 1)}
            className={`px-3 py-1 rounded ${page === i + 1 ? 'bg-teal-500 text-black' : 'bg-[#1a1a2e] text-white'}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="text-sm text-gray-400 text-center pt-8 border-t border-gray-700 space-y-1 mt-10">
      <p>© 2025 KeywordKode. All rights reserved.</p>
      <p>Powered by <a href="https://quantumnova.com.au" className="text-teal-300 font-semibold hover:underline">QUANTUMNOVA</a></p>
      <p>© 2025 QUANTUMNOVA PTY LTD — All rights reserved.</p>
      <p>Registered in Australia | ABN 43686016526</p>
      <p><a href="mailto:admin@quantumnova.com.au" className="text-teal-300 hover:underline">admin@quantumnova.com.au</a></p>
      <div className="flex justify-center gap-4 pt-4">
      </div>
      <p className="pt-2 text-gray-500 italic">
        Disclaimer: As an affiliate, we may earn commissions from qualifying purchases made through links on this site.
      </p>
      <p className="pt-2 text-gray-500">
        <a href="/privacy.html" className="hover:underline text-teal-300">Privacy Policy</a> |
        <a href="/refund.html" className="hover:underline text-teal-300">Refund Policy</a> |
        <a href="/terms.html" className="hover:underline text-teal-300">Terms & Conditions</a> |
        <a href="/rss.xml" className="hover:underline text-teal-300">RSS</a>
      </p>
    </footer>
  );
}

function CategoryPage() {
  const { category } = useParams();
  const categoryMap = {
    tech: 'Tech',
    home: 'Home',
    fashion: 'Fashion',
    tools: 'Tools'
  };
  const pageCategory = categoryMap[category?.toLowerCase()] || 'All';

  return (
    <main className="min-h-screen bg-[#0c0c1d] text-white px-4 py-10">
      <Helmet>
        <title>{pageCategory} Deals – KeywordKode</title>
        <meta name="description" content={`Explore trending ${pageCategory.toLowerCase()} items on Temu under $10.`} />
        <meta property="og:title" content={`${pageCategory} Deals – KeywordKode`} />
        <meta property="og:url" content={`https://keywordkode.com.au/${category}`} />
        <meta property="og:image" content="https://keywordkode.com.au/og-banner.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="w-full max-w-6xl mx-auto space-y-8">
        <SiteHeader />
        <h2 className="text-2xl font-bold mb-4">{pageCategory} Deals</h2>
        <ProductGrid filterCategory={pageCategory} />
        <Footer />
      </div>
    </main>
  );
}

function HomePage() {
  return (
    <main className="min-h-screen bg-[#0c0c1d] text-white px-4 py-10">
      <Helmet>
        <title>KeywordKode – Trending Temu Deals & Picks</title>
        <meta name="description" content="Explore viral products under $10 from Temu. Updated daily. Tech, fashion, home & tools." />
        <meta property="og:title" content="KeywordKode – Discover Trending Temu Deals" />
        <meta property="og:description" content="Daily deals from Temu, curated for tech-lovers, bargain hunters, and viral trends." />
        <meta property="og:url" content="https://keywordkode.com.au/" />
        <meta property="og:image" content="https://keywordkode.com.au/og-banner.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="w-full max-w-6xl mx-auto space-y-10">
        <SiteHeader />

        <div className="flex justify-center flex-wrap gap-3 pt-2">
          {categories.slice(1).map((cat) => (
            <Link
              key={cat}
              to={`/${cat.toLowerCase()}`}
              className="px-4 py-2 rounded-full font-medium border bg-[#1a1a2e] text-white border-gray-600 hover:bg-teal-400 hover:text-black"
            >
              {cat}
            </Link>
          ))}
        </div>

        <div className="bg-gradient-to-r from-pink-500 to-yellow-500 text-black px-4 py-3 rounded-xl text-center font-semibold shadow-lg">
          🎉 New Temu Deals Just Dropped – Up to 90% Off! Free Shipping on Select Items!
        </div>

        <ProductGrid filterCategory="All" />
<EbayDeals />

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
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<PostPage />} />
      </Routes>
    </Router>
  );
}