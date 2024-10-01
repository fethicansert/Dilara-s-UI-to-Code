import React from 'react'

const Logo = ({ logoImage, size = 110 }) => {
    return <img src={logoImage} className='logo' width={size} />
}

export default Logo
