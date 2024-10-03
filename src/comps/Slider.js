import React from 'react'

const Slider = ({ children, animation, startPoint }) => {
    console.log(animation);
    return (
        <div className='slider' style={{ animation: animation, right: startPoint }}>
            {children}
        </div>
    )
}

export default Slider
