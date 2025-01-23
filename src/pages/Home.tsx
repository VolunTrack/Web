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
                        imagePath: '/images/card-support.webp',
                    },
                    {
                        title: 'Culture',
                        description: 'Culture - some text',
                        imagePath: '/images/card-culture.webp',
                    },
                    {
                        title: 'Assistance',
                        description: 'Assistance - some text',
                        imagePath: '/images/card-assistance.webp',
                    },
                ]} />
            </div>
        </div>
    )
}

export default Home;