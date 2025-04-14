import React from 'react';

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#0d0b21',
      color: '#b2becd',
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <main style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#93f9d0', textAlign: 'center' }}>
          KeywordKode
        </h1>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', marginTop: '0.5rem' }}>
          Discover trending tools, deals & keyword-powered recommendations
        </p>

        <div style={{
          backgroundColor: '#191735',
          padding: '1.5rem',
          borderRadius: '12px',
          marginTop: '3rem',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
        }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#fff' }}>About This Site</h2>
          <p style={{ marginTop: '0.5rem', fontSize: '1rem' }}>
            KeywordKode is an AI-powered platform curating the most relevant tools, products, and deals across the web — driven by keyword trends and search automation.
          </p>
        </div>

        <div style={{
          backgroundColor: '#191735',
          padding: '1.5rem',
          borderRadius: '12px',
          marginTop: '1.5rem',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
        }}>
          <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#fff' }}>Launch Coming Soon</h2>
          <p style={{ marginTop: '0.5rem', fontSize: '1rem' }}>
            Our full experience is launching shortly. For now, some pages may contain affiliate links to partner offers.
          </p>
        </div>
      </main>

      <footer style={{ marginTop: '4rem', textAlign: 'center', fontSize: '0.9rem', color: '#888' }}>
        <p>© 2025 KeywordKode. All rights reserved.</p>
        <p>
          Powered by{' '}
          <a
            href="https://quantumnova.com.au"
            style={{ color: '#93f9d0', textDecoration: 'none', fontWeight: 'bold' }}
            target="_blank" rel="noopener noreferrer"
          >
            QUANTUMNOVA
          </a>
        </p>
        <p style={{ fontSize: '0.75rem', marginTop: '0.5rem', color: '#666' }}>
          © 2025 QUANTUMNOVA PTY LTD — All rights reserved.<br />
          Registered in Australia | ABN 43686016526<br />
          <a href="mailto:admin@quantumnova.com.au" style={{ color: '#93f9d0', textDecoration: 'none' }}>
            admin@quantumnova.com.au
          </a>
        </p>
      </footer>
    </div>
  );
}
