/**
 * 🔹 Task 15.4: Conditional Rendering Patterns
 */
function UserGreeting({ user }) {
  // Pattern 1: && operator
  // Pattern 2: Ternary
  // Pattern 3: Early return (demonstrated below)
  
  if (!user) {
    return (
      <div style={styles.container}>
        <p style={styles.message}>🔐 Please log in to continue</p>
        <button style={styles.button}>Log In</button>
      </div>
    )
  }
  
  return (
    <div style={styles.container}>
      <p style={styles.message}>✨ Welcome back, {user.name}!</p>
      <p style={styles.subtext}>Last seen: {user.lastSeen || 'Recently'}</p>
    </div>
  )
}

const styles = {
  container: {
    padding: '1rem',
    backgroundColor: '#f1f5f9',
    borderRadius: '8px',
    textAlign: 'center'
  },
  message: {
    margin: '0 0 0.5rem 0',
    fontWeight: '500'
  },
  subtext: {
    margin: 0,
    fontSize: '0.875rem',
    color: '#64748b'
  },
  button: {
    padding: '0.5rem 1rem',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  }
}

export default UserGreeting