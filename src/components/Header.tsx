// filename: Header.tsx

import './Header.css';

function Header() {
  return (
    <header className="header">
        <div className="text-container">
            <div className="header-left">
                <img src="/assets/logo.png" alt="logo" />
                <h1>VolunTrack</h1>
            </div>
            <div className="header-right">
                <a className="button">About Us</a>
                <a className="button">Our History</a>
            </div>
        </div>
    </header>
  );
}

export default Header;