const HeaderContainer = ({ children, flexDirection = 'row' }) => {
    return (
        <div className="header-container" style={{ flexDirection: flexDirection }}>
            {children}
        </div>
    );
}

export default HeaderContainer;