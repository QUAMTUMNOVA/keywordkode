export default function App() {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.heading}>KeywordKode</h1>
        <p style={styles.tagline}>
          Discover trending tools, deals & keyword-powered recommendations
        </p>

        <div style={styles.card}>
          <h2 style={styles.subheading}>About This Site</h2>
          <p style={styles.text}>
            KeywordKode is an AI-powered platform curating the most relevant tools, products,
            and deals across the web — driven by keyword trends and search automation.
          </p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.subheading}>Launch Coming Soon</h2>
          <p style={styles.text}>
            Our full experience is launching shortly. For now, some pages may contain affiliate
            links to partner offers.
          </p>
        </div>

        <footer style={styles.footer}>
          &copy; 2025 KeywordKode. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

const styles = {
  body: {
    margin: 0,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#0b0c1a',
    color: '#d6fbe9',
    minHeight: '100vh',
    padding: '2rem',
    display: 'flex',
    justifyContent: 'center',
    boxSizing: 'border-box',
  },
  container: {
    maxWidth: '700px',
    width: '100%',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#78ffd6',
    marginBottom: '0.5rem',
  },
  tagline: {
    fontSize: '1.1rem',
    color: '#b2ffe1',
    marginBottom: '2rem',
  },
  card: {
    backgroundColor: '#17182d',
    padding: '1.5rem 2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
    marginBottom: '1.5rem',
  },
  subheading: {
    marginTop: 0,
    fontSize: '1.4rem',
    color: '#d6fbe9',
  },
  text: {
    color: '#a7c3b8',
    fontSize: '0.95rem',
    margin: '0.5rem 0 0',
  },
  footer: {
    marginTop: '3rem',
    fontSize: '0.8rem',
    color: '#555',
  },
};
