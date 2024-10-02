import React from 'react'
import googleLogo from '../../images/google.png';
import cadburyLogo from '../../images/cadbury.png';
import godaddyLogo from '../../images/godaddy.png';
import lenovoLogo from '../../images/lenovo.png';
import polygonLogo from '../../images/polygon-logo-dark.png';
import spotifyLogo from '../../images/spotify.png';
import yahooLogo from '../../images/yahoo.png';
import ciscoLogo from '../../images/cisco.png';
import caremLogo from '../../images/careem.png';
import netflixLogo from '../../images/netflix.png'
import buzfeedLogo from '../../images/buzzfeed.png'

import Logo from './Logo';

import '../../css/Social.css'
import Wrapper from '../Wrapper';

const Social = () => {
    return (
        <section className='social-section'>

            <Wrapper>

                <h2 className='social-title'>Our Clients & Partners</h2>

                <div className='logos-container'>
                    <div className='logos-wrapper'>
                        <Logo logoImage={googleLogo} />
                        <Logo logoImage={cadburyLogo} />
                        <Logo logoImage={godaddyLogo} />
                        <Logo logoImage={lenovoLogo} />
                        <Logo logoImage={polygonLogo} />
                        <Logo logoImage={spotifyLogo} />
                        <Logo logoImage={yahooLogo} />
                        <Logo logoImage={ciscoLogo} />
                        <Logo logoImage={caremLogo} />
                        <Logo logoImage={netflixLogo} />
                        <Logo logoImage={buzfeedLogo} />
                    </div>
                </div>

            </Wrapper>

        </section>
    )
}

export default Social
