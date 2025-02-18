// filename: SeachBar.tsx

import './SearchBar.css';

function SearchBar() {
    return (
        <div className='searchbar'>
            <div className='searchbar-container'>
                <input className='search-city' type='text' placeholder='Search for cities or provinces' />
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