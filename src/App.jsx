import { useEffect, useState } from 'react'
import './App.css'
import HomeBanner from './components/HomeBanner'
import HomeWhatWeDo from './components/HomeWhatWeDo'
import NavBar from './components/NavBar'
import BasicTabs from './components/HomeTabs'




function App() {

  const[isSmallScreen, setIsSmallScreen] = useState(false);

  const screenWidth = screen.width;

  useEffect(() => {
    if(screenWidth >= 768){
      setIsSmallScreen(true);
    }
    else{
      setIsSmallScreen(false)
    }
  },[screenWidth])

  return (
    <div className='bg-black text-white'>
      <NavBar />
      <HomeBanner />
      <HomeWhatWeDo smallScreen={isSmallScreen}/>
      <BasicTabs />
    </div>
  )
}

export default App
