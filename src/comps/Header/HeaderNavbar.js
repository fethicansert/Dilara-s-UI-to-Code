import DropboxItem from "./DropboxItem";
import HeaderNavbarItem from "./HeaderNavbarItem";
import { PiUsersFill } from "react-icons/pi";
import { BsQuestionCircleFill } from "react-icons/bs";

const HeaderNavbar = () => {
    return (
        <nav className="header-navbar">
            <ul className="header-navbar-list">

                <HeaderNavbarItem text={"Home"} />

                <HeaderNavbarItem text={"Services"} isArrowed={true}>

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