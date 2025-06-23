import React, { useState } from 'react';
import './SearchBar.css';
import { useNavigate } from 'react-router-dom';
import ContentCardGroup from '../components/ContentCard';

function SearchBar() {
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (trimmed) {
      navigate(`/search-result?query=${encodeURIComponent(trimmed)}`);
    }
  };

  const suggestions_city = ['Toronto, ON', 'Mississauga, ON', 'Brampton, ON', 'GTA, ON'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    const filtered = suggestions_city.filter(city =>
      city.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredSuggestions(value.trim() ? filtered : []);
    setShowSuggestions(filtered.length > 0);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div>

      <form className='searchbar' onSubmit={handleSubmit}>
        <div className='searchbar-container'>
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
          <button type='submit'>
            <img src='/assets/search-icon.png' alt='search-icon' />
          </button>
        </div>
      </form>
      <div className='home-card-container'>
        <div className='home-content-card-group-container'>
          <ContentCardGroup
            title='Community Life'
            content={[
              {
                title: 'Support',
                description: 'Support - some text',
                imagePath: '/images/card-support.png',
              },
              {
                title: 'Culture',
                description: 'Culture - some text',
                imagePath: '/images/card-culture.png',
              },
              {
                title: 'Assistance',
                description: 'Assistance - some text',
                imagePath: '/images/card-assistance.png',
              },
            ]} />
          <ContentCardGroup
            title='Personal Growth'
            content={[
              {
                title: 'Learning',
                description: 'Learning - some text',
                imagePath: '/images/card-learning.png',
              },
              {
                title: 'Leadership',
                description: 'Leadership - some text',
                imagePath: '/images/card-leadership.png',
              },
              {
                title: 'Development',
                description: 'Development - some text',
                imagePath: '/images/card-development.png',
              },
            ]} />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
