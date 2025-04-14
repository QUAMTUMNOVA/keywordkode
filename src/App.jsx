import React from 'react';

export default function App() {
  return (
    <div style={styles.wrapper}>
      <header style={styles.header}>
        <h1 style={styles.title}>KeywordKode</h1>
        <p style={styles.tagline}>Discover trending deals, tools & keyword-powered recommendations</p>
      </header>

      <main style={styles.main}>
        <section style={styles.section}>
          <h2>About This Site</h2>
          <p>
            KeywordKode is an AI-driven platform curating the most relevant tools, products, and offers across the internet — powered by the power of keyword research and automation.
          </p>
        </section>

        <section style={styles.section}>
          <h2>Launch Coming Soon</h2>
          <p>
            Our full experience is launching soon. In the meantime, this site may contain affiliate links to partner offers.
          </p>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} KeywordKode. All rights reserved.</p>
        <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>
          Powered by QUANTUMNOVA
        </p>
      </footer>
    </div>
  );
}

const styles = {
  wrapper: {
    fontFamily: 'Arial, sans-serif',
    color: '#fff',
    backgroundColor: '#0c0c1e',
    minHeight: '100vh',
    padding: '2rem',
    lineHeight: '1.6',
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  title: {
    fontSize: '2.8rem',
    color: '#3ef2c6',
  },
  tagline: {
    fontSize: '1.2rem',
    color: '#ccc',
  },
  main: {
    maxWidth: '700px',
    margin: '0 auto',
  },
  section: {
    marginBottom: '2rem',
    backgroundColor: '#191932',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.4)',
  },
  footer: {
    textAlign: 'center',
    marginTop: '3rem',
    borderTop: '1px solid #333',
    paddingTop: '1rem',
  },
};
