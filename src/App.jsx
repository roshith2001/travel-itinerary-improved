import './App.css'
import HomeBanner from './components/HomeBanner'
import HomeWhatWeDo from './components/HomeWhatWeDo'
import NavBar from './components/NavBar'


function App() {

  return (
    <div className='bg-black text-white'>
      <NavBar />
      <HomeBanner />
      <HomeWhatWeDo />
    </div>
  )
}

export default App
