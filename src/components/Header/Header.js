import logoSvg from "../../assets/Images/Logo/logo.png";

import "./Header.scss"
import { useNavigate } from 'react-router-dom';

function Header() {

    const handleLogOut = () => {
        sessionStorage.clear();
        navigate('/')
        window.location.reload()
    }
    const navigate = useNavigate();
    return(
        <header>
            <div className="header__logo-container">
                <h3 onClick={() => navigate('/')} className="header__logo-title">panTree</h3>
                <img onClick={() => navigate('/')} className="header__logo-img"src={logoSvg} alt="logo leaf"/>
            </div>
            <div onClick={() => handleLogOut()}>logout</div>
        </header>
    )
}

export default Header;