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
import FoundersDeskCard from './FoundersDeskCard.jsx'
import HeaderBanner from './Topmost.jsx'
import CollaborationGrid from './ImageSlider.jsx'
import HeaderBannerNavbar from './HeaderBannerNavbar .jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode classname="pt-[120px] sm:pt-[100px]">
    <HeaderBanner/>
    <App />
    {/* <HeaderBannerNavbar/> */}
    <AchievementCounter/>
    <SocialIcons/>
    <OfferingsSection/>
    <ConnectForm/>
    <FoundersDeskCard/>
    <CollaborationGrid/>
    <FAQSection/>
    <CircleCardMarquee/>
    <Footer/>
  </StrictMode>,
)
