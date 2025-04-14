export default function App() {
  return (
    <div className="min-h-screen bg-[#0c0c1d] text-white flex flex-col items-center px-4 py-10">
      <h1 className="text-4xl font-bold mb-4 text-center">KeywordKode</h1>
      <p className="text-center text-lg mb-8 max-w-2xl">
        Discover trending tools, deals & keyword-powered recommendations
      </p>

      <div className="w-full max-w-2xl space-y-6">
        <div className="bg-[#16162d] rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">About This Site</h2>
          <p className="text-sm">
            KeywordKode is an AI-powered platform curating the most relevant tools, products, and deals
            across the web — driven by keyword trends and search automation.
          </p>
        </div>

        <div className="bg-[#16162d] rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Launch Coming Soon</h2>
          <p className="text-sm">
            Our full experience is launching shortly. For now, some pages may contain affiliate links to partner offers.
          </p>
        </div>
      </div>

      <footer className="mt-12 text-center text-sm space-y-2">
        <p>© 2025 KeywordKode. All rights reserved.</p>
        <p>
          Powered by{" "}
          <a href="https://quantumnova.com.au" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:underline">
            QUANTUMNOVA
          </a>
        </p>
        <div className="text-xs text-gray-400">
          <p>© 2025 QUANTUMNOVA PTY LTD — All rights reserved.</p>
          <p>Registered in Australia | ABN 43686016526</p>
          <a href="mailto:admin@quantumnova.com.au" className="text-green-200 hover:underline">
            admin@quantumnova.com.au
          </a>
        </div>
      </footer>
    </div>
  );
}
