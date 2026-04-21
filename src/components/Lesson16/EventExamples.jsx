/**
 * 🔹 Task 16.2: Event Handler Patterns
 */
import { useState } from 'react'

function EventExamples() {
  const [logs, setLogs] = useState([])
  const [inputValue, setInputValue] = useState('')
  
  const addLog = (message) => {
    setLogs(prev => [`${new Date().toLocaleTimeString()}: ${message}`, ...prev].slice(0, 5))
  }
  
  const handleClick = () => addLog('Button clicked!')
  
  const handleInput = (e) => {
    setInputValue(e.target.value)
    addLog(`Input: "${e.target.value}"`)
  }
  
  const handleItemClick = (itemId) => {
    addLog(`Item #${itemId} clicked`)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    addLog('Form submitted!')
  }
  
  return (
    <div style={styles.container}>
      <div style={styles.examples}>
        <button onClick={handleClick} style={styles.button}>
          Click Me
        </button>
        
        <input
          value={inputValue}
          onChange={handleInput}
          placeholder="Type here..."
          style={styles.input}
        />
        
        <div style={styles.itemGroup}>
          <button onClick={() => handleItemClick(1)} style={styles.itemBtn}>Item 1</button>
          <button onClick={() => handleItemClick(2)} style={styles.itemBtn}>Item 2</button>
          <button onClick={() => handleItemClick(3)} style={styles.itemBtn}>Item 3</button>
        </div>
        
        <form onSubmit={handleSubmit} style={styles.form}>
          <button type="submit" style={styles.button}>
            Submit Form
          </button>
        </form>
      </div>
      
      <div style={styles.logs}>
        <h4 style={styles.logsTitle}>Event Log</h4>
        {logs.length === 0 ? (
          <p style={styles.empty}>No events yet</p>
        ) : (
          <ul style={styles.logList}>
            {logs.map((log, i) => (
              <li key={i} style={styles.logItem}>{log}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1.5rem',
    padding: '1.5rem',
    backgroundColor: 'white',
    borderRadius: '8px',
    border: '1px solid #e2e8f0'
  },
  examples: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  button: {
    padding: '0.5rem 1rem',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  },
  input: {
    padding: '0.5rem',
    border: '1px solid #cbd5e1',
    borderRadius: '6px'
  },
  itemGroup: {
    display: 'flex',
    gap: '0.5rem'
  },
  itemBtn: {
    padding: '0.375rem 0.75rem',
    backgroundColor: '#e2e8f0',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  form: {
    margin: 0
  },
  logs: {
    backgroundColor: '#1e293b',
    padding: '1rem',
    borderRadius: '6px',
    color: '#e2e8f0',
    fontFamily: 'monospace',
    fontSize: '0.875rem'
  },
  logsTitle: {
    margin: '0 0 0.5rem 0',
    color: '#94a3b8'
  },
  empty: {
    color: '#64748b',
    fontStyle: 'italic'
  },
  logList: {
    margin: 0,
    paddingLeft: '1rem'
  },
  logItem: {
    margin: '0.25rem 0'
  }
}

export default EventExamples