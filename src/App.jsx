export default function App() {
  return (
    <div className="min-h-screen bg-[#0c0c1c] text-white flex flex-col items-center px-4 py-10">
      <h1 className="text-4xl font-bold text-[#94fdfd] mb-2 text-center">KeywordKode</h1>
      <p className="text-lg text-center text-slate-300 mb-8">
        Discover trending tools, deals & keyword-powered recommendations
      </p>

      <div className="w-full max-w-3xl space-y-6">
        <section className="bg-[#151528] p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-bold mb-2">About This Site</h2>
          <p className="text-slate-300">
            KeywordKode is an AI-powered platform curating the most relevant tools, products, and deals across the web — driven by keyword trends and search automation.
          </p>
        </section>

        <section className="bg-[#151528] p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-bold mb-2">Launch Coming Soon</h2>
          <p className="text-slate-300">
            Our full experience is launching shortly. For now, some pages may contain affiliate links to partner offers.
          </p>
        </section>
      </div>

      <footer className="mt-12 text-center text-sm text-slate-400 space-y-2">
        <p>© 2025 KeywordKode. All rights reserved.</p>
        <p>
          Powered by <a href="https://quantumnova.com.au" target="_blank" rel="noopener noreferrer" className="text-[#94fdfd] font-bold hover:underline">QUANTUMNOVA</a>
        </p>
        <p>© 2025 QUANTUMNOVA PTY LTD — All rights reserved.</p>
        <p>Registered in Australia | ABN 43686016526</p>
        <p><a href="mailto:admin@quantumnova.com.au" className="text-[#94fdfd] hover:underline">admin@quantumnova.com.au</a></p>
      </footer>
    </div>
  )
}
