/**
 * 🔹 Task 15.2: Footer Component
 */
function Footer() {
  return (
    <footer className="footer" style={styles.footer}>
      <p>&copy; 2026 CommunityHub. All rights reserved.</p>
    </footer>
  )
}

const styles = {
  footer: {
    padding: '1.5rem 2rem',
    backgroundColor: '#1e293b',
    color: '#94a3b8',
    textAlign: 'center',
    marginTop: 'auto'
  }
}

export default Footer