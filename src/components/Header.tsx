// filename: Header.tsx

import './Header.css';
import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  
  return (
    <header className="header">
        <div className="text-container">
            <a href='/' className="header-left">
              <img src="/assets/logo.png" alt="logo" />
              <span className="title">Voluntrack</span>
            </a>
            <div className="header-right">
                <a 
                href='/about-us'
                className={`button ${location.pathname === '/about-us' ? 'active' : ''}`}
                >About Us</a>
                <a 
                href='/history'
                className={`button ${location.pathname === '/history' ? 'active' : ''}`}
                >Our History</a>
            </div>
        </div>
    </header>
  );
}

export default Header;