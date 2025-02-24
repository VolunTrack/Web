// filename: SeachBar.tsx

// import './SearchBar.css';

// function SearchBar() {
//     return (
//         <div className='searchbar'>
//             <div className='searchbar-container'>
//                 <input className='search-city' type='text' placeholder='Search for cities or provinces' />
//                 <div className='divider'></div>
//                 <input className='search-keywd' type='text' placeholder='Search for volunteer opportunities' />
//             </div>
//             <div className='search-button-container'>
//                 <a href="/search-result">
//                 <img src='/assets/search-icon.png' alt='search-icon' /></a>
//             </div>
//         </div>
//     )
// }

// export default SearchBar;

import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar() {
    // 样本筛选建议
    const suggestions_city = ['Toronto, ON', 'Mississauga, ON', 'Brampton, ON', 'GTA, ON'];

    const [inputValue, setInputValue] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    // 监听输入框变化
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);

        if (value.trim() === '') {
            setFilteredSuggestions([]);
            setShowSuggestions(false);
            return;
        }

        const filtered = suggestions_city.filter(city =>
            city.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredSuggestions(filtered);

        setShowSuggestions(filtered.length > 0);
    }

    const handleSuggestionClick = (suggestions_city: string) => {
        setInputValue(suggestions_city);
        setShowSuggestions(false);
    }
    return (
        <div className='searchbar'>
            <div className='searchbar-container'>
                <div className='search-city'>
                    <input type='text' placeholder='Search for cities or provinces' 
                    value={inputValue} onChange={handleInputChange} onFocus={() => setShowSuggestions(filteredSuggestions.length >0)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}/>
                    {showSuggestions && (
                        <div className='suggestions-dropdown'>
                            {filteredSuggestions.map((suggestion, index) => (
                                <div key={index} onMouseDown={() => handleSuggestionClick(suggestion)}>
                                    {suggestion}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className='divider'></div>
                <input className='search-keywd' type='text' placeholder='Search for volunteer opportunities' />
            </div>
            <div className='search-button-container'>
                <a href="/search-result">
                <img src='/assets/search-icon.png' alt='search-icon' /></a>
            </div>
        </div>
    )
}

export default SearchBar;