/**
 * 🔹 SocialHub: Header Component
 */
import Button from '../shared/Button'

function Header({ user, onLogin }) {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <h1 style={styles.logo}>🏘️ SocialHub</h1>
        
        <nav style={styles.nav}>
          <a href="#home" style={styles.link}>Home</a>
          <a href="#posts" style={styles.link}>Posts</a>
          <a href="#explore" style={styles.link}>Explore</a>
          <a href="#about" style={styles.link}>About</a>
        </nav>
        
        <div style={styles.userSection}>
          {user ? (
            <div style={styles.userInfo}>
              <span style={styles.userName}>👤 {user.name}</span>
              <Button variant="outlined" size="small" onClick={() => {}}>
                Logout
              </Button>
            </div>
          ) : (
            <Button variant="primary" size="small" onClick={onLogin}>
              Log In
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}

const styles = {
  header: {
    backgroundColor: '#3b82f6',
    color: 'white',
    padding: '0.75rem 0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 100
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logo: {
    margin: 0,
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  nav: {
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'center'
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '0.95rem',
    transition: 'opacity 0.2s'
  },
  userSection: {
    display: 'flex',
    alignItems: 'center'
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem'
  },
  userName: {
    fontWeight: '500'
  }
}

export default Header
