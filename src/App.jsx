/**
 * 🔹 SocialHub: Main App Component
 * Combines all layout and feature components
 */
import { useState } from 'react'
import Header from './components/SocialHub/Layout/Header'
import Footer from './components/SocialHub/Layout/Footer'
import Sidebar from './components/SocialHub/Layout/Sidebar'
import PostList from './components/SocialHub/Post/PostList'
import './App.css'

function App() {
  const [user, setUser] = useState(null)
  
  const handleLogin = () => {
    // Simulate login
    setUser({ name: 'Kimiti4', id: 1 })
  }
  
  return (
    <div className="app" style={styles.layout}>
      <Header user={user} onLogin={handleLogin} />
      
      <div style={styles.content}>
        <main style={styles.main}>
          <PostList />
        </main>
        
        <Sidebar />
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
    backgroundColor: '#f8fafc'
  },
  content: {
    display: 'flex',
    flex: 1,
    gap: '1.5rem',
    padding: '2rem',
    maxWidth: '1400px',
    margin: '0 auto',
    width: '100%',
    boxSizing: 'border-box'
  },
  main: {
    flex: 1,
    minWidth: 0 // Prevents flex overflow
  }
}

export default App
