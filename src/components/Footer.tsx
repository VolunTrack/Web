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
                    <p>info@Voluntracks.com</p>
                    <p>CC: 1550385-0</p>
                    <p>(674)-674-6127</p>
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
                        <p>Team</p>
                        <p>History</p>
                        <p>Careers</p>
                    </div>
                    <div className='footer-privacy'>
                        <b>Privacy</b>
                        <p>Privacy Policy</p>
                        <p>Terms and Conditions</p>
                    </div>
                    <div className='footer-social'>
                        <b>Social</b>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><p>Facebook</p></a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><p>Instagram</p></a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><p>Twitter/X</p></a>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <p>©VolunTrack Org. is a registered Canadian Not-for-profit #716778212</p>
                <p>Copyright © 2024 VolunTrack Org.</p>
            </div>
        </div>
    )
}

export default Footer;