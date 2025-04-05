// filename: Home.tsx

import HeroSection from '../components/HeroSection';
import SearchBar from '../components/SearchBar';
import './Home.css';

function Home() {
    return (
        <div className='home'>
            <HeroSection />
            <SearchBar />
            <div className='learn-more'>
                <div className='home-text-container'>
                    <div className='home-text'>
                        <h1>Your best partner for connecting with non-profits and building community</h1>
                        <p>At Voluntrack, we connect volunteers with non-profits through innovative technology to drive meaningful community impact. </p>
                        <p>As a Canada Not-for-profit, we’re dedicated to fostering positive change.</p>
                    </div>
                    <a href="/about-us">
                        <button className="home-button">Learn More About Us</button>
                    </a>
                </div>
                <img src='/assets/hands.png' alt='hands' className='home-image' />
            </div>

            <div className='download-app'>
                <div className='download-app-container'>
                    <div className='download-app-text'>
                        <h1>Capture the colunteer experience with Voluntrack App!</h1>
                        <p>we are developing exciting features to help you find your next adventure and more</p>
                        <p>Stay tuned! there are much more to come!</p>
                        <div className='qr-code-container'>
                            <img
                                className='qr-code'
                                src="/assets/qr-code.png"
                                alt="qr-code" />
                            <img
                                className='qr-code-instruction'
                                src="/assets/qr-code-instruction.png"
                                alt="qr-code-text" />
                        </div>
                    </div>
                    <div className='download-app-image'>
                        <img src='/assets/download-app.png' alt='Download App' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;