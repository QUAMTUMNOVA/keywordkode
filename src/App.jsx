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
import ProductPage from './pages/ProductPage';

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
        <a href="https://www.tiktok.com/@quantumnovahq" target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:underline">TikTok</a>
        <a href="https://www.youtube.com/@QUANTUMNOVAHQ" target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:underline">Youtube</a>
      </div>
    </header>
  );
}

<section className="relative w-full h-[90vh] overflow-hidden">
  <img
    src="/assets/kk-hero.jpg"
    alt="KeywordKode Hero Banner"
    className="absolute top-0 left-0 w-full h-full object-cover"
  />
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
    <h1 className="text-5xl md:text-6xl font-bold text-lime-300 drop-shadow-lg">KeywordKode</h1>
    <p className="mt-4 text-lg md:text-xl text-lime-100 max-w-2xl drop-shadow-md">
      The AI command center for SEO dominance, affiliate automation & content insight.
    </p>
  </div>
  <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />
</section>


// Recommended Gumroad Resources Block
function RecommendedResources() {
  const resources = [
    {
      title: "🎭 Puppet Prompts: Starter Chaos Pack (Free)",
      price: "A$0+",
      image: "/puppet.png",
      link: "https://quantumnovahq.gumroad.com/l/starter-chaos?layout=profile&a=908554003",
    },
    {
      title: "Elite Traders Blueprint: The Trading Journey from start to finish [All levels]",
      price: "$2,000",
      image: "/ELITEbundle.jpg",
      link: "https://rogers1906.gumroad.com/l/ELITETRADER?layout=discover&a=908554003",
    },
    {
      title: "Internet Pipes: Sift Through the Treasure Trove of Online Data",
      price: "$500+",
      image: "/internetpipescalendar3.png",
      link: "https://stephsmithio.gumroad.com/l/internet?layout=discover&a=908554003",
    },
    {
      title: "The Art of X: Build a Business That Makes You $100/Day (UPDATED MARCH 2025)",
      price: "$297",
      image: "/X gumroad Banner.png",
      link: "https://lifemathmoney.gumroad.com/l/TwitterGuide?layout=discover&a=908554003",
    },
    {
      title: "The essential guide to architecture and interior designing - Ebook",
      price: "$47",
      image: "/yb4dto7lmtnoufuiq97n1gu8ytq1.jpg",
      link: "https://07sketches.gumroad.com/l/xlskB?layout=discover&a=908554003",
    },
    {
      title: "BatFi – Increase Your Mac's Battery Lifespan",
      price: "$15",
      image: "/itjustworks.jpg",
      link: "https://micropixels.gumroad.com/l/batfi?layout=discover&a=908554003",
    },
    {
      title: "The Sober Fitness Bundle",
      price: "$100+",
      image: "/sober.jpg",
      link: "https://soberfitness.gumroad.com/l/thesoberfitnessbundle?layout=discover&a=908554003",
    },
    {
      title: "The Art of Copywriting: Learn to write emails, funnels, and landing pages that SELL",
      price: "$497",
      image: "/TAOC Cover-min.png",
      link: "https://lifemathmoney.gumroad.com/l/copy?layout=discover&a=908554003",
    },
    {
      title: "The Software Engineer's Guidebook",
      price: "$25",
      image: "/EngGuidebook eBook Gumroad.png",
      link: "https://gergelyorosz.gumroad.com/l/engguidebook?layout=discover&a=908554003",
    },
    {
      title: "HFT NQ Minute Bot",
      price: "$400",
      image: "/q3.png",
      link: "https://hftalgo.gumroad.com/l/minbot?layout=discover&a=908554003",
    },
    {
      title: "Notion Money Academy",
      price: "$997",
      image: "/notion.png",
      link: "https://pascio.gumroad.com/l/thenotioncreatorbundle?layout=discover&a=908554003",
    },
    {
      title: "Learn Apex Platform",
      price: "$500",
      image: "/Gumroad Banner resized (11).png",
      link: "https://prismcloud.gumroad.com/l/dhdbgw?layout=discover&a=908554003",
    },
    {
      title: "Mosh-Pro",
      price: "$49",
      image: "/gumroad banner one time.jpg",
      link: "https://airtight.gumroad.com/l/kqeYS?layout=discover&a=908554003",
    },
    {
      title: "Stylized Smart Material 3.0 - Substance 3D Painter",
      price: "$12.99",
      image: "/01.jpg",
      link: "https://3dex.gumroad.com/l/3dexV3?layout=discover&a=908554003",
   },
   {
      title: "Supercharge",
      price: "$16+",
      image: "/screenshot1.jpg",
      link: "https://sindresorhus.gumroad.com/l/supercharge?layout=discover&a=908554003",
   },
   {
      title: "The Ultimate Web Scraping Course",
      price: "$1,000",
      image: "/The Ultimate Web Scraping Course (1).png",
      link: "https://adrianhorning.gumroad.com/l/the-ultimate-web-scraping-course?layout=discover&a=908554003",
   },
   {
      title: "Deployment from Scratch",
      price: "$35",
      image: "/1u3erxyczn3wekybqsrg1jtwvgv4.jpg",
      link: "https://strzibny.gumroad.com/l/deploymentfromscratch?layout=discover&a=908554003",
   },
   {
      title: "Testing Swift",
      price: "$50",
      image: "/gx5bzjuku17rwxbwkyu04g1z7o2b.jpg",
      link: "https://twostraws.gumroad.com/l/testing-swift?layout=discover&a=908554003",
   },
   {
      title: "Hacking with watchOS",
      price: "$50",
      image: "/8u0xdmkgwzjjobhop08u1pn85mum.jpg",
      link: "https://twostraws.gumroad.com/l/hwwatchos?layout=discover&a=908554003",
   },
   {
      title: "Professional Photoshop UXP (Single User)",
      price: "$170",
      image: "/Gumroad_Hero_SingleUser.jpg",
      link: "https://davidebarranca.gumroad.com/l/ProPSUXP?layout=discover&a=908554003",
   },
   {
      title: "Prompt Engineering from Zero to Hero - Master the Art of AI Interaction",
      price: "$59",
      image: "/20250212_Cover4 (2)-1.png",
      link: "https://nirdiamant.gumroad.com/l/mtxrfk?layout=discover&a=908554003",
   },
   {
      title: "Django for Beginners, Fifth Edition",
      price: "$49.99",
      image: "/title_page.png",
      link: "https://wsvincent.gumroad.com/l/aFiMm?layout=discover&a=908554003",
   },
   {
      title: "StoryRadar: Advanced Story Viewer for Agencies & VIP",
      price: "$2,480",
      image: "/storyradar-2.jpeg",
      link: "https://tropicalabs.gumroad.com/l/storyradar?layout=discover&a=908554003",
   },
   {
      title: "Ecommerce with Next.js (extended version, 22+ hours)",
      price: "$19",
      image: "/mern-ecommerce2-gumroad.jpg",
      link: "https://codingwithdawid.gumroad.com/l/ecommerce?layout=discover&a=908554003",
   },
   {
      title: "Game Boy Coding Adventure",
      price: "$10",
      image: "/screenshot_cover.png",
      link: "https://mdagois.gumroad.com/l/CODQn?layout=discover&a=908554003",
   },
   {
      title: "Better Keyframing! (Music Overlay Script)",
      price: "$10",
      image: "/pgh4yp2nxiayiqmufkgkeoqliw1t.jpg",
      link: "https://surfknasen.gumroad.com/l/XccBE?layout=discover&a=908554003",
   },
   {
      title: "Tao of Node",
      price: "$19",
      image: "/og (2).png",
      link: "https://alexanderkondov.gumroad.com/l/tao-of-node?layout=discover&a=908554003",
   },
   {
      title: "Cryptocurrency Master Course",
      price: "$333",
      image: "/Cryptocurrency Master Course-3.png",
      link: "https://jamescryptoguru.gumroad.com/l/CryptocurrencyMasterCourse?layout=discover&a=908554003",
   },
   {
      title: "Tokyo Back Alleys collection",
      price: "$250",
      image: "/image (78).png",
      link: "https://jamajurabaev.gumroad.com/l/usolov?layout=discover&a=908554003",
   },
   {
      title: "StoryRadar Elite - View Stories to Attract Raving Fans",
      price: "$800 a month",
      image: "/777777.png",
      link: "https://tropicalabs.gumroad.com/l/storyradar-elite?layout=discover&a=908554003",
   }, 
   {
      title: "The Watercolor MaxPack - Brushes for Procreate",
      price: "$25",
      image: "/hpok2840il6bn752caf3eoia2019.jpg",
      link: "https://maxulichney.gumroad.com/l/watercolormaxpack?layout=discover&a=908554003",
   },
  {
      title: "ALL IN ONE SOUND LIBRARY BUNDLE",
      price: "$25+",
      image: "/FTUS - Gumroad banners.jpg",
      link: "https://ftus.gumroad.com/l/allinonebundle?layout=discover&a=908554003",
   },
   {
      title: "3D Cars: Inside and Out in Blender",
      price: "$60",
      image: "/Mountain-Back-1.jpg",
      link: "https://cgmasters.gumroad.com/l/3d-cars?layout=discover&a=908554003",
   },
   {
      title: "Mech Squad Collection",
      price: "$250",
      image: "/BMS_MinGuen_Promo_V1_Topview.jpg",
      link: "https://jamajurabaev.gumroad.com/l/reCkX?layout=discover&a=908554003",
   },
   {
      title: "Ultimate Blender Procedural Material Pack",
      price: "$75+",
      image: "/Ultimate Procedural Material Pack-0.0.13.jpg",
      link: "https://ryankingart.gumroad.com/l/ultimate-materials?layout=discover&a=908554003",
   },
   {
      title: "DAUB® SuperBundle - 572+ Pro Tools and 60+ Textures for Clip Studio Paint",
      price: "€16.99",
      image: "/vwkevp3ns0pxdhl04bmafjppkz06.jpg",
      link: "https://daub.gumroad.com/l/EkMc?layout=discover&a=908554003",
   }
 ];

 return (
  <section className="py-12 px-4 bg-gray-50">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Recommended Resources</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {resources.map((item, i) => (
          <a
            href={item.link}
            key={i}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden border"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-md mb-1">{item.title}</h3>
              <span className="text-sm text-gray-500">{item.price}</span>
              
            </div>
          </a>
        ))}
      </div>
        <p className="text-sm text-gray-600 mt-6 max-w-3xl mx-auto text-center">
            Discover top-rated affiliate tools, resources, and digital guides — handpicked from Gumroad and Temu. From financial blueprints to productivity tools, KeywordKode helps you explore high-value solutions in one place.
        </p>
    </div>
  </section>
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
  { id: 28, name: "Industrial Endoscope Camera – 4.3\" LCD, Plumbing/Repair", price: 'AU$33.36', link: 'https://temu.to/k/uamtwsafx3g', image: '/endoscope.jpg', category: 'Tech' },
  { id: 29, name: "Men's Retro Boots", price: 'AU$30.71', link: 'https://temu.to/k/uu03ynha2qp', image: '/retro-boots.jpg', category: 'Fashion' },
  { id: 30, name: "Men's Casual Zip-Up Turtleneck Sweater", price: 'AU$1.57', link: 'https://temu.to/k/umbb5g2laex', image: '/mens-sweater.jpg', category: 'Fashion' },
  { id: 31, name: "CIEPHIA Vintage Leather RFID Wallet", price: 'AU$0.87', link: 'https://temu.to/k/uu5i2qg6zsh', image: '/leather-wallet.jpg', category: 'Fashion' },
  { id: 32, name: "Furniture Lifter & Move Roller Tools (Set of 5)", price: 'AU$14.48', link: 'https://temu.to/k/u8vkqpjltul', image: '/furniture-lifter.jpg', category: 'Home' },
  { id: 33, name: "Men's Classic Denim Jeans", price: 'AU$2.69', link: 'https://temu.to/k/uf6k682mkg3', image: '/denim-jeans.jpg', category: 'Fashion' },
  { id: 34, name: "Large Capacity Business Laptop Backpack", price: 'AU$3.49', link: 'https://temu.to/k/u4xmvs0q06r', image: '/laptop-backpack.jpg', category: 'Fashion' },
  { id: 35, name: "LIGE Men's Smart Watch – Wireless Calls", price: 'AU$21.49', link: 'https://temu.to/k/untqe9jk39y', image: '/smart-watch.jpg', category: 'Tech' },
  { id: 36, name: "Men's Durable Walking Boots", price: 'AU$1.87', link: 'https://temu.to/k/u9ugubn8hne', image: '/durable-boots.jpg', category: 'Fashion' },
  { id: 37, name: "2-in-1 Portable Oil Sprayer & Dispenser", price: 'AU$0.52', link: 'https://temu.to/k/ueibx9cioth', image: '/oil-sprayer.jpg', category: 'Home' },
  { id: 38, name: "360° Rotating Ratchet Wrench", price: 'AU$1.01', link: 'https://temu.to/k/u7zyrlkhme5', image: '/rotating-ratchet.jpg', category: 'Tools' },
  { id: 39, name: "Advanced V519 OBD2 Scanner", price: 'AU$3.55', link: 'https://temu.to/k/ujgea3qsk5o', image: '/obd-scanner.jpg', category: 'Tech' },
  { id: 40, name: "12V DC Portable Tire Inflator", price: 'AU$5.19', link: 'https://temu.to/k/u77xqcfcjy5', image: '/tire-inflator.jpg', category: 'Tech' },
  { id: 41, name: "Men's Aussie Kangaroo Print Polo Shirt", price: 'AU$1.05', link: 'https://temu.to/k/ufynwjrmsem', image: '/aussie-shirt.jpg', category: 'Fashion' },
  { id: 42, name: "Men's Hawaiian 3D Floral Shirt", price: 'AU$1.55', link: 'https://temu.to/k/u2w5ds1gvwc', image: '/fashion-shirt.jpg', category: 'Fashion' },
  { id: 43, name: "Heavy-Duty Industrial Shears", price: 'AU$0.89', link: 'https://temu.to/k/u1go534hrqn', image: '/industrial-shears.jpg', category: 'Tools' },
  { id: 44, name: "Rechargeable Electric Pepper Grinder", price: 'AU$13.29', link: 'https://temu.to/k/ud41yb1c9ht', image: '/electric-grinder.jpg', category: 'Home' },
  { id: 45, name: "Waterproof Heavy Duty Dog Seat Cover", price: 'AU$12.44', link: 'https://temu.to/k/uje539s89yl', image: '/dog-seat-cover.jpg', category: 'Pets' },
  { id: 46, name: "Non Slip Recliner Chair Cover", price: 'AU$2.49', link: 'https://temu.to/k/u45kga8ixwn', image: '/couch-cover.jpg', category: 'Home' },
  { id: 47, name: "Minor Dent Removal Paintless Kit", price: 'AU$0.69', link: 'https://temu.to/k/uzhr6ofdazc', image: '/car-dent-puller.jpg', category: 'Automotive' },
  { id: 48, name: "Soft Massage Neck Pillow (2pcs)", price: 'AU$10.95', link: 'https://temu.to/k/ualjo3fln1h', image: '/massage-pillow.jpg', category: 'Home' },
  { id: 49, name: "No Pull Tactical Dog Harness", price: 'AU$15.04', link: 'https://temu.to/k/ua6rqr266fe', image: '/dog-harness.jpg', category: 'Pets' },
  { id: 50, name: "Car Scratch Repair Wax", price: 'AU$0.78', link: 'https://temu.to/k/uua6y4z6j5e', image: '/scratch-repair-wax.jpg', category: 'Automotive' },
  { id: 51, name: "Golf Swing Practice Mat", price: 'AU$26.49', link: 'https://temu.to/k/urn275ngrtk', image: '/golf-training.jpg', category: 'Sports' },
  { id: 52, name: "No-Punch Paper Towel Holder", price: 'AU$0.69', link: 'https://temu.to/k/unkcbsz3vkh', image: '/roll-holder.jpg', category: 'Home' },
  { id: 53, name: "Men's Polarized UV Sunglasses", price: 'AU$1.45', link: 'https://temu.to/k/u8f6rn9mfh4', image: '/mens-uv.jpg', category: 'Accessories' },
  { id: 54, name: "Ultra Compact Deep Tissue Massage Gun", price: 'AU$1.44', link: 'https://temu.to/k/ul9gmtp9rse', image: '/massage-gun.jpg', category: 'Health' },
  { id: 55, name: "Heavy Duty Suspenders for Men", price: 'AU$9.89', link: 'https://temu.to/k/ucqqanzj2em', image: '/suspenders.jpg', category: 'Accessories' },
  { id: 56, name: "2-in-1 Cat Water Fountain & Feeder", price: 'AU$15.04', link: 'https://temu.to/k/uap7bdiq8c0', image: '/cat-station.jpg', category: 'Pets' },
  { id: 57, name: "Vintage Men's Crossbody Chest Bag", price: 'AU$1.71', link: 'https://temu.to/k/uywwaafrice', image: '/chest-bag.jpg', category: 'Accessories' },
  { id: 58, name: "Stainless Steel Pot Lid Rack", price: 'AU$0.89', link: 'https://temu.to/k/u7shj5mv04f', image: '/kitchen-rack.jpg', category: 'Home' },
  { id: 59, name: "High-Pressure Handheld Car Washer", price: 'AU$1.69', link: 'https://temu.to/k/ui0k5y2y5rk', image: '/handheld-washer.jpg', category: 'Automotive' },
  { id: 60, name: "Rechargeable Milk Frother with 2 Whisks", price: 'AU$10.14', link: 'https://temu.to/k/utb79zdr46z', image: '/milk-frother.jpg', category: 'Home' },
  { id: 61, name: "BBQ Grill Cleaning Brush Brick", price: 'AU$2.44', link: 'https://temu.to/k/u172n7dufv5', image: '/grill-cleaner.jpg', category: 'Outdoor' },
  { id: 62, name: "BBQ Rolling Grill Basket", price: 'AU$0.84', link: 'https://temu.to/k/u4bd5ryl72s', image: '/grill-basket.jpg', category: 'Outdoor' },
  { id: 63, name: "Ultimate Can Organizer System", price: 'AU$0.84', link: 'https://temu.to/k/ukrsti86dsh', image: '/can-organiser.jpg', category: 'Home' },
  { id: 64, name: "5-Blade Stainless Steel Kitchen Scissors", price: 'AU$0.65', link: 'https://temu.to/k/uzci4m7pv1s', image: '/multiblade-scissors.jpg', category: 'Home' },
  { id: 65, name: "Non-Slip Bathtub Mat", price: 'AU$12.94', link: 'https://temu.to/k/uniluub5bef', image: '/bathtub-mat.jpg', category: 'Home' },
  { id: 66, name: "110L Large Laundry Basket with Lid", price: 'AU$30.14', link: 'https://temu.to/k/u5lhbqw6mzl', image: '/laundry-basket.jpg', category: 'Home' },
  { id: 67, name: "Non-Stick Tamagoyaki Pan", price: 'AU$1.79', link: 'https://temu.to/k/u9n8j8aa1cs', image: '/tamagoyaki-pan.jpg', category: 'Home' },
  { id: 68, name: "Welcome Home Indoor Rug", price: 'AU$4.54', link: 'https://temu.to/k/ui5kwp9u2qy', image: '/doormat.jpg', category: 'Home' },
  { id: 69, name: "Potty Training Seat with Ladder", price: 'AU$27.64', link: 'https://temu.to/k/uzchxm0evbk', image: '/potty-training.jpg', category: 'Home' },
  { id: 70, name: "Large Silicone Sink Organizer Caddy", price: 'AU$1.70', link: 'https://temu.to/k/uq3u93tfmk5', image: '/sponge-holder.jpg', category: 'Home' },
  { id: 71, name: "Transparent Shoe Boxes (6/12pcs)", price: 'AU$20.39', link: 'https://temu.to/k/u4lzbijur2h', image: '/shoe-display.jpg', category: 'Home' },
  { id: 72, name: "Pet Food Storage Container", price: 'AU$3.86', link: 'https://temu.to/k/u1e6o6rm4lg', image: '/food-storage.jpg', category: 'Pets' },
  { id: 73, name: "Baby Hand & Footprint Kit", price: 'AU$13.09', link: 'https://temu.to/k/uy84ko7rv1e', image: '/baby-print-kit.jpg', category: 'Home' },
  { id: 74, name: "Large Capacity Egg Holder", price: 'AU$0.60', link: 'https://temu.to/k/uck0xvevb6f', image: '/egg-storage.jpg', category: 'Home' },
  { id: 75, name: "Industrial Grade Wire Stripper Pliers", price: 'AU$1.44', link: 'https://temu.to/k/u12bm8sxx1e', image: '/wire-stripper.jpg', category: 'Tools' },
  { id: 76, name: "Club Scrub Portable Golf Cleaner", price: 'AU$10.43', link: 'https://temu.to/k/u9nfwjn2dsg', image: '/club-scrub.jpg', category: 'Sports' },
  { id: 77, name: "Grip Strength Trainer", price: 'AU$1.58', link: 'https://temu.to/k/ukvx3h3tgvc', image: '/grip.jpg', category: 'Fitness' },
  { id: 78, name: "Telescopic Pot Rack Organizer", price: 'AU$2.54', link: 'https://temu.to/k/uagvn2un1y3', image: '/pot-organiser.jpg', category: 'Home' },
  { id: 79, name: "Air Fryer Cheat Sheet Magnets", price: 'AU$1.24', link: 'https://temu.to/k/up2sspx1x59', image: '/airfry-guide.jpg', category: 'Home' },
  { id: 80, name: "Rotating Rice Bucket Storage", price: 'AU$14.44', link: 'https://temu.to/k/uibhg2vuia5', image: '/rotating-storage.jpg', category: 'Home' },
  { id: 81, name: "Rotating Coffee Capsule Holder", price: 'AU$16.09', link: 'https://temu.to/k/uu0n6o24482', image: '/capsule-rack.jpg', category: 'Home' }
]

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
      <a href="https://www.ebay.com/e/fashion/jordan-ag-110220?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339107807&toolid=20014&customid=&mkevt=1" target="_blank" rel="noopener noreferrer" className="bg-[#161628] p-4 rounded-xl text-center hover:shadow-lg">
        <h3 className="text-lg font-bold mb-2">Jordan Sneakers</h3>
        <p className="text-yellow-400">Fresh Drops Weekly</p>
      </a>
      <a href="https://www.ebay.com/e/toys/ccg-one-stop-shop?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339107807&toolid=20014&customid=&mkevt=1" target="_blank" rel="noopener noreferrer" className="bg-[#161628] p-4 rounded-xl text-center hover:shadow-lg">
        <h3 className="text-lg font-bold mb-2">CCG Card Shop</h3>
        <p className="text-yellow-400">TCG + Collectibles</p>
      </a>
      <a href="https://www.ebay.com/e/fashion/ag-handbags-versace-030623?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339107807&toolid=20014&customid=&mkevt=1" target="_blank" rel="noopener noreferrer" className="bg-[#161628] p-4 rounded-xl text-center hover:shadow-lg">
        <h3 className="text-lg font-bold mb-2">Versace Handbags</h3>
        <p className="text-yellow-400">Luxury Statement Pieces</p>
      </a>
      <a href="https://www.ebay.com/e/_electronics/certified-refurbished-pc-gaming?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339107807&toolid=20014&customid=&mkevt=1" target="_blank" rel="noopener noreferrer" className="bg-[#161628] p-4 rounded-xl text-center hover:shadow-lg">
        <h3 className="text-lg font-bold mb-2">Refurb Gaming PCs</h3>
        <p className="text-yellow-400">Certified + Discounted</p>
      </a>
      <a href="https://www.ebay.com/e/_electronics/save-on-microsoft?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339107807&toolid=20014&customid=&mkevt=1" target="_blank" rel="noopener noreferrer" className="bg-[#161628] p-4 rounded-xl text-center hover:shadow-lg">
        <h3 className="text-lg font-bold mb-2">Save on Microsoft</h3>
        <p className="text-yellow-400">Laptops, Surface, & More</p>
      </a>
      <a href="https://www.ebay.com/e/_electronics/ebay-refurbished-tablets?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339107807&toolid=20014&customid=&mkevt=1" target="_blank" rel="noopener noreferrer" className="bg-[#161628] p-4 rounded-xl text-center hover:shadow-lg">
        <h3 className="text-lg font-bold mb-2">Refurbished Tablets</h3>
        <p className="text-yellow-400">Certified Tech Bargains</p>
      </a>
      <a href="https://www.ebay.com/e/fashion/jewelry-luxe-for-less-092123?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339107807&toolid=20014&customid=&mkevt=1" target="_blank" rel="noopener noreferrer" className="bg-[#161628] p-4 rounded-xl text-center hover:shadow-lg">
        <h3 className="text-lg font-bold mb-2">Luxe Jewelry Deals</h3>
        <p className="text-yellow-400">Understated Bling</p>
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

        <RecommendedResources />
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


export { RecommendedResources };
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:category" element={<CategoryPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<PostPage />} />
        <Route path="/products/:slug" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}