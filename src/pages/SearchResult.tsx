import './SearchResult.css';
import useSearch from '../hook/useResults';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchSearchBar from '../components/SearchSearchBar';

interface VolunteerData {
  id: string;
  name?: string;
  organization?: string;
  city?: string;
  categories?: string;
  time?: string;
  description?: string;
}

function ResultCard({ item, onSelect }: { item: VolunteerData, onSelect: (item: VolunteerData) => void }) {
  return (
    <div className='result-card' onClick={() => onSelect(item)}>
      <h2>{item.name}</h2>
      <div className='result-card-info'>
        <div><img src="/assets/corporate_fare.png" alt="icon" /><p>{item.organization}</p></div>
        <div><img src="/assets/place.png" alt="icon" /><p>{item.city}</p></div>
        <div><img src="/assets/category.png" alt="icon" /><p>{item.categories}</p></div>
        <div><img src="/assets/access_time.png" alt="icon" /><p>{item.time}</p></div>
      </div>
      <div className='result-card-description'>
        <p>{item.description}</p>
      </div>
    </div>
  );
}

function ResultDetail({ selected }: { selected: VolunteerData | null }) {
  if (!selected) return <div className='result-detail'><p>Select a result to see details</p></div>;

  return (
    <div className='result-detail'>
      <div className='result-detail-info'>
        <h2>{selected.name}</h2>
        <div><img src="/assets/corporate_fare.png" alt="icon" /><p>{selected.organization}</p></div>
        <div><img src="/assets/place.png" alt="icon" /><p>{selected.city}</p></div>
        <div><img src="/assets/category.png" alt="icon" /><p>{selected.categories}</p></div>
        <div><img src="/assets/access_time.png" alt="icon" /><p>{selected.time || 'Time Not Provided'}</p></div>
        <button>
          Apply Now
          <img src="/assets/upper-right-arrow.png" alt="icon" />
        </button>
      </div>
      <hr />
      <div className='result-detail-description'>
        <p>{selected.description}</p>
      </div>
    </div>
  );
}

function SearchResult() {
  const [searchApi, results, errorMessage] = useSearch();
  const [selectedResult, setSelectedResult] = useState<VolunteerData | null>(null);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    searchApi(query); // fetch based on query in URL
  }, [query, searchApi]);

  return (
    <div className='search-result'>
      <div className="searchbar-wrapper">
        <SearchSearchBar />
      </div>
      <div className='search-result-container'>
        <div className='button-container'>
          <button>Organization</button>
          <button>Duration</button>
        </div>
        <hr />
        <div className='search-result-count'>
          <p>{results.length} Results for “{query}”</p>
        </div>
        <div className='search-result-content'>
          <div className='search-result-left'>
            {results.map((item) => {
              const normalizedItem = {
                ...item,
                time: item.time || 'Time Not Provided',
              };
              return (
                <ResultCard
                  key={item.id}
                  item={normalizedItem}
                  onSelect={setSelectedResult}
                />
              );
            })}
            {errorMessage && <p className='error'>{errorMessage}</p>}
          </div>
          <div className='search-result-right'>
            <ResultDetail selected={selectedResult} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
