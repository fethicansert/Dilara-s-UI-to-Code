import HeaderNavbarItem from "./HeaderNavbarItem";

const HeaderNavbar = () => {
    return (
        <nav className="header-navbar">
            <ul className="header-navbar-list">
                <HeaderNavbarItem text={"Home"} />
                <HeaderNavbarItem text={"Services"} isArrowed={true} />
                <HeaderNavbarItem text={"Support"} isArrowed={true} />
                <HeaderNavbarItem text={"Pricing"} />
            </ul>
        </nav>
    );
}


export default HeaderNavbar;