import React from 'react'

const Button = ({ children, isCool, isLong }) => {
    return (
        <button className={`header-button ${isCool ? 'cool' : ''} ${isLong ? 'long' : ''}`}>
            {children}
        </button>
    )
}

export default Button;
