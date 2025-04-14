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
          <p>&copy; 2025 KeywordKode. All rights reserved.</p>
          <p>
            Powered by{" "}
            <a
              href="https://quantumnova.com.au"
              style={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              QUANTUMNOVA
            </a>
          </p>
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
    maxWidth: '800px',
    width: '100%',
    textAlign: 'center',
  },
  heading: {
    fontSize: '3rem',
    color: '#78ffd6',
    marginBottom: '0.5rem',
  },
  tagline: {
    fontSize: '1.2rem',
    color: '#b2ffe1',
    marginBottom: '2rem',
  },
  card: {
    backgroundColor: '#17182d',
    padding: '1.5rem 2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
    marginBottom: '1.5rem',
    textAlign: 'left',
  },
  subheading: {
    marginTop: 0,
    fontSize: '1.4rem',
    color: '#d6fbe9',
  },
  text: {
    color: '#a7c3b8',
    fontSize: '1rem',
    margin: '0.5rem 0 0',
  },
  footer: {
    marginTop: '3rem',
    fontSize: '0.85rem',
    color: '#777',
    textAlign: 'center',
    lineHeight: '1.6',
  },
  link: {
    color: '#78ffd6',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};
