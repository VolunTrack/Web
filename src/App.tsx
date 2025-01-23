import Header from './components/Header'
import HeroSection from './components/HeroSection'
import SearchBar from './components/SearchBar'
import Home from './pages/Home'
import DownloadApp from './pages/DownloadApp'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <main className="main">
        <HeroSection />
        <SearchBar />
        <Home />
        <DownloadApp />
        <Footer />
      </main>
    </>
  )
}

export default App
