import logoSvg from "../../assets/Images/Logo/logo.png";

import "./Header.scss"
import { useNavigate } from 'react-router-dom';

function Header() {

    const navigate = useNavigate();
    return(
        <div className="header__logo-container">
            <h3 onClick={() => navigate('/')} className="header__logo-title">panTree</h3>
            <img onClick={() => navigate('/')} className="header__logo-img"src={logoSvg} alt="logo leaf"/>
        </div>
    )
}

export default Header;