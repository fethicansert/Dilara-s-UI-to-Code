import Button from "../Buttons/Button";

const HeaderButtons = ({ children }) => {
    return (
        <>
            <Button>Log in</Button>
            <Button isCool={true}>Sign up</Button>
        </>
    );
}

export default HeaderButtons;