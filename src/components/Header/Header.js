import logoSvg from "../../assets/Images/Logo/logo.png";

import "./Header.scss"

function Header() {
    return(
        <header className="header">
            <h3 className="header__title">panTree</h3>
            <img className="header__logo-img"src={logoSvg} alt="logo leaf"/>
        </header>
    )
}

export default Header;