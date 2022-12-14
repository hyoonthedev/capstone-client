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
        <header className="header">
            <div className="header__main-container">
                <div className="header__logo-container">
                    <h3 onClick={() => navigate('/')} className="header__logo-title">panTree</h3>
                    <span onClick={() => navigate('/')} className="landing-page__logo-img">
                            <i className="fa-sharp fa-solid fa-leaf header__logo"></i>
                    </span>
                </div>
                <section className="header__user-container">
                    <div onClick={() => navigate('/ingredients')} className="header__icon-container">
                        <i className="fa-solid fa-utensils header__logo"></i>
                        <p className="header__icon-title">Pantry</p>
                    </div>
                    <div onClick={() => navigate('/user')} className="header__icon-container">
                        <i className="fa-solid fa-circle-user header__logo"></i>
                        <p className="header__icon-title">Profie</p>
                    </div >
                    <div onClick={() => handleLogOut()} className="header__icon-container">
                        <i className="fa-solid fa-right-from-bracket header__logo"></i>
                        <p className="header__icon-title">Log Out</p>
                    </div>
                </section>
            </div>
        </header>
    )
}

export default Header;