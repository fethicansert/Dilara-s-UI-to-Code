import DropboxItem from "./DropboxItem";
import HeaderNavbarItem from "./HeaderNavbarItem";
import { PiUsersFill } from "react-icons/pi";
import { BsQuestionCircleFill } from "react-icons/bs";
import { PiBugBeetleFill } from "react-icons/pi";
import { PiLockKeyFill } from "react-icons/pi";
import { PiUsersThreeFill } from "react-icons/pi";
import { AiFillOpenAI } from "react-icons/ai";

const HeaderNavbar = () => {
    return (
        <nav className="header-navbar">
            <ul className="header-navbar-list">

                <HeaderNavbarItem text={"Home"} />

                <HeaderNavbarItem text={"Services"} isArrowed={true}>
                    <DropboxItem title={"Penetration Testing"} icon={<PiBugBeetleFill size={19} />} />
                    <DropboxItem title={"Security Consulting Testing"} icon={<PiLockKeyFill size={19} />} />
                    <DropboxItem title={"Traning and Awaraness"} icon={<PiUsersThreeFill size={19} />} />
                    <DropboxItem title={"Cyber Threat Intelligence"} icon={<AiFillOpenAI size={19} />} />
                </HeaderNavbarItem>

                <HeaderNavbarItem text={"Support"} isArrowed={true} >
                    <DropboxItem title={'Contact'} subTitle={'Support'} icon={<PiUsersFill size={19} />} />
                    <DropboxItem title={'Help'} subTitle={'Articles'} icon={<BsQuestionCircleFill size={19} />} />
                </HeaderNavbarItem >

                <HeaderNavbarItem text={"Pricing"} />
            </ul>
        </nav>
    );
}


export default HeaderNavbar;