import React from 'react';

import Wrapper from './Wrapper'

import desingLogo from '../images/design-icon.png';
import developLogo from '../images/develop-icon.png';

import '../css/Footer.css'

const Footer = () => {
    return (
        <footer >
            <Wrapper>
                <div className='footer-text-container'>

                    <p>
                        <img className='design-logo' src={desingLogo} width={50} />
                        Designed by <span className='footer-text-design'>Dilara Yılmaz</span>
                    </p>

                    <span>&</span>

                    <p>
                        <img className='develop-logo' src={developLogo} width={50} />
                        Develop by <span className='footer-text-develop'>Fethi Can Sert</span>
                    </p>

                </div>

                <p className='copyright-text'>2024 - &copy; Copyright All Rights Reserved.</p>

            </Wrapper>
        </footer>
    )
}

export default Footer
