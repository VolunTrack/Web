import Header from './components/Header'
import Home from './pages/Home'
import History from './pages/History'
import AboutUs from './pages/AboutUs'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
