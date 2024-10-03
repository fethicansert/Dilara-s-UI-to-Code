import React from 'react'

const Slider = ({ children, animation }) => {
    console.log(animation);
    return (
        <div className='slider' style={{ animation: animation }}>
            {children}
        </div>
    )
}

export default Slider
