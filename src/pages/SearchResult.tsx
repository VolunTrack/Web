// filename: SearchResult.tsx

import './SearchResult.css';
import SearchBar from '../components/SearchBar';

function ResultCard() {
    return (
        <div className='result-card'>
            <h2>2024 Summer Camp Volunteer</h2>
            <div className='result-card-info'>
                <div><img src="/assets/corporate_fare.png" alt="icon" /><p>York Region Educational Services</p></div>
                <div><img src="/assets/place.png" alt="icon" /><p>Markham/Thornhill</p></div>
                <div><img src="/assets/category.png" alt="icon" /><p>Education and Literacy</p></div>
                <div><img src="/assets/access_time.png" alt="icon" /><p>1 - 4 weeks</p></div>
            </div>
            <div className='result-card-description'>
                <p>Eco Volunteering in Wildlife & Marine Conservation. Uncover the whole big picture of our Eco-System for a better understanding of Nature & learn how to make a difference!</p>
            </div>
        </div>
    )
}

function ResultDetail() {
    return (
        <div className='result-detail'>
            <div className='result-detail-info'>
                <h2>2024 Summer Camp Volunteer</h2>
                <div><img src="/assets/corporate_fare.png" alt="icon" /><p>York Region Educational Services</p></div>
                <div><img src="/assets/place.png" alt="icon" /><p>Markham/Thornhill</p></div>
                <div><img src="/assets/category.png" alt="icon" /><p>Education and Literacy</p></div>
                <div><img src="/assets/access_time.png" alt="icon" /><p>1 - 4 weeks</p></div>
                <button>
                    Apply Now
                    <img src="/assets/upper-right-arrow.png" alt="icon" />
                </button>
            </div>
            <hr />
            <div className='result-detail-description'>
                <p>Eco Volunteering in Wildlife & Marine Conservation. Uncover the whole big picture of our Eco-System for a better understanding of Nature & learn how to make a difference!</p>
                <p>The CSE's Community Youth Mentorship programs provide youth across Peel Region with UTM role models to develop a sense of community, identity and preparedness to thrive!</p>
                <p>Serving as role mentors, UTM students will be matched with youth groups from underrepresented communities, providing their insight, experience and guidance through virtual programming that is delivered weekly.</p>
                <p>Youth in the program are from age 8-17 who are invested in the benefits of mentoring. Mentees and mentors are matched based on common interest, cultural background, geographic proximity, and areas of need as well as similar gender.</p>
                <p>Benefits of being a mentor in our program:</p>
                <ul>
                    <li>Improve communication and personal skills by facilitating virtual mentoring sessions with youth participants</li>
                    <li>Reinforce your own study skills and knowledge of subjects by working in small teams to develop content and address mentee concerns</li>
                    <li>Be part of an online mentorship community with other students in mentorship programs. This is an opportunity to make connections, build relationships and to be part of a community</li>
                    <li>Gain new perspective, knowledge and experience</li>
                    <li>Learn to reflect on your goals, values, and experiences</li>
                    <li>Make friends and feel connected to the UTM community</li>
                </ul>
            </div>
        </div>
    )
}

function SearchResult() {
    return (
        <div className='search-result'>
            <div className='search-result-container'>
                <SearchBar />
                <div className='button-container'>
                    <button>
                        Organization
                    </button>
                    <button>
                        Duration
                    </button>
                </div>
                <hr />
                <div className='search-result-count'>
                    <p>300 Results</p>
                </div>
                <div className='search-result-content'>
                    <div className='search-result-left'>
                        <ResultCard />
                        <ResultCard />
                        <ResultCard />
                        <ResultCard />
                        <ResultCard />
                    </div>
                    <div className='search-result-right'>
                        <ResultDetail />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult;