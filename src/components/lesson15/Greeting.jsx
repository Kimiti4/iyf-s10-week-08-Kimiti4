/**
 * 🔹 Task 15.3: Greeting Component with Props
 * Shows different messages based on time of day
 */
function Greeting({ name = 'Guest', timeOfDay = 'morning' }) {
  const messages = {
    morning: `☀️ Good morning, ${name}!`,
    afternoon: `🌤️ Good afternoon, ${name}!`,
    evening: `🌙 Good evening, ${name}!`
  }
  
  return (
    <div style={styles.container}>
      <h2 style={styles.greeting}>{messages[timeOfDay] || messages.morning}</h2>
      <p style={styles.subtext}>Welcome to CommunityHub</p>
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
  greeting: {
    margin: '0 0 0.25rem 0',
    color: '#1e293b'
  },
  subtext: {
    margin: 0,
    color: '#64748b',
    fontSize: '0.875rem'
  }
}

export default Greeting