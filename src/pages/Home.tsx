// filename: Home.tsx

import ContentCardGroup from '../components/ContentCard';
import FilterChoice from '../components/FilterChoice';
import HeroSection from '../components/HeroSection';
import SearchBar from '../components/SearchBar';
import './Home.css';

function Home() {
    return (
        <div className='home'>
            <HeroSection />
            <SearchBar />
            <FilterChoice />
            <div className='home-card-container'>
                <div className='home-content-card-group-container'>
                <ContentCardGroup
                title='Community Life'
                content={[
                    {
                        title: 'Support',
                        description: 'Support - some text',
                        imagePath: '/images/card-support.png',
                    },
                    {
                        title: 'Culture',
                        description: 'Culture - some text',
                        imagePath: '/images/card-culture.png',
                    },
                    {
                        title: 'Assistance',
                        description: 'Assistance - some text',
                        imagePath: '/images/card-assistance.png',
                    },
                ]} />
                <ContentCardGroup
                title='Personal Growth'
                content={[
                    {
                        title: 'Learning',
                        description: 'Learning - some text',
                        imagePath: '/images/card-learning.png',
                    },
                    {
                        title: 'Leadership',
                        description: 'Leadership - some text',
                        imagePath: '/images/card-leadership.png',
                    },
                    {
                        title: 'Development',
                        description: 'Development - some text',
                        imagePath: '/images/card-development.png',
                    },
                ]} />
                </div>
            </div>

            <div className='learn-more'>
                <div className='learn-more-container'>
                    <div className='home-text-container'>
                        <div className='home-text'>
                            <h1>Your Best Partner for Connecting with Non-Profits and Building Community.</h1>
                            <p>At Voluntrack, we connect volunteers with non-profits through innovative technology to drive meaningful community impact.</p>
                            <p>As a Canada Not-for-profit, we're dedicated to fostering positive change.</p>
                            <button className='learn-more-btn'>Learn more about us</button>
                        </div>
                        <div className='home-hands-container'>
                            <img src='/assets/hands.png' alt='hands' className='home-hands-image' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='download-app'>
                <div className='download-app-wrapper'>
                    <div className='download-app-container'>
                        <div className='download-app-text'>
                            <h1>Capture the volunteer experience with Voluntrack App!</h1>
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
        </div>
    )
}

export default Home;