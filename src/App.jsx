import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-[#0c0c1d] text-white px-4 py-8">
      <main className="w-full max-w-4xl flex flex-col gap-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-green-300">KeywordKode</h1>
        <p className="text-center text-lg text-gray-300">
          Discover trending tools, deals & keyword-powered recommendations
        </p>

        <section className="bg-[#18182f] p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">About This Site</h2>
          <p className="text-gray-300">
            KeywordKode is an AI-powered platform curating the most relevant tools, products, and deals across the web — driven by keyword trends and search automation.
          </p>
        </section>

        <section className="bg-[#18182f] p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Launch Coming Soon</h2>
          <p className="text-gray-300">
            Our full experience is launching shortly. For now, some pages may contain affiliate links to partner offers.
          </p>
        </section>
      </main>

      <footer className="mt-12 w-full max-w-4xl text-center text-sm text-gray-400 space-y-2">
        <p>© 2025 KeywordKode. All rights reserved.</p>
        <p>
          Powered by{' '}
          <a href="https://quantumnova.com.au" target="_blank" rel="noopener noreferrer" className="text-green-300 font-semibold hover:underline">
            QUANTUMNOVA
          </a>
        </p>
        <div className="text-xs text-gray-500 mt-2">
          <p>© 2025 QUANTUMNOVA PTY LTD — All rights reserved.</p>
          <p>Registered in Australia | ABN 43686016526</p>
          <a href="mailto:admin@quantumnova.com.au" className="text-green-300 font-semibold hover:underline">
            admin@quantumnova.com.au
          </a>
        </div>
      </footer>
    </div>
  );
}
