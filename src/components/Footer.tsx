// filename: Footer.tsx

import './Footer.css';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-logo'>
                    <img src="/assets/logo.png" alt="voluntrack logo" />
                </div>
                <div className='footer-left'>
                    <h2>Voluntrack</h2>
                    <p>Connecting Futures: Empowering Youth and Communities through Innovative Volunteering.</p>
                    <b>Get in touch</b>
                    <a href="mailto:info@voluntracks.com" style={{color: 'black', textDecoration: 'none'}}>info@voluntracks.com</a>
                    <a>CC: 1550385-0</a>
                    <a href="tel:+16746746127" style={{color: 'black', textDecoration: 'none'}}>(674)-674-6127</a>
                    <div className='footer-social'>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/instagram.png" alt="instagram" />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/linkedin.png" alt="linkedin" />
                        </a>
                        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/github.png" alt="github" />
                        </a>
                    </div>
                </div>
                <div className='footer-right'>
                    <div className='footer-about'>
                        <b>About</b>
                        <a href='/'>Home</a>
                        <a href='/about-us'>About Us</a>
                        <a href='/history'>Our History</a>
                    </div>
                    <div className='footer-privacy'>
                        <b>Privacy</b>
                        <a>Privacy Policy</a>
                        <a>Terms and Conditions</a>
                    </div>
                    <div className='footer-social'>
                        <b>Social</b>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter/X</a>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <a>©VolunTrack Org. is a registered Canadian Not-for-profit #716778212</a>
                <a>Copyright © 2024 VolunTrack Org.</a>
            </div>
        </div>
    )
}

export default Footer;