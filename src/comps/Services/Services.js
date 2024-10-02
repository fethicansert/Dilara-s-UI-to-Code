import React from 'react'
import '../../css/Services.css';
import ServiceBox from './ServiceBox';

import { PiBugBeetleFill } from "react-icons/pi";
import { PiLockKeyFill } from "react-icons/pi";
import { PiUsersThreeFill } from "react-icons/pi";
import { AiFillOpenAI } from "react-icons/ai";
import Button from '../Buttons/Button';

const Services = () => {
    return (
        <section className='services-section'>
            <div className='wrapper'>
                <h2 className='services-title'>Our Services</h2>

                <p className='services-text'>
                    We are provide expert cybersecurity services including penetration testing, vulnerability assessments, and customized <br />
                    solutions to enhance your security posture.
                </p>

                <div className='service-box-container'>

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

                </div>

                <Button isCool={true} isLong={true}>
                    See All Services
                </Button>

            </div>

        </section>
    )
}

export default Services
