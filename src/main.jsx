import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AchievementCounter from './AchievementCounter.jsx'
import Footer from './Footer.jsx'
import CallMail from './CallMail.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <AchievementCounter/>
    <Footer/>
  </StrictMode>,
)
