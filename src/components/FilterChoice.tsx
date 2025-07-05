import { useState } from "react";
import "./FilterChoice.css"

function FilterChoice() {
    const [showContent, setShowContent] = useState(false);
    
    const handleClick = () => {
        setShowContent(true);
    }
    return (
        <div onClick={handleClick} className="background">
          {showContent && (
            <div>
                <h3>Community Life</h3>
                <ul>
                    <li>
                    <label>
                        <input type="checkbox" />
                        Support / Peer Support, Youth, Seniors, Settlement, Newcomers
                    </label>
                    </li>
                    <li>
                    <label>
                        <input type="checkbox" />
                        Culture / Culture, Religion, Arts
                    </label>
                    </li>
                    <li>
                    <label>
                        <input type="checkbox" />
                        Assistance / Fundraising, Food, Accessibility, Events
                    </label>
                    </li>
                </ul>
    
                <h3>Personal Growth</h3>
                <ul>
                    <li>
                    <label>
                        <input type="checkbox" />
                        Learning / Teaching, Education, Literacy, Writing
                    </label>
                    </li>
                    <li>
                    <label>
                        <input type="checkbox" />
                        Leadership / Communication, Public speaking, IT support
                    </label>
                    </li>
                    <li>
                    <label>
                        <input type="checkbox" />
                        Development / Critical thinking, Finance, Health
                    </label>
                    </li>
                </ul>

                <h3>Work and Environment</h3>
                <ul>
                    <li>
                    <label>
                        <input type="checkbox" />
                        Conservation / Environment, Animals, Recycling
                    </label>
                    </li>
                    <li>
                    <label>
                        <input type="checkbox" />
                        Maintenance / Trades, Gardening, Repairs
                    </label>
                    </li>
                    <li>
                    <label>
                        <input type="checkbox" />
                        Sustainability / Green initiatives, Urban farming
                    </label>
                    </li>
                </ul>
            </div>
          )}
        </div>
    );
}
export default FilterChoice