import './NeedLoginSignUp.scss';

import { useNavigate } from 'react-router-dom';

function NeedLoginSignUp() {

    const navigate = useNavigate();

    return(
        <section className="no-access">
            <h3 className="no-access__title">You need to login to access this page</h3>
            <p className="no-access__content">If you don't have an account please sign up</p>
            <div onClick={() => navigate('/')} className="no-access__nav">
                <i className="fa-solid fa-arrow-left no-access__icon"></i>
                Go To Main Page
            </div>
        </section>
    )
}

export default NeedLoginSignUp;