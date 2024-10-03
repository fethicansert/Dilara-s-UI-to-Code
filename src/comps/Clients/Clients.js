import React from 'react'
import SubTitle from '../SubTitle'
import ClientBox from './ClientBox'
import Wrapper from '../Wrapper'

import '../../css/Clients.css';


import client1 from '../../images/clients/client1.jpg';
import client2 from '../../images/clients/client2.avif';
import client3 from '../../images/clients/client3.jpg';
import client4 from '../../images/clients/client4.jpeg';
import client5 from '../../images/clients/client5.jpeg';

import { clients1 } from '../../Data/ClientsData';
import Slider from '../Slider';

const Clients = () => {

    const titleStyle = {
        marginBottom: '2.5rem'
    };

    const animation1 = 'clientsAnimationRight 12s infinite linear';
    const animation2 = 'clientsAnimationLeft 12s infinite linear';

    return (
        <section className='clients-section'>
            <Wrapper>

                <div>
                    <SubTitle style={titleStyle}>What Our Clients Say</SubTitle>

                    <div className='clients-container'>

                        <Slider animation={animation1} startPoint={'0%'}>

                            {clients1.map(client => <ClientBox client={client} />)}

                        </Slider>

                    </div>

                    <div className='clients-container'>

                        <Slider animation={animation2} startPoint={'110%'}>

                            {clients1.map(client => <ClientBox client={client} />)}

                        </Slider>

                    </div>


                </div>

            </Wrapper>

        </section>
    )
}

export default Clients
