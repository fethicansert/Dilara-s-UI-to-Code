import { useEffect, useState } from "react";

import DropboxItem from "./DropboxItem";
import HeaderNavbarItem from "./HeaderNavbarItem";
import { PiUsersFill } from "react-icons/pi";
import { BsQuestionCircleFill } from "react-icons/bs";
import { PiBugBeetleFill } from "react-icons/pi";
import { PiLockKeyFill } from "react-icons/pi";
import { PiUsersThreeFill } from "react-icons/pi";
import { AiFillOpenAI } from "react-icons/ai";

const HeaderNavbar = () => {

    const [showDropboxServices, setShowDropboxServices] = useState(false);
    const [showDropboxSupport, setShowDropboxSupport] = useState(false);

    useEffect(() => {
        if (showDropboxServices) {
            setShowDropboxSupport(false);
        }
    }, [showDropboxServices]);


    useEffect(() => {
        if (showDropboxSupport) {
            setShowDropboxServices(false)
        }
    }, [showDropboxSupport]);


    return (
        <nav className="header-navbar">
            <ul className="header-navbar-list">

                <HeaderNavbarItem text={"Home"} />

                <HeaderNavbarItem text={"Services"} isArrowed={true} showDropbox={showDropboxServices} setShowDropbox={setShowDropboxServices}>

                    <DropboxItem title={"Penetration Testing"} icon={<PiBugBeetleFill size={19} />} />
                    <DropboxItem title={"Security Consulting Testing"} icon={<PiLockKeyFill size={19} />} />
                    <DropboxItem title={"Traning and Awaraness"} icon={<PiUsersThreeFill size={19} />} />
                    <DropboxItem title={"Cyber Threat Intelligence"} icon={<AiFillOpenAI size={19} />} />

                </HeaderNavbarItem>

                <HeaderNavbarItem text={"Support"} isArrowed={true} showDropbox={showDropboxSupport} setShowDropbox={setShowDropboxSupport}>

                    <DropboxItem title={'Contact'} subTitle={'Support'} icon={<PiUsersFill size={19} />} />
                    <DropboxItem title={'Help'} subTitle={'Articles'} icon={<BsQuestionCircleFill size={19} />} />

                </HeaderNavbarItem >

                <HeaderNavbarItem text={"Pricing"} />
            </ul>
        </nav>
    );
}


export default HeaderNavbar;