/**
 * 🔹 Daily Challenge Day 5: Layout Component
 * - Takes children prop
 * - Includes Header and Footer
 * - Has a sidebar prop (optional)
 * - Handles responsive layout
 */

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>🏠 MyWebsite</h1>
      <nav style={styles.nav}>
        <a href="#home" style={styles.navLink}>Home</a>
        <a href="#about" style={styles.navLink}>About</a>
        <a href="#contact" style={styles.navLink}>Contact</a>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2026 MyWebsite. All rights reserved.</p>
      <div style={styles.footerLinks}>
        <a href="#privacy" style={styles.footerLink}>Privacy Policy</a>
        <a href="#terms" style={styles.footerLink}>Terms of Service</a>
      </div>
    </footer>
  )
}

function Sidebar({ children }) {
  return (
    <aside style={styles.sidebar}>
      <div style={styles.sidebarContent}>
        {children}
      </div>
    </aside>
  )
}

function PageLayout({ children, sidebar }) {
  return (
    <div style={styles.layout}>
      <Header />
      
      <div style={styles.mainContainer}>
        <main style={styles.main}>
          {children}
        </main>
        
        {sidebar && (
          <Sidebar>
            {sidebar}
          </Sidebar>
        )}
      </div>
      
      <Footer />
    </div>
  )
}

const styles = {
  layout: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#f9fafb'
  },
  header: {
    backgroundColor: 'white',
    padding: '1rem 2rem',
    borderBottom: '2px solid #e5e7eb',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem'
  },
  logo: {
    margin: 0,
    fontSize: '1.5rem',
    color: '#1f2937'
  },
  nav: {
    display: 'flex',
    gap: '1.5rem'
  },
  navLink: {
    color: '#6b7280',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.2s'
  },
  mainContainer: {
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    gap: '2rem',
    padding: '2rem',
    maxWidth: '1400px',
    margin: '0 auto',
    width: '100%',
    boxSizing: 'border-box'
  },
  main: {
    flex: '1 1 700px',
    minWidth: 0
  },
  sidebar: {
    width: '300px',
    flexShrink: 0
  },
  sidebarContent: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '12px',
    border: '2px solid #e5e7eb',
    position: 'sticky',
    top: '2rem'
  },
  footer: {
    backgroundColor: 'white',
    padding: '2rem',
    borderTop: '2px solid #e5e7eb',
    textAlign: 'center'
  },
  footerLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    marginTop: '1rem'
  },
  footerLink: {
    color: '#6b7280',
    textDecoration: 'none',
    fontSize: '0.875rem'
  }
}

// Example usage component
function LayoutExamples() {
  const sampleSidebar = (
    <div>
      <h3 style={{ margin: '0 0 1rem 0', color: '#1f2937' }}>Quick Links</h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #e5e7eb' }}>
          <a href="#" style={{ color: '#3b82f6', textDecoration: 'none' }}>Documentation</a>
        </li>
        <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #e5e7eb' }}>
          <a href="#" style={{ color: '#3b82f6', textDecoration: 'none' }}>Support</a>
        </li>
        <li style={{ padding: '0.5rem 0' }}>
          <a href="#" style={{ color: '#3b82f6', textDecoration: 'none' }}>FAQ</a>
        </li>
      </ul>
    </div>
  )

  return (
    <PageLayout sidebar={sampleSidebar}>
      <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', border: '2px solid #e5e7eb' }}>
        <h2>Welcome to the Layout Example!</h2>
        <p>This demonstrates the PageLayout component with:</p>
        <ul>
          <li>✅ Header with navigation</li>
          <li>✅ Main content area (this section)</li>
          <li>✅ Optional sidebar (see right side)</li>
          <li>✅ Footer with links</li>
          <li>✅ Responsive design (try resizing your browser)</li>
        </ul>
        <p>The layout uses flexbox to create a responsive structure that adapts to different screen sizes.</p>
      </div>
    </PageLayout>
  )
}

export default LayoutExamples
