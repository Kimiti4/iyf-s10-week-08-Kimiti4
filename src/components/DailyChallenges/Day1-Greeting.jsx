/**
 * 🔹 Daily Challenge Day 1: Greeting Component
 * - Takes name and timeOfDay as props
 * - Shows different messages based on time (morning/afternoon/evening)
 * - Has a default name of "Guest"
 */

function Greeting({ name = 'Guest', timeOfDay = 'morning' }) {
  const getGreetingMessage = () => {
    switch (timeOfDay.toLowerCase()) {
      case 'morning':
        return `Good morning, ${name}! ☀️ Hope you have a wonderful day!`
      case 'afternoon':
        return `Good afternoon, ${name}! 🌤️ Keep up the great work!`
      case 'evening':
        return `Good evening, ${name}! 🌙 Time to relax and unwind!`
      default:
        return `Hello, ${name}! 👋 Welcome!`
    }
  }

  const getBackgroundColor = () => {
    switch (timeOfDay.toLowerCase()) {
      case 'morning':
        return '#fef3c7'
      case 'afternoon':
        return '#dbeafe'
      case 'evening':
        return '#e0e7ff'
      default:
        return '#f3f4f6'
    }
  }

  return (
    <div style={{
      ...styles.container,
      backgroundColor: getBackgroundColor()
    }}>
      <h2 style={styles.title}>{getGreetingMessage()}</h2>
      <p style={styles.subtitle}>Current time: {timeOfDay}</p>
    </div>
  )
}

const styles = {
  container: {
    padding: '2rem',
    borderRadius: '12px',
    border: '2px solid #e5e7eb',
    textAlign: 'center',
    maxWidth: '500px',
    margin: '1rem auto'
  },
  title: {
    margin: '0 0 0.5rem 0',
    color: '#1f2937',
    fontSize: '1.5rem'
  },
  subtitle: {
    margin: 0,
    color: '#6b7280',
    fontSize: '0.875rem',
    textTransform: 'capitalize'
  }
}

// Example usage component
function GreetingExamples() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Daily Challenge - Day 1: Greeting Component</h1>
      <Greeting name="Alice" timeOfDay="morning" />
      <Greeting name="Bob" timeOfDay="afternoon" />
      <Greeting name="Charlie" timeOfDay="evening" />
      <Greeting /> {/* Uses defaults: Guest, morning */}
    </div>
  )
}

export default GreetingExamples
