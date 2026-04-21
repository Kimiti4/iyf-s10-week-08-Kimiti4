/**
 * 🔹 Task 15.2: Header Component
 * Simple navigation header for CommunityHub
 */
function Header() {
  return (
    <header className="header" style={styles.header}>
      <h1 style={styles.logo}>🏘️ CommunityHub</h1>
      <nav style={styles.nav}>
        <a href="#home" style={styles.link}>Home</a>
        <a href="#posts" style={styles.link}>Posts</a>
        <a href="#about" style={styles.link}>About</a>
      </nav>
    </header>
  )
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#3b82f6',
    color: 'white',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  logo: {
    margin: 0,
    fontSize: '1.5rem'
  },
  nav: {
    display: 'flex',
    gap: '1.5rem'
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'opacity 0.2s'
  }
}

export default Header