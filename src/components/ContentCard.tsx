// filename: ContentCard.tsx

import './ContentCard.css';


interface Content {
    title: string;
    description: string;
    imagePath: string;
}

interface ContentCardGroupProps {
    title: string;
    content: Content[];
}

function ContentCardGroup({ title, content }: ContentCardGroupProps) {
    return (
        <div className='content-card-group'>
                <h1>{title}</h1>
                <div className='content-card-group-container'>
                {content.map((content, index) => (
                    <ContentCard key={index} content={content} />
                ))}
            </div>
        </div>
    )
}

function ContentCard({ content }: { content: Content }) {
    const { title, description, imagePath } = content;
    return (
        <div className='content-card'>
            <div className='content-card-container'>
                <div className='content-card-image'>
                    <img src={imagePath===undefined ? '': imagePath}
                    alt='content-card-image'
                    className='content-card-image' />
                </div>
                <div className='content-card-text'>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default ContentCardGroup;