/**
 * 🔹 Task 16.3: Managing a List with useState
 * Demonstrates immutable updates for arrays/objects
 */
import { useState } from 'react'

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a project', completed: false },
    { id: 3, text: 'Deploy to GitHub Pages', completed: true }
  ])
  const [inputValue, setInputValue] = useState('')
  
  const addTodo = () => {
    if (!inputValue.trim()) return
    
    // ✅ CORRECT: Create new array with spread
    setTodos([
      ...todos,
      { 
        id: Date.now(), 
        text: inputValue.trim(), 
        completed: false 
      }
    ])
    setInputValue('')
  }
  
  const toggleTodo = (id) => {
    // ✅ CORRECT: Map to create new array with updated object
    setTodos(todos.map(todo =>
      todo.id === id 
        ? { ...todo, completed: !todo.completed }  // New object
        : todo
    ))
  }
  
  const deleteTodo = (id) => {
    // ✅ CORRECT: Filter to create new array
    setTodos(todos.filter(todo => todo.id !== id))
  }
  
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }
  
  return (
    <div style={styles.container}>
      <div style={styles.addSection}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Add a new task..."
          style={styles.input}
        />
        <button onClick={addTodo} style={styles.addButton}>
          Add
        </button>
      </div>
      
      <ul style={styles.list}>
        {todos.map(todo => (
          <li key={todo.id} style={styles.item}>
            <span 
              style={{
                ...styles.text,
                ...(todo.completed ? styles.completed : {})
              }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.completed ? '✓ ' : '○ '}{todo.text}
            </span>
            <button 
              onClick={() => deleteTodo(todo.id)}
              style={styles.deleteBtn}
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
      
      {todos.some(t => t.completed) && (
        <button onClick={clearCompleted} style={styles.clearBtn}>
          Clear Completed
        </button>
      )}
      
      <div style={styles.stats}>
        {todos.filter(t => !t.completed).length} tasks remaining
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
    maxWidth: '500px'
  },
  addSection: {
    display: 'flex',
    gap: '0.5rem',
    marginBottom: '1rem'
  },
  input: {
    flex: 1,
    padding: '0.5rem',
    border: '1px solid #cbd5e1',
    borderRadius: '6px',
    fontSize: '1rem'
  },
  addButton: {
    padding: '0.5rem 1rem',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '500'
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 1rem 0'
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.75rem',
    borderBottom: '1px solid #f1f5f9'
  },
  text: {
    flex: 1,
    cursor: 'pointer',
    transition: 'color 0.2s'
  },
  completed: {
    textDecoration: 'line-through',
    color: '#94a3b8'
  },
  deleteBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.1rem',
    padding: '0.25rem',
    opacity: 0.7,
    transition: 'opacity 0.2s'
  },
  clearBtn: {
    width: '100%',
    padding: '0.5rem',
    backgroundColor: '#64748b',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginBottom: '0.5rem'
  },
  stats: {
    fontSize: '0.875rem',
    color: '#64748b',
    textAlign: 'center'
  }
}

export default TodoList