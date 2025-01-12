// filename: Home.tsx

import ContentCard from '../components/ContentCard';
import './Home.css';

function Home() {
    return (
        <div className='home'>
            <div className='home-card-container'>
            <ContentCard imagePath='/images/card-support.webp' />
            <ContentCard imagePath='/images/card-culture.webp' />
            <ContentCard imagePath='/images/card-assistance.webp' />
            </div>
        </div>
    )
}

export default Home;