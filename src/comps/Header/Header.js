import Logo from "./Logo";
import HeaderContainer from "./HeaderContainer";
import HeaderNavbar from "./HeaderNavbar";
import HeaderButtons from './HeaderButtons'
import '../../css/Header.css';

const Header = () => {
    return (
        <header>
            <HeaderContainer>
                <Logo>CyberZen</Logo>
            </HeaderContainer>

            <HeaderContainer>
                <HeaderNavbar />
            </HeaderContainer>

            <HeaderContainer>
                <HeaderButtons />
            </HeaderContainer>
           
        </header>
    );
}


export default Header;