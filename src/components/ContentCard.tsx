// filename: ContentCard.tsx

import './ContentCard.css';

interface ContentCardProps {
    imagePath: string;
}

function ContentCard({ imagePath }: ContentCardProps) {
    return (
        <div className='content-card'>
            <div className='content-card-container'>
                <div className='content-card-image'>
                    <img src={imagePath}
                    alt='content-card-image'
                    className='content-card-image' />
                </div>
                <div className='content-card-text'>
                    <h2>Volunteer Opportunities</h2>
                    <p>Find the perfect volunteer opportunity for you. Search by city or province, or by keyword.</p>
                </div>
            </div>
        </div>
    )
}

export default ContentCard;