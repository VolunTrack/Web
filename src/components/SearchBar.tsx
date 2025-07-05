import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar() {
  // 1) City suggestions
  const suggestions_city = ['Toronto, ON', 'Mississauga, ON', 'Brampton, ON', 'GTA, ON'];
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // 2) Volunteering Interests
  const volunteeringInterests = [
    {
      category: "Community Life",
      subCategories: ["Support / Peer Support, Youth, Seniors, Settlement, Newcomers\r\n", "Culture / Religion, Arts\r\n", "Assistanc / Fundraising, Food, Accessibility, Events\r\n"],
    },
    {
      category: "Personal Growth",
      subCategories: [
        "Learning / Teaching, Education, Literacy, Writing\r\n", "Leadership / Leadership, Communication, Public speaking, IT support\r\n", "Development / Career development, Critical thinking, Finance, Health\r\n"],
    },
    {
      category: "Work and Environment",
      subCategories: ["Conservation / Environment, Animals, Recycling", "Maintenance / Trades, Facilities, Gardening, Repairs", "Sustainability / Green initiatives, Renewable energy, Urban farming"],
    },
  ];
  const [showInterestsDropdown, setShowInterestsDropdown] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  // For optional filtering within the dropdown
  const [searchInterestText, setSearchInterestText] = useState("");

  // -------------------- City Input Logic --------------------
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
  };

  const handleSuggestionClick = (city: string) => {
    setInputValue(city);
    setShowSuggestions(false);
  };

  // ---------------- Volunteering Interests Logic ----------------
  const toggleInterestsDropdown = () => {
    setShowInterestsDropdown(!showInterestsDropdown);
  };

  const handleSubCategoryChange = (subCat: string) => {
    if (selectedInterests.includes(subCat)) {
      setSelectedInterests(selectedInterests.filter(item => item !== subCat));
    } else {
      setSelectedInterests([...selectedInterests, subCat]);
    }
  };

  // Optional: filter subcategories by user typing in the dropdown
  const handleInterestTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInterestText(e.target.value);
  };

  return (
    <div className='searchbar'>
      <div className='searchbar-container'>

        {/* -------------- City Search Input -------------- */}
        <div className='search-city'>
          <input
            type='text'
            placeholder='Search for cities or provinces'
            value={inputValue}
            onChange={handleInputChange}
            onFocus={() => setShowSuggestions(filteredSuggestions.length > 0)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          />
          {showSuggestions && (
            <div className={`suggestions-dropdown ${showSuggestions ? 'show' : ''}`}>
              {filteredSuggestions.map((suggestion, index) => (
                <div key={index} onMouseDown={() => handleSuggestionClick(suggestion)}>
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className='divider'></div>

        {/* ---------- Volunteering Interests Dropdown ---------- */}
        <div className='search-keywd-container' style={{ position: 'relative', width: '100%' }}>
          <input
            className='search-keywd'
            type='text'
            placeholder='Volunteering interests e.g. Environmental Conservation'
            value={selectedInterests.join(', ')}
            onClick={toggleInterestsDropdown}
            readOnly
          />

          {showInterestsDropdown && (
            <div className={`suggestions-dropdown interests-dropdown ${showInterestsDropdown ? 'show' : ''}`}>
              {/* OPTIONAL: Input to filter subcategories in real time */}
              {/* <input
                type="text"
                placeholder="Filter interests..."
                value={searchInterestText}
                onChange={handleInterestTextChange}
                className="interests-filter"
              /> */}

              {volunteeringInterests.map((catObj, i) => {
                // If filtering, reduce subCategories
                const matchedSubs = catObj.subCategories.filter(sub =>
                  sub.toLowerCase().includes(searchInterestText.toLowerCase())
                );
                if (matchedSubs.length === 0) return null;

                return (
                  <div className='category-group' key={i}>
                    <div className='category-name'>{catObj.category}</div>
                    <div className='subcategories'>
                      {matchedSubs.map((sub, j) => (
                        <label key={j} className='subcat-label'>
                          <input
                            type='checkbox'
                            checked={selectedInterests.includes(sub)}
                            onChange={() => handleSubCategoryChange(sub)}
                          />
                          <span>{sub}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div className='search-button-container'>
        <a href="/search-result">
          <img src='/assets/search-icon.png' alt='search-icon' />
        </a>
      </div>
    </div>
  );
}

export default SearchBar;