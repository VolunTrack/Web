import React from 'react';

import './DownloadApp.css';

const DownloadApp: React.FC = () => {
    return (
        <div className='download-app'>
            <div className='download-app-container'>
                <div className='download-app-text'>
                    <h1>Capture the colunteer experience with Voluntrack App!</h1>
                    <p>we are developing exciting features to help you find your next adventure and more</p>
                    <p>Stay tuned! there are much more to come!</p>
                </div>
                <div className='download-app-image'>
                    <img src='/assets/download-app.png' alt='Download App' />
                </div>
            </div>
        </div>
    );
};

export default DownloadApp;