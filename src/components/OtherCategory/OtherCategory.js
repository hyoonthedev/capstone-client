import leafIcon from '../../assets/Images/Logo/logo.png';
import deleteIcon from '../../assets/Images/Icons/close-icon.svg';
import './OtherCategory.scss';

function OtherCategory({ ingredientsList, dateDifference, handleClick, handleDelete }) {

// Filter other category
    const filterOther = function(ingredient) {
        if(ingredient.category === "other"){
            return true
        } else {
            return false
        }
    }

    const otherList = ingredientsList.filter(filterOther);
    return(
        otherList.map((other) => {
            return(
                <article className="ingredient-list__other-card" key={other.id}>
                    <div className="ingredient-list__other-title-container">
                        <img onClick={() => handleClick(other.id)} className={dateDifference(other.expiry) === "red" ? "ingredient-list__other-expiry-red" : dateDifference(other.expiry) === "yellow" ? "ingredient-list__other-expiry-yellow" : "ingredient-list__other-expiry-green"} src={leafIcon} alt="expiry indicator"/>
                        <h4 className="ingredient-list__other-title">{other.ingredient_name}</h4>
                    </div>
                    <img className="ingredient-list__other-delete" onClick={() => handleDelete(other.id)} src={deleteIcon} alt="delete icon"/>
                </article>
            )
        })
    )
}

export default OtherCategory;