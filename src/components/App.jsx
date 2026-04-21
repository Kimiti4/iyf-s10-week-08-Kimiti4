import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [currentTime, setCurrentTime] = useState(new Date())
  
  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000)
    return () => clearInterval(timer)
  }, [])
  
  // Get time of day
  const hour = currentTime.getHours()
  const timeOfDay = hour < 12 ? 'morning' : hour < 18 ? 'afternoon' : 'evening'
  
  // Conditional greeting
  const greetings = {
    morning: '☀️ Good morning!',
    afternoon: '🌤️ Good afternoon!',
    evening: '🌙 Good evening!'
  }

  return (
    <div className="app">
      <h1>👋 Hello, Kimiti4!</h1>
      
      <p>🎓 I'm a developer learning React fundamentals.</p>
      <p>💻 I enjoy building interactive web applications.</p>
      <p>🚀 Currently working through IYF Summer 2026 curriculum.</p>
      
      <p>📅 Today's date: {currentTime.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })}</p>
      
      <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
        {greetings[timeOfDay]}
      </p>
    </div>
  )
}

export default App