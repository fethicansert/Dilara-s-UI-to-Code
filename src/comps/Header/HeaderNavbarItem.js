import React from 'react'

import { IoIosArrowDown } from "react-icons/io";
import { SlArrowDown } from "react-icons/sl";


const HeaderNavbarItem = ({ text, isArrowed }) => {
    return (
        <li className='header-navbar-list-item'>
            {text}
            {isArrowed && <IoIosArrowDown className='header-navbar-item-icon' size={20} />}
        </li>
    )
}

export default HeaderNavbarItem
