/**
 * 🔹 Task 15.4: Layout Component with children
 * Wraps page content with Header and Footer
 */
import Header from './Header'
import Footer from './Footer'

function Layout({ children, sidebar }) {
  return (
    <div style={styles.layout}>
      <Header />
      <div style={styles.content}>
        {sidebar && (
          <aside style={styles.sidebar}>
            {sidebar}
          </aside>
        )}
        <main style={styles.main}>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}

const styles = {
  layout: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  content: {
    display: 'flex',
    flex: 1,
    gap: '1.5rem',
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
    boxSizing: 'border-box'
  },
  sidebar: {
    width: '250px',
    flexShrink: 0
  },
  main: {
    flex: 1,
    minWidth: 0 // Prevents flex item overflow
  }
}

export default Layout