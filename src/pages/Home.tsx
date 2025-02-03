// filename: Home.tsx

import ContentCardGroup from '../components/ContentCard';
import './Home.css';

function Home() {
    return (
        <div className='home'>
            <div className='home-card-container'>
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
            </div>
        </div>
    )
}

export default Home;