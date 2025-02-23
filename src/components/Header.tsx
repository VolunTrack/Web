// filename: Header.tsx

import './Header.css';

function Header() {
  return (
    <header className="header">
        <div className="text-container">
            <div className="header-left">
              <a href='/'>
                <img src="/assets/logo.png" alt="logo" />
              </a>
              <a 
              href='/'
              className="title"
              >Voluntrack</a>
            </div>
            <div className="header-right">
                <a 
                href='/about-us'
                className="button"
                >About Us</a>
                <a 
                href='/history'
                className="button"
                >Our History</a>
            </div>
        </div>
    </header>
  );
}

export default Header;