import {FaGithub, FaTwitter, FaDiscord} from 'react-icons/fa';
import './styles.css';

const Footer = () => {
    return (
        <footer className='footer d-flex align-items-center'>
            <div className='footer__inner d-flex align-items-center justify-content-between gap-5 home-container'>
                <div className='footer__links d-flex gap-5'>
                    <a className='ms-auto text-white text-decoration-none' href='/'>Ecosystem</a>
                    <a className='ms-auto text-white text-decoration-none' href='/'>Tokenomics</a>
                    <a className='ms-auto text-white text-decoration-none' href='/'>Governance</a>
                    <a className='ms-auto text-white text-decoration-none' href='/'>Developers</a>
                    <a className='ms-auto text-white text-decoration-none' href='/'>About</a>
                </div>
                <div className='footer__social text-light d-flex align-items-center gap-4 fs-5'>
                    <FaGithub/>
                    <FaTwitter/>
                    <FaDiscord/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
