import Header from './components/Header'
import HeroSection from './components/HeroSection'
import SearchBar from './components/SearchBar'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <main className="main">
        <HeroSection />
        <SearchBar />
      </main>
    </>
  )
}

export default App
