import React from 'react'

import Logo from './Logo';
import logos from '../../Data/LogosData'

import Wrapper from '../Wrapper';
import SubTitle from '../SubTitle';
import Slider from '../Slider';

import '../../css/Social.css'

const Social = () => {

    const animation = 'logosAnimation 10s infinite linear';
    return (
        <section className='social-section'>

            <Wrapper>

                <SubTitle>Our Clients & Partners</SubTitle>


                <div className='logos-container'>

                    <Slider animation={animation}>

                        {logos.map(logo => <Logo logoImage={logo} />)}

                    </Slider>

                </div>

            </Wrapper>

        </section>
    )
}

export default Social
