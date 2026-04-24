/**
 * 🔹 SocialHub: Main App Component
 * Combines all layout and feature components
 */
import { useState } from 'react'
import Header from './components/SocialHub/Layout/Header'
import Footer from './components/SocialHub/Layout/Footer'
import Sidebar from './components/SocialHub/Layout/Sidebar'
import HomeHero from './components/SocialHub/Sections/HomeHero'
import PostsSection from './components/SocialHub/Sections/PostsSection'
import ExploreSection from './components/SocialHub/Sections/ExploreSection'
import AboutSection from './components/SocialHub/Sections/AboutSection'
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
          <HomeHero user={user} />
          <PostsSection />
          <ExploreSection />
          <AboutSection />
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
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flex: 1,
    gap: '1.5rem',
    padding: '2rem',
    maxWidth: '1400px',
    margin: '0 auto',
    width: '100%',
    boxSizing: 'border-box'
  },
  main: {
    flex: '1 1 760px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    minWidth: 0 // Prevents flex overflow
  }
}

export default App
