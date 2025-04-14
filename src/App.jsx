export default function App() {
  const products = [
    {
      title: "Geevon Weather Station",
      description:
        "Wireless Indoor/Outdoor Thermometer with color display, barometer, calendar, USB charging, adjustable backlight.",
      price: "AU$34.63",
      image:
        "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/d34e8d23a9c01cbb3c6f46ec054aef58.jpg?imageView2/2/w/800/q/70",
      link: "https://temu.to/k/uo4zp3xk1nm",
    },
    // Add more products here as needed
  ];

  return (
    <main className="min-h-screen bg-[#0c0c1d] text-white px-4 py-10 flex justify-center items-start">
      <div className="w-full max-w-4xl space-y-10">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold mb-2">KeywordKode</h1>
          <p className="text-lg text-gray-300">
            Discover trending tools, deals & keyword-powered recommendations
          </p>
        </header>

        {/* About Section */}
        <section className="bg-[#161628] p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-2">About This Site</h2>
          <p className="text-gray-300">
            KeywordKode is an AI-powered platform curating the most relevant tools, products, and deals across the web — driven by keyword trends and search automation.
          </p>
        </section>

        {/* Launch Section */}
        <section className="bg-[#161628] p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Launch Coming Soon</h2>
          <p className="text-gray-300">
            Our full experience is launching shortly. For now, some pages may contain affiliate links to partner offers.
          </p>
        </section>

        {/* Temu Deals Grid */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">🔥 Featured Temu Deals</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-[#161628] p-6 rounded-xl shadow-md text-center"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full max-w-xs mx-auto rounded mb-4"
                />
                <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
                <p className="text-gray-300 text-sm mb-2">{product.description}</p>
                <p className="text-yellow-300 font-medium mb-2">
                  🎉 Exclusive deal [{product.price}]
                </p>
                <a
                  href={product.link}
                  target="_blank"
                  rel="nofollow sponsored"
                  className="inline-block mt-2 px-4 py-2 bg-teal-500 text-white font-semibold rounded hover:bg-teal-400 transition"
                >
                  View Deal
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-sm text-gray-400 text-center pt-6 border-t border-gray-700 space-y-1">
          <p>© 2025 KeywordKode. All rights reserved.</p>
          <p>
            Powered by{" "}
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
            Disclaimer: As an affiliate, we may earn commissions from qualifying
            purchases made through links on this site.
          </p>
        </footer>
      </div>
    </main>
  );
}
