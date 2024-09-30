import React from 'react'
import '../../css/Hero.css'
import Button from '../Buttons/Button'

import { HiOutlineArrowRight } from "react-icons/hi";



const Hero = () => {
    return (
        <section className='hero-section'>

            <h2 className='hero-title'>
                Project Your Digiral World with <br />
                Cutting-Edge <span className='gradient-text'>Cybersecurity </span>Solutions
            </h2>

            <p className='hero-text'>Safeguard Your Business from Evolving Cyber Threats</p>

            <Button isCool={true} isLong={true}>
                Get Started
                <HiOutlineArrowRight className='cool-button-icon' size={20} />
            </Button>

            <div className='clip-path'></div>
        </section>
    )
}

export default Hero
