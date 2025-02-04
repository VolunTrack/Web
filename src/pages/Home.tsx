// filename: Home.tsx

import ContentCardGroup from '../components/ContentCard';
import './Home.css';

function Home() {
    return (
        <div className='home'>
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

                <div className='learn-more'>
                    <div className='home-text-container'>
                        <div className='home-text'>
                            <h1>Your best partner for connecting with non-profits and building community</h1>
                            <p>At Voluntrack, we connect volunteers with non-profits through innovative technology to drive meaningful community impact. As a Canada Not-for-profit, we’re dedicated to fostering positive change.</p>
                        </div>
                        <div className='home-place-holder' />
                    </div>
                    {/* <img src='/assets/hands.png' alt='hands' className='home-image' /> */}
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
                                    className='qr-code-arrow'
                                    src="/assets/qr-code-arrow.png"
                                    alt="qr-code-arrow" />
                                {/* <img
                                    className='qr-code-text'
                                    src="/assets/qr-code-text.png"
                                    alt="qr-code-text" /> */}
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