import React from 'react'

const ServiceBox = ({ icon, title, description }) => {
    return (
        <div className='service-box'>
            <div className='service-box-icon-wrapper'>{icon}</div>
            <h3 className='service-box-title'>{title}</h3>
            <p className='service-box-text'>{description}</p>
        </div>
    )
}

export default ServiceBox
