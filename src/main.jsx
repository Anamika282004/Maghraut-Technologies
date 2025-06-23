import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AchievementCounter from './AchievementCounter.jsx'
import Footer from './Footer.jsx'
import SocialIcons from './SocialIcons.jsx'
import OfferingsSection from './Body.jsx'
import CircleCardMarquee from './CircleCardGrid.jsx'
import FAQSection from './FAQ.jsx'
import ConnectForm from './ConnectForm.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <AchievementCounter/>
    <SocialIcons/>
    <OfferingsSection/>
    <FAQSection/>
    <ConnectForm/>
    <CircleCardMarquee/>
    <Footer/>
  </StrictMode>,
)
