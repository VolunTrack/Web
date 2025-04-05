// OurTeamSection.tsx
import { useState } from 'react';
import './OurTeamSection.css';

interface TeamMember {
    id: number;
    name: string;
    role: string;
    bio: string;
    photo: string;
}

const OurTeamSection = () => {
    const teamMembers: TeamMember[] = [
        {
            id: 1,
            name: 'Shuolin Yin',
            role: 'Founder',
            bio: 'A dedicated leader focused on empowering communities, fostering collaboration, and creating meaningful opportunities by connecting volunteers with non-profit organizations through VolunTrack.',
            photo: '/assets/members/leo-profile.jpg'
        },
        {
            id: 2,
            name: 'Alan Yang',
            role: 'Co-President & Tech Department Director',
            bio: 'Aiming to achieve the best of myself',
            photo: '/assets/members/alan-profile.jpg',
        },
        {
            id: 3,
            name: 'Feiyang Xu',
            role: 'President',
            bio: 'As a passionate leader and advocate for technology-driven change, I am committed to harnessing the power of innovation to make a meaningful difference. At VolunTrack, my mission is to inspire others, foster leadership, and explore new technologies that drive positive impact. Through this organization, I aim to connect communities, empower volunteers, and make a lasting contribution to the world around us.',
            photo: '/assets/members/feiyang-profile.jpg',
        },
        {
            id: 4,
            name: 'Shuolin Yin',
            role: 'Founder',
            bio: 'A dedicated leader focused on empowering communities, fostering collaboration, and creating meaningful opportunities by connecting volunteers with non-profit organizations through VolunTrack.',
            photo: '/assets/members/leo-profile.jpg'
        },
    ];

    const [flippedId, setFlippedId] = useState<number | null>(null);

    return (
        <section className="team" aria-labelledby="team-section-heading">
            <div className="team-container">
                <div className="team-header">
                    <p className="team-subtitle">Our Team</p>
                    <h1 className="team-title" id="team-section-heading">
                        We are passionate, focused volunteers dedicated to your success.
                    </h1>
                </div>

                <div className="team-grid">
                    {teamMembers.map(member => (
                        <div
                            key={member.id}
                            className={`team-card ${flippedId === member.id ? 'flipped' : ''}`}
                            onClick={() => setFlippedId(flippedId === member.id ? null : member.id)}
                        >
                            <div className="card-inner">
                                <div className="card-front">
                                    <img
                                        className="member-photo"
                                        src={member.photo}
                                        alt={member.name}
                                        onError={(e) => e.currentTarget.src = '/assets/members/default.png'}
                                    />
                                    <h3 className="member-name">{member.name}</h3>
                                    <p className="member-role">{member.role}</p>
                                </div>

                                <div className="card-back">
                                    <div className="card-back-content">
                                        <h4 className="bio-title">About {member.name.split(' ')[0]}</h4>
                                        <p className="member-bio">{member.bio}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default OurTeamSection;