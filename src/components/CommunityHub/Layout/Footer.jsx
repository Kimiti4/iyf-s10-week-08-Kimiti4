/**
 * 🔹 CommunityHub: Footer Component
 */
function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.links}>
          <a href="#terms" style={styles.link}>Terms</a>
          <a href="#privacy" style={styles.link}>Privacy</a>
          <a href="#help" style={styles.link}>Help</a>
          <a href="#contact" style={styles.link}>Contact</a>
        </div>
        <p style={styles.copyright}>
          &copy; 2026 CommunityHub. Built with ❤️ for IYF Summer 2026.
        </p>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    backgroundColor: '#1e293b',
    color: '#94a3b8',
    padding: '2rem 0',
    marginTop: 'auto'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1.5rem',
    textAlign: 'center'
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    marginBottom: '1rem',
    flexWrap: 'wrap'
  },
  link: {
    color: '#cbd5e1',
    textDecoration: 'none',
    fontSize: '0.875rem',
    transition: 'color 0.2s'
  },
  copyright: {
    margin: 0,
    fontSize: '0.875rem'
  }
}

export default Footer