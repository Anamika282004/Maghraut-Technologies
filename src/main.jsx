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
import ImageSlider3D from './ImageSlider.jsx'
import Slider3DWithSwipeAndAutoPlay from './ImageSlider.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode classname="pt-[120px] sm:pt-[100px]">
    <HeaderBanner/>
    <App />
    <AchievementCounter/>
    <SocialIcons/>
    <OfferingsSection/>
    <ConnectForm/>
    <FoundersDeskCard/>
    {/* <Slider3DWithSwipeAndAutoPlay/> */}
    <FAQSection/>
    <CircleCardMarquee/>
    <Footer/>
  </StrictMode>,
)
