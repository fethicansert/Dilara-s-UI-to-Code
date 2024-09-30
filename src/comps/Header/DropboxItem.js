import React from 'react'
import HeaderContainer from './HeaderContainer'
const DropboxItem = ({ icon, title, subTitle }) => {
    return (
        <div className='dropbox-item'>
            <span className='icon-container'>{icon}</span>
            <div className='dropbox-item-titles-container'>
                <span className='dropbox-item-title'>{title}</span>
                <span className='dropbox-item-sub-title'>{subTitle}</span>
            </div>
        </div>
    )
}

export default DropboxItem
