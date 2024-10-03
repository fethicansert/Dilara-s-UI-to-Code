import React from 'react'
import SubTitle from '../SubTitle'
import ClientBox from './ClientBox'
import Wrapper from '../Wrapper'

import '../../css/Clients.css';


import { clients1, clients2 } from '../../Data/ClientsData';
import Slider from '../Slider';

const Clients = () => {

    const titleStyle = {
        marginBottom: '2.5rem'
    };

    const animation1 = 'clientsAnimationRight 16s infinite linear';
    const animation2 = 'clientsAnimationLeft 16s infinite linear';

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

                            {clients2.map(client => <ClientBox client={client} />)}

                        </Slider>

                    </div>


                </div>

            </Wrapper>

        </section>
    )
}

export default Clients
