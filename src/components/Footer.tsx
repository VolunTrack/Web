// filename: Footer.tsx

import './Footer.css';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-logo'>
                <img src="/assets/voluntrack_bg.png" alt="voluntrack logo" />
            </div>
            <div className='footer-left'>
                <h2>Voluntrack</h2>
                <p>Connecting Futures: Empowering Youth and Communities through Innovative Volunteering.</p>
                <b>Get in touch</b>
                <p>info@Voluntracks.com</p>
                <p>CC: 1550385-0</p>
                <p>(674)-674-6127</p>
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
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Twitter/X</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;