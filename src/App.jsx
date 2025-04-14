import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-[#0a0a23] text-white flex items-center justify-center px-4">
      <div className="w-full max-w-6xl space-y-10 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-mint-400">KeywordKode</h1>
        <p className="text-center text-lg md:text-xl text-gray-300">
          Discover trending tools, deals & keyword-powered recommendations
        </p>

        <div className="space-y-6">
          <div className="bg-[#141432] p-6 md:p-8 rounded-2xl shadow">
            <h2 className="text-xl font-bold mb-2">About This Site</h2>
            <p className="text-gray-300">
              KeywordKode is an AI-powered platform curating the most relevant tools, products, and deals across the web — driven by keyword trends and search automation.
            </p>
          </div>

          <div className="bg-[#141432] p-6 md:p-8 rounded-2xl shadow">
            <h2 className="text-xl font-bold mb-2">Launch Coming Soon</h2>
            <p className="text-gray-300">
              Our full experience is launching shortly. For now, some pages may contain affiliate links to partner offers.
            </p>
          </div>
        </div>

        <footer className="text-center text-sm text-gray-400 space-y-1 mt-10">
          <p>© 2025 KeywordKode. All rights reserved.</p>
          <p>
            Powered by{' '}
            <a
              href="https://quantumnova.com.au"
              className="text-mint-400 font-bold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              QUANTUMNOVA
            </a>
          </p>
          <p className="mt-4 text-xs text-gray-500 leading-5">
            © 2025 QUANTUMNOVA PTY LTD — All rights reserved.
            <br />
            Registered in Australia | ABN 43686016526
            <br />
            <a href="mailto:admin@quantumnova.com.au" className="text-mint-400 hover:underline">
              admin@quantumnova.com.au
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
