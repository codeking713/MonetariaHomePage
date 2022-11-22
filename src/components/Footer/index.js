import {FaGithub, FaTwitter, FaDiscord} from 'react-icons/fa';
import './styles.css';

const Footer = () => {
    return (
        <footer className='footer p-3 d-flex align-items-center'>
            <div className='d-flex align-items-center justify-content-between gap-5 home-container'>
                <div className='footer__links d-flex'>
                    <a className='ms-auto text-white text-decoration-none px-4' href='/'>Ecosystem</a>
                    <a className='ms-auto text-white text-decoration-none px-4' href='/'>Tokenomics</a>
                    <a className='ms-auto text-white text-decoration-none px-4' href='/'>Governance</a>
                    <a className='ms-auto text-white text-decoration-none ps-4' href='/'>Developers</a>
                    <a className='ms-auto text-white text-decoration-none px-4' href='/'>About</a>
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
