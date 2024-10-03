import React from 'react'

const SubTitle = ({ children, style }) => {
    return (
        <h2 className='sub-title' style={style}>
            {children}
        </h2>
    )
}

export default SubTitle
