import './styles.css';
import {FaGithub, FaTwitter, FaDiscord} from 'react-icons/fa';

const Home = () => {
    return (
        <div className='home pb-5'>
            <div className='home__hero mt-0 d-flex align-items-end'>
                <div className='home__hero__inner d-flex flex-column justify-content-end py-5 gap-3 mt-0 home-container '>
                    <div className='home__hero__heading d-flex flex-column gap-3'>
                        <h1 className='text-light fw-normal fs-1'>
                            Monetaria <b>liquidity</b><br/> <b>protocol</b> for altcoins
                        </h1>
                        <p className='text-light'>Supply, borrow, and earn on the leading decentralized crypto liquidity protocol.</p>
                    </div>
                    <div className='home__hero__social text-light d-flex gap-4 fs-5'>
                        <FaGithub/>
                        <FaTwitter/>
                        <FaDiscord/>
                    </div>
                </div>
            </div>
            <div className='home__chains d-flex home-container my-5'>
                <div className='home__chains__text d-flex flex-column gap-2 align-items-start'>
                    <img src='/line.png' alt='Line'/>
                    <h2 className='text-light'>
                        A growing DeFi protocol with 7 supported chains.
                    </h2>
                    <p className='text-light lh-lg'>
                        Set of persistent smart contracts that together create an automated marketplace, is a decentralized, non-storage liquidity protocol in which users can participate as providers, borrowers or liquidators.
                    </p>
                    <a className='link' href='/'>Explore All ↗</a>
                </div>
                <div className='home__chains__image flex-1'>
                    <img src='/chains.png' alt='Chains'/>
                </div>
            </div>
            <div className='home__list home-container gap-5 my-5'>
                <div className='circle-filler'></div>
                <img className='bubbles' src='/bubbles.png' alt='Bubbles' style={{left: '-4rem'}}/>
                <p className='text-light'>DEVELOPERS</p>
                <div className='home__list__container d-flex gap-3'>
                    <div className='home__list__container__left p-4 d-flex flex-column justify-content-end align-items-start'  style={{backgroundImage: 'radial-gradient(105.93% 63.18% at 51.38% 36.82%, rgba(0, 0, 0, 0) 0%, #051418 88.66%), linear-gradient(180deg, rgba(1, 5, 43, 0.7) 0%, rgba(5, 5, 7, 0.7) 100%), url(/turtle.jpeg)'}}>
                        <h2 className='text-light'>
                            Start building
                        </h2>
                        <p className='text-light lh-lg'>
                            Monetaria and its apps are transparent and open source. You can fork code and re-use functionality which others have already built.Get started with quick start guides, protocol documentation.
                        </p>
                        <a className='link' href='/'>Documentation ↗</a>
                    </div>
                    <div className='home__list__container__right d-flex flex-column gap-3'>
                        <div className='home__list__container__right__item p-3 d-flex gap-2'  style={{backgroundImage: 'radial-gradient(105.93% 63.18% at 51.38% 36.82%, rgba(0, 0, 0, 0) 0%, #051418 88.66%), linear-gradient(180deg, rgba(1, 5, 43, 0.7) 0%, rgba(5, 5, 7, 0.7) 100%), url(/bulb.jpeg)'}}>
                            <h4 className='text-light'>Whitepaper</h4>
                            <h4 className='text-light'>↗</h4>
                        </div>
                        <div className='home__list__container__right__item p-3 d-flex gap-2'  style={{backgroundImage: 'radial-gradient(105.93% 63.18% at 51.38% 36.82%, rgba(0, 0, 0, 0) 0%, #051418 88.66%), linear-gradient(180deg, rgba(1, 5, 43, 0.7) 0%, rgba(5, 5, 7, 0.7) 100%), url(/chair.jpeg)'}}>
                            <h4 className='text-light'>GitHub</h4>
                            <h4 className='text-light'>↗</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className='home__list home-container my-5'>
                <img className='bubbles' src='/bubbles.png' alt='Bubbles'/>
                <p className='text-light'>PROTOCOL GOVERNANCE</p>
                <div className='home__list__container d-flex gap-3'>
                    <div className='home__list__container__left p-4 d-flex flex-column align-items-start'  style={{backgroundImage: 'radial-gradient(105.93% 63.18% at 51.38% 36.82%, rgba(0, 0, 0, 0) 0%, #051418 88.66%), url(/ocean.jpeg)'}}>
                        <h2 className='text-light'>
                            Governed by the community.
                        </h2>
                        <p className='text-light lh-lg'>
                            The Monetaria Protocol is a public good which is owned and governed by MNT token holders.
                        </p>
                        <a className='link mt-auto justify-content-end block' href='/'>Read More ↗</a>
                    </div>
                    <div className='home__list__container__right d-flex flex-column gap-3'>
                        <div className='home__list__container__right__item p-3' style={{backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(9, 33, 39, 0.7) 120.35%)'}}>
                            <h5 className='text-light'>Governance Forum ↗</h5>
                            <p className='text-light lh-lg'>
                                Participate by proposing upgrades and discussing the future of the protocol with the Monetaria community.
                            </p>
                        </div>
                        <div className='home__list__container__right__item p-3' style={{backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(9, 33, 39, 0.7) 120.35%)'}}>
                            <h5 className='text-light'>Apply for a Grant ↗</h5>
                            <p className='text-light lh-lg'>Fill out the application to apply for a grant from Monetaria Grants DAO.</p>
                        </div>
                        <div className='home__list__container__right__item p-3' style={{backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(9, 33, 39, 0.7) 120.35%)'}}>
                            <h5 className='text-light'>Governance Portal ↗</h5>
                            <p className='text-light lh-lg'>
                                Vote on official Moneetaria governance proposals and view past proposals.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
