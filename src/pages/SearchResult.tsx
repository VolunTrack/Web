import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import './SearchResult.css';
import SearchBar from '../components/SearchBar';
import { volunteerService, VolunteerOpportunity, SearchFilters } from '../services/volunteerService';

interface ResultCardProps {
  volunteer: VolunteerOpportunity;
  onClick: () => void;
}

function ResultCard({ volunteer, onClick }: ResultCardProps) {
  return (
    <div className='result-card' onClick={onClick}>
      <h2>{volunteer.title}</h2>
      <div className='result-card-info'>
        <div>
          <img src="/assets/corporate_fare.png" alt="icon" />
          <p>{volunteer.organization}</p>
        </div>
        <div>
          <img src="/assets/place.png" alt="icon" />
          <p>{volunteer.location}</p>
        </div>
        <div>
          <img src="/assets/category.png" alt="icon" />
          <p>{volunteer.category}</p>
        </div>
        <div>
          <img src="/assets/access_time.png" alt="icon" />
          <p>{volunteer.duration}</p>
        </div>
      </div>
      <div className='result-card-description'>
        <p>{volunteer.shortDescription}</p>
      </div>
    </div>
  );
}

interface ResultDetailProps {
  volunteer: VolunteerOpportunity;
}

function ResultDetail({ volunteer }: ResultDetailProps) {
  return (
    <div className='result-detail'>
      <div className='result-detail-info'>
        <h2>{volunteer.title}</h2>
        <div>
          <img src="/assets/corporate_fare.png" alt="icon" />
          <p>{volunteer.organization}</p>
        </div>
        <div>
          <img src="/assets/place.png" alt="icon" />
          <p>{volunteer.location}</p>
        </div>
        <div>
          <img src="/assets/category.png" alt="icon" />
          <p>{volunteer.category}</p>
        </div>
        <div>
          <img src="/assets/access_time.png" alt="icon" />
          <p>{volunteer.duration}</p>
        </div>
        <button>
          Apply Now
          <img src="/assets/upper-right-arrow.png" alt="icon" />
        </button>
      </div>
      <hr />
      <div className='result-detail-description'>
        {volunteer.detailedDescription.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <p>Benefits of being a volunteer in our program:</p>
        <ul>
          {volunteer.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SearchResult() {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  // State for toggling each dropdown
  const [orgOpen, setOrgOpen] = useState(false);
  const [durationOpen, setDurationOpen] = useState(false);
  
  // State for managing volunteer data
  const [volunteers, setVolunteers] = useState<VolunteerOpportunity[]>([]);
  const [selectedVolunteer, setSelectedVolunteer] = useState<VolunteerOpportunity | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 基于 URL / 路由 state 解析出的搜索关键词
  const [searchTerm, setSearchTerm] = useState<string>('');

  // State for filters（不包含 searchTerm，由上面单独管理）
  const [filters, setFilters] = useState<SearchFilters>({});
  const [availableFilters, setAvailableFilters] = useState<{
    organizations: string[];
    categories: string[];
    locations: string[];
    durations: string[];
  }>({
    organizations: [],
    categories: [],
    locations: [],
    durations: []
  });

  /**
   * 每当 URL 查询参数或路由 state 变化时，重新解析搜索关键词与过滤条件。
   */
  useEffect(() => {
    const queryParam = searchParams.get('query') || '';
    const cityParam = searchParams.get('city') || '';

    const routeState = (location.state || {}) as { city?: string; interests?: string[] };

    const initFilters: SearchFilters = {};

    // URL 参数优先
    if (cityParam) {
      initFilters.locations = [cityParam];
    } else if (routeState.city) {
      initFilters.locations = [routeState.city];
    }

    if (routeState.interests && routeState.interests.length > 0) {
      initFilters.categories = routeState.interests;
    }

    setFilters(initFilters);
    setSearchTerm(queryParam);
  }, [searchParams, location.state]);

  /**
   * 当过滤条件或搜索词更改时，重新拉取志愿者数据。
   */
  useEffect(() => {
    const loadVolunteers = async () => {
      try {
        setLoading(true);
        setError(null);

        let fetchedVolunteers: VolunteerOpportunity[] = [];

        if (searchTerm.trim()) {
          // 如果有搜索关键词，则使用 searchVolunteers
          const result = await volunteerService.searchVolunteers(searchTerm.trim(), filters);
          fetchedVolunteers = result.volunteers;
        } else {
          // 否则获取全部（受过滤器约束）
          const result = await volunteerService.getAllVolunteers(filters);
          fetchedVolunteers = result.volunteers;
        }

        setVolunteers(fetchedVolunteers);

        // 设置默认选中的志愿者
        if (fetchedVolunteers.length > 0) {
          setSelectedVolunteer(fetchedVolunteers[0]);
        } else {
          setSelectedVolunteer(null);
        }

        // 获取筛选选项
        const filterOptions = await volunteerService.getFilterOptions();
        setAvailableFilters(filterOptions);

      } catch (err) {
        console.error('加载志愿者数据失败:', err);
        setError('加载数据失败，请稍后重试');
      } finally {
        setLoading(false);
      }
    };

    loadVolunteers();
  }, [filters, searchTerm]);

  const toggleOrg = () => {
    setOrgOpen(!orgOpen);
    setDurationOpen(false); // close the other dropdown
  };

  const toggleDuration = () => {
    setDurationOpen(!durationOpen);
    setOrgOpen(false); // close the other dropdown
  };

  const handleCardClick = (volunteer: VolunteerOpportunity) => {
    setSelectedVolunteer(volunteer);
  };

  // 处理组织筛选器变化
  const handleOrganizationFilter = (organization: string, checked: boolean) => {
    setFilters(prev => {
      const organizations = prev.organizations || [];
      if (checked) {
        return { ...prev, organizations: [...organizations, organization] };
      } else {
        return { ...prev, organizations: organizations.filter(org => org !== organization) };
      }
    });
  };

  // 处理期间筛选器变化
  const handleDurationFilter = (duration: string) => {
    setFilters(prev => ({
      ...prev,
      durations: [duration]
    }));
    setDurationOpen(false);
  };

  // 加载状态
  if (loading) {
    return (
      <div className='search-result'>
        <div className='search-result-container'>
          <SearchBar />
          <div className='loading-container'>
            <p>正在加载志愿者机会...</p>
          </div>
        </div>
      </div>
    );
  }

  // 错误状态
  if (error) {
    return (
      <div className='search-result'>
        <div className='search-result-container'>
          <SearchBar />
          <div className='error-container'>
            <p>{error}</p>
            <button onClick={() => window.location.reload()}>重试</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='search-result'>
      <div className='search-result-container'>
        <SearchBar />

        <div className='button-container'>
          {/* Organization button + dropdown */}
          <div className="dropdown-container">
            <button onClick={toggleOrg}>Organization</button>
            {orgOpen && (
              <div className="dropdown-menu">
                {availableFilters.organizations.map((org) => (
                  <div key={org} className="dropdown-item">
                    <label className="dropdown-main-label">
                      <input 
                        type="checkbox" 
                        name="orgMain" 
                        checked={filters.organizations?.includes(org) || false}
                        onChange={(e) => handleOrganizationFilter(org, e.target.checked)}
                      />
                      {org}
                    </label>
                  </div>
                ))}
                <div className="dropdown-apply-container">
                  <button className="dropdown-apply-button" onClick={() => setOrgOpen(false)}>
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Duration button + dropdown */}
          <div className="dropdown-container">
            <button onClick={toggleDuration}>Duration</button>
            {durationOpen && (
              <div className="dropdown-menu">
                {availableFilters.durations.map((duration) => (
                  <div key={duration} className="dropdown-item">
                    <label className="dropdown-main-label">
                      <input 
                        type="radio" 
                        name="durationMain" 
                        checked={filters.durations?.includes(duration) || false}
                        onChange={() => handleDurationFilter(duration)}
                      />
                      {duration}
                    </label>
                  </div>
                ))}
                <div className="dropdown-apply-container">
                  <button className="dropdown-apply-button" onClick={() => setDurationOpen(false)}>
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <hr />

        <div className='search-result-count'>
          <p>{volunteers.length} Results</p>
        </div>
        <div className='search-result-content'>
          <div className='search-result-left'>
            {volunteers.map((volunteer) => (
              <ResultCard
                key={volunteer.id}
                volunteer={volunteer}
                onClick={() => handleCardClick(volunteer)}
              />
            ))}
          </div>
          <div className='search-result-right'>
            {selectedVolunteer && (
              <ResultDetail volunteer={selectedVolunteer} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
