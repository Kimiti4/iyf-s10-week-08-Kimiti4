/**
 * 🔹 Task 16.1: Toggle Component
 */
import { useState } from 'react'

function Toggle() {
  const [isOn, setIsOn] = useState(false)
  
  return (
    <div style={styles.container}>
      <p style={styles.status}>
        The toggle is{' '}
        <strong style={{ 
          color: isOn ? '#10b981' : '#ef4444' 
        }}>
          {isOn ? '🟢 ON' : '🔴 OFF'}
        </strong>
      </p>
      <button
        style={{
          ...styles.button,
          backgroundColor: isOn ? '#10b981' : '#64748b'
        }}
        onClick={() => setIsOn(!isOn)}
      >
        {isOn ? 'Turn Off' : 'Turn On'}
      </button>
    </div>
  )
}

const styles = {
  container: {
    padding: '1.5rem',
    backgroundColor: 'white',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    textAlign: 'center'
  },
  status: {
    fontSize: '1.125rem',
    marginBottom: '1rem',
    color: '#1e293b'
  },
  button: {
    padding: '0.5rem 1.5rem',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '500',
    fontSize: '1rem',
    transition: 'background-color 0.2s'
  }
}

export default Toggle