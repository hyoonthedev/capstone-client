import popCat from '../../assets/Images/Images/pop-cat.gif';
import { useNavigate } from 'react-router-dom'; 

import './NoRecipe.scss'

function NoRecipe() {

    const navigate = useNavigate();

    return(
        <section className="no-recipe">
            <div className="no-recipe__container">
                <div className="no-recipe__image-container">
                    <img className="no-recipe__image" src={popCat} alt="pop cat gif"/>
                </div>
                <h3 className="no-recipe__title">No Recipe Found</h3>
                <p className="no-recipe__content">You forgot to <span className="no-recipe__highlight">select</span> ingredients, or selected <span className="no-recipe__highlight">too many</span></p>
                <div onClick={() => navigate(-1)} className="no-recipe__back">Go Back</div>
            </div>
        </section>
    )
}

export default NoRecipe;