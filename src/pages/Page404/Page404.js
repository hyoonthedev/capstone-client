import './Page404.scss';
import errorGif from '../../assets/Images/Images/404.gif';

import { useNavigate } from 'react-router-dom';

function Page404 () {

    const navigate = useNavigate()

    return(
        <section className="error-page">
            <h2 className="error-page__title">Page Not Found</h2>
            <img className="error-page__image" src={errorGif} alt="404 Image"/>
            <div onClick={() => navigate('/')} className="error-page__nav">Main Page</div>
        </section>
        
    )
}

export default Page404;