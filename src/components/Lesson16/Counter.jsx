/**
 * 🔹 Task 16.1: Counter with useState
 */
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  
  return (
    <div style={styles.container}>
      <p style={styles.display}>Count: <strong>{count}</strong></p>
      <div style={styles.buttons}>
        <button 
          style={styles.button}
          onClick={() => setCount(count - 1)}
        >
          − Decrement
        </button>
        <button 
          style={{...styles.button, ...styles.reset}}
          onClick={() => setCount(0)}
        >
          ⟲ Reset
        </button>
        <button 
          style={styles.button}
          onClick={() => setCount(count + 1)}
        >
          + Increment
        </button>
      </div>
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
  display: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#1e293b'
  },
  buttons: {
    display: 'flex',
    gap: '0.5rem',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  button: {
    padding: '0.5rem 1rem',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '500',
    transition: 'background-color 0.2s'
  },
  reset: {
    backgroundColor: '#64748b'
  }
}

export default Counter