import React, { useEffect } from 'react'
import '../../css/Services.css';
import ServiceBox from './ServiceBox';
import Wrapper from '../Wrapper';

import { PiBugBeetleFill } from "react-icons/pi";
import { PiLockKeyFill } from "react-icons/pi";
import { PiUsersThreeFill } from "react-icons/pi";
import { AiFillOpenAI } from "react-icons/ai";
import blueMarks from '../../images/file.png'

import Button from '../Buttons/Button';

const Services = () => {

    useEffect(() => {

        const section = document.getElementById('service-section');
        const blueMarks = document.querySelectorAll('.blue-marks')


        const options = {
            rootMargin: '0px',
            threshold: .7
        };

        const observer = new IntersectionObserver(animated, options);
        observer.observe(section);

        function animated(e) {

            if (e[0].isIntersecting) {
                blueMarks.forEach(marks => {
                    marks.style.animation = 'fading 2.5s ease'
                });
            }

        };

    });

    return (
        <section className='services-section' id='service-section'>
            <Wrapper>
                <h2 className='services-title'>Our Services</h2>

                <p className='services-text'>
                    We are provide expert cybersecurity services including penetration testing, vulnerability assessments, and customized <br />
                    solutions to enhance your security posture.
                </p>

                <div className='service-box-container'>

                    <img src={blueMarks} className='blue-marks' width={70} />

                    <ServiceBox
                        icon={<PiBugBeetleFill size={19} />}
                        title={"Penetration Testing"}
                        description={"Identy vulnerabilities with our thorought penetration testing services."}
                    />

                    <ServiceBox
                        icon={<PiLockKeyFill
                            size={19} />}
                        title={"Security Consulting"}
                        description={"Echange your security posture with consulting and tailored cybersecurty solutions."}
                    />

                    <ServiceBox
                        icon={<PiUsersThreeFill size={19} />}
                        title={"Training and Awaraness"}
                        description={"Empower your team with our cybersecurity training programs."}
                    />

                    <ServiceBox
                        icon={<AiFillOpenAI size={19} />}
                        title={"Cyber Threat Intelligence"}
                        description={"Stah ahead of threat with our proactive intelligence solutions."}
                    />

                    <img src={blueMarks} className='blue-marks left' width={70} />

                </div>

                <Button isCool={true} isLong={true}>
                    See All Services
                </Button>

            </Wrapper>

        </section>
    )
}

export default Services
