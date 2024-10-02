import React, { useState } from 'react'

import { IoIosArrowDown } from "react-icons/io";
import { SlArrowDown } from "react-icons/sl";
import NavDropbox from './NavDropbox';


const HeaderNavbarItem = ({ text, isArrowed, children, showDropbox, setShowDropbox }) => {



    return (
        <li
            onClick={() => { setShowDropbox(prev => !prev) }}
            className='header-navbar-list-item'>
            {text}

            {isArrowed &&
                <span className='header-navbar-item-icon-wrapper'>
                    <IoIosArrowDown className='header-navbar-item-icon' size={17.5} />
                </span>
            }

            {
                isArrowed && showDropbox
                && <NavDropbox>{children}</NavDropbox>
            }

        </li>
    )
}

export default HeaderNavbarItem
